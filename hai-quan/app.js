'use strict';
const $=id=>document.getElementById(id);
let last=null;
function choice(name,value,text,type='radio') {
 const label=document.createElement('label');label.className='choice';
 const input=document.createElement('input');input.type=type;input.name=name;input.value=value;
 const span=document.createElement('span');span.textContent=text;label.append(input,span);return label;
}
Object.entries(TASKS).forEach(([id,t])=>$('taskOptions').append(choice('tasks',id,t.label,'checkbox')));
Object.entries(MODULES).filter(([id])=>!['M0','M1'].includes(id)).forEach(([id,m])=>$('needOptions').append(choice('needs',id,m.goal,'checkbox')));
let number=0;
GROUPS.forEach((g,gi)=>{
 const section=document.createElement('section');
 const eyebrow=document.createElement('p');eyebrow.className='eyebrow';eyebrow.textContent=`PHẦN 2 · NHÓM ${gi+1}/5`;
 const h=document.createElement('h2');h.textContent=g.name;section.append(eyebrow,h);
 g.questions.forEach(([title,options])=>{
  const n=++number;const f=document.createElement('fieldset');f.id=`q${n}`;f.className='question';
  const legend=document.createElement('legend');legend.textContent=`${n}. ${title}`;f.append(legend);
  if(QUESTION_HELP[n]){const help=document.createElement('p');help.id=`help_q${n}`;help.className='small';help.textContent=QUESTION_HELP[n];f.append(help);f.setAttribute('aria-describedby',help.id);}
  options.forEach((text,i)=>f.append(choice(`q${n}`,i+1,`${i+1}. ${text}`)));
  if(n>=13&&n<=19) f.append(choice(`q${n}`,'na','Không thuộc công việc hiện tại (không tính điểm).'));
  section.append(f);
 });$('questions').append(section);
});
CASES.forEach(c=>{const f=document.createElement('fieldset');f.id=c.id;const l=document.createElement('legend');l.textContent=c.title;f.append(l);c.options.forEach(([v,t])=>f.append(choice(c.id,v,t)));$('cases').append(f);});
const checked=name=>[...document.querySelectorAll(`input[name="${name}"]:checked`)].map(e=>e.value);
function invalidate(){
 if(!last)return;
 last=null;$('stale').hidden=false;$('download').disabled=true;$('print').disabled=true;
}
$('survey').addEventListener('input',invalidate);
$('survey').addEventListener('change',()=>{
 const count=Array.from({length:20},(_,i)=>checked(`q${i+1}`).length).reduce((a,b)=>a+b,0);
 $('progress').value=count;$('progressText').textContent=`${count}/20`;
 document.querySelectorAll('.invalid').forEach(e=>e.classList.remove('invalid'));invalidate();
});
function showError(messages,targets){
 const box=$('errors');box.replaceChildren();const h=document.createElement('strong');h.textContent='Vui lòng bổ sung trước khi xem gợi ý:';box.append(h);
 const ul=document.createElement('ul');messages.forEach(m=>{const li=document.createElement('li');li.textContent=m;ul.append(li);});box.append(ul);box.hidden=false;
 targets.forEach(id=>$(id).classList.add('invalid'));box.focus();
}
function renderModules(target,items,empty,environment){
 const root=$(target);root.replaceChildren();
 if(!items.length){const p=document.createElement('p');p.textContent=empty;root.append(p);return;}
 items.forEach(item=>{
  const m=MODULES[item.id];const article=document.createElement('article');article.className='module';
  const h=document.createElement('h4');h.textContent=m.title;
  const reason=document.createElement('p');reason.textContent=`Vì sao gợi ý: ${item.reason}`;
  const output=document.createElement('p');output.textContent=`Sản phẩm thực hành: ${m.output}`;article.append(h,reason,output);
  if(item.id==='M7') {const p=document.createElement('p');p.className='condition';p.textContent=item.conditional||environment!=='approved'?'Chỉ thực hành có hướng dẫn trên dữ liệu giả lập sau khi củng cố nền tảng và an toàn. Không tự động gửi nhắc việc hoặc ghi vào hệ thống nghiệp vụ.':'Thực hành với bảng việc giả lập, có bước con người duyệt; kết nối tự động nằm ngoài phạm vi chương trình chung.';article.append(p);}
  root.append(article);
 });
}
$('survey').addEventListener('submit',e=>{
 e.preventDefault();const data=new FormData(e.target);const messages=[],targets=[];
 function missing(ok,id,message){if(!ok){messages.push(message);targets.push(id);}}
 const identity={fullName:String(data.get('fullName')||'').trim(),unitName:String(data.get('unitName')||'').trim(),position:String(data.get('position')||'').trim(),phone:String(data.get('phone')||'').trim(),email:String(data.get('email')||'').trim()};
 missing(identity.fullName,'fullName','Điền họ và tên.');missing(identity.unitName,'unitName','Điền đơn vị công tác.');
 missing(!identity.email||$('email').validity.valid,'email','Kiểm tra địa chỉ thư điện tử, hoặc để trống nếu không cung cấp.');
 missing(data.get('role'),'role','Chọn nhóm vị trí công tác.');
 const tasks=checked('tasks'),needs=checked('needs');
 missing(tasks.length,'tasks','Chọn ít nhất một nhóm nhiệm vụ.');missing(needs.length>=1&&needs.length<=3,'needs','Chọn từ 1 đến 3 mục tiêu học tập.');
 missing(data.get('environment'),'environment','Chọn điều kiện thực hành.');
 const answers=Array.from({length:20},(_,i)=>{
  const v=data.get(`q${i+1}`);missing(v,`q${i+1}`,`Trả lời câu ${i+1}.`);return v==='na'?null:Number(v);
 });
 CASES.forEach(c=>missing(data.get(c.id),c.id,`Trả lời ${c.id==='caseData'?'tình huống A':'tình huống B'}.`));
 missing($('consent').checked,'consent','Xác nhận đã hiểu mục đích và cách xử lý câu trả lời.');
 if(messages.length){showError(messages,targets);return;}
 $('errors').hidden=true;
 const input={answers,role:data.get('role'),tasks,needs,cases:Object.fromEntries(CASES.map(c=>[c.id,data.get(c.id)]))};
 let result;try{result=recommend(input);}catch(err){showError([err.message],[]);return;}
 last={version:'hai-quan-v4-full-terms',identity,...input,learningGoals:needs.map(id=>({id,label:MODULES[id].goal})),environment:data.get('environment'),program:'Chương trình 1 hoặc 2 ngày tùy đơn vị; không cộng khóa theo số trợ lý.',result};
 $('identity').textContent=[identity.fullName,identity.unitName,identity.position].filter(Boolean).join(' · ');
 $('levelResult').replaceChildren();const levelTitle=document.createElement('h3');levelTitle.textContent=`Mức ${result.level.number} · ${result.level.title}`;const levelText=document.createElement('p');levelText.textContent=result.level.description;$('levelResult').append(levelTitle,levelText);
 $('scores').replaceChildren();result.groups.forEach((score,i)=>{
  const div=document.createElement('div');div.className='score';const strong=document.createElement('strong');strong.textContent=score===null?'Chưa đánh giá':`${score.toFixed(2)}/4`;
  const p=document.createElement('span');p.textContent=GROUPS[i].name;div.append(strong,p);$('scores').append(div);
 });
 $('safetyResult').textContent=result.safety?'Các câu tự đánh giá và tình huống đạt điều kiện an toàn theo quy tắc tư vấn của phiếu. Đây không phải xác nhận đủ điều kiện sử dụng dữ liệu nghiệp vụ.':'Cần củng cố an toàn dữ liệu và kiểm chứng trong phần học chung. Dù mức độ sử dụng cao, chưa được xem là đủ điều kiện sử dụng dữ liệu nghiệp vụ.';
 $('environmentResult').textContent=data.get('environment')==='approved'?'Thực hành trong đúng phạm vi công cụ và dữ liệu được cho phép. Không tự kết nối hoặc ghi vào hệ thống nghiệp vụ.':'Chưa xác nhận môi trường được phép: chỉ thực hành bằng tài liệu công khai hoặc dữ liệu giả lập trong môi trường đơn vị chấp thuận; không đưa hồ sơ công vụ lên tài khoản trí tuệ nhân tạo cá nhân.';
 $('requiredModules').replaceChildren();const base=document.createElement('p');base.textContent=result.required.length?result.required.map(x=>x.reason).join(' '):'Tiếp tục phần chung về an toàn, giao việc và kiểm chứng; có thể chuyển nhanh sang bài thực hành nếu giảng viên xác nhận đã nắm vững.';$('requiredModules').append(base);
 renderModules('electiveModules',result.electives,'Chưa đủ thông tin để chọn trợ lý; trao đổi với giảng viên để chọn một công việc ưu tiên.',last.environment);
 $('caseFeedback').replaceChildren();const h=document.createElement('h3');h.textContent='Ghi nhớ từ hai tình huống';$('caseFeedback').append(h);
 CASES.forEach((c,i)=>{const p=document.createElement('p');p.textContent=`${i===0?'A':'B'} · ${input.cases[c.id]===c.correct?'Đã chọn cách xử lý phù hợp.':'Cần củng cố cách xử lý.'} ${c.options.find(o=>o[0]===c.correct)[1]}`;$('caseFeedback').append(p);});
 $('result').hidden=false;$('stale').hidden=true;$('download').disabled=false;$('print').disabled=false;$('result').focus();
});
$('download').addEventListener('click',()=>{
 if(!last)return;
 const blob=new Blob([JSON.stringify(last,null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='ket-qua-khao-sat-ai-hai-quan.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
$('print').addEventListener('click',()=>{if(last)window.print();});
$('edit').addEventListener('click',()=>{$('fullName').focus();});

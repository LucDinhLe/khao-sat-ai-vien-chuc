'use strict';
(function(){
const source=typeof module!=='undefined'?require('./data.js'):{GROUPS,MODULES,TASKS,CASES};
const {TASKS:taskMap,MODULES:moduleMap,CASES:caseList}=source;
function recommend(input){
 const {answers,role,tasks,needs,cases}=input;
 if(!['staff','manager','specialist'].includes(role)||!Array.isArray(answers)||answers.length!==20||Array.from(answers).some((v,i)=>v===null?(i<12||i===19):!Number.isInteger(v)||v<1||v>4))throw Error('Phiếu chưa đủ 20 câu hợp lệ.');
 if(!Array.isArray(tasks)||!tasks.length||!Array.isArray(needs)||!needs.length||needs.length>3||tasks.some(t=>!taskMap[t])||needs.some(n=>!moduleMap[n])||caseList.some(c=>!c.options.some(o=>o[0]===cases?.[c.id])))throw Error('Kiểm tra nhiệm vụ, tối đa 3 nhu cầu và hai tình huống.');
 const mean=a=>{const v=a.filter(x=>x!==null);return v.length?v.reduce((s,x)=>s+x,0)/v.length:null;};
 const groups=Array.from({length:5},(_,i)=>mean(answers.slice(i*4,i*4+4)));
 const safety=answers.slice(4,8).every(v=>v>=3)&&answers[19]>=3&&caseList.every(c=>cases[c.id]===c.correct);
 const foundation=groups[0]<2.5||answers[8]<2;
 // Level mô tả kỹ năng; an toàn được báo riêng, không dùng chức vụ để nâng mức độ sử dụng.
 const skillScore=mean(answers.filter((_,i)=>i<4||i>=8));
 let number=skillScore<1.75?1:skillScore<2.5?2:skillScore<3.25?3:4;
 if(number===4&&!(groups[4]>=3&&answers[16]>=3&&answers[17]>=3))number=3;
 const titles=['Khởi đầu','Sử dụng cơ bản','Ứng dụng vào công việc','Thiết kế trợ lý và chuẩn hóa cách làm'];
 const descriptions=[
  'Cần hướng dẫn từ thao tác cơ bản, cách giao việc và kiểm tra kết quả. Bắt đầu bằng một công việc quen thuộc.',
  'Đã sử dụng trí tuệ nhân tạo cho một số việc riêng lẻ; nên luyện cách cung cấp bối cảnh, dùng nguồn và sửa bản nháp.',
  'Đã có khả năng ứng dụng trí tuệ nhân tạo vào công việc; nên chuẩn hóa hướng dẫn và thực hành trợ lý sát nhiệm vụ.',
  'Câu trả lời cho thấy đã có kinh nghiệm thiết kế trợ lý và chuẩn hóa cách làm; nên kiểm chứng qua bài thực hành, không mặc định đủ điều kiện triển khai.'
 ];
 const level={number,title:titles[number-1],description:descriptions[number-1],score:skillScore};
 const required=[];
 if(!safety)required.push({id:'M0',reason:'Cần củng cố an toàn dữ liệu, kiểm chứng nguồn và trách nhiệm phê duyệt trong phần chung.'});
 if(foundation)required.push({id:'M1',reason:'Cần được hướng dẫn thêm cách giao việc và kiểm tra kết quả trong phần chung.'});
 const indexes={M2:[8,9,10,11],M3:[12],M4:[13],M5:[14],M6:[15],M7:[16,17,18,19]};
 const candidates=Object.entries(indexes).map(([id,idx])=>{
  const score=mean(idx.map(i=>answers[i]));const requested=needs.includes(id);const relevant=tasks.some(t=>taskMap[t].modules.includes(id));
  return {id,score,requested,relevant,priority:(score===null?0:4-score)+(requested?3:0)+(relevant?1:0),reason:[requested?'Anh/chị chọn ưu tiên học':'',relevant?'phù hợp nhóm nhiệm vụ đang thực hiện':'',score===null?'chưa có điểm kỹ năng tương ứng':`kỹ năng liên quan tự đánh giá ${score.toFixed(2)}/4`].filter(Boolean).join('; ')};
 }).filter(m=>(m.requested||m.relevant||(m.score!==null&&m.score<3))&&(m.id!=='M7'||m.requested||(role==='specialist'&&number>=3)))
 .sort((a,b)=>b.priority-a.priority||a.id.localeCompare(b.id));
 if(role==='manager'||needs.includes('M8'))candidates.unshift({id:'M8',reason:role==='manager'?'Phù hợp nhiệm vụ đọc báo cáo, giao việc và theo dõi của lãnh đạo; không dùng chức vụ để nâng mức độ sử dụng.':'Theo nhu cầu ưu tiên đã chọn.'});
 const deferred=[];
 const electives=candidates.slice(0,3).map(m=>{const conditional=m.id==='M7'&&(!safety||foundation);if(conditional)deferred.push(m.id);return {...m,conditional};});
 for(const id of ['M0','M1'])if(needs.includes(id)&&!required.some(m=>m.id===id))required.push({id,reason:'Củng cố nội dung này trong phần chung theo nhu cầu đã chọn.'});
 return {groups,average:mean(answers),answered:answers.filter(v=>v!==null).length,level,safety,foundation,required,electives,deferred};
}
if(typeof module!=='undefined')module.exports={recommend};else window.recommend=recommend;
})();

'use strict';
const test=require('node:test');const assert=require('node:assert/strict');
const {recommend}=require('../hai-quan/scoring.js');const {GROUPS}=require('../hai-quan/data.js');
function sample(level=3){return {answers:Array(20).fill(level),role:'staff',tasks:['office'],needs:['M2'],cases:{caseData:'safe',caseLaw:'verify'}};}
test('Đủ 20 câu theo 5 nhóm',()=>assert.equal(GROUPS.reduce((n,g)=>n+g.questions.length,0),20));
test('Người mới học an toàn và nền tảng trước',()=>{const r=recommend(sample(1));assert.deepEqual(r.required.map(m=>m.id),['M0','M1']);assert.equal(r.safety,false);});
test('Quản lý không được miễn nền tảng',()=>{const x=sample(1);x.role='manager';const r=recommend(x);assert.equal(r.electives[0].id,'M8');assert(r.required.some(m=>m.id==='M0'));assert(r.required.some(m=>m.id==='M1'));});
test('Điểm cao không bù tình huống sai',()=>{const x=sample(4);x.cases.caseData='mask';assert.equal(recommend(x).required[0].id,'M0');});
test('Một câu an toàn thấp vẫn cần M0',()=>{const x=sample(4);x.answers[4]=2;assert.equal(recommend(x).required[0].id,'M0');});
test('Câu trách nhiệm thấp vẫn cần M0',()=>{const x=sample(4);x.answers[19]=2;assert.equal(recommend(x).safety,false);});
test('Không áp dụng loại khỏi trung bình',()=>{const x=sample(3);for(let i=12;i<19;i++)x.answers[i]=null;const r=recommend(x);assert.equal(r.groups[3],null);assert.equal(r.average,3);assert.equal(r.answered,13);});
test('Không cho bỏ qua an toàn',()=>{const x=sample();x.answers[4]=null;assert.throws(()=>recommend(x));});
test('M7 có điều kiện khi thiếu nền tảng',()=>{const x=sample(1);x.needs=['M7'];const r=recommend(x);assert(r.electives.some(m=>m.id==='M7'&&m.conditional));});
test('Kỹ năng cao vẫn học theo nhu cầu cụ thể',()=>{const x=sample(4);x.needs=['M4'];assert.equal(recommend(x).electives[0].id,'M4');});
test('Nhiệm vụ liên quan được ưu tiên khi cùng khoảng thiếu',()=>{const x=sample(2);x.needs=['M0'];x.tasks=['support'];assert.equal(recommend(x).electives[0].id,'M3');assert.equal(recommend(x).electives[1].id,'M6');});
test('Nhu cầu không làm thay điểm năng lực',()=>{const a=sample(3),b=sample(3);b.needs=['M7','M8'];assert.deepEqual(recommend(a).groups,recommend(b).groups);});
test('Từ chối đáp án thiếu, ngoài khoảng, tình huống và vai trò sai',()=>{for(const mutate of [x=>x.answers.pop(),x=>x.answers[0]=5,x=>x.answers[0]=undefined,x=>x.cases.caseLaw='invalid',x=>x.role='',x=>x.tasks=[],x=>x.needs=[]]){const x=sample();mutate(x);assert.throws(()=>recommend(x));}});

'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const data=require('../hai-quan/data.js');
const html=fs.readFileSync(path.join(__dirname,'../hai-quan/index.html'),'utf8');
const app=fs.readFileSync(path.join(__dirname,'../hai-quan/app.js'),'utf8');
test('Nội dung khảo sát viết đầy đủ thuật ngữ, không dùng chữ viết tắt',()=>{
 const visible=JSON.stringify(data)+' '+html.replace(/AI for Boss/g,'').replace(/<[^>]*>/g,'');
 assert(!/\b(?:AI|HS|PDF|JSON|KPI|GPT|API|OCR)\b/.test(visible));
 assert(data.GROUPS[1].questions[3][0].includes('mã phân loại hàng hóa'));
 assert(data.CASES[1].title.includes('mã phân loại hàng hóa'));
 assert(!visible.toLowerCase().includes('level'));
});
test('Dịch nhãn không làm đổi định danh phần kết quả',()=>{
 for(const id of ['levelResult','result','scores','identity','requiredModules','electiveModules'])assert(html.includes(`id="${id}"`));
 assert(app.includes('`Mức ${result.level.number}'));
 assert(!html.includes('id="mức độResult"'));
});

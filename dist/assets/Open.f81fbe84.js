import{u as a}from"./sooreh.f5957a74.js";import{d as e,i as s,q as t,o,c as r,b as l,t as n,s as _,x as i,F as f}from"./vendor.168c8709.js";var p=e({name:"Open",props:["id"],setup(e){const o=a();let r=s({id:1,ar_name:"الحمد",pa_name:"ستایش",part:[1],mkORmd:!0,arabic_text:["بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ","الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","الرَّحْمَـٰنِ الرَّحِيمِ","مَالِكِ يَوْمِ الدِّينِ","إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ","صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"],fa_ansarian_text:["همه ستایش ها، ویژه خدا، مالک و مربّی جهانیان است.","رحمتش بی اندازه و مهربانی اش همیشگی است.","مالک و فرمانروای روز پاداش و کیفر است.","[پروردگارا!] تنها تو را می پرستیم وتنها از تو کمک می خواهیم.","ما را به راهِ راست راهنمایی کن.","راه کسانی [چون پیامبران، صدّیقان، شهیدان و صالحان که به خاطر لیاقتشان] به آنان نعمتِ [ایمان، عمل شایسته و اخلاق حسنه] عطا کردی، هم آنان که نه مورد خشم تواند و نه گمراه اند."],fa_makarem_text:["ستایش مخصوص خداوندی است که پروردگار جهانیان است.","(خداوندی که) بخشنده و بخشایشگر است (و رحمت عام و خاصش همگان را فرا گرفته).","(خداوندی که) مالک روز جزاست.","(پروردگارا!) تنها تو را می‌پرستیم؛ و تنها از تو یاری می‌جوییم.","ما را به راه راست هدایت کن...","راه کسانی که آنان را مشمول نعمت خود ساختی؛ نه کسانی که بر آنان غضب کرده‌ای؛ و نه گمراهان."],fa_maleki_text:["خدا را سپاس که صاحب‌اختیار جهانیان است","بزرگوارِ مهربان است","صاحب روز جزاست","فقط تو را بندگی می‌کنیم و در این راه فقط از تو کمک می‌خواهیم","ما را به راه درست زندگی ببر:","راه کسانی که به آنان نعمت ویژه ای داده ای.<br>همانانی که نه گرفتار خشم تو شده‌اند و نه راه را گم کرده‌اند."]});t((()=>{for(let a=0;a<114;a++)o.all_quran[a].id==e.id&&(r.value=o.all_quran[a])}));let l=localStorage.getItem("tar")||'"1"',n=s(JSON.parse(l)),_=localStorage.getItem("font")||'"IRANsans"',i=s(JSON.parse(_));return{sooreh:r,tar:n,font2:i}}});const m=l("span",{class:"diagonal_line"},null,-1),c=l("span",{class:"diagonal_line2"},null,-1),h={class:"sooreh_page"},u={class:"sooreh_title",id:"sooreh_title"},d={class:"sooreh_p"},x=l("a",{href:"#sooreh_title"},[l("button",{class:"up_btn"},"🔺")],-1);p.render=function(a,e,s,t,p,y){return o(),r(f,null,[m,c,l("div",h,[l("span",u,"(("+n(a.sooreh.ar_name)+"))",1),l("p",d,n(a.sooreh.arabic_text),1),1==a.tar?(o(),r("p",{key:0,class:"sooreh_p_fa",style:_({fontFamily:a.font2})},n(a.sooreh.fa_ansarian_text),5)):i("",!0),2==a.tar?(o(),r("p",{key:1,class:"sooreh_p_fa",style:_({fontFamily:a.font2})},n(a.sooreh.fa_makarem_text),5)):i("",!0),3==a.tar?(o(),r("p",{key:2,class:"sooreh_p_fa",style:_({fontFamily:a.font2})},n(a.sooreh.fa_maleki_text),5)):i("",!0),x])],64)};export{p as default};
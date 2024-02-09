
// 1-dars

// ReactJs nima => ReactJs bu Javascript kutubxonasi bolib. HTML,hamda Javascript jamlangan ilova 
//  bu kutubxonani ishlatatsak ishimizni juda osonlashtiradi.

// vite.config.js => Bu faqat vite ni ochga vaqtimizda ishlaydi Bu vite bilan birga qushilib keladi.

// npm install => qiladigan bolsak bizga viteni configuritionlarini olib kelib beradi. Shunda biz "npm run dev "
// qilib projectni yurgiza olamiz.

// Readme.md => Bu fayl bizni projectimiz haqida malumot berib turadi. Buni gitHubga kiradigan bolsak projectni 
//  malumotlari pastida turadi. Shu yerda project haqida malumotlar joylashgan boladi. 

// package.json => Bu Projectni pasporti. Buni ichida projectni malumotlari boladi.
// masalan: projectni name boladi, qanaqa kutubxonalar ishlatilgani va boshqa malumotlar shu package.json
// ni ichida joylashgan boladi.

// gtignore => Buni ichiga faqat gitHubga yuklanib ketmaydigan fayllar nomi yoziladi. Masalan node_modules yoziladi 
// bu githubga yuklanmasligi uchun.

// node_modules => Biz buni githubga yuklamaganimizni sababi Chunki bu boshqa kompyuterlarga tushmasligi mumkun 
// shuning uchun ham buni "npm install" qilib yuklab olish kk.
 
// Vite => npx create-react-app ga alternative sifatida chiqgan. Bu vite createga nisbatan tez ishlaydi 
// react ilovasini yaratganimizda ham va uni run qilganimizda ham tez ishlaydi. Va bularni yana bitta farqi 
//  index.html public ni ichida yozilar edi create da. Bunda esa publicdan tashqarida yoziladi.
// Bularni yana bitta farqi npx CRA babel boladi chunki Projectimizni brauzerda korsatadigan vaqtda 
// babel o'rtada qanaqadir ishlar bajaradi va keyin uni callstactda korsatadi. Viteda babel yuq shuning uchun
// ham vite tez ishlaydi.

//  scr => buni ichida main degan fayl bor. Buni ichiga hamma componmentslar kelib joylashdi. Va manashu componentlar 
//  index.html faylidagi 'div' ni ichiga borib joylashadi. Endi manashuni ichiga componentlar kelib joylashadi
//  va buni index.html fayliga yuboradi Keyin uni callstack da korsatadi.

// package.lock.json => Bu package json bilan bogliq. Yani biron bir kutubxona orntatilsa buni manzili
// package.lock.json ni ichida joylashgan boladi.

// eclinttrc.cjs => Bu package.json ni ichidagi eclint ni configurition shu faylni ichida joylashadi.

// jsx => Bu JavascriptXML => Buni yozsak biz javascript ichida tag yozish imkonini beradi.
// SPA => single page apliciton => Bu butun bir react ilovasida faqat bitta 'html' fayli bolgani uchun shunday deb aytiladi. 
// React.StricMode => Bu qandaydir kutubxonami eskirgan bolsa yoki boshqa bir eror larni oldini olish uchun ishlatiladi. 
// Buni yozish majburiy emas. Muomalarni oldini olish uchun ishlatiladi.

// VirtualReactDOm => Bu masalan bitta katta project uni ichida bitta soat ishlayapti uni minutlari ozgargan
// paytda faqat mana shu soatni ozini yangilab beradi. Butun boshli projectni yurgizishni oldini oladi.

// realDOm => Butun boshli projectni kichkina narsa ozgarsa ham qayta yursa realDOM boladi. 

// ==============================================================
// Vite haqida 
// Vite. js - bu tezkor va engil qurish vositasi bo'lib, u front-end dasturchilarga zamonaviy
//  veb-ilovalarni tez va samarali tarzda yaratishga yordam berish uchun ishlab chiqilgan. Zamonaviy 
// arxitekturasi bilan Vite. js React ilovalaringizni har qachongidan ham tezroq yaratish va rivojlantirishga yordam beradi.



// ======================================================================================================
                                    // Masala 
// 1) AB => BA

// let str = "";

// const Func = (param) => {
//     let teskari = ''
//     for (let i = param.length - 1; i > 0; i--) {
//         teskari += param[i]
//     }
//     console.log(`Malumotni teskarisi: "${teskari}"`);
// }

// Func('chiqar')

// 2) 1+2+3
// let num = 12345;

// const raqamlariniQoshish = (son) => {
//     let str = son.toString(); 
//     let summa = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       summa += parseInt(str[i]); // Har bir raqamni yig'ib boramiz
//     }
  
//     return summa;
//   }
  
//   console.log(raqamlariniQoshish(num));


// 3) [1,2,3,4,[123[4556]]]

// let arr = [
// 1,2,3,4,[1,2,[3]],
// 1,2,3,4,[1,2,[3]],
// ]
// console.log(arr.flat(Infinity));

// let arr = [1243, [123, [123]]];

// const  ochirish =(array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       ochirish(array[i]);
//     } else {
//       let element = arr[i];
//     //   element = element.reverse(/^\s+|\s+$/g, '');
//       console.log(element);
//     }
//   }
// }

// ochirish([...arr]);



import { useState } from "react"
import { memo } from "react";

let lang = {
    uzbek: 'Assalomu alekum',
    engilish: 'Hello',
    russian: 'Zdravstvuyte',
}

 const Hook = ({data}) => {
    const [count, setCount] = useState(Number(localStorage.getItem('count')));
    const [select, setSelect] = useState(localStorage.getItem('select') ?? 'Assalomu alekum');

    const Plus = () => {
        localStorage.setItem('count', count + 1)
        setCount(count + 1)
    }
    const Minus = () => {
        localStorage.setItem('count', count - 1);
        setCount(count - 1)
    }
    const onSelect = ({target}) => {
        localStorage.setItem('select', target.value)
        setSelect(target.value)
        localStorage.setItem('data', JSON.stringify(lang));
    }
    // console.log(JSON.parse(localStorage.getItem('data')));
    console.log('render child');
    return (
        <div>
           <h1>Count: {count} {data('hello webbrain').title}</h1>
           <button onClick={Plus}>+</button>
           <button onClick={Minus}>-</button>
           <h1>Language {lang[select]}</h1>

           <select onChange={onSelect}  value = {select} name="" id="">
            <option value="uzbek">uzbek</option>
            <option value="engilish">engilish</option>
            <option value="russian">russian</option>
           </select>
           <button onClick={() => localStorage.clear()}>clear</button>
           <button onClick={() => localStorage.removeItem('count')}>remove</button>
        </div>
    )
 }
 export default memo(Hook)


//  localStorage => JavaScript ichida localStorage
//  veb-ilovalarga foydalanuvchi kompyuterida ma'lumotlarni xavfsiz saqlash imkonini beruvchi
//  veb-brauzer funksiyasi bo'lib xizmat qiladi. U brauzerda ishlaydigan JavaScript kodi orqali kirish 
// va o'zgartirish mumkin bo'lgan oddiy kalit-qiymatni saqlash mexanizmini taqdim etadi.

// localStorage ga malumot juntilsa string bolishi kerak agar string bolmasa avtomatik ozi stringga ogirib beradi

// biz localStorage da malumotlar NanPrimitive korinishida bolsa set qilgan vaqtimiz JSON.stringfy dan foydalanamiz
// get qiladigan vaqtimiz JSON.parse dan foydalanamiz 

// memo => buni biz qachonki parentda ozgarish bolsa yani re-render bolsa 
// uni ichidagi componentsni ham ozgartiradi. Buni oldini olish uchun child componentsni memo ga orab quyishimiz kerak

// Agar biz props sifatida nanPrimitive bolgan malumot 
// junatsak bu bizga childni ham re-render qilib beradi
// Bunga sabab nanPrimitive bolgan malumotlar heapda qiymat turadi
// callstackda id saqlaydi har doim parent components 
// re-render bolgan vaqtda bu ham id sini ozgartiradi va 
// bu ham child comoponentsni re-render qilib yuboradi.
// buni oldini olish uchun esa useMemo dan foydalanishimiz kk.
// useMempo => bu nanPrimitive bolgan malumotni string korinishiga otkazib quyadi
// va bu re-render qilib bermaydi.

// useCallaback => bu huddi usMemo bilan bir xil vazifani 
// bajaradi. Bu faqat functionga return qiladi.


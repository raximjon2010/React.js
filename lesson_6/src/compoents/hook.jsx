import { useEffect } from "react";
import { useState } from "react"

const Hook = (props) => {
    const [count, setCount] = useState(0);

    // useEffect((() => {
        // console.log('case-1');
    // })); // bu hamma xolatlarda ishlab ketadi
    // useEffect((() => {
        // console.log('case-2');
    // }), []); // bu faqat prooject yuganda bir marta yuradi.
    // useEffect((() => {
        // console.log('case-3');
    // }), [count]); // bu bitta state uzgarganda yuradi
    // useEffect((() => {
        // console.log('case-4');
    // }), [count,count]); // bu ikkita state ozgarganda yuradi.

    return (
    <div>
            <h1>Hook {props.prop}</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
     </div>
)
}
export default Hook


// Hook => 2019 yil fevral oyida reactga qushilgan bu 
// class ga alternative sifatida qushilgan va functionlar bilan 
// componetslar yoziladi. Va bu juda qulay va ishlatishga oson

// return and witout return => biz buni return bilan yozsak uni yuqorisida 
// javascript codeni yozaolamiz biz buni returnsiz yozsak biz functionni 
// oddiy qavs bilan yozishimiz kk. va biz returnsiz yozsak uni yuqorisida 
// javascriptda code yozib bolmaydi.

// this => keyin this hook ni ichida ishlamaydi. uni 
// ozini chaqirib olamiz.

// props => Biz hook da props berishda function parametrida tutib olamiz 
// va uni name orqali olamiz buni biz destracture qilib ham olsak boladi

// useState => Bu huddi statega oxshaydi faqat buni functioni ozimiz nomini 
// yozamiz va bu array oladi state esa object edi.
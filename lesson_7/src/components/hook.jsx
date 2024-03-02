import {useContext, useReducer, useState} from "react";
import { StudentList } from "../context/list/list";

const Hook = () => {
    const [Data, dispatch] = useContext(StudentList)
    const [select, SetSelect] = useState('5')
    // const [count, dispatch] = useReducer(((state, action) => {
    //     switch(action.type) {
    //         case 'plus' : return state + 1;
    //         case 'minus' : return state - 1;
    //         case 'plus+5' : return state + action.payload;
    //         default: state
    //     }
    // }), 0)
    // const onSelect = (e) => {
    //     SetSelect(e.target.value)
    // }
    return (
        <div>
           {/* <h1>Count: {count}</h1>
          <button onClick={() => dispatch({type: 'plus'})}>+</button>
          <button onClick={() => dispatch({type: 'minus'})}>-</button>
          <button onClick={() => dispatch({type: 'plus+5', payload: +select})}>{select}</button>
          <select onChange={onSelect} name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select> */}
          {
            Data.map((value) => {
                return (
                    <h1 key={value.id}>Id:{value.id} Name:{value.name} <button onClick={() => dispatch({type: 'delete', payload: value.id})}>delete</button></h1>
                )
            })
          }
        </div>
    );
}

export default Hook;

// Bizda class componentsda setStateni ikinchi parametri agar state bitta orqada qolib ketsa ishlatilardi 
// endi Hook da bu narsa yuq yani buni orniga useEffect ishlatiladi. qaysi birida state qolib ketgan bolsa shu useEffectni 
// ichiga keladi.
// Reactni 18-versiyasida ikkita yoki undan ortiq state ozgarsa ham faqat bir marta ekran qayta yangilanadi 
// undan oldingi versiyalarida esa bu narsa bunday emas edi.

// useReducer => Bu useStatedan murakkabroq bolgan xolatlarni ifodalash uchun kerak boladi. 
// UseEffect => bu state da malumot ozgarganligini aniqlash uchun ishlatiladi.

// Biz bu papkadan turib body dagi malumotlarni yangilab beradi Lekin 
// biz navbardagi malumotlda length chiqarib quygan edik Buni Length ozgarmay qoladi
// buni oldini olish uchun lifting state up qilishimiz kerak boladi.

// contextApi => Bu masalan bitta data yasab uni hamma compoentslarda ishlatish imkonini beradi
// bunday qilib ishlatsak bitta componentsda ozgarish bolsa qolganlariga ham tasir qiladi.

// prop dirlling => bu nested props

// state managment => bunga misol contextApi boladi. 
// bu eng yuqori compoentsdan hamma componentslarni propssiz ozgartrisa 
// state managment;
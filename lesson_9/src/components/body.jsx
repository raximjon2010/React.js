import React, { useContext, useEffect, useRef, useState } from "react";
import { Student } from "../context/Sudent";


const Body = ()=> {
    let link = 'https://jsonplaceholder.typicode.com';
    const [data, dispatch] = useContext(Student)
    const refId = useRef(null)
    const refTitle = useRef('')
    const [datas, setData] = useState([])
    const [getData, setGetdata] = useState()
    const [view, setview] = useState(false)
    useEffect(() => {
        fetch(`${link}/users`)
        .then((res) => res.json())
        .then((res) => setData(res));
    },[])
    const onSearch = () => {
            dispatch({type: 'fillter', payload: {key: 'name', qiymat: refTitle.current.value}})
        }
        const onSelect = (id) => {
            fetch(`${link}/users/${id}`)
            .then((res) => res.json())
            .then((res) => setGetdata(res));
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
            <input ref={refId}  type="text" placeholder="id"/> 
            <input  ref={refTitle} type="text" placeholder="name"/>
            <button onClick={onSearch}>search</button>
            {
               datas.map((value) => {
                return (
                    <div key={value.id}>
                        <h1>{value.id} {value.name} <button onClick={() => onSelect(value.id)}>get data</button></h1>
                    </div>
                )
               })
            }
            </div>
            <div>
                <h2>ID: {getData?.id}</h2>
                <h2>NAME: {getData?.name}</h2>
                <h2>EMAIL: {getData?.email}</h2>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'active', payload: {view, setview}})}>{view ? 'Malumotlar yashirish' : 'Malumotlar korsatish'}</button>
                {
                    view ?
                  'All data 0' 
                  : 'Malumotlar yashirilgan'
                }
            </div>
        </div>
    );
}

export default Body;


//   controlled an uncontrolled => bu masalan bizda ikkita input bor 
// shuni ichiga malumot u har doim ekranni re-render qiladi shuning 
// oldini olsih uchun biz useRef() ishlatamiz. Biz  useRefdagi qiymatni 
// ozgartirsak u qayta korsatmaydi useState esa korsatadi.


// fetch => React ilovasida siz REST API ga HTTP
//  so'rovlarini yuborish va ma'lumotlarni olish uchun Fetch
//  API dan foydalanishingiz mumkin. Fetch API sizga HTTP so'rovlarini
//  GET, POST, PUT, DELETE va boshqalar kabi turli usullar yordamida amalga oshirish imkonini beradi.
//  Fetch API so'rovning javobini
//  ifodalovchi Response ob'ektiga hal qiluvchi va'da beradi.

// Bu => url, link, endpoint
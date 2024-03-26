import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HOC from ".";

const Home =  ({test}) => {
    const refId = useRef('')
    const refName = useRef('')
    localStorage.setItem('active', false);
    const Next = () => {
        if (refId.current.value == '2010' && refName.current.value == 'rahimjon') {
            localStorage.setItem('active', true)
        }
        else {
            localStorage.setItem('active', false)

        }
    }
    const [counter, setCounter] = useState(0);
    const OnPlus = () => {
        setCounter((prev) => prev + 1)
    }
    return (
        <div>
        <h1>Home</h1>
        <input ref={refName} type="text" />
        <input ref={refId} type="text" />
        <button onClick={Next}>Keyingi sahifa</button>
        <h1>Counter {counter} {test}</h1>
        <button onClick={OnPlus}>plus</button>
        </div>
    );
}

export default HOC(Home);

// React-router-dom => biz reactni single page aplicition degan edik lekin 
// biz buni ishlatib reactni multi page apliciton qilishimiz mumkun.

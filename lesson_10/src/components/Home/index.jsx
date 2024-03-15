import { useNavigate } from "react-router-dom";
const Home =  (Home) => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Home</h1>
        <button onClick={() => navigate('/about')}>Keyingi sahigfa</button>
        </div>
    );
}

export default Home;

// React-router-dom => biz reactni single page aplicition degan edik lekin 
// biz buni ishlatib reactni multi page apliciton qilishimiz mumkun.

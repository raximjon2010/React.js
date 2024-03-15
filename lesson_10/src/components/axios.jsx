import axios from 'axios'

const Axios = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', {
        body: {},
    })
    .then((res) => console.log(res.data))
    return (
        <div>
            <h1>Axios</h1>
        </div>
    );
}

export default Axios;


// axios => Bu fetchga alternative sifatida chiqgan bu reactni kutubxonasi sifatida ornatiladi 
// fetch esa javascript method axios fetchga nisbatan syntax juda oson va qulay
// masalan biz fetchda malumotlarni json ga ogirib olardik bunda esa shart emas avtomatik json bolib keladi.

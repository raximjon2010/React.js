// event => Biz funtionlarni chaqirayotganimizda yoyilgan usulda chaqirishimiz mumkum hamda qisqartirma usulda 
// chaqirsak boladi. Endi biz qisqartirma usulda chaqirsak eventdagi hamma event ni malumotlari boradi.
// Agar biz yoyilma usulda chaqirsak uni biz function ni ichida chaqiramiz va yozilga functionni chaqirishda ham 
// function sifatida chaqiramiz va unga parametr ham berib yuborsak boladi. uni event dan tutib olamiz 
// Agar biz function yozmasadan uni function sifatida chaqirsak bu qayta qayta yurgizb Infinityga tushib qoladi.

// Agar biz button argumentini olmoqchi bolsak uni paramentrini nomini yozib quysak boladi 
// Lekin inputni malumotini olmoqchi bolsak event.target.value deb olishmiz kk boladi. 

// state => 
/*
let title = "Webbrain";
const Onchange = (event) => {
    title = event.target.value
    console.log('testing', event.target.value);
}
return (
<div>
    <h1>Input Data: {title}</h1>
    <br />
    <input onChange={Onchange} type="text" />
</div>
) // Biz bu xolatda inputga  yozilgan malumotlarni ekranga chiqaraolmaymiz bunday qilib chiqarish uchun statedan
foydalanishimiz kerak boladi. 

constructor(props) {
    super(props);
    this.state = {
        title: 'Webbrain',
    }
}
    render() {
        const Onchange = (event) => {
            this.setState({title: event.target.value})
        }
        return (
        <div>
            <h1>Input Data: {this.state.title}</h1>
            <br />
            <input onChange={Onchange} type="text" />
        </div>
        )
    }
    // biz bu xolatda inputni ichiga yozilgan malumotni ekranga korsatishimiz mumkun 
    // setState => bu this.state qilingan vaqtda this desak avtomatik tarzda setState kelib chiqadi. uni biz {}
    object ichida malumotni yangilash mumkun.


    Agar biz renderdan yuqorida function yozsak uni this orqali olish mumkun.


    state => re-render qilish xususiyatiga ega bolgan oddiy bitta state.

*/
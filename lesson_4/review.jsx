//  multi state change => yaniy bitta funtion orqali ikkita yoki undan kop inputni malumotini olishga multi state change deb aytiladi.
/*
  render() {
        const OnName = (e) => {
            this.setState({name: e.target.value})
        }
        const OnPassword = (e) => {
            this.setState({pasword: e.target.value})
        }
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Password: {this.state.pasword}</h1>
                <input onChange={OnName} type="text" placeholder="name" />
                <input  onChange = {OnPassword}type="text"  placeholder="pasword" />
            </div>
        )
    }  biz bu xolatda bitta yoki ikkita inputni olishimiz mumkun lekin keyinchalik 
    inputlar kopayib keishi mumkun. Shuni bitta functionga  yozishimiz kerak
    
        render() {
        const onChange = (e) => {
            const {value, name} = e.target
                this.setState({[name]: value}) buni dynamic usulda olishimiz kk bolad. yani objectda 
                diynamc usulda olganimizda uni qiymatini olardi bunda ham huddi shunday qiymatini oladi. 
        }
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Password: {this.state.pasword}</h1>
                <input name="name" onChange={onChange} type="text" placeholder="name" />
                <input name="pasword" onChange = {onChange}type="text"  placeholder="pasword" />
            </div>
        )
    } 
    biz bu xolatda yozib input ichidagi malumotni bitta function orqali olsak boladi.

       render() {
        const onChange = (e) => {
            const {value, name} = e.target
                this.setState({[name]: value},() => {
                    let percentage = this.state.foiz * 150 / 100
                    this.setState({foiz: percentage})
                })
        }
        const onDelete = (id) => {
            let filter = this.state.list.filter((value) => value.id !== id)
            this.setState({list: filter})
        }
        return (
            <div>
                <h1>Exam Points 150</h1>
                <input name="foiz" onChange={onChange} type="text" placeholder="name" /> <span>
                    {this.state.foiz} = {this.state.foiz}%
                </span>
                 {
                    this.state.list.length ?
                    this.state.list.map((value) => {
                        return(
                                <div key={value.id}>
                                    <h2> Id:{value.id} Name:{value.name}  Status:{value.status} <button onClick={() => onDelete(value.id)}>delete</button></h2>
                                </div>
                        )
                    })
                    : <h1>No result found</h1>
                 }
            </div>
        )
    }
    Agar biz setState ni ikkinchi parametrini ishlatsak bizda shu state bitta oldinga otib ketgan bolsa 
    uni ikkinchi parametri orqali bosilganda ishlatishimiz mumkun.

*/
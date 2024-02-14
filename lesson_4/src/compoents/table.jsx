import React from 'react';
import { data } from './mock';
import '../css/style.css'
const idImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGs-T5XTPJwtLRTosPHL8KoGYB8IoCyedsQ&usqp=CAU';
const ageImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn--BxxIUlH-oYWrOiXFtqraaKLpY6cahksA&usqp=CAU';
const Address = 'https://previews.123rf.com/images/hironicons/hironicons2001/hironicons200101334/138768730-creative-element-design-from-stock-market-icons-collection-pixel-perfect-location-icon-map-address.jpg';
const NameImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYKmHTP4zqVl1QtmddQE3kahgkTiVbINKWg&usqp=CAU'
const Status = 'https://cdn-icons-png.flaticon.com/512/4534/4534613.png'
const DeleteIcon = 'https://w7.pngwing.com/pngs/223/552/png-transparent-delete-logo-button-icon-delete-button-love-image-file-formats-text-thumbnail.png'
const UpdateIcon = 'https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171119673/89598010-update-refresh-icon-isolated-on-green-round-button-abstract-illustration.jpg'

class Table extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        list: data,
        select: 'id',
        name:'',
        status:'',
        adress:'',
        age:'',
    };
}

render() {
        const onDelete = (id) => {
            let filter = this.state.list.filter((value) => value.id !== id)
            this.setState({list: filter})
        }
        const Onchange = (e) => {
            const {value, name} = e.target;
            let search = data.filter((item) => `${item[this.state.select]}`.toUpperCase().toUpperCase().includes(value.toUpperCase().toUpperCase()))
            this.setState({list: search}) 
        }

        const onSelect = (e) => {
            this.setState({select: e.target.value})
        }

        return (
        <div style={{display: 'flex',alignItems:'center', flexDirection:'column'}}>
           <div className="navbar">
            <div className="create_navbar">
                <input onChange={Adding} className='input' placeholder='Name' name = {'name'} type="text" />
                <input onChange={Adding} className='input' placeholder='Status' name='status' type="text" />
                <input onChange={Adding} className='input' placeholder='Address' name='address' type="text" />
                <input onChange={Adding} className='input' placeholder='Age' name='age' type="text" />
                <button onChange={Adding} className='Button'>Add</button>
            </div>
            <div className="search_navbar">
                <select className='select' onChange={onSelect}>
                    <option value="id">ID</option>
                    <option value="name">NAME </option>
                    <option value="status">STATUS</option>
                    <option value="adress">ADDRESS</option>
                </select>
                <input onChange={Onchange} placeholder='search' className='search_input' type="search" />
            </div>
           </div>
           <br />
        <div className='container'>
            <div className='container_table'>
            <table className='table' border={1}>
                <tbody>
                    {
                        this.state.list.length ?
                        this.state.list.map((value) => {
                            return (
                                <tr>
                                    <th>{value.id}</th>
                                    <th>{value.age}</th>
                                    <th>{value.adress}</th>
                                    <th>{value.name}</th>
                                    <th>{value.status}</th>
                                    <th><button onClick={() => onDelete(value.id)} className='deleteButton'>DELETE</button></th>
                                    <th><button><img width={'30px'} height={'30px'} style={{borderRadius: '50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJK7fM8zkJ63XqpDmV3iGI1kbLaipS3dAyDA&usqp=CAU" alt="" /></button></th>
                                    </tr>
                            )
                        })
                        : 
                        <tr>
                        <th colSpan={7}>
                            <img width={"100px"} height={"100px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0hpttjpK_4VQOsBSj-e-pG_wMS2kaRjhnwdT_a9bRw&s" alt="" />
                            {/* <pre>No data </pre> */}
                        </th>
                    </tr>
                    }
                </tbody>
                <thead className='head'>
                    <tr>
                         <th><img width={'50px'} height={'50px'} src={idImage} alt="Eror" /></th>
                        <th><img width={'50px'} height={'50px'} style={{borderRadius: '50%'}} src={ageImage} alt="Eror" /></th>
                        <th><img width={'50px'} height={'50px'} style={{borderRadius: '50%'}} src={Address} alt="Eror" /></th>
                        <th><img width={'50px'} height={'50px'} style={{borderRadius: '50%'}} src={NameImage} alt="Eror" /></th>
                        <th><img width={'50px'} height={'50px'} style={{borderRadius: '50%'}} src={Status} alt="Eror" /></th>
                        <th><img width={'50px'} height={'50px'} style={{borderRadius: '50%'}} src={DeleteIcon} alt="Eror" /></th>
                        <th><img width={'50px'} height={'50px'} style={{borderRadius: '50%'}} src={UpdateIcon} alt="Eror" /></th>
                    </tr>
                </thead>
            </table>
        </div>
     </div>
    </div>
     );
    }
}
export default Table;
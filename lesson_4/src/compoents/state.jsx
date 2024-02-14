import React from "react";
import { data } from "./mock";

class State extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: data,
            foiz: 0,
        }
    }
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
}

export default State
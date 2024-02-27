import React from 'react';

class State extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        title: 'Webbrain',
        count: 0,
    }
}

 OnPlus = () => {
    this.setState({count : this.state.count + 1})
}

 OnMinus = () => {
    this.setState({count: this.state.count - 1})
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
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.OnPlus}>+</button>
            <button onClick={this.OnMinus}>-</button>
        </div>
        )
    }
}

export default State;


// git init
// git add README.md 
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/raximjon2010/React-Task.git
// git push -u origin main
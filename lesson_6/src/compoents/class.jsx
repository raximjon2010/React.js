import React from 'react';

class Class extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        count: 0,
    }

    console.log('constructor');
}
// componentWillMount() { // bu birinchi renderdan oldin ishlaydi
    // console.log('componentWillMount');
// }
// componentDidMount() { // bu birinchi renderdan keyin ishlaydi
    // console.log('componentDidMount');
// }
// componentWillReceiveProps() { // bu parentdan chilga props kelganda ishlaydi
    // console.log('componentWillReceiveProps');
// }
// shouldComponentUpdate () { // bu state renderni yangilagan vaqtda ishlaydi
    // console.log('shouldComponentUpdate');
    // return false qilsak bu statelarni tuxtatib quyadi.
// }
// componentWillUpdate(){ // bu renderdan oldin va prop kelishidan keyin ishlaydi.
    // console.log('componentWillUpdate');
// }

    render() {
        console.log('render');
        return <div>
            <h1>Hi {this.props.prop}</h1>
            <p>Name; {this.state.count}</p>
            <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
        </div>;
    }
}

export default Class;
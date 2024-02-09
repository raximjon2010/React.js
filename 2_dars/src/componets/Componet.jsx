import React from "react"

class Component extends React.Component {
  render() {
    console.log(this.props.title);
    return (
      <div>
        <h1>Hello {this.props.title ?? 'no text'}</h1>
        {this.props.children}
      </div>
    )
  }
}
export default Component

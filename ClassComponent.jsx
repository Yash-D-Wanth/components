import { Component } from "react";
class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>i am {this.props.name}</h1>
      </div>
    );
  }
}
export default ClassComponent

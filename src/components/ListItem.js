import { Component } from "react";

class ListItem extends Component {
  render() { 
    return ( 
      <div>
        <div onClick={this.props.onClick}>
          <span>{this.props.content} - </span>
          <span>{this.props.complete ? 'Complete' : 'Incomplete'}</span>
        </div>
      </div>
    );
  }
}
 
export default ListItem;
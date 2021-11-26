import { Component } from "react";

class ListItem extends Component {

  render() { 
    return ( 
      <div>
        <div onClick={this.props.onClick}>{this.props.content} {this.props.complete ? 'Complete' : 'Incomplete'}</div>
      </div>
    );
  }
}
 
export default ListItem;
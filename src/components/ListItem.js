import { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listItems: [{
        content: 'To do item.',
        complete: false,
      }]
    }
  }
  render() { 
    return ( 
      <div>
        <div>{this.props.content}</div>
      </div>
    );
  }
}
 
export default ListItem;
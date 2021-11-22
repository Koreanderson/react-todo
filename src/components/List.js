import { Component } from "react";
import ListItem from './ListItem.js';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listItems: [
        {
          content: 'To do item 1.',
          complete: false,
        },
        {
          content: 'To do item 2.',
          complete: false,
        }
      ]
    }
  }
  render() { 
    return ( 
      <div>
        <h1>ToDo List</h1>
        {this.state.listItems.map((item, i) => {
          return <ListItem content={item.content} complete={item.complete} key={i}></ListItem>
        })}

      </div>
    );
  }

  renderListItems() {
    return 
  }
}
 
export default List;
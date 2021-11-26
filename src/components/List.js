import { Component } from "react";
import ListItem from './ListItem.js';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listItems: [
        {
          index: 0,
          content: 'To do item 1.',
          complete: false,
        },
        {
          index: 1,
          content: 'To do item 2.',
          complete: true,
        }
      ]
    }

    this.onChildClick = this.onChildClick.bind(this);
    this.toggleItemComplete = this.toggleItemComplete.bind(this);

  }
  render() { 
    return ( 
      <div>
        <h1>ToDo List</h1>
        {this.state.listItems.map((item, i) => {
          return <ListItem content={item.content} complete={item.complete} key={i} index={this.index} onClick={() => this.onChildClick(i)}></ListItem>
        })}
      </div>
    );
  }

  onChildClick(i) {
    this.toggleItemComplete(i);
  }

  toggleItemComplete(index) {
    console.log(index);
    let listItems = this.state.listItems;
    let listItem = listItems[index];
    listItem.complete = !listItem.complete;
    this.setState({listItems})
  }
}
 
export default List;
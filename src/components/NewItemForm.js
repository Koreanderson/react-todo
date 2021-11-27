import { Component } from "react";

class NewItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const newVal = e.target.value;
        this.setState(
            {
                value: newVal
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const value = e.target.listItem.value;
        this.props.handleSubmit(value);
    }

    render() { return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="New List Item" name="listItem" onChange={this.handleChange}></input>
                <button>Add</button>
            </form>
        </div>
        );
    }
}
 
export default NewItemForm;
import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    style={addStyle}
                    placeholder="Add Todo...."
                    onChange = {this.onChange}
                    value={this.state.title}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </form>
        )
    }
}

//Proptype
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const addStyle = {
    flex: '10',
    padding: '10px',
    border: '1px solid #E3977A',
    color: '#E3977A'
}

export default AddTodo

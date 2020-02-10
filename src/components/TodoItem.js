import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#E3977A',
            color: '#fff',
            padding: '10px',
            borderBottom: '1px #fff dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        // desturcturing
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type='checkbox' 
                        onChange = {this.props.markComplete.bind(this, id)}
                        style={checkBoxStyle}/> {' '} 
                    {title}
                    <button style={btnStyle}
                        onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

//Proptype
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px 9px',
    border: '2px #fff solid',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
const checkBoxStyle = {
    cursor: 'pointer'
}

export default TodoItem

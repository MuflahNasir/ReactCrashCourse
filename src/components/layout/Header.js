import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style = {headerStyle}>
            <h1>Todo List</h1>
            <Link to="/" className="p1">Home</Link> | <Link to="/about" className="p1">About</Link>
        </header>
    )
}

const headerStyle = {
    color: '#E3977A',
    textAlign: 'center',
    padding: '5px 0px 30px 0px',
    borderBottom: '1px solid #E3977A'
}
import React from 'react'

const Header = (props) => {
    const headerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        color: '#ff6a95' 
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

export default Header
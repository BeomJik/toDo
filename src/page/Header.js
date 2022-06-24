import React from 'react';

function Header({ver}) {
    const subject = {
        color: '#123',
        letterSpacing: 2
    }
    return( 
        <h1 style={subject}>리액트 React {ver}</h1>
    );
}

Header.defaultProps = {
    ver: "15.6"
}

export default Header;
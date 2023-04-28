import React from 'react';

export default function Card ({ imageUrl, card, handleChoice, flipped }) {
    const handleClick = () => {
        handleChoice(card)
    };
    console.log(flipped)
    const cardst = {
        position: 'relative',
        height:'150px',
        width:'150px',
        backgroundColor: '#A988CA',
        paddingTop: '25px',
        borderStyle: 'solid'
    }
    const cardstfront = {
        transform:'rotateY(90deg)',
        position: 'absolute',
    }

    const hide = {
        display: 'none'
    }

    return (
        <div style={cardst} onClick={handleClick}>
            <center>
                <img 
                    style={ flipped ? null : cardstfront}
                    src={imageUrl} 
                    alt="Card Image"  
                    height='70%'  
                    width='90%'
                />
            </center>
            <center>
                <img 
                    style={flipped ? cardstfront : null}
                    src={"https://upload.wikimedia.org/wikipedia/commons/4/40/Taylor_swift_logo.jpg"} 
                    alt="Card Image"  
                    height='80%'  
                    width='90%'
                />
            </center>
        </div>
    );
};


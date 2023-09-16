import React from 'react'
function Hero() {
    let welcomemsg = "Choose Your Perfect One";
    let styles = {
        color: "white",
        // padding: "0px",
        // backgroundColor: 'black',
        // borderRadius: "20px 0"
    };
    return <div className='hero'><h1
        style={styles}>
        {`${welcomemsg}`}</h1>
        </div>;
}
export default Hero;
import React from 'react'
function Header() {
    let time = new Date();
    let hours = time.getHours();
    let mode = "";
    // if (hours < 11) {
    //     mode="dayMode"
    // } else if (hours > 11) {
    //     mode="nightMode"
    // }
    return (
        <header className={`${mode}`}>
            <div className='logo'>On Loop</div>
            <ul className='nav'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href=""><i className="fas fa-shopping-cart"></i></a></li>              
                <li><a href=""><i className="fas fa-heart"></i></a></li>                
                <li><a href=""><i className="fas fa-user"></i></a></li>                
                <li><a href=""><i className="fas fa-search"></i></a></li>              

            </ul>
        </header>
    );
}
export default Header;
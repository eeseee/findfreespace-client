import React from 'react';

const MainBar = () => {
    return (
        <div class = "dropdown">
            <button onClick="myFunction()" class="dropbtn">select current building</button>
            <div id="myDropDown" class="dropdown-content">
                <a href="#">icics building</a>
                <a href="#">leonard s. klinck</a>
                <a href="#">earth sciences building</a>
            </div>
        </div>
        
    )
}



export default MainBar;

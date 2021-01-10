import React from 'react';

const MainBar = () => {

    const buildingList = [];
    
    React.useEffect(() => {



    }, [])


    
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
        window.onClick = function(event) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i=0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    return (
        <body>
            <nav>
                <div class="select">
                    <button>select current building</button>
                    <ul>
                        <li><a href="#">icics building</a></li>
                        <li><a href="#">leonard s. klinck</a></li>
                        <li><a href="#">earth sciences building</a></li>
                    </ul>
                </div>
            </nav>
        </body>
    )
}

export default MainBar;

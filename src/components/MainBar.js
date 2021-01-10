import React from 'react';

const MainBar = () => {

    const buildingList = [];
    
    React.useEffect(() => {



    }, [])

    return (
                <div class="select">
                    <button>select current building</button>
                    <ul>
                        <li><a href="#">icics building</a></li>
                        <li><a href="#">leonard s. klinck</a></li>
                        <li><a href="#">earth sciences building</a></li>
                    </ul>
                </div>
    )
}

export default MainBar;

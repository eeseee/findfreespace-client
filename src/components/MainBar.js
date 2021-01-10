import React from 'react';
import axios from 'axios';

const MainBar = () => {
    
    const [buildingsList, setBuildingsList] = React.useState([]);

    
    React.useEffect(() => {
        axios.get('/buildings/').then((res) => {
            const buildings = res.data
            setBuildingsList(buildings);
        })
        .catch ((err) => {
            console.log(err);
        })
    }, []);

    const renderDropdownOptions = () => {

        return buildingsList.map((building) => {
            console.log(building)
            return (<li><a href="#">{building.name}</a></li>);
        })
    }
    return (
                <div class="select">
                    <button>select current building</button>
                    <ul>
                        {renderDropdownOptions()}
                    </ul>
                </div>
    )
}

export default MainBar;

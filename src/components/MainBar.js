import React from 'react';
import axios from 'axios';

const MainBar = ({handleSelect, buttonName}) => {
    
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
            return (
                <li><a key={building.name} onClick={() => { handleSelect(building.name)}}>{building.name}</a></li>);
        })
    }
    return (
        <div class="select">
            <img class="icon" src="https://image.flaticon.com/icons/png/128/16/16895.png?ga=GA1.2.633345297.1602720000"/>
            <button>{buttonName}</button>
                <ul>
                    {renderDropdownOptions()}
                </ul>
        </div>  
    )
}

export default MainBar;

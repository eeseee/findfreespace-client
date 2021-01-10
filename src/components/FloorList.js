import React from 'react';
import axios from 'axios';

const FloorList = ({selectedBuilding}) => {
    const [floors, setFloors] = React.useState([]);
    const[visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        axios.get(`/rooms/?building=${selectedBuilding}`)
        .then((res) => {
            const rooms = res.data;

            setFloors(rooms.map((room) => {
                return room.floor
            }));
        })
    }, [selectedBuilding]);

    const renderFloors = () => {
        console.log(floors);

        return (floors.map((floor) => 
        <div>
            <img class="icon" src="https://image.flaticon.com/icons/png/128/16/16895.png?ga=GA1.2.633345297.1602720000"/>
            <button onClick={() => setVisible(!visible)}>floor {floor}</button>
        </div>
        ))
    }

    return (
        <div class="floorlist">
            <div class="floor">
                {renderFloors()}
            </div>
            <div class="floor">
                {visible ? <p>room 123</p> : null}
            </div>
        </div>
    )
}

export default FloorList;
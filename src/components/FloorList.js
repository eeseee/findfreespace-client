import React from 'react';
import axios from 'axios';

const FloorList = ({selectedBuilding}) => {
    const [floors, setFloors] = React.useState([]);
    const [rooms, setRooms] = React.useState([]);
    const[visible, setVisible] = React.useState(false);
    const[visible1, setVisible1] = React.useState(false);


    React.useEffect(() => {
        axios.get(`/rooms/?building=${selectedBuilding}`)
        .then((res) => {
            const roomsData = res.data;

            setFloors(roomsData.map((room) => {
                return room.floor
            }));

            setRooms(roomsData);
        })
    }, [selectedBuilding]);

    const renderFloors = () => {

        return (
        <>
        <div>
            <button onClick={() => setVisible(!visible)}>floor {floors[0]}</button>
            {visible ? 
            <div className="rows">
                <p className="row-p">{rooms[0].building}{rooms[0].room_num}</p> 
                {rooms[0].num_people !== 0 ? <p className="row-p-occupied">⛔️ Occupied</p>: <p className="row-p-available">✅ Available</p>}
            </div>
            : null}

        </div>
        <div>
            <button onClick={() => setVisible1(!visible1)}>floor {floors[1]}</button>
            {visible1 ? 
            
            <div className="rows">
                <p className="row-p">{rooms[1].building}{rooms[1].room_num}</p> 
                {rooms[1].num_people !== 0 ? <p className="row-p-occupied">⛔️ Occupied</p>: <p className="row-p-available">✅ Available</p>}
            </div>
            
            : null}
        </div>
        </>
        )
    }

    return (
        <div class="floorlist">
            <div class="floor">
                {renderFloors()}
            </div>
        </div>
    )
}

export default FloorList;
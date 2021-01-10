import React from 'react';

const FloorList = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div class="floorlist">
            <div class="floor">
                <button onClick={() => setOpen(true)}>floor zero</button>
                {
                    open ? <p>Hello world</p> : null
                }
            </div>
            <div class="floor">
                <button>floor one</button>
            </div>
        </div>
    )
}

export default FloorList;
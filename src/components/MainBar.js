import React from 'react';
import { Select, makeStyles } from '@material-ui/core';

const useStyles= makeStyles ({
    root: {
        color: "white",
        marginLeft: "465px",
        marginTop: "240px",
        width: "971px",
        height: "81px",
        
    }
}) 

const MainBar = () => {
    const classes = useStyles();
    return (
        <Select className={classes.root}/>

        
    )
}




export default MainBar;

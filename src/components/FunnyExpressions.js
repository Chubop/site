import { Typography } from "@mui/material";
import { useState } from "react";


export default function FunnyExpressions(props){

    const [currExp, setCurrExp] = useState(Math.floor(Math.random() * funnyExpressions.length)); 
    
    const funnyExpressions = ["Usually", "Most of The Time", "Barely", "Assuming Enough Coffee",
    "Except on Fridays", "Now With No Cheat Sheet"]

    return(
        <Typography variant="h2" 
        component={"span"} 
        sx={{color: 'gray'}}>
            hi
        </Typography>
    )
}
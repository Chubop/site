import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
    useWindowSize,
} from '@react-hook/window-size';
import { useState } from "react";

export default function ImageCard(props){

    const [width, height] = useWindowSize();
    const [mouseEntered, setMouseEntered] = useState(false);

    const handleMouseEnter = (e) => {
        setMouseEntered(true)
    }

    const handleMouseLeave = (e) => {
        setMouseEntered(false)
    }
    
    return(
        <>
            <Card 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                height: width >= 900 ? '300px' : '200px', 
                width: width >= 900 ? 'auto' : '200px', 
                borderRadius: '10px', 
                marginBottom: width >= 900 ? '0' : '25px',
                backgroundImage: "linear-gradient(to bottom, #1e1e1e, #171717)",
                cursor: 'pointer'}}>

                <CardContent sx={{
                    textAlign: 'center', 
                    transform: 'translateY(-50%)', 
                    top: '50%', 
                    position: 'relative'
                    }}>
                    <Typography variant={width >= 900 ? 'h4' : 'h5'} 
                    sx={{width: '100%', 
                    fontWeight: 400,
                    transform: mouseEntered && 'scale(1.10)',
                    transition: mouseEntered && 'all 0.2s ease-in-out',
                    textShadow: '-1px -1px 3 gray'}}>
                        {props.title}
                    </Typography>
                </CardContent>  

            </Card>
        </>
    )
}
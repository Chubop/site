import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Content from "../components/Content";
import {
    useWindowSize,
} from '@react-hook/window-size';
import * as animationData from "../lotties/computer.json";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";


export default function Home(props){

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: true });


    const funnyExpressions = ["Usually", "Most of The Time", "Barely", "Assuming Enough Coffee",
    "Except on Fridays", "Now With No Cheat Sheet"]

    const [currExp, setCurrExp] = useState(Math.floor(Math.random() * funnyExpressions.length)); 

    useEffect(() => {
        if(seconds % 10 === 0){
            setCurrExp(Math.floor(Math.random() * funnyExpressions))
        }
    }, [seconds])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const [width, height] = useWindowSize();

    return(
        <Content>
            <Grid container justifyContent="space-evenly" alignItems="center">
                <Grid item>
                    <Typography variant="h2" sx={{fontWeight: 'bold'}}>
                    Passing the Turing Test<br></br>
                        <Typography variant="h2" 
                        component={"span"} 
                        sx={{color: 'gray'}}>
                            {funnyExpressions[currExp]}
                        </Typography>
                    </Typography>
                </Grid>

                <Grid item>
                    <Lottie options={defaultOptions}
                    height={width >= 600 ? 600 : 400}
                    width={width >= 600 ? 600 : 400}/>
                </Grid>
            </Grid>

            <Grid container direction={width >= 900 ? 'row' : 'column'} justifyContent={"space-between"} alignItems={"center"} sx={{marginTop: 8}} >
                <Grid item xs={3} sx={{textAlign: 'center'}} component={"div"} sx={{margin: 'auto'}}>
                    <Link to="/experience" style={{ textDecoration: 'none' }}>
                        <ImageCard title={"Experience"} />
                    </Link>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'center'}} component={"div"} sx={{margin: 'auto'}}>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <ImageCard title={"Projects"} />
                    </Link>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'center'}} component={"div"} sx={{margin: 'auto'}}>
                    <Link to="/blog" style={{ textDecoration: 'none' }}>
                        <ImageCard title={"Blog"} />
                    </Link>
                </Grid>
            </Grid>

        </Content>
    )
}
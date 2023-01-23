import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Lottie from "react-lottie";
import Content from "../components/Content";
import {
    useWindowSize,
} from '@react-hook/window-size';
import * as animationData from "../lotties/computer.json";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";


export default function Home(props){

    const funnyExpressions = ["Usually", "Most of The Time", "Barely", "Assuming Enough Coffee",
    "Except on Fridays", "Now With No Cheat Sheet"]

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const [currExp, setCurrExp] = useState(Math.floor(Math.random() * funnyExpressions.length)); 
    const [width, height] = useWindowSize();

    return(
        <Content>
            <Grid container justifyContent="space-evenly" alignItems="center" sx={{padding: 4}}>
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
                    width={width >= 600 ? 600 : '90vw'}/>
                </Grid>
            </Grid>

            <Grid container direction={width >= 900 ? 'row' : 'column'} justifyContent={"space-between"} alignItems={"center"} sx={{marginTop: 8}} >
                <Grid item xs={3} sx={{textAlign: 'center', margin: 'auto'}} component={"div"}>
                    <Link to="/experience" style={{ textDecoration: 'none' }}>
                        <ImageCard title={"Experience"} />
                    </Link>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'center', margin: 'auto'}} component={"div"}>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <ImageCard title={"Projects"} />
                    </Link>
                </Grid>
                <Grid item xs={3} sx={{textAlign: 'center', margin: 'auto'}} component={"div"}>
                    <Link to="/blog" style={{ textDecoration: 'none' }}>
                        <ImageCard title={"Blog"} />
                    </Link>
                </Grid>
            </Grid>

        </Content>
    )
}
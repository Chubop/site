import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Content from "../components/Content";
import {
    useWindowSize,
} from '@react-hook/window-size';
import * as animationData from "../lotties/space_computer.json";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";
import StarParallax from "../components/StarParallax";
import HackerText from "../components/HackerText";



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
    const [hackerText, setHackerText] = useState()
    const [width, height] = useWindowSize();
    let expression = funnyExpressions[currExp];

    return(
        <Content>
            <Grid container justifyContent="space-evenly" alignItems="center">
                <Grid item xs={6} sx={{flexBasis: '100%'}}>
                    <Typography variant={width >= 600 ? "h2" : "h3"} sx={{fontWeight: 'bold', textAlign: width >= 1300 ? 'left' : 'center', marginLeft: 2}}>
                    Passing the Turing Test<br></br>
                        <Typography 
                        variant={width >= 600 ? "h3" : "h4"}
                        sx={{height: 125, fontFamily: 'monospace'}}
                        >
                            <HackerText>
                                {expression}
                            </HackerText>
                        
                        </Typography>
                    </Typography>
                </Grid>

                <Grid item>
                    <Lottie 
                    isClickToPauseDisabled
                    options={defaultOptions}
                    width={width >= 600 ? 600 : '90vw'}/>
                </Grid>
            </Grid>

            <Grid container direction={width >= 900 ? 'row' : 'column'} justifyContent={"space-between"} alignItems={"center"}>
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
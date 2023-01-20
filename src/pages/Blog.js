import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import desperation_winners from '../images/desperation_winners.png';
import openai from '../images/openai.png';
import youtube from '../images/youtube.jpg';

export default function Blog(props){
    return(
        <>
            <Grid container direction={'column'} justifyContent={"space-between"} alignItems={"center"} sx={{marginTop: 8}}>
                <Grid item>
                    <BlogCard 
                    href={"exploring-minecraft-desperation"}
                    src={desperation_winners}
                    title={"Exploring the Social Behavior of Gen Z: A Minecraft Experiment on Friendship and Winning"}
                    date={"January 17th, 2023"}/>
                </Grid>
                <Grid item>
                    <BlogCard 
                    href={"chatgpt-vs-gpt3"}
                    src={openai}
                    title={"ChatGPT vs. GPT 3"}
                    date={"January 2nd, 2023"}/>
                </Grid>
                <Grid item>
                    <BlogCard
                    href={"youtube-partner"}
                    src={youtube}
                    title={"YouTube Partner in a Day"}
                    date={"December 18th, 2022"}/>
                </Grid>
            </Grid>
        </>
    )
}
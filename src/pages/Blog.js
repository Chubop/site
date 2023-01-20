import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import desperation_winners from '../images/desperation_winners.png';
import openai from '../images/openai.png';

export default function Blog(props){
    return(
        <>
            <Grid container direction={'column'} justifyContent={"space-between"} alignItems={"center"} sx={{marginTop: 8}}>
                <Grid item>
                    <BlogCard 
                    src={desperation_winners}
                    title={"Exploring the Social Behavior of Young People: A Minecraft Social Experiment on Friendship and Winning"}
                    date={"January 17th, 2023"}/>
                </Grid>
                <Grid item>
                    <BlogCard 
                    src={openai}
                    title={"ChatGPT vs. GPT 3"}
                    date={"January 2nd, 2023"}/>
                </Grid>
            </Grid>
        </>
    )
}
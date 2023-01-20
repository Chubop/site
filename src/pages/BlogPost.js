import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ChatGptVsGpt3 from "./blog_posts/ChatGptVsGpt3";
import ExploringMinecraftDesperation from "./blog_posts/ExploringMinecraftDesperation";
import YoutubePartner from "./blog_posts/YoutubePartner";



export default function BlogPost(props){

    const { id } = useParams();

    const blogPosts = {
        "exploring-minecraft-desperation": <ExploringMinecraftDesperation/>, 
        "chatgpt-vs-gpt3": <ChatGptVsGpt3/>,
        "youtube-partner": <YoutubePartner/>
    }

    return(
        <>
            <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}
            sx={{marginTop: 8, textAlign: 'left'}}>
                <Grid item>
                    {blogPosts[id]}
                </Grid>
            </Grid>
        </>
    )
}
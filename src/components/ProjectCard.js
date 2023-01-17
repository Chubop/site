import { Box, colors, Typography } from "@mui/material"
import desperationWinners from '../images/desperation_winners.png'
import ProjectImage from "./ProjectImage"


export default function ProjectCard(props){
    return(
        <>
            <Box sx={{width: '60vw', paddingBottom: 1, marginBottom: 8, backgroundImage: "linear-gradient(to bottom, #1e1e1e, #171717)", borderRadius: '10px'}}>
                <ProjectImage src={props.src}/>
                <Typography variant="h4" sx={{padding: 1, paddingBottom: 0}}>
                    {props.title}
                </Typography>
                <Typography variant="h6" sx={{padding: 1, color: 'lightgray'}}>
                    {props.children}
                </Typography>
            </Box>
        </>
    )
}
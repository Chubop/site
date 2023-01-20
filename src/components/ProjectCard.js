import { Box, colors, Typography } from "@mui/material"
import { useWindowSize } from "@react-hook/window-size";
import ProjectImage from "./CardImage"


export default function ProjectCard(props){
    
    const [width, height] = useWindowSize();

    return(
        <>
            <Box sx={{width: width < 1300 ? '80vw' : '50vw', paddingBottom: 1, marginBottom: 8, backgroundImage: "linear-gradient(to bottom, #1e1e1e, #171717)", borderRadius: '10px'}}>
                <ProjectImage src={props.src}/>
                <Typography variant="h4" sx={{padding: 4, paddingBottom: 0, paddingTop: 3}}>
                    {props.title}
                </Typography>
                <Typography variant="h6" sx={{padding: 4, color: 'lightgray', paddingTop: 2}}>
                    {props.children}
                </Typography>
            </Box>
        </>
    )
}
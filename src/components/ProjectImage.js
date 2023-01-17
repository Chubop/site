import { Box } from "@mui/material";

export default function ProjectImage(props){
    return(
        <Box sx={{width: 'inherit'}}>
            <img 
            src={props.src} 
            style={{width: 'inherit', height: 250, borderRadius: '10px', objectFit: 'cover'}}/>
        </Box>

    )
}
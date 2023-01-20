import { Box, colors, Typography } from "@mui/material"
import { useWindowSize } from "@react-hook/window-size";
import ProjectImage from "./CardImage"


export default function BlogCard(props){
    
    const [width, height] = useWindowSize();

    return(
        <>
            <Box sx={{width: width < 1300 ? '80vw' : '50vw', paddingBottom: 1, marginBottom: 8, backgroundImage: "linear-gradient(to bottom, #1e1e1e, #171717)", borderRadius: '10px'}}>
                <ProjectImage src={props.src} href={props.href}/>
                <Box sx={{padding: 4}}>
                    <Typography variant="h7" sx={{color: 'gray'}}>
                        {props.date}
                    </Typography>
                    <Typography variant="h3" sx={{paddingBottom: 0}}>
                        {props.title}
                    </Typography>

                    <Typography variant="h6" sx={{color: 'lightgray'}}>
                        {props.children}
                    </Typography>
                </Box>

            </Box>
        </>
    )
}
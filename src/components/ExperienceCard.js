import { Box, Typography } from "@mui/material";

function Feature(props){
    return(
        <div>
            hello
        </div>
    )
}

export default function ExperienceCard(props){
    return(
        <div>
            <Box sx={{width: '60vw', marginBottom: 8, backgroundColor: '#1e1e1e', padding: 6, borderRadius: '10px'}}>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="h5" sx={{marginBottom: 1}}>{props.setting}, {props.timeframe}</Typography>
                <Typography variant="h6">{props.description}</Typography>
            </Box>
            <Box>
                {props.children}
            </Box>
        </div>
    )

}

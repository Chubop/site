import { Box } from "@mui/system";


export default function Content(props){
    return(
        <Box sx={{marginTop: 4}}>
            {props.children}
        </Box>
    )
}
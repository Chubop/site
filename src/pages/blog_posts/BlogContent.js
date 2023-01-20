import { useWindowSize } from "@react-hook/window-size";
import { Box, Grid } from "@mui/material";


export default function BlogContent(props){

    const [width, height] = useWindowSize();


    return(
        <Box sx={{backgroundColor: '#161616', borderRadius: 2, padding: 6}}>
            <Grid container direction="row" alignItems="center" sx={{width: width >= 1000 ? '50vw' : '70vw'}}>
                {props.children}
            </Grid>
        </Box>
    )
}
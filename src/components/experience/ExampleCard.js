import { Box, Grid, Typography } from "@mui/material";
import google_slides_logo from '../../images/google_slides_logo.png'

export default function ExampleCard(props){
    return(
        <>
        <Grid container direction="row">
            <Grid item>
                <a href="https://docs.google.com/presentation/d/1Ixexck8L8To5hw9WgHTQuLBKAHjfWk39HsqXPWd7VLM/edit?usp=sharing" style={{textDecoration: 'none'}}>
                <Box sx={{cursor: 'pointer', marginTop: 1, width: 40, padding: 1, textAlign: 'center', color: 'white'}}>
                    <img src={google_slides_logo} style={{width: 'inherit', height: 'inherit'}}/>
                    <Typography variant="h7">
                        Example Presentation
                    </Typography>
                </Box>
                </a>
            </Grid>
        </Grid>

        </>
    )
}
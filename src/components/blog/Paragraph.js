import { Box, Typography, Grid } from "@mui/material"


export default function Paragraph(props){
    return(
        <Grid item>
            <Box sx={{width: 'auto', borderRadius: 2, marginBottom: 4}}>
                <Typography variant={"h4"} sx={{textAlign: 'center'}}>
                    {props.title}
                </Typography>
                <Typography variant={"h5"} sx={{fontWeight: 300, color: 'darkgray'}}>
                    {props.children}
                </Typography>
            </Box>
        </Grid>
    )
}
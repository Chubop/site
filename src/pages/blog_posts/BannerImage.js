import { Grid } from "@mui/material";


export default function BannerImage(props){
    return(
        <Grid item sx={{width: 'inherit'}}>
            <img src={props.src} style={{width: 'inherit', borderRadius: '2px', objectFit: 'cover'}}/>
        </Grid>
    )
}
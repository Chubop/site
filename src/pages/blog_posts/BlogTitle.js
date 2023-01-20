import { Grid, Typography } from "@mui/material";

export default function BlogTitle(props){
    return(
        <Grid item>
            <Typography variant="h3" sx={{paddingBottom: 2, paddingTop: 2, paddingLeft: 0, paddingRight: 0, width: '100%'}} component={"div"}>
                {props.children}
            </Typography>
        </Grid>

    )
}
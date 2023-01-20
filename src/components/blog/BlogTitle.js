import { Grid, Typography } from "@mui/material";
import { useWindowSize } from "@react-hook/window-size";

export default function BlogTitle(props){

    const [width, height] = useWindowSize();

    return(
        <Grid item>
            <Typography variant={width >= 1000 ? 'h3' : 'h5'} sx={{paddingBottom: 2, paddingTop: 2, paddingLeft: 0, paddingRight: 0, width: '100%'}} component={"div"}>
                {props.children}
            </Typography>
        </Grid>

    )
}
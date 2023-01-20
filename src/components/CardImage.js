import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    image: {
        width: 'inherit', 
        height: 300, 
        objectFit: 'cover',
        "&:hover":{
            transform: 'scale(1.025)',
            filter: 'brightness(70%)'
        },
        transition: 'all 0.2s ease'
    },
    box: {
        width: 'inherit',
        overflow: 'hidden',
        borderRadius: '10px', 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0,
    }
});

export default function ProjectImage(props){
    const classes = useStyles();

    return(
        <Box className={classes.box}>
            <img 
            className={classes.image}
            src={props.src}/>
        </Box>

    )
}
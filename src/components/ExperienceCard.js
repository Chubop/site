import { Box, Typography, Button, Grid } from "@mui/material";

function Feature(props){
    return(
        <div>
            hello
        </div>
    )
}

function Keyword(props){
    return(
        <>
            <Button
            disabled
            sx={{
                border: '1px solid darkgray',
                textTransform: 'none',
                padding: 0,
                paddingLeft: 2,
                paddingRight: 2,
                marginRight: 3
            }}>
                <Typography variant="h7">
                    {props.children}
                </Typography>
            </Button>
        </>
    )
}

export default function ExperienceCard(props){
    return(
        <div>
            <Box sx={{width: '60vw', marginBottom: 8, backgroundColor: '#1e1e1e', padding: 6, borderRadius: '10px'}}>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="h5" sx={{marginBottom: 1}}>{props.setting}, {props.timeframe}</Typography>
                <Grid container justifyContent="flex-start" sx={{marginTop: 1, marginBottom: 1}}>
                    {props.keywords.map(word => {
                        return(
                            <Grid item>
                                <Keyword>{word}</Keyword>
                            </Grid>
                        )
                    })}
                </Grid>
                <Typography variant="h6">{props.description}</Typography>
            </Box>
            <Box>
                {props.children}
            </Box>
        </div>
    )

}

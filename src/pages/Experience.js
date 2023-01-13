import { Grid, Typography } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";



export default function Experience(){
    return(
        <>
            <Grid container direction={'column'} justifyContent={"space-between"} alignItems={"center"} sx={{marginTop: 8}}>
                <Grid item>
                    <ExperienceCard
                    title={"Software Engineer I"}
                    setting={"LivePerson"}
                    timeframe={"February 2021 - October 2022"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                    
                    </ExperienceCard>
                </Grid>
                <Grid item>
                    <ExperienceCard
                    title={"Conversational AI Engineer Intern"}
                    setting={"LivePerson"}
                    timeframe={"February 2021 - October 2022"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                    
                    </ExperienceCard>
                </Grid>
                <Grid item>
                    <ExperienceCard
                    title={"Cybersecurity Research Assistant"}
                    setting={"Rochester Institute of Technology Center for Cybersecurity"}
                    timeframe={"February 2021 - October 2022"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                    
                    </ExperienceCard>
                </Grid>
                <Grid item>
                    <ExperienceCard
                    title={"Bachelor's of Science"}
                    setting={"Rochester Institute of Technology"}
                    timeframe={"February 2021 - October 2022"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>
                    
                    </ExperienceCard>
                </Grid>
            </Grid>
        </>
    )
};
import desperation_winners from '../../images/desperation_winners.png';
import BlogTitle from "../../components/blog/BlogTitle"
import BlogContent from "../../components/blog/BlogContent"
import Paragraph from "../../components/blog/Paragraph"
import BannerImage from "../../components/blog/BannerImage";


export default function ExploringMinecraftDesperation(props){


    return(
        <BlogContent>
            <BannerImage src={desperation_winners}/>
            <BlogTitle>
                Exploring the Social Behavior of Gen Z: A Minecraft Experiment on Friendship and Winning
            </BlogTitle>
            <Paragraph>
                Recently, I conducted my second social experiment. This one aimed to investigate whether individuals would prioritize their own personal gain over 
                their friends' success in a competitive setting.
            </Paragraph>
            <Paragraph>
                The experiment was conducted using 100 Minecraft players to simulate real-life scenarios to force players to make decisions 
                that could affect their friends' chances of winning. 
                I loosely based the premise off of the famous Prisoner's Dilemma experiment; if you were the only one to act selfish in a group
                of sympathetic players, you would receive an advantage. If you were sympathetic in a group of jerks, you would be disadvantaged.
            </Paragraph>

            <Paragraph>
                Out of the 100 players, only six managed to emerge victorious at the end of the event. 
                After watching each player closely throughout the nine hours of the experiment's duration, I interviewed each of these players individually and as 
                a group. The results surprised me.
            </Paragraph>

            <Paragraph>
                Every player admitted that their victory was mostly a result of factors outside of their control.
                From the most ruthless to the most benevolent, their personal choices had little impact on the outcome of the game. It was all just a matter of luck.
                I had expected a different outcome, but instead, I was left 
                with a sense of happy confusion. The experiment taught me that even in a highly competitive setting, luck plays a vital role in determining the outcome 
                of events.
            </Paragraph>

            <Paragraph>
                My initial expectations for the experiment was that aggressive players would clean house. What a great surprise that it didn't even matter anyways. lol.
            </Paragraph>

            <Paragraph>
                If you're interested in watching the breakdown of the experiment, I will post it here, once I upload it officially to YouTube. 
            </Paragraph>
        </BlogContent>
    )

}
import BlogContent from "../../components/blog/BlogContent"
import BlogTitle from "../../components/blog/BlogTitle"
import Paragraph from "../../components/blog/Paragraph"
import BannerImage from "../../components/blog/BannerImage";
import openai from '../../images/youtube.jpg';
import partnerReqs from '../../images/youtube-partner-requirements.png';

export default function YoutubePartner(props){
    return(
        <BlogContent>
        <BannerImage src={openai}/>
        <BlogTitle>
            YouTube Partner in a Day
        </BlogTitle>

        <Paragraph>
            Recently, my channel was able to achieve 400,000 views on its first YouTube video. From this, I achieved
            YouTube Partner in less than 24 hours after applying.
        </Paragraph>
        <img src={partnerReqs} style={{width: 'inherit', borderRadius: 2, marginBottom: 40, marginTop: 20}}/>
        <Paragraph>
            I was frankly shocked at how quickly my channel was accepted, considering I know that the average
            span for an acceptance is usually 3 to 12 months.
        </Paragraph>

        <Paragraph>
            I also spent less than $15 on online marketing. And to be clear, the promotion didn't even really help.
        </Paragraph>

        <Paragraph>
            I believe I was accepted because I rode a popular trend. At the time of upload, the genre of my video was growing
            quickly. YouTube's algorithms must have prefered my kind of video during that period, because after I uploaded,
            I took my hands off of the keyboard and just let it exist.
        </Paragraph>

        <Paragraph>
            My key learning from this is that trend-chasing doesn't have to be a waste of time. I used to look down on it as
            lazy path to success that doesn't add anything new. But now, because of the great success of my first video,
            I can go and do more videos, with a greater audience.
        </Paragraph>
    </BlogContent>
    )
}
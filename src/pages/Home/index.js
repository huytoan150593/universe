import { MainButton } from "../../components/Button";
import { Heading, SubHeading } from "../../components/Title";
import BodyText from "../../components/BodyText/BodyText";

function Home() {
    return ( 
        <section id="home">
            <div  className="wrapper home">
                <div className="home-content">
                    <SubHeading>
                        <span style={{color: "#D0D6F9"}}>So, You want to travel to</span>
                    </SubHeading>
                    <Heading type="space">SPACE</Heading>
                    <BodyText type="space-text">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </BodyText>
                </div>
                <MainButton/>
            </div>
        </section>
     );
}

export default Home;

import { Heading, SubHeading } from "../../components/Title";
import BodyText from "../../components/BodyText/BodyText";
import Data from "../../constants/data.json";

function Destination() {
    const data = Data.destinations;
    return ( 
        <section id="destination">
            <div className="wrapper destination">
                <div className="item-a destination-subheading">
                    <span>01</span>
                    <SubHeading>pick your destination</SubHeading>
                </div>
                <div className="item-b destination-menu">
                    <ul>
                        <li>MOON</li>
                        <li>MARS</li>
                        <li>EUROPA</li>
                        <li>TITAN</li>
                    </ul>
                </div>
                <div className="item-c destination-img">
                    {/* <img src="/assets/destination/image-moon.png" alt="moon"/> */}
                    <img src={data[0].images.png} alt={ data[0].name } />
                </div>
                <div className="item-d destination-content">
                    <Heading type="planet">{data[0].name}</Heading>
                    <BodyText type="planet-text">{data[0].description}</BodyText>
                </div>
                <div className="item-e destination-detail">
                    <h5>AVG. DISTANCE</h5>
                    <h3>{ data[0].distance}</h3>
                </div>
                <div className="item-f destination-detail">
                    <h5>EST. TRAVEL TIME</h5>
                    <h3>{ data[0].travel }</h3>
                </div>
            </div>
        </section>
     );
}

export default Destination;
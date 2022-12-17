import React, { useState } from "react";
import { Heading, SubHeading } from "../../components/Title";
import BodyText from "../../components/BodyText/BodyText";
import Data from "../../constants/data.json";
import { motion as m } from "framer-motion";

function Destination() {
    const data = Data.destinations;
    const [planet, setPlanet] = useState(data[0]);
    const goToPlanet = (e) => {
        const currentPlanet = e.target.closest("li");
        const previousPlanet = document.querySelector("li.active");
        if(previousPlanet) previousPlanet.classList.remove("active");
        currentPlanet.classList.add("active");
        for (let i = 0; i < data.length; i++){
            if (currentPlanet.innerText === data[i].name.toUpperCase()) {
                setPlanet(data[i]);
            }
        }
    }
    return ( 
        <section id="destination">
            <div className="wrapper destination">
                <div className="item-a destination-subheading">
                    <span>01</span>
                    <SubHeading>pick your destination</SubHeading>
                </div>
                <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, ease: "linear"}} className="item-c destination-img">
                    <img src={planet.images.png} alt={ planet.name } />
                </m.div>
                <div className="item-b destination-menu">
                    <ul>
                        <li onClick={(e) => goToPlanet(e)}>MOON</li>
                        <li onClick={(e) => goToPlanet(e)}>MARS</li>
                        <li onClick={(e) => goToPlanet(e)}>EUROPA</li>
                        <li onClick={(e) => goToPlanet(e)}>TITAN</li>
                    </ul>
                </div>
                <div className="item-d destination-content">
                    <Heading type="planet">{planet.name}</Heading>
                    <BodyText type="planet-text">{planet.description}</BodyText>
                </div>
                <div className="item-e destination-detail">
                    <div>
                        <h5>AVG. DISTANCE</h5>
                        <h3>{ planet.distance}</h3>
                    </div>
                    <div>
                        <h5>EST. TRAVEL TIME</h5>
                        <h3>{planet.travel}</h3>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Destination;
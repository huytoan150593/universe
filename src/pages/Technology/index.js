import React from "react";
import { useState } from "react";
import "./Technology.scss"; 
import { Heading, SubHeading } from "../../components/Title";
import Data from "../../constants/data.json";
import BodyText from "../../components/BodyText/BodyText";

function Technology() {
    const data = Data.technology;
    const length = [];
    const [tech, setTech] = useState(data[0])
    const goToTech = (e) => {
        const currentMember = e.target;
        const index = Number(currentMember.dataset.idx);
        const prevMember = document.querySelector("span.tech-selected");
        if (prevMember) {
            prevMember.classList.remove("tech-selected");
        }
        currentMember.classList.add("tech-selected");
        setTech(data[index]);
    }
    for (let i = 0; i < data.length; i++){
        length.push(<span onClick={goToTech} key={i} data-idx={i}>{i+1}</span>);
    }
    return ( 
        <section id="technology">
            <div className="tech">
                <div className="tech-a tech-subheading">
                    <span>03</span>
                    <SubHeading>Space Launch 101</SubHeading>
                </div>
                <div className="tech-detail">
                    <div className="tech-menu">
                        {length}
                    </div>
                    <div className="tech-content">
                        <div className="tech-content-title">
                            The terminology...
                        </div>
                        <Heading type="member">{tech.name}</Heading>
                        <BodyText type="other-text">{ tech.description }</BodyText>
                    </div>
                    <div className="tech-image">
                        <img src={tech.images.portrait} className="tech-image-desktop" alt="tech" />
                        <img src={tech.images.landscape} className="tech-image-tablet" alt="tech-small-img" />
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Technology;

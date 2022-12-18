import React from "react";
import { useState } from "react";
import { Heading, SubHeading } from "../../components/Title";
import BodyText from "../../components/BodyText/BodyText";
import Data from "../../constants/data.json";
// import { motion as m } from "framer-motion";
import "./crew.scss";

function Crew() {
    const data = Data.crew;
    const length = [];
    const [member, setMember] = useState(data[0]);

    const goToMember = (e) => {
        const currentMember = e.target;
        const index = Number(currentMember.dataset.idx);
        const prevMember = document.querySelector("span.selected");
        if (prevMember) {
            prevMember.classList.remove("selected");
        }
        currentMember.classList.add("selected");
        setMember(data[index]);
    }

    for(let i=0; i<data.length; i++){
        length.push(<span onClick={goToMember} data-idx={i} key={i}></span>)
    }

    return (
        <section id="crew">
            <div className="wrapper crew">
                <div className="crew-a crew-subheading">
                    <span>02</span>
                    <SubHeading>Meet your crew</SubHeading>
                </div>
                <div className="crew-b crew-content">
                    <div className="crew-content-role">{member.role}</div>
                    <Heading type="member">{member.name}</Heading>
                    <BodyText type="other-text">{member.bio}</BodyText>
                </div>
                <div className="crew-c crew-menu">
                    {length}
                </div>
                <div className="crew-d crew-image">
                    <img src={member.images.png} alt={member.name} />
                </div>
            </div>
        </section>
    );
}

export default Crew;

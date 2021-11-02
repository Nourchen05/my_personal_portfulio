import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
//import { SectionText } from "../../styles/GlobalComponents/index";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hi There, I'm <br />
        Nourchen Noamen
      </SectionTitle>
      <SectionText>
        I am a computer science student with knowledge in developing web
        applications with MERN stack technology. I am also passionate about
        Cloud Computing and DevOps field.{" "}
      </SectionText>

      <Button onClick={() => (window.location = "https://google.com")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

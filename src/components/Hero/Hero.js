import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
//import { SectionText } from "../../styles/GlobalComponents/index";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionDivider />
      <SectionTitle main center>
        Hi There, I'm <br />
        Nourchen Noamen
      </SectionTitle>
      <SectionText>
        I am a computer science student with knowledge in developing web
        applications with MERN stack technology. I am also passionate about
        Cloud Computing and DevOps field.{" "}
      </SectionText>

      <Button
        target="_blank"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1jv8xf9uLwRBb_czRH8WGi9IBh1Iay6zv/view?usp=sharing"
          );
        }}
      >
        See my CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br />
      My Portfolio
    </SectionTitle>
    <SectionText>
    As a Computer Science Graduate, my purpose is to gain a deep understanding of the principles and techniques behind the design, development, and use of computer systems. I strive to learn how to apply this knowledge to solve real-world problems and create new technologies that improve people's lives.
    My goal is to become a proficient programmer, able to write efficient and maintainable code in a variety of programming languages. 
    </SectionText>
    <Button onClick={() => window.location = 'https://github.com/Adamprimus?tab=repositories'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;
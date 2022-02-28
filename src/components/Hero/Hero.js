import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, i'm <br />
        Kevin Fridman.
        <SectionText>
         A fullstack Developer seeking new challenges.
        </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.se'}>Contact me</Button>*/} 
      </SectionTitle>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';
import { DiBootstrap, DiCss3, DiFirebase, DiHtml5, DiHtml53DEffects, DiJavascript, DiJavascript1, DiMongodb, DiMysql, DiNodejs, DiNodejsSmall, DiReact, DiSass, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
   <List>
     <ListItem>
       <ListContainer>
         <ListTitle>Front-end</ListTitle>
         <ListParagraph>
           Experience with <br />
           Javascript, ReactJS, CSS, SCSS, Bootstrap. 
           <br />
           <DiJavascript1 size="2em"/>
           <DiHtml5 size="2em"/>
           <DiSass size="2em"/>
           <DiReact size='2em'/>
           <DiBootstrap size ='2em' />
           <DiCss3 size ='2em' />
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <SectionDivider />
     <ListItem>
       <ListContainer>
       <ListTitle>Backend</ListTitle>
         <ListParagraph>
           Experience with <br />
           Node.Js and Databases like mongoDB & MySQL. <br />
           <DiNodejsSmall size ='2em'/>
           <DiMongodb size ='2em'/>
           <DiMysql size ='2em'/>
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
  </Section>
);

export default Technologies;

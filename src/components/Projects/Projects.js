import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText> A selection of my work</SectionText>
    <GridContainer>
      {projects.map((project) => (
       <BlogCard key={project.id}>
         <Img src={project.image}></Img>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr></Hr>
          </TitleContent>
          <CardInfo>
            {project.description}
          </CardInfo>
          <div>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Visit</ExternalLinks>
            <ExternalLinks href={project.source}>Github/Code</ExternalLinks>
          </UtilityList>
       </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;

import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    
    <FooterWrapper id='contact' ><br />
      <SectionDivider /> <br />
      <SectionTitle> Get in touch</SectionTitle> 
      <LinkList>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:kevinfridman@gmail.com'>Kevinfridman@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Tel</LinkTitle>
          <LinkItem href='tel:0720446452'>0720446452</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            A fullstack developer
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/kefr1901">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/kevin-fridman-09408814a/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

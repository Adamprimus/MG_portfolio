import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20;', }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <il>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </il>
      <il>
        <Link href="#Tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </il>
      <il>
        <Link href="#About">
          <NavLink>About</NavLink>
        </Link>
      </il>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Adamprimus?tab=repositories">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/mame-gueye-bb3023b3">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/Adamprimus?tab=repositories">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

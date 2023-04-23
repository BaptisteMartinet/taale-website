import * as React from 'react';
import { styled } from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const StyledHeader = styled('header')({
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  height: '96px',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-evenly',
});

const Navigation = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  columnGap: '3rem',
});

const Link = styled(GatsbyLink)({
  fontWeight: 500,
  fontSize: '1.5rem',
  color: '#141414',
});

const Header = () => {
  return (
    <StyledHeader>
      <GatsbyLink to="/">
        <StaticImage
          src="../../images/logo-full.png"
          alt="Logo"
          placeholder="blurred"
          width={128}
          height={64}
        />
      </GatsbyLink>
      <nav>
        <Navigation>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
        </Navigation>
      </nav>
    </StyledHeader>
  );
};

export default Header;

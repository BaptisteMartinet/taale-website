import * as React from 'react';
import { styled } from '@mui/material';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const StyledHeader = styled('header')({
  width: '100%',
  height: '64px',
  display: 'flex',
  justifyContent: 'space-evenly'
});

const Navigation = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  columnGap: '1rem',
});

const Header = () => {
  return (
    <StyledHeader>
      <StaticImage
        src="../../images/logo-full.png"
        alt="Logo"
        placeholder="blurred"
        height={64}
      />
      <nav>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
        </Navigation>
      </nav>
    </StyledHeader>
  );
};

export default Header;

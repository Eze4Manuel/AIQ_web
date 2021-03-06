import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, { NavLink, NavLinks, NavToggle, DesktopNavLinks } from "../headers/light.js";
import img from '../../images/img12.jpg'
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  } 
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${img});
`;

// const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-15`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-white px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0  transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;


export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/#about">
        About
      </NavLink>
      {/* <NavLink href="/#features">
        Features
      </NavLink>
      <NavLink href="/#solution">
        Our Solutions
      </NavLink> */}
      <NavLink href="/#contact">
        Contact Us
      </NavLink>
    </NavLinks>,

  ];

  return (
    <Container>
      {/* <OpacityOverlay /> */}
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Intelligence applied for secured interactions </Notification>
            <Heading>
              <span></span>
              <br />
              <SlantedBackground>Building Solutions To Tomorrow's Challenges Today</SlantedBackground>
            </Heading>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};

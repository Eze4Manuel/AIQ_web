import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
   
  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "GEOAI",
      description: "Geospatial Artificial Intelligence (focus on Remote Sensing) AIQ uses remote sensing to gather information about human activity on earth acquired via the analysis of earth imagery and geospatial data that identifies, analyzes and usually shows physical features and spatially referenced activities."
    },
    {
      imageSrc: SupportIconImage,
      title: "GIDAD",
      description: "Geospatial Intelligence and Data Analysis Database (focus on Geospatial Analysis and Workspaces for teams)"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "DATA-CAMP",
      description: "Data Collection, Analysis and Mapping Platform Data Dashboards and Collection Interfaces"
    },
    {
      imageSrc: ReliableIconImage,
      title: "Data Portal",
      description: "Geospatial Artificial Intelligence (focus on Remote Sensing)"
    },
    {
      imageSrc: SimpleIconImage,
      title: "SKY-MAKE",
      description: "Machine Learning And Knowledge Extraction"
    },
    {
      imageSrc: SimpleIconImage,
      title: "HRSI",
      description: "High resolution satellite imagery that can be used to improve decision making in all aspects of living ranging from Defence, environment and climate, agriculture, infrastructure engineering and government."
    }
  ];

  return (
    <Container id="solution">
      <ThreeColumnContainer>
        <Heading>Our <span tw="text-primary-500">Solutions</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};

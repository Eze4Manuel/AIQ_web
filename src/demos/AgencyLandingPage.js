import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import Hero from "components/hero/BackgroundAsImage.js";
import { Container, ContentWithPaddingLg } from "components/misc/Layouts";

import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import Features2 from "components/features/DashedBorderSixFeatures";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import MainFeature3 from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";


const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;

export default () => (
  <>
    <Hero />
    <Container>
      <ContentWithPaddingLg>
        <MainFeature />
        <Features
          subheading={<Subheading>Features</Subheading>}
          heading={null}
          
        />
        <SvgDotPattern1 />
        <Features2 />
        <SvgDotPattern2 />
      </ContentWithPaddingLg>
      <MainFeature3 />
      <ContentWithPaddingLg>
        <SvgDotPattern3 />
        <MainFeature2 />
        <SvgDotPattern4 />
        <FAQ
          imageSrc={customerSupportIllustrationSrc}
          imageContain={true}
          imageShadow={false}
          subheading="FAQs"
          heading={
            <>
              Do you have <span tw="text-primary-500">Questions?</span>
            </>
          }
        />
        <ContactUsForm />
      </ContentWithPaddingLg>
    </Container>
    <Footer />
  </>
);

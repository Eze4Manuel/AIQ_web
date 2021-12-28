import React from "react";
import tw from "twin.macro"; //eslint-disable-line

import Hero from "components/hero/Hero.js";
import { Container, ContentWithPaddingLg } from "components/misc/Layouts";
 
import Features from "components/features/Features.js";
import AboutFeature from "components/features/AboutFeature.js";
import Features2 from "components/features/Features2";
// import MainFeature2 from "components/features/MainFeature2.js";
import MainFeature3 from "components/features/MainFeature3.js";
import FAQ from "components/faqs/Faq.js";
import ContactUsForm from "components/forms/ContactUs.js";
import Footer from "components/footers/Footer.js";
import customerSupportIllustrationSrc from "../images/img14.jpg";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";


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
        <AboutFeature />
        <Features
          subheading={<Subheading></Subheading>}
          heading={null}
        />
        <Features2 />
      </ContentWithPaddingLg>
        <SvgDotPattern3 />
        <MainFeature3 />
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
    </Container>
    <Footer />
  </>
);

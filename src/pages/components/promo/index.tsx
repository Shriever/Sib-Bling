import React, { useState } from "react";
import { useScrollTrigger } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, MicNone } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";


import { ICarouselData } from "./types";
import { PromoBar, FlexBox, CarouselTitle } from "./styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carouselData: ICarouselData[] = [
  {
    title: "FREE SHIPPING ON U.S. ORDERS OVER $100 & FREE RETURNS",
    links: [
      { title: "MEN", url: "#" },
      { title: "WOMEN", url: "#" },
    ],
  },
  {
    title: "SAVE 30% OR MORE ON UNDERWEAR & SOCKS",
    links: [{ title: "MEN", url: "#" }],
  },
];

const Promo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps: number = carouselData.length;

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const getLinks = () => {
    return carouselData[0].links.map((el, idx) => {
      return (
        <a key={idx} href={el.url} style={{ color: "#fff", padding: "0 5px" }}>
          {el.title}
        </a>
      );
    });
  };

  return (
    <div style={{height: "40px"}}>
      {/* <ArrowBackIos /> */}

        {/* {carouselData.map((el, idx) => {
              return (
                  <FlexBox key={idx} style={{ justifyContent: "space-between" }}>
                  <FlexBox>
                  <CarouselTitle>{el.title}</CarouselTitle>
                  </FlexBox>
                  <FlexBox>{getLinks()}</FlexBox>
                  </FlexBox>
                  );
                })}
            */}
      {/* <ArrowForwardIos /> */}
    </div>
  );
};

export default Promo;

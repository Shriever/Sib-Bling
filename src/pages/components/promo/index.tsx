import React from "react";
import { Slide } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

import { ICarouselData } from "./types";
import { PromoBar, CarouselBar, FlexBox, CarouselTitle } from "./styles";

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
  const maxSteps = carouselData.length;

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
        <a key={idx} href={el.url} style={{ color: "#fff" }}>
          {el.title}
        </a>
      );
    });
  };

  return (
    <Slide appear={false} direction='down' in={true}>
      <PromoBar>
        <CarouselBar>
          <AutoPlaySwipeableViews
            axis='x'
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseMovements
          >
            {carouselData.map(el => {
              return (
                <div>
                  <FlexBox>
                    <ArrowBackIos />
                    <CarouselTitle>{el.title}</CarouselTitle>
                  </FlexBox>
                  <FlexBox>
                    {getLinks()}
                    <ArrowForwardIos />
                  </FlexBox>
                </div>
              );
            })}
          </AutoPlaySwipeableViews>
        </CarouselBar>
      </PromoBar>
    </Slide>
  );
};

export default Promo;

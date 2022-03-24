import React from "react";
import Splash from "./Splash";
import Swiper from "react-native-swiper/src";

import ButtonBox from "../../../components/common/ButtonBox";

import { SIGN_IN_SCREEN } from "../../ScreenName";
import splash1 from "../../../../assets/icons/calories.png";
import splash2 from "../../../../assets/icons/diet_plan.png";

const splashText1 =
  "You can find the nutritions of food or drink by name   ";
const splashText2 =
  "you can create your favor recipe and analysis nutrition of recipe  ";

const title1 = "Nutrition Search";
const title2 = "Analysis exercise or recipe";
export default function SplashScreen({ navigation }) {
  const NavigateLogin = (
    <ButtonBox
      title={"Here we go  "}
      onPress={() => {
        navigation.navigate(SIGN_IN_SCREEN);
      }}
    />
  );

  return (
    <Swiper loop={false} autoplay={false} showsButtons={false}>
      <Splash
        content={splashText1}
        header={title1}
        image={{
          image: splash1,
          dimension: {
            width: 230,
            height: 230,
          },
        }}
      ></Splash>
      <Splash
        content={splashText2}
        header={title2}
        button={NavigateLogin}
        image={{
          image: splash2,
          dimension: {
            width: 410,
            height: 261,
          },
        }}
      ></Splash>
    </Swiper>
  );
}

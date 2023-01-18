import { useEffect } from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { ListOfTreatments } from "../ListOfTreatments/ListOfTreatments";
import { MainPage } from "../MainPage/MainPage";
import { Map } from "../Map/Map";
import { HeroContent } from "../HeroContent/HeroContent";

export function Content() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <HeroContent />
      <AboutMe />
      <ListOfTreatments />
      <MainPage />
      <Map />
    </>
  );
}

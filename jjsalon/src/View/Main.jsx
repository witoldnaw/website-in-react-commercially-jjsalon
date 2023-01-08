import { useEffect } from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { FAQ } from "../FAQ/FAQ";
import { MainPage } from "../MainPage/MainPage";
import { Map } from "../Map/Map";
import { HeroContent } from "../HeroContent/HeroContent"


export function Content() {
    function scrollToTop() {
        window.scrollTo(0, 0);
      }
      
        useEffect(() => {
          scrollToTop();
        }, []);
    return (
    <>
    <HeroContent/>
    <AboutMe/>
    <FAQ/>
    <MainPage/>
    <Map/>
    </>
    )
}
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { MainHero } from "@/components/Heroes/MainHero";
import { Companies } from "@/components/Sections/Companies";
import { Skills } from "@/components/Sections/Skills";
import { Works } from "@/components/Sections/Works";
import { Testimonials } from "@/components/Sections/Testimonials";
import { ActiveLinkContext } from "@/contex/ActiveLink";
import { ActiveNavbarContext } from "@/contex/ActiveNavbar";

const Home = () => {
  const { activeLinkHandler } = useContext(ActiveLinkContext);
  const { activeNavbarHandler } = useContext(ActiveNavbarContext);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleScroll = useCallback(() => {
      if (
        skillsRef.current === null ||
        worksRef.current === null ||
        testimonialRef.current === null ||
        heroRef.current === null
      ) {
        return;
      }

      activeNavbarHandler(window.scrollY > heroRef.current.offsetHeight);

      if (
        window.scrollY > skillsRef.current.offsetTop - 100 &&
        window.scrollY < worksRef.current.offsetTop - 100
      ) {
        activeLinkHandler("#skills");
      } else if (
        window.scrollY > worksRef.current.offsetTop - 100 &&
        window.scrollY < testimonialRef.current.offsetTop - 100
      ) {
        activeLinkHandler("#projects");
      } else if (
        window.scrollY > testimonialRef.current.offsetTop - 100 &&
        window.scrollY <
        testimonialRef.current.offsetTop + testimonialRef.current.offsetHeight
      ) {
        activeLinkHandler("#testimonials");
      } else if (
        window.scrollY >
        testimonialRef.current.offsetTop + testimonialRef.current.offsetHeight
      ) {
        activeLinkHandler("#contact");
      } else {
        activeLinkHandler("");
      }
    }, [window.scrollY]);
  }

  return (
    <>
      <MainHero ref={heroRef} />
      <Companies />
      <Skills ref={skillsRef} />
      <Works ref={worksRef} />
      <Testimonials ref={testimonialRef} />
    </>
  );
};

export default Home;

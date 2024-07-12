import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    window.innerWidth < 760 ? setVideoSrc(smallHeroVideo) : setVideoSrc(heroVideo);
  }

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    }
  }, [])

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: videoSrc === smallHeroVideo ? -40 : -80,
      delay: videoSrc === smallHeroVideo ? 2.5 : 1,
    });
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn text-black font-mono font-semibold">Buy</a>
        <p className="font-normal text-xl font-mono">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
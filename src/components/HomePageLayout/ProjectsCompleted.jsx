import powerful from "./Icons/powerful.svg";
import team from "./Icons/team.svg";
import Productdeliverd from "./Icons/Productdeliverd.svg";
import onGoingProj from "./Icons/onGoingProj.svg";
import "./css/ProjectsCompleted.css";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const data = [
    {
      icon: powerful,
      title: "10",
      symbol: {
        classStr: "material-symbols-outlined text-4xl",
        tagName: "add",
      },
      des: "Years of Experience",
      isVisible: true,
    },
    {
      icon: team,
      title: "25",
      symbol: {
        classStr: "material-symbols-outlined text-4xl",
        tagName: "add",
      },
      des: "Staff Memebers",
      isVisible: true,
    },
    {
      icon: Productdeliverd,
      title: "100",
      symbol: {
        classStr: "material-symbols-outlined text-4xl",
        tagName: "add",
      },
      des: "Delivered Products",
      isVisible: true,
    },
    {
      icon: onGoingProj,
      title: "18",
      symbol: {
        classStr: "material-symbols-outlined text-4xl",
        tagName: "add",
      },
      des: "Current Projects",
      isVisible: false,
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);
  const observer = useRef(null);

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Unobserve the element after it's visible, if you want the count-up to trigger only once
        observer.current.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.2, // Adjust the threshold as needed (0.2 means 20% of the element is visible)
    });

    // Start observing the count-up element when the component mounts
    observer.current.observe(countUpRef.current);

    // Cleanup the observer when the component unmounts
    return () => {
      observer.current.disconnect();
    };
  }, []);
  return (
    <>
      <main className="border-t border-stone-300 flex justify-center items-center">
        <section className="lg:my-8 px-12 md:p-10 md:gap-10 md:flex-wrap flex md:flex-row lg:flex-row lg:justify-around w-full lg:gap-0 sm:my-10 sm:flex-row sm:flex-wrap sm:gap-10 sm:justify-center sm:items-center">
          {data.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <img src={item.icon} alt="Not found" />
                </div>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center justify-start">
                    <div className="text-5xl font-Signika">
                      {isVisible ? (
                        <CountUp end={item.title} duration={5} />
                      ) : (
                        <span ref={countUpRef}>{item.title}</span>
                      )}
                    </div>
                    <span className={item.symbol.classStr}>
                      {item.symbol.tagName}
                    </span>
                  </div>
                  <p className="p-0 m-0 font-sans font-normal">{item.des}</p>
                </div>
              </div>
              <div
                className={`lg:border-r-stone-300 lg:border-r-2 sm:border-b-stone-300 sm:border-b-2  ${
                  item.isVisible ? "block" : "hidden"
                }`}
              ></div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

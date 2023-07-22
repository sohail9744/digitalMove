import product from "./Icons/buildingWebsite.svg";
import powerful from "./Icons/powerful.svg";
import team from "./Icons/team.svg";
import Productdeliverd from "./Icons/Productdeliverd.svg";
import onGoingProj from "./Icons/onGoingProj.svg";
import "./ProjectsCompleted.css";

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
      classStr: "material-symbols-rounded",
      tagName: "add",
    },
    des: "Staff Memebers",
    isVisible: true,
  },
  {
    icon: Productdeliverd,
    title: "100",
    symbol: {
      classStr: "material-symbols-rounded",
      tagName: "add",
    },
    des: "Delivered Products",
    isVisible: true,
  },
  {
    icon: onGoingProj,
    title: "18",
    symbol: {
      classStr: "material-symbols-rounded",
      tagName: "add",
    },
    des: "Current Projects",
    isVisible: false,
  },
];
export default function Projects() {
  return (
    <>
      <main className="border-t border-stone-300 flex justify-center items-center">
        <section className="my-24 px-12 flex justify-around w-full">
          {data.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <img src={item.icon} alt="Not found" />
                </div>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center justify-start">
                    <h2 className="text-5xl font-Signika">{item.title}</h2>
                    <span className={item.symbol.classStr}>
                      {item.symbol.tagName}
                    </span>
                  </div>
                  <p className="p-0 m-0 font-sans font-normal">{item.des}</p>
                </div>
              </div>
              <div
                className={`border-r-stone-300 border-r-2 ${
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

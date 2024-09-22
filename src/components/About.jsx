import { HoverEffect } from "./ui/card-hover-effect";
import React from "react";
import { Timeline } from "./ui/timeline";
import Image from "next/image";
export default function About({ id }) {
    const data = [
        {
          title: "Aug 2024 (present)",
          content: (
            <div>
              <h1
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
                Frontend developer intern, Techsnap
              </h1>
              <p
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Building a chat application for the organisation. Ensuring responsiveness across all the devices
              </p>
              <p
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Made the chat application to a PWA and integrated frontend with backend
              </p>
              <div className="">
                <Image
                  src="https://assets.aceternity.com/templates/startup-4.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
              </div>
            </div>
          ),
        },
        {
          title: "Jun 2024 - Aug 2024",
          content: (
            <div>
              <h1
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
                Frontend developer intern, hrlabs
              </h1>
              <p
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Worked on company website ensuring responsiveness across multiple devices.
              </p>
              <p
                className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Styled whole website using bootstrap and traditional css.
              </p>
              <div className="">
                <Image
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
              </div>
            </div>
          ),
        },
      ];
  return (
    <section
      id={id}
      className=" min-h-screen flex flex-col items-center justify-center w-scren overflow-hidden"
    >
      <div className="h-full w-full flex-col py-32  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center z-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold mt-8">Skills</h3>
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={projects} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <h3 className="text-4xl font-bold my-8">Experience</h3>
        <div className="w-full">
      <Timeline data={data} />
    </div>
        </div>
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Java",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3S9FqOWEjqGZPQ98L55jzxu9OXbJqwXx_Gw&s",
    rating: 95,
    link: "https://microsoft.com",
  },
  {
    title: "React",
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    rating: 90,
    link: "https://stripe.com",
  },
  {
    title: "TailwindCSS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGVV8fOc_D2_vxf1_MrxRuPeF3Y1EFAJrxg&s",
    rating: 85,
    link: "https://netflix.com",
  },
  {
    title: "Javascript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    rating: 88,
    link: "https://google.com",
  },
  {
    title: "NodeJs",
    image: "https://www.lemosys.com/blog/wp-content/uploads/2022/05/nodejs.jpg",
    rating: 80,
    link: "https://meta.com",
  },
  {
    title: "MongoDB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREa-NBP1vYL0TGVgvcW04pWfiKpY-WcawFcw&s",
    rating: 75,
    link: "https://amazon.com",
  },
];



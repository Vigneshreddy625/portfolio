import React from "react";
import weatherImg from "../assets/weatherapp.jpg";
import expenseImg from "../assets/expensetrack.jpg";
import jobsImg from "../assets/jobsguru.png";
import slackImg from "../assets/slack.png";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
export default function Projects({ id }) {
  const tabs = [
    {
      title: "Slack clone",
      value: "Slack clone",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Slack Clone</p>
          <p className="mt-2">
            Link:{" "}
            <span>
              <a href="https://slack-gilt.vercel.app/">Slack</a>
            </span>
          </p>
          <Image
            src={slackImg}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-fill object-left-top h-[70%]  md:h-[70%] absolute bottom-0 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "JobsGuru",
      value: "JobsGuru",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>JobsGuru</p>
          <p className="mt-2">
            Link:{" "}
            <span>
              <a href="https://jobsguru.vercel.app/">JobsGuru</a>
            </span>
          </p>
          <Image
            src={jobsImg}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-fill object-left-top h-[70%]  md:h-[70%] absolute bottom-0 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "WeatherApp",
      value: "WeatherApp",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Weather App</p>
          <p className="mt-2">
            Link:{" "}
            <span>
              <a href="https://weather-app-ten-omega-17.vercel.app/">
                Weather App
              </a>
            </span>
          </p>
          <Image
            src={weatherImg}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-fill object-left-top h-[70%]  md:h-[70%] absolute bottom-0 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Expense Tracker",
      value: "ExpenseTracker",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Expense Tracker</p>
          <p className="mt-2">
            Link:{" "}
            <span>
              <a href="https://expensetracker-mocha.vercel.app/">
                Expense Tracker
              </a>
            </span>
          </p>
          <Image
            src={expenseImg}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-fill object-left-top h-[70%]  md:h-[70%] absolute bottom-0 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];
  const content = [
    {
      title: "Slack Clone",
      description:
        " Developed slack like messaging platform allowing users to communicate in real-time via direct messages and group channels. Implemented features such as direct messages, message threads, and notifications, ensuring a smooth and engaging user experience. Transformed the application into a Progressive Web App (PWA), optimizing it for offline usage, mobile responsive, and seamless performance across devices",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={slackImg}
            width={300}
            height={300}
            className="h-full w-full object-fill"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Jobsguru",
      description:
        "Developed a dynamic job listing website, enabling users to browse, search, and apply for jobs across various industries and locations. Implemented an authenticated admin portal, enabling administrators to securely add, edit, and manage new job postings. Optimized the platform for mobile and desktop devices, ensuring a responsive and user-friendly experience for job seekers on all screens",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={jobsImg}
            width={300}
            height={300}
            className="h-full w-full object-fill"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Weather App",
      description:
        "Developed a user-friendly weather application using React, leveraging modern frontend techniques to create a dynamic and responsive interface. Implemented features such as real-time temperature display, city search functionality, and intuitive user interaction and the background image change according to temperature. Integrated OpenWeather API to fetch current weather data for cities worldwide, demonstrating proficiency in API usage and data handling",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={weatherImg}
            width={300}
            height={300}
            className="h-full w-full object-fill"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center pt-32"
    >
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="hidden lg:block p-10">
        <StickyScroll content={content} />
      </div>
      <div className="lg:hidden h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-sm md:max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

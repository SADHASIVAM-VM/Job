import React from "react";
import bg1 from "../assets/images/bg1.jpg";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg home">
      <div className="mx-5 md:mx-10 my-5">
        <div className="container flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 order-2 ">
            <h1 className="text-2xl  md:text-4xl xl:text-6xl font-bold textbg">
              Find & Apply For <br />
              Your Dream Job in Japan
            </h1>
            <p className="my-5 text-sm md:text-lg font-medium">
              Japan offers diverse job opportunities ranging from traditional
              sectors like manufacturing and finance to emerging fields like
              technology and renewable energy. With a strong emphasis on
              innovation and efficiency, Japan's workforce thrives in a dynamic
              environment. Multinational corporations and local businesses
              provide avenues for career growth and cultural immersion in this
              vibrant nation.
            </p>
          </div>
          <div className="md:w-1/2 md:order-2 flex justify-center mb-10 ">
            <motion.img
              src={bg1}
              alt=""
              className="w-[500px] md:w-[600px] ani_blink"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

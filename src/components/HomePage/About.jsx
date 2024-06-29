import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-yellow-200 text-slate-800 mt-10 rounded-xl">
      <div className="hero-content flex-col lg:flex-row mx-auto p-4">
        <div className="lg:w-1/2 relative mx-auto">
          <Image
            width={1000}
            height={1000}
            alt="Person image"
            src={'/assets/images/about_us/person.jpg'}
            className="w-3/4 rounded-lg shadow-2xl border-4 border-white mx-auto"
          />
          <Image
            width={1000}
            height={1000}
            alt="Part image"
            src={'/assets/images/about_us/parts.jpg'}
            className="w-1/2 absolute right-5 top-1/2 transform -translate-y-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-8 bg-white bg-opacity-90 rounded-lg backdrop-blur-md shadow-lg mx-auto">
          <h3 className="text-4xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
            We are qualified & experienced in this field
          </h1>
          <p className="py-6 text-lg text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
          </p>
          <p className="py-6 text-lg text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
          </p>
          <button className="btn border-0 btn-primary bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

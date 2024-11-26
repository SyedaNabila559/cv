
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Resume Header */}
      <h4 className="bg-yellow-200 font-bold text-center p-4">My Resume:</h4>
      
      {/* Navigation Menu */}
      <ul className="flex justify-center bg-blue-300 p-4 flex-wrap space-x-4 sm:space-x-0 sm:flex-col sm:items-center">
        <Link href="/">
          <li className="inline-block m-3 text-center text-white">Home</li>
        </Link>
        <Link href="/information">
          <li className="inline-block m-3 text-center text-white">Information</li>
        </Link>
        <Link href="/education">
          <li className="inline-block m-3 text-center text-white">Education</li>
        </Link>
        <Link href="/skills">
          <li className="inline-block m-3 text-center text-white">Skills</li>
        </Link>
        <Link href="/experience">
          <li className="inline-block m-3 text-center text-white">Experience</li>
        </Link>
      </ul>

      {/* Main Title */}
      <h3 className="text-center font-bold text-red-600 p-4 bg-violet-300">HOME PAGE</h3>
      
      <h1 className="pt-20 text-center font-bold text-blue-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        ---WELCOME TO MY SIMPLE RESUME---
      </h1>
      
      <br />

      {/* Objective Section */}
      <div className="bg-yellow-200 p-5 rounded-lg shadow-md mx-4 sm:mx-6 lg:mx-10">
        <h2 className="text-center font-bold text-purple-900 text-2xl sm:text-3xl">Objective:</h2>
        <br />
        <p className="text-center text-purple-900 text-base sm:text-lg lg:text-xl">
          To utilize my skills in web development and project creation by building a comprehensive portfolio website,
          developing hackathon milestone projects, and creating innovative tools such as static interactive resumes,
          dynamic and editable resume builders, shareable resume platforms, and a simple calculator. I aim to deliver
          functional and user-friendly solutions that enhance user experience and showcase my technical abilities.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";

export default function Experience() {
  return (
    <div>
      <h4 className="bg-pink-500 font-bold text-center py-2">My Resume:</h4>

      {/* Navigation Menu */}
      <ul className="flex justify-center bg-blue-300 flex-wrap p-4">
        <Link href="/">
          <li className="inline-block m-3 text-center">Home</li>
        </Link>
        <Link href="/information">
          <li className="inline-block m-3 text-center">Information</li>
        </Link>
        <Link href="/education">
          <li className="inline-block m-3 text-center">Education</li>
        </Link>
        <Link href="/skills">
          <li className="inline-block m-3 text-center">Skills</li>
        </Link>
        <Link href="/experience">
          <li className="inline-block m-3 text-center">Experience</li>
        </Link>
      </ul>

      {/* Work Experience Section */}
      <h3 className="text-center font-bold text-red-600 p-4 bg-red-300">WORK EXPERIENCE:</h3>
      <div className="text-center border-4 border-solid border-black m-6 p-6 w-full sm:w-[300px] mx-auto leading-relaxed bg-pink-200 rounded-md">
        <h3>Fresh</h3>
        <h3>Currently learning Next JS</h3>
      </div>
    </div>
  );
}

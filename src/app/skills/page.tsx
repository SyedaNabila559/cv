import React from "react";
import Link from "next/link";

export default function Skills() {
  return (
    <div>
      <h4 className="bg-amber-200 font-bold text-center py-2">My Resume:</h4>
      
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

      {/* Skills Section */}
      <h3 className="text-center font-bold text-red-600 p-4 bg-orange-300">SKILLS</h3>
      <div>
        <ul className="border-4 border-solid border-black m-6 p-1 w-full sm:w-[300px] mx-auto leading-relaxed rounded-md">
          <h1 className="text-center font-bold text-red-600 p-4 bg-orange-300">Skills:</h1>
          <li className="text-center font-bold bg-lime-300 p-2">HTML</li>
          <li className="text-center font-bold bg-lime-300 p-2">CSS</li>
          <li className="text-center font-bold bg-lime-300 p-2">JavaScript</li>
          <li className="text-center font-bold bg-lime-300 p-2">TypeScript</li>
          <li className="text-center font-bold bg-lime-300 p-2">Next Js</li>
        </ul>
        
        {/* Contact Information */}
        <div className="text-center">
          <h3 className="font-bold">Email:</h3>
          <a
            href="mailto:syedanabila33@gmail.com"
            className="text-center font-bold text-blue-600"
          >
            syedanabila33@gmail.com
          </a>
          <h3 className="font-bold mt-4">LinkedIn Profile:</h3>
          <a
            href="https://www.linkedin.com/in/nabila-bannay-khan-a38b57313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center font-bold text-blue-600"
          >
            https://www.linkedin.com/in/nabila-bannay-khan-a38b57313
          </a>
          <br />
          <h3 className="font-bold mt-4">GitHub Profile:</h3>
          <a
            href="https://github.com/SyedaNabila559"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center font-bold text-blue-600"
          >
            https://github.com/SyedaNabila559
          </a>
        </div>
      </div>
    </div>
  );
}

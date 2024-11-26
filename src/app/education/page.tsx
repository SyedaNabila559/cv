import React from "react";
import Link from "next/link";

export default function Education() {
  return (
    <div>
      <h4 className="bg-slate-400 font-bold text-center py-2">My Resume:</h4>

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

      {/* Education Section */}
      <h3 className="text-center font-bold text-red-600 p-4 bg-gray-300">EDUCATION</h3>
      <div className="border-4 border-solid border-black m-6 p-6 w-full sm:w-[300px] mx-auto leading-relaxed bg-amber-200 rounded-md">
        <ul className="list-disc pl-5">
          <li>Matriculation "Science" from Karachi Board.</li>
          <li>FSC from Government Degree College.</li>
          <li>Currently learning Artificial Intelligence.</li>
        </ul>
      </div>
    </div>
  );
}
  

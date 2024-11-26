import React from "react";
import Link from "next/link";

export default function Information() {
  return (
    <div>
      <h4 className="bg-cyan-200 font-bold text-center py-2">My Resume:</h4>
      
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

      {/* Personal Information Section */}
      <h3 className="text-center font-bold text-red-600 p-4 bg-teal-200">PERSONAL INFORMATION:</h3>
      <div className="border-4 border-solid border-black m-6 p-6 w-full sm:w-[300px] mx-auto leading-relaxed bg-sky-200 rounded-md">
        <h3>Name: Nabila</h3>
        <h3>D/O : Bannay Khan</h3>
        <h3>Nationality : Pakistani</h3>
        <h3>Gender : Female</h3>
        <h3>Language : Urdu, English</h3>
        <h3>Residence : Karachi</h3>
      </div>
    </div>
  );
}


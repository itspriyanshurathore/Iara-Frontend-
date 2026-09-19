"use client";

import Image from "next/image";


export function SubmissionForm() {
    return(<>
    
    <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-[url(/images/bookBgSubmission.jpg)] bg-cover blur-xl w-full h-full absolute">

        </div>
      <div className="bg-white relative rounded-3xl shadow-lg max-w-4xl w-full overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full p-10 relative z-[2] bg-[#ffffffc9] backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Online Book Submission</h2>
          <p className="text-gray-600 mb-6">
            To submit the book please provide all the necessary details and materials.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Author's Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="tel"
              placeholder="Mobile Number (Whatsapp)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="file"
              placeholder="Please upload your files"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full absolute right-0 bottom-0  flex flex-col items-center justify-center text-center ">
          <Image
            // fill
            height={0}
            width={0}
            sizes="100vw"
            src="/images/bookSubmission.png" 
            alt="Contact"
            className="w-full h-full"
          />

        </div>
      </div>
    </div></>)
}
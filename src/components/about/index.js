"use client";

import React from "react";

const IaraPublication = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 max-[1000px]:text-xl">About IARA Publication</h1>
          <p className="mt-4 text-lg text-gray-600 text-justify leading-[170%] max-[1000px]:text-base  max-[500px]:text-sm">
            IARA Publication has been formed with the objective of encouraging Researchers to publish their Research Work.
            They can publish their Research work in various Reputed Journals in which IARA Publication will guide them throughout the Publication Process.
            We can assist them in writing the Research paper and also assist them in getting it published. They can also publish their Research work in the form of Chapter Contribution in Edited Book with ISBN.
            They can also convert their Thesis or their Research Project into a Book with ISBN. Publishing their Research work in a Book with ISBN adds lots of credibility which helps an Academician in their Career Growth.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16 mt-5">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2  max-[1000px]:text-xl">Services Provided By IARA Publication</h2>
          
          <div className="space-y-12">
            {/* Journal Publication */}
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4  max-[1000px]:text-lg">For Journal Publication</h3>
              <p className="text-gray-600 mb-4 ">
                Publication Support in
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Scopus</li>
                <li>Web of Science</li>
                <li>UGC CARE</li>
                <li>ABDC</li>
              </ul>
            </div>

            {/* Book Publication */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4  max-[1000px]:text-lg">For Book Publication</h3>
              <ul className="list-inside space-y-2 text-gray-700">
                <li>Applying for ISBN</li>
                <li>Assigning of ISBN</li>
                <li>Cover Page Designing</li>
                <li>Designing of Page Layout / Alignment</li>
                <li>Editing & Formatting of the Text Matter</li>
                <li>Editing & Formatting of Images</li>
                <li>Editing & Formatting of Tables</li>
                <li>Paperback and eBook creation</li>
                <li>10 Hard Copies of the Book</li>
                <li>A Certificate of Publication from IARA Publication</li>
                <li>Hosting of book in www.iaraPublication.com</li>
                <li>One dedicated page for Authors / Editors in www.iaraPublication.com</li>
                <li>Social Media Promotions on Whatsapp, Facebook & Instagram</li>
                <li>Reel of the released book for promotion on Whatsapp, Facebook & Instagram</li>
                <li>60% Royalty of the Profit on Books Sold</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IaraPublication;

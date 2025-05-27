import React from "react";

export default function AboutWeVadMedia() {
  return (
    <div className="text-white flex-grow flex items-center justify-center bg-brand-blue pt-40 pb-40 px-10 md:px-0">
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-20">About WeVad Media</h1>
        </div>

        {/* Right Side - Text */}
        <div className="text-lg leading-relaxed text-gray-300 py-0">
          <p>
            At WeVad Media, our aim is to transform your online presence into a powerful brand asset. We believe in the idea that every click, like, and share should contribute to your business success. We're your storytellers in the digital space, scripting success with every content.
          </p>
        </div>
      </div>
    </div>
  );
}
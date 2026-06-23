import React from "react";
import { ArrowUpRight } from "lucide-react";

const Content = ({ customerSegments }) => {
  return (
    <div className="flex h-170 mx-16">
      {/* Left Section */}
      <div className="w-80 ml-12 flex flex-col justify-between py-12">
        <div>
          <h1 className="text-3xl font-extrabold">
            Prospective customer segmentation
          </h1>

          <p className="mt-4 font-medium text-gray-800">
            Depending on customer satisfaction and access to banking products,
            potential target audience can be divided into three groups.
          </p>
        </div>

        <div className="w-14 h-14 flex items-center justify-center">
          <ArrowUpRight size={45} />
        </div>
      </div>


      <div className="ml-12 flex-1 flex gap-6 overflow-x-auto pb-4">
        {customerSegments.map((item) => (
          <div
            key={item.id}
            className="relative w-80 min-w-80 h-full rounded-[32px] overflow-hidden shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover brightness-50"
            />

            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm">
              {item.id}
            </div>

            <div className="absolute left-6 bottom-24 w-56 text-white font-normal">
              {item.description}
            </div>

            <button
              className={`absolute left-6 bottom-6 h-11 px-6 rounded-full ${item.buttonColor} ${item.buttonTextColor}`}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
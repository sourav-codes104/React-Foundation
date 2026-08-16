import React from "react";

function Card(props) {
  console.log(props.details);
  return (
    <>
      <div className="w-80 h-80 bg-blue-200 m-5 relative border rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 hover:scale-103 flex hover:shadow-2xl shadow-[#E4E0E1] flex-col items-center border-none hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:cursor-pointer">
        <div className="w-20 h-20 border rounded-full overflow-hidden border-none absolute mt-8 transition-transform duration-300 hover:rotate-y-12 hover:scale-103">
          <img 
            className="w-full h-full object-cover "
            src={props.details.img}
          ></img>
        </div>
        <div className="absolute mt-35 text-xl font-['Helvetica'] underline transition-transform duration-300 hover:text-white">
          {props.details.name}
        </div>
        <div className="absolute top-45 text-xm font-['Comic_Sans_MS'] text-center transition-transform duration-300 hover:text-white">
          {props.details.desc}
        </div>
      </div>
    </>
  );
}

export default Card;

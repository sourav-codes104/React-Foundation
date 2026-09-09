import React, { useState } from "react";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";

const Job = () => {
  const [searchParams,setSearchparams] = useSearchParams();
  const navigate = useNavigate();
  const searchValue = searchParams.get("search")
  const [search,setSearch] = useState("");
  
  return (
    <div>
      <div>Hello from job</div>
      <div className="flex justify-evenly">
        {/* <Link to="/jobs/1">
          <button className="h-10 w-15   bg-pink-500">Job1</button>
        </Link>
        <Link to="/jobs/2">
          <button className="h-10 w-15    bg-pink-500">Job2</button>
        </Link>
        <Link to="/jobs/3">
          <button className="h-10 w-15    bg-pink-500">Job3</button>
        </Link> */}

      
        
      </div>
      <Outlet/>
      <div className="flex justify-center items-center gap-5 h-15 w-100 bg-gray-400 my-7 mx-7">
        <label htmlFor="input">Search</label>
        <input type="text" id ="input" onChange={(e)=>{
          setSearch(e.target.value)
        }} className="h-10 bg-white rounded-lg px-4 py-3"></input>
        <button onClick={()=>{
          setSearchparams({search : search})
        }} className="bg-red-500 h-10 w-20 rounded-lg px-2 py-2 text-white">Search</button>
      </div>
      <div>
        Searching for : {searchValue}
      </div>
    </div>
  );
};

export default Job;

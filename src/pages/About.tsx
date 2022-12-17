import React from "react";



export function About (){
    return (
        <div>
             <div className="flex flex-col md: flex-rows items-center justify-center ">
      <h1 className=" pt-10 text-3xl">
        {" "}
        About Flaco Ramirez Boxing
      </h1>
      <p className="py-5 text-2xl">
        We are a non-profit looking to serve the community by providing a sanctuary that kids and adults can have a peace of mind away from everything else.{" "}
      </p>
      <p className="py-3 text-2xl">
        We have 3 values that we would like to instill into all of our members.{" "}
      </p>
      <ol className="text-2xl space-y-2">
        <li className="list-decimal">Discipline</li>
        <li className="list-decimal">Intergrity</li>
        <li className="list-decimal">Accountability</li>
      </ol>
        <p className="text-2xl pt-4">
          
        </p>
        
      </div>
        </div>
    )
}
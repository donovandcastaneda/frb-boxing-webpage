import React from "react";
import { BoxerCard } from "../components/BoxerCards";

export function Join() {
  return (
    <div className="flex flex-col md: flex-rows text-center justify-center mx-10 pb-96">
      <h1 className="text-xl md:text-3xl">
        {" "}
        Wanting to Join Flaco Ramirez Boxing?
      </h1>
      <div className="flex flex-col text-lg md:text-2xl flex-rows items-center justify-center ">
        <p className="py-5 ">
          Flaco Ramiez Boxing provides a community of supportive indivduals and
          coaches but with that comes requirement members must meet to join.{" "}
        </p>
        <ol className=" space-y-2">
          <li className="list-decimal">Must be 8 Years Old and Above</li>
          <li className="list-decimal">Must Listen to the Coaches</li>
          <li className="list-decimal">Must Be Responsible and Focused</li>
        </ol>
        <p className="pt-4">
          If you or your child are okay with the requirements, come to the Gym
          at{" "}
          <a
            href="https://goo.gl/maps/kxCzZfgsedbDUKJP6"
            className="hover:text-white"
          >
            {" "}
            3308 Strong Ave, Kansas City, KS 66106
          </a>
        </p>
        <p className="">Between 6-8pm, Monday-Thursday </p>
        
      </div>
    </div>
  );
}

import React from "react";
import { BoxerCard } from "../components/BoxerCards";

export function Join() {
  return (
    <div className="flex flex-col md: flex-rows items-center justify-center pb{50-px}">
      <h1 className=" pt-10 text-3xl">
        {" "}
        Wanting to Join Flaco Ramirez Boxing?
      </h1>
      <p className="py-5 text-2xl">
        Flaco Ramiez Boxing provides a community of supportive indivduals and
        coaches but with that comes requirement members must meet to join.{" "}
      </p>
      <ol className="text-2xl space-y-2">
        <li className="list-decimal">Must be 8 Years Old and Above</li>
        <li className="list-decimal">Must Listen to the Coaches</li>
        <li className="list-decimal">Must Be Responsible and Focused</li>
      </ol>
      <p className="text-2xl pt-4">
        If you or your child are okay with the requirements, come to the Gym at{" "}
        <a
          href="https://goo.gl/maps/kxCzZfgsedbDUKJP6"
          className="hover:text-white"
        >
          {" "}
          3308 Strong Ave, Kansas City, KS 66106
        </a>
      </p>
      <p className="text-2xl">Between 6-8pm, Monday-Thursday </p>
      <p className="text-2xl ">
        Meet with one of the Coaches and they will start you on your journey.
      </p>
  
    </div>
  );
}

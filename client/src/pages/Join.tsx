import React from "react";
import { BoxerCard } from "../components/BoxerCards";

export function Join() {
  return (
    <div className="flex flex-col md: flex-rows text-center justify-center mx-10 pb-[450px]">
       <h1 className="join-heading text-xl md:text-3xl">
        Interested in Joining Flaco Ramirez Boxing Club?
      </h1>
      <div className="flex flex-col text-lg md:text-2xl flex-rows items-center justify-center ">
      <p className="join-intro py-5 ">
          Flaco Ramirez Boxing offers a supportive community of individuals and experienced coaches. We have some requirements that all members must meet:
        </p>
        <ol className="join-requirements space-y-2">
          <li className="list-decimal">Minimum age requirement: 8 Years</li>
          <li className="list-decimal">Adherence to coach instructions</li>
          <li className="list-decimal">Demonstrate responsibility and focus</li>
        </ol>
        <p className="join-cost pt-7">
          Initial Cost + First Month: $100 <br />
          $60 per Month thereafter
        </p>
        <p className="join-address pt-4">
          If you and your child meet our requirements, visit our Gym at{" "}
          <a
            href="https://goo.gl/maps/kxCzZfgsedbDUKJP6"
            className="address-link hover:text-white"
          >
            3308 Strong Ave, Kansas City, KS 66106
          </a>
        </p>
        <p className="join-times">We're open for sign ups from 6-8pm, Monday-Thursday.</p>
        <br></br>
        <p className="join-contact">For further inquiries, please contact us via our Facebook page.</p>
        
      </div>
    </div>
  );
}

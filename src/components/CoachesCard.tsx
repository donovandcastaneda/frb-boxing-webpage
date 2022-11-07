import React from "react";

type Coach = {
  id: number;
  name: {
    first: string;
    last: string;
  };
  age: number;
  status: string;
}

export const Coach = (props: Coach) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.name.first} {props.name.last} </h2>
        <h3>age:{props.age}</h3>
        <h3>{props.status}</h3>
        <div className="card-actions">
        </div>
      </div>
    </div>
  );
};
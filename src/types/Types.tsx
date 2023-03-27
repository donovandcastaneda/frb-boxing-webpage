import React from "react";

export interface BoxerCardInterface {
  name: string;
  imgUrl: any;
  age: any;
  status: string;
}


export interface CoachCardInterface {
  name: string;
  imgUrl: any;
  title: string;
}
export interface EventCardInterface {
  imgUrl:any;
  title:string;
  date:Date;
  description:string;
  location: string;
}

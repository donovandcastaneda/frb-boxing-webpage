import React from "react";
import { GymInfo } from "../components/HomeFooter";
import { ImageSlides } from "../components/ImageSlides";
import { NavBar } from "../components/NavBar";



export function Home (){
    return (
        <div>
        <NavBar />
      <ImageSlides />
      <GymInfo />
        </div>
    )
    
}
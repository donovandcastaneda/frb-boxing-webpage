import React from "react";
import { BoxerCard } from "../components/BoxerCards";
import BoxerData from "../data/BoxerData";

export function Boxers() 
{
    return (
        <div className = "flex flex-col md:flex-row items-center">
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {BoxerCard.map((boxer)=>(
                    <BoxerCard
                    name = {boxer.name}
                    imgUrl = {boxer.imgUrl}
                    age = {boxer.age}
                    status = {boxer.status}
                    />
                ))}
            </div>

        </div>
    )
}
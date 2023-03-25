import React from "react";
import { BoxerCard } from "../components/BoxerCards";
import BoxerData from "../data/BoxerData";



export function Boxers() 
{
    return (
    <div className="flex flex-col md: flex-rows items-center justify-center pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BoxerData.map(boxers => (
                <BoxerCard
                imgUrl={boxers.imgUrl}
                name={boxers.name}
                age={boxers.age}
                status={boxers.status}
                />
            ))

            }
        </div>

    </div>
    )
}
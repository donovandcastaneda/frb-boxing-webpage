import React from "react"
import CoachData from "../data/CoachData";
import { CoachCard } from "../components/CoachesCard";

export function Coaches() 
{
    return (
<div className="flex flex-col md: flex-rows items-center justify-center pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CoachData.map(coaches => (
                <CoachCard
                imgUrl={coaches.imgUrl}
                name={coaches.name}
                title={coaches.title}
                />
            ))

            }
        </div>

    </div>    )
}
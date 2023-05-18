import { EventCard } from "../components/EventCards";
import EventData from "../data/EventData";



export function Events() 
{
    return (
        <div className="pb-96">
    <div className="flex flex-col md: flex-rows items-center justify-center pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EventData.map(events => (
                <EventCard
                    title={events.title}
                    imgUrl={events.imgSrc}
                    date={new Date(events.date)} 
                    description={events.description}
                    location={events.location}              
                />
            ))

            }
        </div>

    </div>
    </div>
    )
}
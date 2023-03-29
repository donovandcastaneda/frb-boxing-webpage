import { HomeEventCards } from "../components/HomeEventCard";
import EventData from "../data/EventData";

export function Home(){
    return(
        <div className="pb-96">
             {EventData.map(h_events => (
                <HomeEventCards
                    title={h_events.title}
                    imgUrl={h_events.imgSrc}
                    date={new Date(h_events.date)} 
                    description={h_events.description}
                    location={h_events.location}              
                />
            ))

            }
        </div>
    )
}
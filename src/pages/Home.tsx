import { HomeEventCards } from "../components/HomeEventCard";
import EventData from "../data/EventData";

export function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="">
        <img src = "/assets/black.jpg" className="w-full object-center"></img>
      </div>
      <div className="absolute bottom-0 w-full">
        <HomeEventCards
          imgUrl={undefined}
          title={""}
          description={""}
          location={""}
          date={new Date()}
        />
      </div>
    </div>
  );
}

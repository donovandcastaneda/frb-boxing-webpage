import { HomeEventCards } from "../components/HomeEventCard";
import EventData from "../data/EventData";

export function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="">
      </div>
      <div className="absolute bottom-60 w-full">
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

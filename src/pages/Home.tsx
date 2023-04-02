import { HomeEventCards } from "../components/HomeEventCard";
import EventData from "../data/EventData";

export function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="w-full h-full">
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet="/assets/home-bg-sm.png"
          />
          <source
            media="(min-width: 640px) and (max-width: 1120px)"
            srcSet="/assets/home-bg-md.png"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home-bg-lg.png"
          />
          <img
            src="/assets/home-bg.png"
            className="w-full h-[1000px] object-cover"
            alt=""
          />
        </picture>
      </div>
      <div className="">
        <section className="absolute bottom-0 w-full bg-base-100">
          <HomeEventCards
            imgUrl={undefined}
            title={""}
            description={""}
            location={""}
            date={new Date()}
          />
        </section>
      </div>
    </div>
  );
}

import { EventCardInterface } from "../types/Types";

export function HomeEventCards({
  title,
  imgUrl,
  date,
  description,
  location,
}: EventCardInterface) {
  return (
    <div className="carousel rounded-box">
      <div className="card w-96 glass scale-[0.7]">
        <figure>
          <img src={imgUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <h2 className="">{location}</h2>
          <h2 className="">{new Date(date).toDateString()}</h2>
          <p className="max-w-[265px] break-words">{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

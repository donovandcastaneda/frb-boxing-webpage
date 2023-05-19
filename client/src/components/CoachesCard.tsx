import { CoachCardInterface } from "../types/Types";

export function CoachCard({ name, image, desc }: CoachCardInterface) {
  return (
    <div className="p-5">
      <div className="card w-96 glass ">
        <figure>
          <img src={image} alt="coach" />
        </figure>
        <div className="card-body">
          <h1 className="card-title flex-col">{name}</h1>
          <div className="card-actions justify-end">
            <button className="btn gap-2">{desc}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

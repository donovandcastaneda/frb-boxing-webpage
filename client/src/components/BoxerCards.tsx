import { BoxerCardInterface } from "../types/Types";

export function BoxerCard({ name, image, age, desc }: BoxerCardInterface) {
  return (
    <div className="p-5">
      <div className="card w-full lg:w-9/12   glass">
        <figure>
          <img src={image} alt="picture" loading="lazy" />
        </figure>
        <div className="card-body">
          <h1 className="card-title flex-col">{name}</h1>
          <div className="card-actions justify-end">
            <button className="btn gap-2">age: {age} Years Old</button>
            <button className="btn gap-2">{desc}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

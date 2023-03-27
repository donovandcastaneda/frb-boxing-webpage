
<div className="card md:card-side m-4 bg-base-100 shadow-xl max-w-md md:max-w-none">
  <figure className="relative md:w-3/4">

    <div className="carousel w-full md:h-full md:w-auto">
      <div id="item1" className="carousel-item w-full">
        <img src="https://api.lorem.space/image/car?w=400&h=250&hash=8B7BCDC2" className="w-full" />
      </div> 
      <div id="item2" className="carousel-item w-full">
        <img src="https://api.lorem.space/image/car?w=400&h=250&hash=500B67FB" className="w-full" />
      </div> 
      <div id="item3" className="carousel-item w-full">
        <img src="https://api.lorem.space/image/car?w=400&h=250&hash=A89D0DE6" className="w-full" />
      </div> 
      <div id="item4" className="carousel-item w-full">
        <img src="https://api.lorem.space/image/car?w=400&h=250&hash=225E6693" className="w-full" />
      </div>
    </div>
    <div className="flex justify-center w-full py-2 gap-2 absolute bottom-2 items-end">
      <a href="#item1" className="badge">1</a>
      <a href="#item2" className="badge">2</a>
      <a href="#item3" className="badge">3</a>
      <a href="#item4" className="badge">4</a>
    </div>

  </figure>
  <div className="card-body">
    <h2 className="card-title">Cars!</h2>
    <p>Cars! Here are pictures of cars.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Cool</button>
    </div>
  </div>
</div>

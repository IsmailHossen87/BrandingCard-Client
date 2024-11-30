import React from "react";
import { useLocation } from "react-router-dom";
import UseProduct from "../Hooks/UseProduct";

const MyCart = () => {
  const [products] = UseProduct();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const storeBrand = queryParams.get("branditem");
  const filter = products?.filter(
    (data) => data.brand?.toLowerCase() === storeBrand?.toLowerCase()
  );
  return (
    <div className="grid grid-cols-2 gap-4 my-10">
      {filter?.map((data) => (
        <div key={data.id}>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="h-[200px]" src={data.photo} alt="Movie" />
            </figure>
            <div className="card-body">
             <div>
             <h2 className="card-title">{data.name}</h2>
              <p>{data.type}</p>
              <p>{data.price}</p>
              <p>{data.rating}</p>
             </div>
            </div>
            <div className="join gap-4 join-vertical mt-3 mr-4">
                <button className="btn join-item">Button</button>
                <button className="btn join-item">Edit</button>
                <button className="btn bg-red-600 text-white join-item">X</button>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;

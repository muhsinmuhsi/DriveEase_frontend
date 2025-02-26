import React, { useEffect, useState } from "react";
import { vehicleSchema } from "./Reviews";
import api from "../../api";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState<vehicleSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const user = localStorage.getItem("user");
  const userId = user ? JSON.parse(user) : null;

  
  

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!userId || !userId._id) return; // Ensure userId exists

      try {
        const { data } = await api.get<{ recommendedCars: vehicleSchema[] }>(
          `/recommendations/${userId._id}`
        );

        setRecommendations(data.recommendedCars || []);
      } catch (error) {
        console.error("Error fetching AI recommendations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  },);

  if (loading) return <p>Loading AI recommendations...</p>;

  return (
    <div>
        <h3 className="font-semibold m-3 text-2xl">{recommendations.length==0? null:"Recommended for you "}</h3>
      <div className=" flex gap-9 overflow-x-scroll scrollbar-none p-5">
        {recommendations.map((vehicle) => (
          <div
            key={vehicle._id} 
            className="border border-green-400 h-96 w-[300px] rounded-xl shadow-md flex flex-col items-center"
          >
            <div className=" rounded-xl p-5  justify-around">

                 <div className="">
                <img
                  src={vehicle.image}
                  alt="car-image"
                  className="rounded-xl w-56 h-40 object-fill shadow-md border border-green-400 mb-5"
                />
              </div>

              <div>
                <p className="text-xl font-bold">{vehicle.name}</p>
                <div className="flex text-sm font-semibold pt-4">
                  <p className="pr-2">{vehicle.transmission}</p>
                  <p className="pr-2">{vehicle.fuelType}</p>
                  <p className="pr-2">{vehicle.seatingCapacity} Seats</p>
                </div>
              </div>

              
            </div>

            <div className="flex justify-around pb-8">
              <div className="flex flex-col">
                <div className="flex pt-5">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;

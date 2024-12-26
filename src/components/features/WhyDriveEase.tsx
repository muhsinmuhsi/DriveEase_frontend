import image from '../../assets/EVM_Wheels_Bookings_Customers_Green.webp';

const WhyDriveEase = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 my-11 px-4 md:px-8 lg:px-16">
      
      <div className="flex justify-center md:w-1/2">
        <img src={image} alt="DriveEase Banner" className="w-full max-w-md md:max-w-full rounded-lg" />
      </div>

      
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold pb-6 text-center md:text-left">
          Why DriveEase
        </h1>
        <p className="font-bold pb-4 text-center md:text-left">
          Find the Perfect Ride for your Roadtrips!
        </p>
        <p className="text-center md:text-left">
          DriveEase provides a seamless experience to rent self-drive vehicles across gorgeous Kerala.
          Founded in 1952 under the renowned EVM Group, we have spent decades perfecting 
          in the automobile industry and ensuring complete customer satisfaction.
        </p>
        <br />
        <p className="text-center md:text-left">
          With offices across Bangalore, Cochin, Calicut, and more, we are the top choice for travelers seeking 
          to rent a car to fully immerse in Kerala's beauty. Our fleet ranges from hatchbacks to premium vehicles, 
          providing you the flexibility to create your own journey.
        </p>
        <br />
        <p className="text-center md:text-left">
          As the premier experts in affordable rental car services, DriveEase embraces Kerala's warmth and vibrancy. 
          We enable visitors and locals alike to chart their own path at their own pace.
        </p>
      </div>
    </div>
  );
};

export default WhyDriveEase;

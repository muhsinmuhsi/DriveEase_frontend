import  { useState } from 'react';
import toast from 'react-hot-toast';
import adminApi from '../../adminApi';

const AddVehicle = () => {
  const [newVehicle, setNewVehicle] = useState({
    name: '',
    type: '',
    brand: '',
    seatingCapacity: '',
    pricePerDay: '',
    fuelType: '',
    transmission: '',
    category: '',
    image: null,
    bookings: []
  });

  const [newBooking, setNewBooking] = useState({
    pickupDate: '',
    dropoffDate: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewVehicle({ ...newVehicle, [name]: files ? files[0] : value });
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleAddBooking = () => {
    if (newBooking.pickupDate && newBooking.dropoffDate) {
      setNewVehicle((prev) => ({
        ...prev,
        bookings: [...prev.bookings, newBooking]
      }));
      setNewBooking({ pickupDate: '', dropoffDate: '' });
      toast.success('booking added success fully')
    } else {
      toast.error('Please fill in both pickup and drop-off dates.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', newVehicle.name);
      formData.append('type', newVehicle.type);
      formData.append('brand', newVehicle.brand);
      formData.append('seatingCapacity', newVehicle.seatingCapacity);
      formData.append('pricePerDay', newVehicle.pricePerDay);
      formData.append('fuelType', newVehicle.fuelType);
      formData.append('transmission', newVehicle.transmission);
      formData.append('category', newVehicle.category);

      if (newVehicle.image) {
        formData.append('image', newVehicle.image);
      }

      newVehicle.bookings.forEach((booking, index) => {
        formData.append(`bookings[${index}][pickupDate]`, booking.pickupDate);
        formData.append(`bookings[${index}][dropoffDate]`, booking.dropoffDate);
      });
console.log(newVehicle.category,'this is form data');
      const res = await adminApi.post("/addVehicle", formData, {
        headers: {
          "Content-Type":"multipart/form-data",
        }
      });
      
      
      toast.success(`${res.data.message}`);
      setNewVehicle({
        name: '',
        type: '',
        brand: '',
        seatingCapacity: '',
        pricePerDay: '',
        fuelType: '',
        transmission: '',
        category: '',
        image: null,
        bookings: []
      });
    } catch (err) {
      console.error('Failed to add vehicle:', err);
      toast.error('Something went wrong, vehicle not added.');
    }
  };

  return (
    <>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Vehicle Name</label>
          <input
            type="text"
            name="name"
            value={newVehicle.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <input
            type="text"
            name="type"
            value={newVehicle.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={newVehicle.brand}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Seating Capacity</label>
          <input
            type="number"
            name="seatingCapacity"
            value={newVehicle.seatingCapacity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price Per Day</label>
          <input
            type="number"
            name="pricePerDay"
            value={newVehicle.pricePerDay}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Fuel Type</label>
          <select
            name="fuelType"
            value={newVehicle.fuelType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Transmission</label>
          <select
            name="transmission"
            value={newVehicle.transmission}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            value={newVehicle.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="Bike">Bike</option>
            <option value="EconomyCar">Economy Car</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Add Booking (Optional)</h3>
          <div className="flex gap-4 mb-2">
            <input
              type="date"
              name="pickupDate"
              value={newBooking.pickupDate}
              onChange={handleBookingChange}
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pickup Date"
            />
            <input
              type="date"
              name="dropoffDate"
              value={newBooking.dropoffDate}
              onChange={handleBookingChange}
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="dropoff Date"
              />

              </div>
              </div>
              <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={handleAddBooking}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Booking
            </button>
            <p className="text-gray-500">Bookings: {newVehicle.bookings.length}</p>
          </div>
        

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Submit Vehicle
        </button>
      </form>

      {newVehicle.bookings.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Added Bookings</h3>
          <ul className="list-disc pl-5">
            {newVehicle.bookings.map((booking, index) => (
              <li key={index} className="text-gray-700">
                Pickup: {booking.pickupDate}, Drop-off: {booking.dropoffDate}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
    
  );
};

export default AddVehicle;


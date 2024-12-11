import React from "react";
import DatePicker from "react-datepicker";
import { IoCarSport } from "react-icons/io5";
import { RiEBikeFill } from "react-icons/ri";
import { IoMdRadioButtonOn } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  adddropoffDate,
  addpickupdate,
  setdropoffLocation,
  setpickupLocation,
} from "../../redux/DateSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";



const validationSchema = yup.object().shape({
    pickupLocation: yup.string().required("Pickup location is required"),
    pickupDate: yup
      .date()
      .required("Pickup date is required")
      .nullable()
      .typeError("Invalid pickup date"),
    droffLocation: yup.string().required("Dropoff location is required"),
    dropoffDate: yup
      .date()
      .required("Dropoff date is required")
      .nullable()
      .typeError("Invalid dropoff date")
      .test("is-after-pickup", "Dropoff date must be after pickup date", function (value) {
        const { pickupDate } = this.parent;
        console.log(pickupDate,'pickupdate on the yup');
         // Access pickupDate from the same object
        return !pickupDate || !value || new Date(value).getTime() > new Date(pickupDate).getTime(); // Validate dropoffDate > pickupDate
      }),
  });
  

const Datepickerdiv = () => {
  const dispatch = useAppDispatch();
  const pickupdate = useAppSelector((state) => state.dateslice.pickupDate) as Date | null;
  const dropoffdate = useAppSelector((state) => state.dateslice.dropoffDate) as Date | null;
  const pickuplocation=useAppSelector((state)=>state.dateslice.pickupLocation)
  const navigate = useNavigate();

  const initialValues = {
    pickupLocation: "",
    pickupDate: null,
    droffLocation: "",
    dropoffDate: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        const pickupdatestring=values.pickupDate? values.pickupDate:" ";
        const dropoffdatestring=values.dropoffDate? values.dropoffDate:" ";


        dispatch(addpickupdate(pickupdatestring));
        dispatch(adddropoffDate(dropoffdatestring));
        dispatch(setpickupLocation(values.pickupLocation));
        dispatch(setdropoffLocation(values.droffLocation));
        console.log(pickupdate,dropoffdate,'pickupdate from ');
        console.log(pickuplocation,'pickup locaton from datepicker');
        
        
        navigate("/vehicle/isAvailable");
      } catch (error) {
        console.log(error, "error");
      }
    },
  });

  const { errors, values, handleSubmit, handleBlur, handleChange, isValid, touched } = formik;

  return (
    <div className="bg-green-50 m-14 flex flex-col p-8">
      {/* Vehicle Type Selection */}
      <div>
        <p className="font-semibold">Which Type Of Vehicle?</p>
        <button className="bg-green-400 rounded p-2 font-semibold m-3 focus:bg-green-600">
          <IoCarSport className="inline" /> Car
        </button>
        <button className="bg-green-400 rounded p-2 font-semibold focus:bg-green-600">
          <RiEBikeFill className="inline" /> Bike
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="justify-between md:flex">
          {/* Pickup Section */}
          <div className="bg-green-100 rounded-xl shadow-lg hover:bg-green-200 w-1/2 h-36 p-auto p-3 my-5">
            <div>
              <p className="font-semibold">
                <IoMdRadioButtonOn className="inline text-blue-700 mr-2" />
                Pick-up
              </p>
            </div>
            <div className="flex justify-between items-center m-3">
              <span className="border-gray-200 border-r-2 p-3">
                <p className="p-2 font-semibold">Location</p>
                <select
                  className="bg-green-100 text-gray-400 text-sm rounded"
                  name="pickupLocation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pickupLocation}
                >
                  <option value="">Select your location</option>
                  <option value="calicut">Calicut</option>
                  <option value="Cochin">Cochin</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                {touched.pickupLocation && errors.pickupLocation && (
                  <div className="text-red-500 text-sm">{errors.pickupLocation}</div>
                )}
              </span>
              <span className="p-3">
                <p className="p-2 font-semibold">Date</p>
                <DatePicker
                  selected={values.pickupDate || undefined}
                  name="pickupDate"
                  onChange={(date) => formik.setFieldValue("pickupDate", date)}
                  onBlur={handleBlur}
                  showTimeSelect
                  className="bg-green-100 rounded"
                  placeholderText="Select your date"
                  dateFormat="Pp"
                />
                {touched.pickupDate && errors.pickupDate && (
                  <div className="text-red-500 text-sm">{errors.pickupDate}</div>
                )}
              </span>
            </div>
          </div>

          {/* Drop-off Section */}
          <div className="bg-green-100 rounded-xl shadow-lg hover:bg-green-200 w-1/2 h-36 p-auto p-3 my-5">
            <div>
              <p className="font-semibold">
                <IoMdRadioButtonOn className="inline text-blue-700 mr-2" />
                Drop-off
              </p>
            </div>
            <div className="flex justify-between items-center m-3">
              <span className="border-gray-200 border-r-2 p-3">
                <p className="p-2 font-semibold">Location</p>
                <select
                  className="bg-green-100 text-gray-400 text-sm rounded"
                  name="droffLocation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.droffLocation}
                >
                  <option value="">Select your location</option>
                  <option value="calicut">Calicut</option>
                  <option value="Cochin">Cochin</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                {touched.droffLocation && errors.droffLocation && (
                  <div className="text-red-500 text-sm">{errors.droffLocation}</div>
                )}
              </span>
              <span className="p-3">
                <p className="p-2 font-semibold">Date</p>
                <DatePicker
                  selected={values.dropoffDate || undefined}
                  name="dropoffDate"
                  onChange={(date) => formik.setFieldValue("dropoffDate", date)}
                  onBlur={handleBlur}
                  showTimeSelect
                  className="bg-green-100 rounded"
                  placeholderText="Select your date"
                  dateFormat="Pp"
                />
                {touched.dropoffDate && errors.dropoffDate && (
                  <div className="text-red-500 text-sm">{errors.dropoffDate}</div>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className={`${
              isValid ? "bg-green-400 hover:bg-green-500" : "bg-gray-300 cursor-not-allowed"
            } rounded font-semibold focus:outline-none focus:shadow-outline shadow-md p-2`}
          >
            Let's Drive
          </button>
        </div>
      </form>
    </div>
  );
};

export default Datepickerdiv;

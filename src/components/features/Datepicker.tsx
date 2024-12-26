import DatePicker from "react-datepicker";
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
    .test(
      "is-after-pickup",
      "Dropoff date must be after pickup date",
      function (value) {
        const { pickupDate } = this.parent;
        return (
          !pickupDate ||
          !value ||
          new Date(value).getTime() > new Date(pickupDate).getTime()
        );
      }
    ),
});

const Datepickerdiv = () => {
  const dispatch = useAppDispatch();
  const pickupdate = useAppSelector(
    (state) => state.dateslice.pickupDate
  ) as Date | null;
  const dropoffdate = useAppSelector(
    (state) => state.dateslice.dropoffDate
  ) as Date | null;
  const pickuplocation = useAppSelector(
    (state) => state.dateslice.pickupLocation
  );
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
        const pickupdatestring = values.pickupDate ? values.pickupDate : " ";
        const dropoffdatestring = values.dropoffDate ? values.dropoffDate : " ";

        dispatch(addpickupdate(pickupdatestring));
        dispatch(adddropoffDate(dropoffdatestring));
        dispatch(setpickupLocation(values.pickupLocation));
        dispatch(setdropoffLocation(values.droffLocation));

        navigate("/vehicle/isAvailable");
      } catch (error) {
        console.log(error, "error");
      }
    },
  });

  const { errors, values, handleSubmit, handleBlur, handleChange, isValid, touched } = formik;

  return (
    <div className="bg-green-50 mx-4 sm:mx-8 md:mx-14 flex flex-col p-4 sm:p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          {/* Pickup Section */}
          <div className="bg-green-100 rounded-xl shadow-lg hover:bg-green-200 w-full md:w-1/2 p-4">
            <p className="font-semibold mb-4">
              <IoMdRadioButtonOn className="inline text-blue-700 mr-2" /> Pick-up
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold mb-2">Location</p>
                <select
                  className="bg-green-100 text-gray-400 text-sm rounded w-full p-2"
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
                  <div className="text-red-500 text-sm mt-1">
                    {errors.pickupLocation}
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold mb-2">Date</p>
                <DatePicker
                  selected={values.pickupDate || undefined}
                  name="pickupDate"
                  onChange={(date) => formik.setFieldValue("pickupDate", date)}
                  onBlur={handleBlur}
                  showTimeSelect
                  className="bg-green-100 rounded w-full p-2"
                  placeholderText="Select your date"
                  dateFormat="Pp"
                />
                {touched.pickupDate && errors.pickupDate && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.pickupDate}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Drop-off Section */}
          <div className="bg-green-100 rounded-xl shadow-lg hover:bg-green-200 w-full md:w-1/2 p-4">
            <p className="font-semibold mb-4">
              <IoMdRadioButtonOn className="inline text-blue-700 mr-2" /> Drop-off
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold mb-2">Location</p>
                <select
                  className="bg-green-100 text-gray-400 text-sm rounded w-full p-2"
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
                  <div className="text-red-500 text-sm mt-1">
                    {errors.droffLocation}
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold mb-2">Date</p>
                <DatePicker
                  selected={values.dropoffDate || undefined}
                  name="dropoffDate"
                  onChange={(date) => formik.setFieldValue("dropoffDate", date)}
                  onBlur={handleBlur}
                  showTimeSelect
                  className="bg-green-100 rounded w-full p-2"
                  placeholderText="Select your date"
                  dateFormat="Pp"
                />
                {touched.dropoffDate && errors.dropoffDate && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.dropoffDate}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            disabled={!isValid}
            className={`${
              isValid
                ? "bg-green-400 hover:bg-green-500"
                : "bg-gray-300 cursor-not-allowed"
            } rounded font-semibold focus:outline-none focus:shadow-outline shadow-md p-3 w-full md:w-auto`}
          >
            Let's Drive
          </button>
        </div>
      </form>
    </div>
  );
};

export default Datepickerdiv;

import React from "react";
import Googlelogin from "./Googlelogin";
import logo from "../../assets/logo-transparent-png.png";
import { useFormik } from "formik";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const signupvalidation = yup.object({
  username: yup.string().min(3).required("Please enter name"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: yup.string().min(5).required("Please enter password"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Please enter confirm password"),
});

const Register: React.FC = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    image: null,
  };

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: signupvalidation,
    onSubmit: async (values) => {
      const formdata = new FormData();
      formdata.append("username", values.username);
      formdata.append("email", values.email);
      formdata.append("password", values.password);

      if (values.image) {
        formdata.append("image", values.image);
      }
      try {
        const response = await api.post("/register", formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 200) {
          toast.success("otp sended to your email");
          navigate("/Otpverify");
        }
        console.log(response,'response log');
        
      } catch (error) {
        console.log(error);
        toast.error(`${error}` || "something went wrong ");
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFieldValue("image", event.target.files[0]);
    }
  };

  return (
    <div className=" h-auto flex flex-col justify-center items-center bg-green-400 p-5">
      <div>
        <img src={logo} alt=" logo.png" className=" h-20 w-25 " />
      </div>
      <Toaster />
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-md ">
        <div className="w-full max-w-xs">
          <form
            className="bg-white  rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.username && (
                <small className="text-red-600">{errors.username}</small>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">
                email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-red-600">{errors.email}</small>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-black-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.password && (
                <small className="text-red-600">{errors.password}</small>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-black-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-black-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="cpassword"
                type="password"
                name="cpassword"
                placeholder="confirm password"
                value={values.cpassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.cpassword && (
                <small className="text-red-600">{errors.cpassword}</small>
              )}
            </div>

            <div>
              <label className="block text-black-700 text-sm font-bold mb-2">
                upload your image
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-black-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col items-center ">
              <button
                className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full rounded-full mb-4"
                type="submit"
              >
                Sign up
              </button>
              <p className="text-xs">
                Already have an account?
                <a
                  className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  sign in{" "}
                </a>
              </p>
            </div>
          </form>
          {/* <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p> */}
        </div>

        <div>
          <p className="text-1xl p-3">OR</p>
        </div>
        <div className="m-3">
          <Googlelogin />
        </div>
      </div>
    </div>
  );
};

export default Register;

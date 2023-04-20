import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    console.log(values);
    navigate("/booking-service");
    // Implement login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">Sign In</h1>
      <Formik
        initialValues={{ phoneNumber: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.phoneNumber) {
            errors.phoneNumber = "Phone number is required";
          }
          return errors;
        }}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
              <Field
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-medium py-4 px-8 rounded-full mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-gray-500 text-sm mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-600">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;

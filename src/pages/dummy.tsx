import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { parse, isValid } from 'date-fns';

// Function to parse and validate the date format
const validateDateTime = (value) => {
  const parsedDate = parse(value, "EEE MMM dd yyyy HH:mm:ss 'GMT'xxx", new Date());
  return isValid(parsedDate);
};

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required('Pickup location is required'),
  pickupDate: Yup.string()
    .required('Pickup date is required')
    .test('is-valid-date', 'Invalid date format', validateDateTime),
  droffLocation: Yup.string().required('Dropoff location is required'),
  dropoffDate: Yup.string()
    .required('Dropoff date is required')
    .test('is-valid-date', 'Invalid date format', validateDateTime),
});


const initialValues = {
  pickupLocation: '',
  pickupDate: '',
  droffLocation: '',
  dropoffDate: '',
};

const CarRentalForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form submitted:', values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Pickup Location</label>
            <Field name="pickupLocation" />
            <ErrorMessage name="pickupLocation" />
          </div>

          <div>
            <label>Pickup Date</label>
            <Field name="pickupDate" />
            <ErrorMessage name="pickupDate" />
          </div>

          <div>
            <label>Dropoff Location</label>
            <Field name="droffLocation" />
            <ErrorMessage name="droffLocation" />
          </div>

          <div>
            <label>Dropoff Date</label>
            <Field name="dropoffDate" />
            <ErrorMessage name="dropoffDate" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CarRentalForm;

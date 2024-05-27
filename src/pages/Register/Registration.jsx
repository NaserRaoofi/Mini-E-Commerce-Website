import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import StyledButton from '../../components/Button/StyledButton';
import { registerUser } from '../../services/usersDetail/RegisterUsersServer';
import './register.css';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  city: Yup.string().required('City is required'),
  street: Yup.string().required('Street is required'),
  number: Yup.number().required('Number is required').positive().integer(),
  zipcode: Yup.string().required('Zipcode is required'),
  lat: Yup.string().required('Latitude is required'),
  long: Yup.string().required('Longitude is required'),
  phone: Yup.string().required('Phone number is required')
});

const Registration = () => {
  const [formData, setFormData] = useState(null); // To store the form data
  const [loading, setLoading] = useState(false);  // To manage loading state
  const [submitted, setSubmitted] = useState(false); // To manage submission state
  const [error, setError] = useState(null); // To manage error state

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleFormSubmit = (data) => {
    setFormData(data); // Store the form data
    setLoading(true); // Set loading to true
    setSubmitted(true); // Indicate that the form has been submitted
  };

  const handleSuccess = (data) => {
    setLoading(false); // Set loading to false
    alert(`Registration successful for user ID ${data.id}!`); // Alert the user of success
  };

  const handleError = (error) => {
    setLoading(false); // Set loading to false
    setError(error); // Store the error
    alert('An error occurred during registration. Please try again.'); // Alert the user of the error
  };

useEffect(() => {
    if (submitted && formData) {
      const submitForm = async () => {
        try {
          const response = await registerUser(formData);
          handleSuccess(response);
        } catch (error) {
          handleError(error);
        }
      };

      submitForm();
    }
  }, [submitted, formData]);



  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" {...register('username')} />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" {...register('firstname')} />
            {errors.firstname && <p>{errors.firstname.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" {...register('lastname')} />
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input id="city" {...register('city')} />
            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input id="street" {...register('street')} />
            {errors.street && <p>{errors.street.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input type="number" id="number" {...register('number')} />
            {errors.number && <p>{errors.number.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Zip Code</label>
            <input id="zipcode" {...register('zipcode')} />
            {errors.zipcode && <p>{errors.zipcode.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lat">Latitude</label>
            <input id="lat" {...register('lat')} />
            {errors.lat && <p>{errors.lat.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="long">Longitude</label>
            <input id="long" {...register('long')} />
            {errors.long && <p>{errors.long.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" {...register('phone')} />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
          <div className="btnsc">
            <StyledButton type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </StyledButton>
            <Link to='/login'>
            <StyledButton type="button" style={{backgroundColor:'red'}}>
              Back to Login
            </StyledButton>
            </Link>
          </div>
        </form>
        {loading && <div className="loading-icon">Loading...</div>}
      </div>
    </div>
  );
};

export default Registration;

import { Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaStreetView } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { contextProvider } from '../Context/AuthContext';
import useTitle from '../Hooks/useTitel';
import ReviewCard from './ReviewCard';

const Review = () => {
  const {user, loader} = useContext(contextProvider)
  const [review, setReview] = useState([])
   useTitle("review")
  useEffect(() =>{
    fetch(`https://cooking-backend.vercel.app/review?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReview(data.resultWiteUser))
    
  },[user?.email])
 
  if (!user?.email) {
   return <div>
    <h1>Plesh login</h1>
    <Link to="/login" className='underlines m-5 text-blue-600'>Login Now</Link>
   </div>
  }
  console.log(review);
  return (
    <div>
    <div className='grid justify-items-center'>
    <h1 className='flex text-2xl'>Your Reviews <FaStreetView className='ml-4' /></h1>
    </div>
      <div>
      {review.map(review => <ReviewCard key={review._id} review={review} />)}
    </div>
    </div>
  );
};

export default Review;
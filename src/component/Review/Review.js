import React, { useContext, useEffect, useState } from 'react';
import { FaStreetView } from 'react-icons/fa';
import { contextProvider } from '../Context/AuthContext';
import Reviews from '../Product/Reviews';
import ReviewCard from './ReviewCard';

const Review = () => {
  const {user} = useContext(contextProvider)
  const [review, setReview] = useState([])
 if (user.email) {
   
 }
  useEffect(() =>{
    fetch(`http://localhost:5000/review?email=${user.email}`)
    .then(res => res.json())
    .then(data => setReview(data.resultWiteUser))
    
  },[user?.email])

  return (
    <div>
    <div className='grid justify-items-center'>
    <h1 className='flex text-2xl'>Your Reviews <FaStreetView className='ml-4' /></h1>
    </div>
      <div>
      {review.map(review => <Reviews key={review._id} review={review} />)}
    </div>
    </div>
  );
};

export default Review;
import React, {useState, useEffect} from 'react';
import { useLoaderData } from "react-router-dom";
import ServiceCart from "../Services/ServiceCart";
const Services = () => {
  const {allData} = useLoaderData()
  // const [allData, setAllData] = useState({})
  // useEffect(() => {
  //   fetch('http://localhost:5000/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     setAllData(data.allData)
  //   })
  // },[allData.length])


  if (allData?.length < 1 || allData === null || allData === undefined) {
    return <h1>Loading ...</h1>
  }
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {allData?.map(singleData => <ServiceCart key={singleData._id} singleData={singleData} />)}
      </section>
      <h1>hi</h1>
    </div>
  );
};

export default Services;
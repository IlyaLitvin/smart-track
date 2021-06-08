import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_DOCTORS} from '../../https/query/Doctor';
import Doctor from './Doctor';

export default function Doctors() {
  const {data, loading, error} = useQuery(GET_ALL_DOCTORS);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if(!error) {
      if (!loading) {
        setDoctors(data.getAllDoctors);
      }
    } else {
      console.log(error.message)
    }    
  }, [data, loading, error]);
  
  return (
    <>
      {doctors.map(doctor => ( 
        <Doctor key={doctor.id} doctor={doctor} />       
      ))}
    </>
  );
};
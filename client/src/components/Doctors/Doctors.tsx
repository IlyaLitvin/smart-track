import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_DOCTORS} from '../../https/query/Doctor';
import Doctor, {IDoctor} from './Doctor';

export default function Doctors() {
  const {data, loading, error} = useQuery(GET_ALL_DOCTORS);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setDoctors(data.getAllDoctors);
      }
    } else {
      console.log(error.message);
    }
  }, [data, loading, error]);

  return (
    <>
      {doctors.map((doctor: IDoctor, index: number) => (
        <Doctor key={doctor.id} index={index + 1} doctor={doctor} />
      ))}
    </>
  );
}

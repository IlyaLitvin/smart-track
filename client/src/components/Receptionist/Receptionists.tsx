import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_RECEPTIONISTS} from '../../https/query/Receptionist';
import Receptionist, {IReceptionist} from './Receptionist';

export default function Receptionists() {
  const {data, loading, error} = useQuery(GET_ALL_RECEPTIONISTS);
  const [receptionists, setReceptionist] = useState([]);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setReceptionist(data.getAllReceptionists);
      }
    } else {
      console.log(error.message);
    }
  }, [data, loading, error]);

  return (
    <>
      {receptionists.map((receptionist: IReceptionist, index: number) => (
        <Receptionist
          receptionist={receptionist}
          index={index + 1}
          key={receptionist.id}
        />
      ))}
    </>
  );
}

import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_ASSISTANTS} from '../../https/query/Assistant';
import Assistant from './Assistant';
import {IAssistant} from '../../types/OtherTypes';

export default function Assistants() {
  const {data, loading, error} = useQuery(GET_ALL_ASSISTANTS);
  const [assistants, setAssistants] = useState([]);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setAssistants(data.getAllAssistants);
      }
    } else {
      console.log(error);
    }
  }, [data, loading, error]);

  return (
    <>
      {assistants.map((assistant: IAssistant, index: number) => (
        <Assistant assistant={assistant} index={index + 1} key={assistant.id} />
      ))}
    </>
  );
}

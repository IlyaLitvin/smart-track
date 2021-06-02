import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';


export default function Alerts({navigation}) {
  return (
    <>
      <Header navigation={navigation} />
      <Card item={{id: 1, name: 'name', color: 'fff'}} />
    </>
  );
}

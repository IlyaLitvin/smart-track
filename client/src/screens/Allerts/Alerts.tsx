import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../../common/button/Button';
import {useMutation, useQuery} from '@apollo/client';
import {CREATE_ALERT} from '../../https/mutations/Alerts';
import {GET_ALL_ALERTS} from '../../https/query/Alerts';

import Modal from './Modal/Modal';

const styles = StyleSheet.create({
  wrapper: {paddingHorizontal: '4.4444%'},
  button: {
    marginVertical: 15,
  },
});

export default function Alerts({navigation}) {
  const {data: alerts} = useQuery(GET_ALL_ALERTS);
  const [isView, setIsView] = useState(false);
  const [addAlerts] = useMutation(CREATE_ALERT);

  const onSave = newAlert => {
    setIsView(false);
    addAlerts({
      variables: {alert: newAlert},
      update: (state, {data}) => {
        const value = state.readQuery({query: GET_ALL_ALERTS});
        console.log(value);
        state.writeQuery({
          query: GET_ALL_ALERTS,
          data: {
            getAllAlerts: [...value.getAllAlerts, data.createAlert],
          },
        });
      },
    });
  };
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.wrapper}>
        <Button style={styles.button} text="Add new" onPress={setIsView} />
        {alerts?.getAllAlerts.map((alert, index) => (
          <Card key={alert.id} index={index + 1} item={alert} />
        ))}
      </ScrollView>
      {isView ? <Modal onSave={onSave} /> : null}
    </>
  );
}

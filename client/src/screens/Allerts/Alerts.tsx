import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import {ScrollView, StyleSheet} from 'react-native';

import {Button} from '../../common/button/Button';
import Modal from './Modal/Modal';
import {Alert, HeaderProps} from '../../types/OtherTypes';
import {useAlertsFeetch} from './hooks';

const styles = StyleSheet.create({
  wrapper: {paddingHorizontal: '4.4444%'},
  button: {
    marginVertical: 15,
  },
});

export default function Alerts({navigation}: HeaderProps) {
  const [isView, setIsView] = useState(false);
  const [item, setItem] = useState({name: '', id: -1, color: ''});
  const {addAlert, updateAlert, alerts} = useAlertsFeetch();

  const onSave = (newAlert: Alert) => {
    setIsView(false);
    if (!newAlert.id) {
      addAlert({variables: {alert: newAlert}});
    } else {
      updateAlert({
        variables: {
          alertId: newAlert.id,
          alert: {id: newAlert.id, name: newAlert.name, color: newAlert.color},
        },
      });
    }
  };
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.wrapper}>
        <Button
          style={styles.button}
          text="Add new"
          onPress={() => setIsView(true)}
        />
        {alerts?.getAllAlerts.map((alert: Alert, index: number) => (
          <Card
            key={alert.id}
            index={index + 1}
            item={alert}
            onEdit={(value: Alert) => {
              setItem(value);
              setIsView(true);
            }}
          />
        ))}
      </ScrollView>
      {isView ? <Modal alert={item} onSave={onSave} /> : null}
    </>
  );
}

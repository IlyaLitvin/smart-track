import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../../../common/button/Button';
import Doctors from '../../../../components/Doctors/Doctors';
import DocModal from '../../../../components/Modals/DoctorsModal';
import {CREATE_DOCTOR} from '../../../../https/mutations/Doctor';
import {useMutation} from '@apollo/client';
import {GET_ALL_DOCTORS} from '../../../../https/query/Doctor';
import {IDoctor} from '../../../../components/Doctors/Doctor';

export default function DoctorsTab() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newDoctor] = useMutation(CREATE_DOCTOR, {
    refetchQueries: [{query: GET_ALL_DOCTORS}],
  });

  const saveDoctor = (item: IDoctor) => {
    newDoctor({
      variables: {
        doctor: item,
      },
    });
  };

  return (
    <View style={styles.wrapper}>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
        text="Add new"
      />
      <View>
        <Doctors />
      </View>
      <DocModal
        show={modalVisible}
        saveDoctor={saveDoctor}
        onHide={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    minHeight: '100%',
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
});

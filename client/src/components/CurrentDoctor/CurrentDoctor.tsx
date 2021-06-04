import React, {useEffect, useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Room from '../Room/Room';
import {GET_ALL_DOCTORS} from '../../https/query/Doctor';

export default function CurrentDoctor() {
  const {data, loading, error} = useQuery(GET_ALL_DOCTORS);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (!loading) {
      setDoctors(data.getAllDoctors);
    }
  }, [data, loading]);

  return (
    <>
      {doctors.map(doctor => (
        <View
          key={doctor.id}
          style={{
            height: 502,
            borderBottomWidth: 9,
            borderBottomColor: '#fff',
          }}>
          <View style={styles.doctorInfoWrapper}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorProf}>{doctor.specialization}</Text>
            <TouchableOpacity style={styles.resetBtn}>
              <Text
                style={{
                  color: '#6AC7BE',
                  fontSize: 12,
                  fontWeight: '500',
                  lineHeight: 18,
                }}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 61,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginRight: 15}}>
                <Text
                  style={{
                    color: '#212155',
                    fontWeight: '500',
                    fontSize: 18,
                    lineHeight: 27,
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginRight: 15,
                  color: '#FC7E55',
                  fontWeight: '500',
                  fontSize: 18,
                  lineHeight: 27,
                }}>
                5
              </Text>
              <TouchableOpacity style={{marginRight: 19}}>
                <Text
                  style={{
                    color: '#212155',
                    fontWeight: '500',
                    fontSize: 18,
                    lineHeight: 27,
                  }}>
                  +
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#969696',
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 21,
                  }}>
                  in line
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.stopBtn}>Stop the line</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rooms}>
            {doctor.rooms.map(room => (
              <Room key={room.id} room={room} />
            ))}
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  doctorInfoWrapper: {
    height: 100,
    borderBottomColor: '#C0E7E5',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  doctorName: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    color: '#212121',
    marginBottom: 10,
  },
  doctorProf: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#4F4F4F',
  },
  resetBtn: {
    position: 'absolute',
    right: 16,
    top: 21,
    borderWidth: 1,
    borderColor: '#6AC7BE',
    borderRadius: 8,
    paddingRight: 13,
    paddingLeft: 13,
    paddingTop: 3,
    paddingBottom: 3,
  },
  stopBtn: {
    color: '#FC7E55',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    borderWidth: 1,
    borderColor: '#FC7E55',
    borderRadius: 20,
    paddingRight: 13,
    paddingLeft: 13,
    paddingTop: 3,
    paddingBottom: 3,
  },
  rooms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
});

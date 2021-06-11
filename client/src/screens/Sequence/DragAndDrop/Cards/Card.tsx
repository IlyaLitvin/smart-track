import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Close from '../../../../assets/images/Close.svg';
import Edit from '../../../../assets/images/Edit.svg';
import {Room} from '../DragAndDrop';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 1.25,
  },
  ellipse: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: 'rgba(106, 199, 190, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 10,
  },
  wrapper: {
    width: '28.3333%',
    shadowColor: 'rgba(32, 43, 93, 0.8)',
    elevation: 15,
    backgroundColor: 'white',
    paddingBottom: 21,
    paddingRight: 12.36,
    paddingLeft: 12.75,
    alignItems: 'center',
    paddingTop: 12.75,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    marginBottom: 10,
  },
  name: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
  },
  deleteIcon: {minWidth: 18, minHeight: 18},
});

interface CardProps {
  fieldProps: {x: number; y: number; width: number; height: number};
  room: Room;
  onSelect: (room: Room) => void;
  onDelete(room: Room): void;
  onEdit: (room: Room) => void;
  style?: StyleProp<ViewStyle>;
  isDrag?: boolean;
}

export default function Card({
  fieldProps,
  room,
  onSelect,
  onDelete,
  onEdit,
  style,
  isDrag,
  ...props
}: CardProps) {
  const move = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return !(gestureState.dx === 0 && gestureState.dy === 0);
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: move.x,
          dy: move.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: ({nativeEvent}) => {
      const flag =
        nativeEvent.pageX > fieldProps.x &&
        nativeEvent.pageX < fieldProps.x + fieldProps.width &&
        nativeEvent.pageY > fieldProps.y &&
        nativeEvent.pageY < fieldProps.y + fieldProps.height;

      if (!flag) {
        return Animated.spring(move, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      }
      onSelect(room);
    },
  });

  const onPressDelete = () => onDelete(room);
  const onPressEdit = () => onEdit(room);

  return (
    <Animated.View
      {...(isDrag ? panResponder.panHandlers : null)}
      {...props}
      style={[
        styles.wrapper,
        {
          transform: [{translateX: move.x}, {translateY: move.y}],
          zIndex: move?.x || 2 % 1,
        },
        style,
      ]}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={onPressDelete}>
          <Close style={styles.deleteIcon} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onPressEdit}>
          <Edit />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.ellipse}>
        <Text>{room.name}</Text>
      </View>
      <Text style={styles.name}>{room.assignedDoctor?.name || 'Empty'}</Text>
    </Animated.View>
  );
}

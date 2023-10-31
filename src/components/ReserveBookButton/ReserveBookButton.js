import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ReserveBookButton (props) {
    return (
      <TouchableOpacity underlayColor='#9A4100' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Reserve Book</Text>
        </View>
      </TouchableOpacity>
    );
}

ReserveBookButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

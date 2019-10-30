import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const BodyText = props => {
  return (
    <Text {...props} style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NunitoSans-Bold',
    color: Colors.white,
    fontSize:15
  },
});

export default BodyText;
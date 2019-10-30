/**
 * This is the Custom Header here we have three item
 * Left Icon / image
 *  center: Text for header
 * Right Icon / image
 * This make customeing the header easy i have use this and it work great
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import BodyBold from '../components/UI/BodyBold';
import globalStyles from '../constants/styles';
import Colors from '../constants/colors';

const APPBAR_HEIGHT = Platform.select({
  ios: 44,
  android: 56,
  default: 64,
});

const AppBarReactNative = props => {
  return (
    <View style={{...globalStyles.shawdow,...styles.appBar}}>
      <View style={styles.leftNav}>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.leftNavOpactity}
          activeOpacity={0.6}>
          <Image source={props.leftNavImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerNav}>
        {props.toNotshowHeader ? null : (
          <BodyBold style={styles.centerNavText}>{props.title}</BodyBold>
        )}
      </View>

      {/* <View style={styles.rightNav}></View> */}
      <View style={styles.rightNav}>
      <TouchableOpacity
          onPress={props.onPress}
          style={styles.leftNavOpactity}
          activeOpacity={0.6}>
          <Image source={props.leftNavImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: APPBAR_HEIGHT,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor:Colors.alterColor

    // backgroundColor:colors.primary
  },
  leftNav: {
    //   marginLeft:8,
    flex: 1,
  },
  rightNav: {flex: 1,justifyContent:"flex-end"},
  leftNavOpactity: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:10
  },
  rightNavOpactity: {
    // flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:"center",
    paddingRight:10

  },
  leftNavText: {
    fontSize: 15,
    textAlign: 'center',
    //   backgroundColor:colors.black
  },
  centerNav: {
    //   borderBottomColor:colors.white,
    //   borderBottomWidth:1
    //   backgroundColor:colors.primary
  },
  centerNavText: {
    fontSize: 18,
    // textDecorationLine: 'underline',
    //   textAlign:"center"
  },
});

export default AppBarReactNative;

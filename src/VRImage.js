import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { ViroScene, ViroText, Viro360Image, Viro360Video } from 'react-viro';

export default class VRImage extends Component {
  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('../js/res/guadalupe_360.jpg')} />
      </ViroScene>
    );
  }
}

const styles = {
  txtHelloWorld: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
};

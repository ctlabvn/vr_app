import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { ViroScene, ViroText, Viro360Video } from 'react-viro';

export default class VRVideo extends Component {
  render() {
    return (
      <ViroScene>
        <Viro360Video
          source={{
            uri:
              'https://s3-ap-northeast-1.amazonaws.com/sonik-assets/simon/FFutureExchange.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI7OFTO2IBJDEHPVQ%2F20170925%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20170925T142218Z&X-Amz-SignedHeaders=host&X-Amz-Expires=60000&X-Amz-Signature=71073dd6f6e1265db0003eaef80b6845ffc3f4d3a6351e32d90d419ffdf25917'
          }}
          loop={true}
          paused={false}
          volume={1.0}
        />
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

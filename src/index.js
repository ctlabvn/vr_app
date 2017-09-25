import React, { Component } from 'react';
import { View, Text, AppRegistry, Button } from 'react-native';
import { ViroSceneNavigator } from 'react-viro';
import VRImage from './VRImage';
import VRVideo from './VRVideo';

const sharedProps = {
  apiKey: '25AFA21A-7F56-4D03-AB8B-B3F930612399'
};

export default class Root extends Component {
  state = {
    isShowingImage: false,
    isShowingVideo: false
  };

  render() {
    if (this.state.isShowingImage) {
      return (
        <ViroSceneNavigator
          {...sharedProps}
          initialScene={{ scene: VRImage }}
          onExitViro={() =>
            this.setState({ isShowingImage: false }, () => console.log('bbb'))}
        />
      );
    }
    if (this.state.isShowingVideo) {
      return (
        <ViroSceneNavigator
          {...sharedProps}
          initialScene={{ scene: VRVideo }}
          onExitViro={() =>
            this.setState({ isShowingVideo: false }, () => console.log('ddd'))}
        />
      );
    }
    return (
      <View>
        <View>
          <Button
            onPress={() =>
              this.setState(
                prev => ({ isShowingImage: !prev.isShowingImage }),
                () => console.log('aaa')
              )}
            title="Play Image 360"
          />
        </View>
        <View
          style={{
            marginTop: 20
          }}
        >
          <Button
            onPress={() =>
              this.setState(
                prev => ({ isShowingVideo: !prev.isShowingVideo }),
                () => console.log('ccc')
              )}
            title="Play Video 360"
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('kokosee', () => Root);
AppRegistry.registerComponent('ViroSample', () => Root);

import React from 'react';
import Loading from './component/Loading';
import Loadinggif from './component/Loadinggif';
// import Webviewtemp from './component/Webviewtemp';
import { StyleSheet,WebView,View,StatusBar,SafeAreaView,Platform} from 'react-native';
// import { Dimensions,Platform,NativeModules,DeviceInfo} from 'react-native';
// import {isIphoneX} from './component/ScreenUtil';
// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ?(isIphoneX()?44:20):StatusBar.currentHeight;

export default class App extends React.Component {

  renderLoading = ()=>{
    return(<Loadinggif />)
  }

  render() {
    return (  
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' />
          <WebView
            source={{uri: 'https://m.roverjourney.com/'}}
            style={{marginTop: Platform.OS === 'ios' ?0:20}}
            useWebKit={true}
            mixedContentMode='always'
            renderLoading={this.renderLoading}
            startInLoadingState
          />
        </View>
      </SafeAreaView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Platform.OS === 'ios' ?'#FFF' : '#000'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#eee'
  }
});

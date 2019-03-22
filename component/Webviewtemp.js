
import React from 'react';
import { WebView } from 'react-native';

export default class Webviewtemp extends React.Component {
  render() {
    return(
      <WebView
        source={{uri: 'https://m.roverjourney.com/'}}
        style={{marginTop: 0}}
        useWebKit={true}
        mixedContentMode='always'
      />
    )
  }
}

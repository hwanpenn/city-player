import React from 'react';
import { StyleSheet,WebView,View,StatusBar,SafeAreaView,Platform,Image,Dimensions} from 'react-native';
 
export default class Loadinggif extends React.Component {
  render() {
    return <View style={styles.container}>
              <View style={styles.welcomeContainer}>
                  <Image
                    source={
                      require('../assets/loading.gif')
                    }
                    style={styles.welcomeImage}
                  />
              </View>
          </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: Dimensions.get('window').height*0.5-150,
    marginLeft: 0,
  },
});

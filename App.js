import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, ScrollView, Animated } from 'react-native';
export default function App() {

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView >
      <Animated.View style={[styles.container, {
        height: scrollY.interpolate({
          inputRange: [10, 160, 185],
          outputRange:[60, 20, 0],
          extrapolate: 'clamp'
        }),
        opacity: scrollY.interpolate({
          inputRange: [1, 75, 170],
          outputRange: [1, 1, 0],
          extrapolate: 'clamp'
        })
        }]}>
        <Image style={styles.Imagecam} source={require('./src/assets/cam.png')} resizeMode='contain' />
        <Animated.Image style={[styles.Imagelogo],{ width: scrollY.interpolate({
           inputRange: [0, 120],
           outputRange: [160, 80],
           extrapolate: 'clamp'
           })}} source={require('./src/assets/logo.png')} resizeMode='contain' />
        <Image style={styles.Imagesend} source={require('./src/assets/send.png')} resizeMode='contain' />
      </Animated.View>

      <ScrollView 
      scrollEventThrottle={16}
      onScroll={ Animated.event([{
        nativeEvent: {
          contentOffset: { y: scrollY}
        },
      }],
      {
        useNativeDriver: false
      })}>

        <View style={styles.scrollView}>
          <View style={styles.scrollcontainer}>
            <Image style={styles.scrollImage} source={require('./src/assets/diego.png')} />
            <Text style={styles.scrollText}>diego_bayerl</Text>
          </View>
          <View style={styles.viewpost}>
            <Image style={styles.scrollfotopost} source={require('./src/assets/image.png')}/>
          </View>
          <View style={styles.ViewTextPost}>
            <Text style={styles.TextPost}>diego_bayerl :</Text>
            <Text style={styles.TextPost}>Testando animação com Animated do react-native</Text>
          </View>
        </View>

        <View style={styles.scrollView}>
          <View style={styles.scrollcontainer}>
            <Image style={styles.scrollImage} source={require('./src/assets/diego.png')} />
            <Text style={styles.scrollText}>diego_bayerl</Text>
          </View>
          <View style={styles.viewpost}>
            <Image style={styles.scrollfotopost} source={require('./src/assets/image1.png')}/>
          </View>
          <View style={styles.ViewTextPost}>
            <Text style={styles.TextPost}>diego_bayerl :</Text>
            <Text style={styles.TextPost}>Testando animação com Animated do react-native</Text>
          </View>
        </View>

        <View style={styles.scrollView}>
          <View style={styles.scrollcontainer}>
            <Image style={styles.scrollImage} source={require('./src/assets/diego.png')} />
            <Text style={styles.scrollText}>diego_bayerl</Text>
          </View>
          <View style={styles.viewpost}>
            <Image style={styles.scrollfotopost} source={require('./src/assets/image2.png')}/>
          </View>
          <View style={styles.ViewTextPost}>
            <Text style={styles.TextPost}>diego_bayerl :</Text>
            <Text style={styles.TextPost}>Testando animação com Animated do react-native</Text>
          </View>
        </View>

        <View style={styles.scrollView}>
          <View style={styles.scrollcontainer}>
            <Image style={styles.scrollImage} source={require('./src/assets/diego.png')} />
            <Text style={styles.scrollText}>diego_bayerl</Text>
          </View>
          <View style={styles.viewpost}>
            <Image style={styles.scrollfotopost} source={require('./src/assets/image3.png')}/>
          </View>
          <View style={styles.ViewTextPost}>
            <Text style={styles.TextPost}>diego_bayerl :</Text>
            <Text style={styles.TextPost}>Testando animação com Animated do react-native</Text>
          </View>
        </View>

        <View style={styles.scrollView}>
          <View style={styles.scrollcontainer}>
            <Image style={styles.scrollImage} source={require('./src/assets/diego.png')} />
            <Text style={styles.scrollText}>diego_bayerl</Text>
          </View>
          <View style={styles.viewpost}>
            <Image style={styles.scrollfotopost} source={require('./src/assets/image4.png')}/>
          </View>
          <View style={styles.ViewTextPost}>
            <Text style={styles.TextPost}>diego_bayerl :</Text>
            <Text style={styles.TextPost}>Testando animação com Animated do react-native</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101010',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  },
  Imagecam: {
    width: 30,
    height: 30
  },
  Imagelogo: {
    height: 40
  },
  Imagesend: {
    width: 30,
    height: 30
  },
  scrollView: {
    backgroundColor: '#DDD',
    margin: 7,
    borderRadius: 5,
  },
  scrollcontainer:{
    flexDirection: 'row',
    alignItems: "center"
  },
  scrollImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10
  },
  scrollText: {
    fontSize: 20,
    margin: 7,
  },
  viewpost:{
    justifyContent: "center",
    alignItems: "center"
  },
  scrollfotopost:{
    width: 350,
    height: 350,
    marginBottom: 10
  },
  ViewTextPost:{
    flexDirection: 'row',
    margin: 10,
    width: 270
  },
  TextPost:{
    fontSize: 18,
    marginLeft: 1,
  }
})
import React, {useState, useEffect, useLayoutEffect, Component} from 'react';
import { Platform, Text, View, StyleSheet,Dimensions,Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Polyline, MarkerAnimated, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import haversine from 'haversine';
import ImageBtn from './components/ImageBtn';
//import Label from './components/Label';
import {Ionicons} from "@expo/vector-icons";

export default class MapScreen extends React.Component{

  
  constructor(props) {
    super(props);
/*
mode 

wait : 시작전 -> 재생버튼 렌더링
runnging : 러닝 중 -> 멈춤 버튼 렌더링


*/
    this.state = {
      mode : 'wait', 
      kcal : 0,
      latitude: 35.91395373474155,
      longitude: 127.73829440215488,
      routeCoordinates: [],
      distanceTravelled: 0, // 이동한 거리 
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: 35.91395373474155,
        longitude: 127.73829440215488,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }),
    };
  }

  changeMode = mode =>{ // 버튼 클릭시 바뀌어질 모드.
    this.setState = {
      mode : mode,
    }
  }
  getIcon = mode =>{

    if(mode ==='wait'){ //대기중
      return <ImageBtn changeMode={this.changeMode} type='wait'/>;
      
    }
    else if(mode ==='running ') { //러닝중
      return <ImageBtn changeMode={this.changeMode} type='running'/>;

    }
    
  }

  calcDistance = newLatLng => { //거리 계산
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  calcKcal = distanceDelta=>{
    // 이동한 거리를 이용해 kcal 계산해주는 함수. 0.1m당 7kcal로 계산함.
    return distanceDelta/0.1 * 7;
  }
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  
  componentDidMount() {

    // 위치 변화 감지
    Location.watchPositionAsync({ accuracy: Location.Accuracy.Balanced, timeInterval: 300, distanceInterval: 1 },
      position => {
        const { coordinate, routeCoordinates, distanceTravelled,kcal } = this.state;
        const { latitude, longitude } = position.coords;
        
        const newCoordinate = {
          latitude,
          longitude
        };
        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
           }
         } else {
           coordinate.timing(newCoordinate).start();
         }
         
         this.setState({
           latitude,
           longitude,
           routeCoordinates: routeCoordinates.concat([newCoordinate]),
           distanceTravelled:distanceTravelled + this.calcDistance(newCoordinate),
           kcal: kcal+ this.calcKcal(distanceTravelled),
           prevLatLng: newCoordinate
         });
       },
       error => console.log(error),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  
  render(){
    return (<View style={styles.map}>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <View style={styles.StyledView} >
            <Text style={styles.StyledText}>{'거리(km)'}</Text>
            <Text>{this.state.distanceTravelled.toFixed(3)}</Text>
          </View>
        <Ionicons name="stop-circle" size={100} />
        <View style={styles.StyledView} >
            <Text style={styles.StyledText}>{'칼로리'}</Text>
            <Text>{this.state.kcal.toFixed(3)}</Text>
        </View>
        </View>
        
  {this.getIcon()}
  <MapView
  style={styles.map}
  showUserLocation
  followUserLocation
  loadingEnabled
  region={this.getMapRegion()}
  showsUserLocation
  onPress={(e)=>{
    console.log(e.nativeEvent.coordinate)
    }}>

<Polyline coordinates={this.state.routeCoordinates} strokeWidth={5}  />
  
<MarkerAnimated
    ref={marker => {
      this.marker = marker;
    }}
    coordinate={this.state.coordinate}
  /> 


<MarkerAnimated
        ref={marker => { this.marker = marker }}
        coordinate={this.state.coordinate}
      />

</MapView>
    </View>);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  StyledView: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    borderWidth : 1,
    borderColor: "gray",
    padding : 15,
  },
  StyledText: {
    fontSize : 20,
    fontWeight : "bold"
  }
});

/*
export default function Map() {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 35.91395373474155,
    longitude: 127.73829440215488,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const [mapWidth, setMapWidth] = useState('99%');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const updateMapStyle = () => {
    setMapWidth('100%')
  }

  // Get current location information 
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log('[LOG] current location : ' + text);
  }

  // Location subscription in the global scope
  let locationSubscrition = null

  // Locatoin tracking inside the component
  location = Location.watchPositionAsync({ accuracy: Location.Accuracy.Balanced, timeInterval: 300, distanceInterval: 1 },
      position => {
        const { coordinate, routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;
        
        //새롭게 이동된 좌표
        const newCoordinate = {
          latitude,
          longitude
        };
        
        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
           }

         } else {
           coordinate.timing(newCoordinate).start();
         }
         
         // 좌표값 갱신하기
         this.setState({
           latitude,
           longitude,
           routeCoordinates: routeCoordinates.concat([newCoordinate]), //이동경로
           distanceTravelled:distanceTravelled + this.calcDistance(newCoordinate), // 이동거리
           prevLatLng: newCoordinate
         });
      }
    );

    /*location = Location.watchPositionAsync(
    {
      // Tracking options
      accuracy: Location.Accuracy.High,
      distanceInterval: 10,
    },
    location => {
      /* Location object example:
        {
          coords: {
            accuracy: 20.100000381469727,
            altitude: 61.80000305175781,
            altitudeAccuracy: 1.3333333730697632,
            heading: 288.87445068359375,
            latitude: 36.7384213,
            longitude: 3.3463877,
            speed: 0.051263172179460526,
          },
          mocked: false,
          timestamp: 1640286855545,
        };
      */
      // Do something with location...
 //   }
 // )
/*
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
       initialRegion={initialRegion}
       style={[styles.map, { width: mapWidth }]}
       provider={PROVIDER_GOOGLE}
       showsUserLocation={true}
       showsMyLocationButton={true}
       onMapReady={() => {
         updateMapStyle()
       }}
      >
        <MapView.Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324, }}                
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
*/

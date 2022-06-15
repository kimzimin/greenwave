import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 35.91395373474155,
    longitude: 127.73829440215488,
    latitudeDelta: 5,
    longitudeDelta: 5,
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

// Locatoin tracking inside the component\
/*location = Location.watchPositionAsync({ accuracy: Location.Accuracy.Balanced, timeInterval: 300, distanceInterval: 1 },
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

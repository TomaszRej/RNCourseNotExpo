import React from 'react';
import {Button, StyleSheet, Text, View,Dimensions} from "react-native";
import MapView from 'react-native-maps';
class PickLocation extends React.Component {
    state = {
      focusedLocation: {
          latitude:40.730610,
          longitude:-73.935242,
          latitudeDelta:0.0122,
          longitudeDelta:
              Dimensions.get('window').width/
              Dimensions.get('window').height * 0.0122
      },
        locationChosen: false
    };

    pickLocationHandler = (e) => {
        const coords = e.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        });


        this.setState(prevState => {
            return{
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        });
        this.props.onLocationPick({
            latitude: coords.latitude,
            longitude: coords.longitude
        })
    };
    getLocationHandler = () => {

      navigator.geolocation.getCurrentPosition(pos => {
          const coordsEvent = {
              nativeEvent: {
                  coordinate:{
                      latitude: pos.coords.latitude,
                      longitude: pos.coords.longitude
                  }
              }
          }
            this.pickLocationHandler(coordsEvent);
      },err =>{
          console.log(err);
          alert('Wybierz pozycje manualnie');
      })
    };
    render() {

        let marker = null;
        if(this.state.locationChosen){
            marker = <MapView.Marker coordinate={this.state.focusedLocation}/>
        }


        return (
            <View style={styles.container}>
            <MapView
                initialRegion={this.state.focusedLocation}
                // region={this.state.focusedLocation}
                style={styles.map}
                onPress={this.pickLocationHandler}
                ref={ ref=> this.map = ref}

            >{marker}</MapView>
                <View style={styles.button}>
                    <Button title='Locate me'
                       onPress={this.getLocationHandler}     />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    button: {
        margin: 8
    },
    map: {
        width: '100%',
        height: 150
    },

});

export default PickLocation;
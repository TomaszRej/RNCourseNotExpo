import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from "./src/store/configureStore";
import {Provider} from 'react-redux';
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();
//Register Screens
Navigation.registerComponent('awasome-places.AuthScreen',
    () => AuthScreen, store, Provider);
Navigation.registerComponent('awasome-places.SharePlaceScreen',
    () => SharePlaceScreen, store, Provider);
Navigation.registerComponent('awasome-places.FindPlaceScreen',
    () => FindPlaceScreen, store, Provider);
Navigation.registerComponent('awasome-places.PlaceDetailScreen',
    () => PlaceDetailScreen, store, Provider);

Navigation.registerComponent('awasome-places.SideDrawer', () => SideDrawer);
//Start an App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'awasome-places.AuthScreen',
        title: 'Login'
    }
});



// tak bylo przed dodaniem navigacji
// import React, {Component} from "react";
// import {StyleSheet, View} from "react-native";
// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import placeImage from './assets/beautiful-place.jpg';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import {connect} from 'react-redux';
// import {addPlace, deletePlace, deselectPlace, selectPlace} from "./src/store/actions/index";
//
//
// class App extends Component {
//     // state = {
//     //     places: [],
//     //     selectedPlace: null
//     // };
//
//     placeAddedHandler = placeName => {
//         this.props.onAddPlace(placeName);
//         console.log(placeName,'place added')
//     };
//     placeDeletedHandler = () => {
//         this.props.onDeletePlace();
//     };
//
//     placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//     };
//     modalClosedHandler = () => {
//       this.props.onDeselectPlace();
//     };
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <PlaceDetail selectedPlace={this.props.selectedPlace}
//                              onItemDeleted={this.placeDeletedHandler}
//                              onModalClosed={this.modalClosedHandler}
//                 />
//                 <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
//                 <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 50,
//         paddingLeft: 10,
//         paddingRight: 10,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "flex-start"
//     }
// });
//
// const mapStateToProps = state => {
//     return {
//         places: state.places.places,
//         selectedPlace: state.places.selectedPlace
//     }
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         onAddPlace: (name) => dispatch(addPlace(name)),
//         onDeletePlace: () => dispatch(deletePlace()),
//         onSelectPlace: (key) => dispatch(selectPlace(key)),
//         onDeselectPlace: () => dispatch(deselectPlace()),
//
//     }
// };
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);

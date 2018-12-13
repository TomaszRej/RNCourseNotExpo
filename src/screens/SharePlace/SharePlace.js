import React from 'react';
import {View} from 'react-native';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import {connect} from 'react-redux';
import {addPlace} from "../../store/actions/index";

class SharePlaceScreen extends React.Component {
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };

    render() {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
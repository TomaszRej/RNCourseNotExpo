import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';

import {connect} from 'react-redux';
import {addPlace} from "../../store/actions/index";
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";
import validate from "../../utility/validation";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


class SharePlaceScreen extends React.Component {

    static navigatorStyle = {
        navBarButtonColor: 'orange'
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

        this.state = {
            controls: {
                placeName: {
                    value: "",
                    valid: false,
                    validationRules: {
                        minLength: 3
                    },
                    touched: false


                },
                location: {
                    value: null,
                    valid: false
                },
                image: {
                    value: null,
                    valid: false
                }

            }
        }
    };

    onNavigatorEvent = e => {
        if (e.type === 'NavBarButtonPress') {
            if (e.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left'
                });
            }
        }
    };

    placeNameChangedHandler = val => {
        // this.setState({
        //     placeName: val
        // })
        console.log(this.state.controls.placeName.validationRules);

        this.setState(prevState => {
            let rule;
            for (const el in prevState.controls.placeName.validationRules) {
                rule = el;
            }

            console.log(validate(val, rule), 'wartosc walidacji');
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val,
                        valid: validate(val, prevState.controls.placeName.validationRules),

                        touched: true


                    }
                }
            }
        })
    };

    locationPickedHandler = location => {
        this.setState(prevState => {
            return{
                controls: {
                    ...prevState.controls,
                    location: {
                        value: location,
                        valid: true
                    }
                }

            }
        })
    };
    imagePickedHandler = image => {
        this.setState(prevState => {
            return{
                controls: {
                    ...prevState.controls,
                    image: {
                        value: image,
                        valid: true
                    }
                }
            }
        })
    };

    placeAddedHandler = () => {

            this.props.onAddPlace(this.state.controls.placeName.value,
                this.state.controls.location.value,
                this.state.controls.image.value);

    };

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>

                    <MainText><HeadingText>Share a place with Us!</HeadingText> </MainText>
                    <PickImage onImagePicked={this.imagePickedHandler}/>
                    <PickLocation onLocationPick={this.locationPickedHandler}
                    />
                    <PlaceInput
                        placeData={this.state.controls.placeName}
                        onChangeText={this.placeNameChangedHandler}
                        onLocationPick={this.locationPickedHandler}
                    />
                    <View style={styles.button}>
                        <Button
                            title='Share the Place'
                            onPress={this.placeAddedHandler}
                            disabled={!this.state.controls.placeName.valid || !this.state.controls.location.valid ||
                            !this.state.controls.image.valid}

                        />
                    </View>
                </View>

            </KeyboardAwareScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    button: {
        margin: 8
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    imagePreview: {
        width: '100%',
        height: '100%'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName,location,image) => dispatch(addPlace(placeName,location,image))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends React.Component {
    render() {
        return (
            <View style={[styles.container, {width: Dimensions.get('window').width * 0.8}]}>
                <TouchableOpacity onPress={()=>{alert('pressed')}}>
                <View style={styles.sideDrawer}>
                    <Icon name="ios-log-out" size={30} color='#aaa' style={styles.drawerItemIcon}/>
                    <Text>
                        Sign Out
                    </Text>

                </View>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        backgroundColor: 'white',
        flex: 1
    },
    sideDrawer: {
        flexDirection: 'row',
        //paddingTop: 50,
        alignItems: 'center',
        margin:5,
        padding: 10,
        backgroundColor: '#eee'
    },
    drawerItemIcon:{
        marginRight: 20
    }

});

export default SideDrawer;
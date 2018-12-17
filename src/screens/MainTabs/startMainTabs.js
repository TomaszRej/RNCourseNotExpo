import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Platform from 'react-native';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? 'md-map': 'ios-map',30),
        Icon.getImageSource(Platform.OS === 'android' ? 'md-share-ald':'ios-share',30),
        Icon.getImageSource(Platform.OS === 'android' ? 'md-menu':'ios-menu',30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'awasome-places.FindPlaceScreen',
                    label: 'Find Place label',
                    title: 'Find Place Title',
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons:[
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: 'awasome-places.SharePlaceScreen',
                    label: 'Share Place label',
                    title: 'Share Place Title',
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons:[
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }

                        ]
                    }
                }
            ],
            tabsStyle:{
                tabBarSelectedButtonColor: 'orange'
            },
            appStyle:{
                //this only for android
                tabBarSelectedButtonColor: 'orange'
            },
            drawer: {
                left: {
                    screen: 'awasome-places.SideDrawer'
                }
            }
        });
    });

};

export default startTabs;

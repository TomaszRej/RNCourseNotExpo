import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
const startTabs = () => {
    Promise.all([
        Icon.getImageSource('md-map',30),
        Icon.getImageSource('ios-share-alt',30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'awasome-places.FindPlaceScreen',
                    label: 'Find Place label',
                    title: 'Find Place Title',
                    icon: sources[0]
                },
                {
                    screen: 'awasome-places.SharePlaceScreen',
                    label: 'Share Place label',
                    title: 'Share Place Title',
                    icon: sources[1]
                }
            ]
        });
    });

};

export default startTabs;

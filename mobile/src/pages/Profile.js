import React, { Profiler } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
    const githutUsername = navigation.getParam('githut_username')

    return < WebView style={{ flex: 1 }
    } source={{ uri: `http://github.com/${githutUsername}` }} />
}

export default Profile;
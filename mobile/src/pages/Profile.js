import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

function Profile({ navigation }) {

    const githubUsername = navigation.getParam('github_username')

    const url = 'https://github.com/' + githubUsername

    // Por algum motivo não deu para utilizar template string, diretamente em uri. Pesquisar isso futuramente
    return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
}   

export default Profile
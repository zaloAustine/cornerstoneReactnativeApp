import React, { Component } from "react"
import { StyleSheet, View, Text, Image } from "react-native"

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.image}>
                <Image source={{ uri: 'https://thumbs.dreamstime.com/b/offering-plate-19244371.jpg' }} style={{ width: 400, height: 300 }} />
            </View>
            <View>
                <Text style={{
                    margin: 22,
                    fontSize:31,
                    fontColor:`#000000`
                    }}>
                    Audio Sermons
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    // image: {
    //     width: '100%',
    //     height: '50%'
    // }
})
export default HomeScreen;
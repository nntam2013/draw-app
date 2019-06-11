import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Expo from 'expo'
import {GLView} from 'expo-gl'
import * as ExpoPixi from 'expo-pixi'

export default class App extends Component {
    state = {
        image: null,
        strokeColor: Math.random() * 0xffffff,
        strokeWidth: Math.random() * 30 + 10,
        lines: [
            {
                points: [{ x: 300, y: 300 }, { x: 600, y: 300 }, { x: 450, y: 600 }, { x: 300, y: 300 }],
                color: 0xff00ff,
                alpha: 1,
                width: 10,
            },
        ],
        // appState: AppState.currentState,
    };
    onChange = async ({width, height}) => {
        const options = {
            format: 'png', /// PNG because the view has a clear background
            quality: 0.1, /// Low quality works because it's just a line
            result: 'file',
            height,
            width
        };
        /// Using 'Expo.takeSnapShotAsync', and our view 'this.sketch' we can get a uri of the image
        // const uri = await Expo.takeSnapshotAsync(this.sketch, options);
        // for (let line of this.sketch.lines) {
        //     console.log(line.points)
        // }
    };

    render() {
        const color = 0x0000ff;
        const width = 5;
        const alpha = 0.5;
        return (
            <View style={styles.container}>
                <Text>Hello</Text>

                <ExpoPixi.Sketch
                    ref={ref => this.sketch = ref}
                    onChange={this.onChange}
                    strokeColor={color}
                    strokeWidth={width}
                    strokeAlpha={alpha}
                    initialLines={this.state.lines}
                    style={{flex:1}}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',



        justifyContent: 'center',
    },
});


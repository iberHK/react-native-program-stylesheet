import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dialog}>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              應用程式更新
            </Text>
            <Text style={styles.status}>
              更新中...
            </Text>
          </View>
          <View style={styles.progressView}>
            <View style={styles.progressBg} />
            <View style={styles.progressFg} />
          </View>
          <Text style={styles.progressText}>
            80%
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 0x00000050
  },
  dialog: {
    width: 307,
    height: 136,
    marginLeft: 34,
    marginRight: 34,
    backgroundColor: '#ffffff',
    borderRadius: 5
  },
  titleView: {
    width: 375,
    height: 22,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 18
  },
  status: {
    fontSize: 14,
    fontWeight: '100',
    marginLeft: 104,
    color: '#333333'
  },
  progressView: {
    marginTop: 29,
  },
  progressBg: {
    width: 234,
    height: 4,
    marginLeft: 16,
    borderRadius: 4,
    backgroundColor: '#DEDFE0'
  },
  progressFg: {
    width: 188,
    height: 4,
    marginLeft: 16,
    borderRadius: 4,
    backgroundColor: '#1097D5',
    position: 'absolute'
  },
  progressText: { //其实所有的子控件，都可以以position:absolute定位到父容器中，来达到节省布局节点
    fontSize: 14,
    lineHeight: 20,
    position: 'absolute',
    top: 73,
    right: 18,
    color: '#1097D5',
    fontWeight: '100'
  }
});
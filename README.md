# react-native-program-stylesheet
重写StyleSheet.create方法，无损RN原生代码。
把任意屏幕宽分成375，快速实现适配任意分辨率的布局。

🤗 🤗 随手给颗星星呗，有bug或者交流，欢迎留言第一时间维护。🤗 🤗<br>

![img](https://github.com/iberHK/react-native-program-stylesheet/blob/master/screenshot/demo.png?raw=trueg)

### 安装：
<code>yarn add react-native-program-stylesheet</code><br>

### 使用:
### <li>需要在程序入口处导入</li>
<code>index.js</code>

<code>
import { AppRegistry } from 'react-native';
import App from './App';
//在程序入口处导入
import StyleSheet375 from 'react-native-program-stylesheet';
AppRegistry.registerComponent('example', () => App);
</code>


### <li>其他页面正常使用StyleSheet，不用再次import</li>
<code>
    App.js (或者其他任意页面)
    const styles = StyleSheet.create({
  dialog: {
    width: 307,
    height: 136,
    marginLeft: 34,
    marginRight: 34,
    backgroundColor: '#ffffff',
    borderRadius: 5
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
</code>
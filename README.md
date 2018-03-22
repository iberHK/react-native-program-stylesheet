# react-native-program-stylesheet
重写StyleSheet.create方法，无损RN原生代码。
把任意屏幕宽分成375，快速实现适配任意分辨率的布局。

🤗 🤗 随手给颗星星呗，有bug或者交流，欢迎留言第一时间维护。🤗 🤗<br>

![img](https://github.com/iberHK/react-native-program-stylesheet/blob/master/screenshot/demo.png?raw=true)

### 安装：
<code>yarn add react-native-program-stylesheet</code><br>

### 使用:
### <li>在程序入口处导入</li>
<code>index.js</code>

<code>
import { AppRegistry } from 'react-native';<br>
import App from './App';<br>
//在程序入口处导入<br>
import StyleSheet375 from 'react-native-program-stylesheet';<br>
AppRegistry.registerComponent('example', () => App);
</code>


### <li>其他页面正常使用StyleSheet，不用再次import</li>
<code>
    App.js (或者其他任意页面)<br>
    const styles = StyleSheet.create({<br>
    dialog: {<br>
    width: 307,<br>
    height: 136,<br>
    marginLeft: 34,<br>
    marginRight: 34,<br>
    backgroundColor: '#ffffff',<br>
    borderRadius: 5<br>
  },<br>
  progressText: { //其实所有的子控件，都可以以position:absolute定位到父容器中，来达到节省布局节点<br>
    fontSize: 14,<br>
    lineHeight: 20,<br>
    position: 'absolute',<br>
    top: 73,<br>
    right: 18,<br>
    color: '#1097D5',<br>
    fontWeight: '100'<br>
  }<br>
});<br>
</code>
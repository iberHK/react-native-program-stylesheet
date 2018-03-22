# react-native-program-stylesheet
重写StyleSheet.create方法，无损RN原生代码。
把任意屏幕宽分成375，快速实现适配任意分辨率的布局。

🤗 🤗 随手给颗星星呗，有bug或者交流，欢迎留言第一时间维护。🤗 🤗<br>

![img](https://github.com/iberHK/react-native-program-stylesheet/blob/master/screenshot/demo.png?raw=true)

![img](https://github.com/iberHK/react-native-program-stylesheet/blob/master/screenshot/demo2.png?raw=true)

### 安装：
<code>yarn add react-native-program-stylesheet</code><br>

### 使用:
### <li>在程序入口处import</li>
<code>index.js</code>

<pre>
import { AppRegistry } from 'react-native';
import App from './App';

//在程序入口处导入
import StyleSheet375 from 'react-native-program-stylesheet';

AppRegistry.registerComponent('example', () => App);
</pre>


### <li>其他页面正常使用StyleSheet，不用再次import</li>
App.js (或者其他任意页面中使用)

<pre>
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
  progressText: { //在格式化成375情况下，所有的子控件，可以position:absolute定位到父容器中，节省节点层级
    fontSize: 14,
    lineHeight: 20,
    position: 'absolute',
    top: 73,
    right: 18,
    color: '#1097D5',
    fontWeight: '100'
  }
});
</pre>

### <li>非StyleSheet中使用</li>
//当不是使用StyleSheet进行布局时，引用
import getSize from 'react-native-program-stylesheet';

```
<View style={{
    position: 'absolute', 
    top: getSize(40),
    left: getSize(40),
    width: getSize(50),
    height: getSize(50), 
    backgroundColor: '#ff0000'}}/>
```

### <li>优化ios plus 一个像素的显示问题，根据分辨率保证最小1个像素渲染，divider border必备</li>

<pre>
if (size < 1) {
    return (PixelRatio.get() == 3 ? 2 : 1) / PixelRatio.get()
}
</pre>

```
//一条水平分割线
<View style={{width: 375, height: 0.5, backgroundColor:'#dcdcdc'}}>
```


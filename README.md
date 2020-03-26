# react-native-program-stylesheet
重写StyleSheet.create方法，无损RN原生代码。
把任意屏幕宽分成375，快速实现适配任意分辨率的布局。

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
<code>App.js (或者其他任意页面中使用)</code>

<pre>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cover: {
    position: 'absolute',
    width: 375,       //屏幕宽度
    height: Number.MAX_SAFE_INTEGER,  //屏幕高度
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
  progressText: { //在375机制下，可以放心使用这种方式布局
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

### <li>Component中使用</li>
在继承自Component中使用，不是使用StyleSheet时，

```
export default class App extends Component {

  render(){
    return <View style={{
        position: 'absolute', 
        top: this.getSize(40),
        left: this.getSize(40),
        width: this.getSize(50),
        height: this.getSize(50), 
        backgroundColor: '#ff0000'}}/>
  }

}
```

### <li>非StyleSheet非Component中使用</li>
<pre>
import ProgramStyleSheet from 'react-native-program-stylesheet';

export default class TestUtils {

    static computeSize(size) {
        return ProgramStyleSheet.getSize(size);
    }

}
</pre>

### <li>优化iPhone Plus 一个像素的显示问题，根据分辨率保证最小1个像素渲染，divider、border必备</li>

<code>一条水平分割线</code>
```
<View style={{width: 375, height: 0.5, backgroundColor:'#dcdcdc'}}>
```


### <li>屏幕宽和屏幕高</li>

<pre>
StyleSheet.create({
  container: {
    width: 375,       //屏幕宽
     height: Number.MAX_SAFE_INTEGER,  //屏幕高度
  }
})
</pre>

import {
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native';

//需要就行代码格式化的参数
const PropsName = [
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomWidth',
    'borderRadius',
    'borderRightWidth',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopWidth',
    'shadowRadius',
    'elevation',
    'fontSize',
    'letterSpacing',
    'lineHeight',
    'width',
    'height',
    'textShadowRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderWidth',
    'borderRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'left',
    'margin',
    'marginBottom',
    'marginHorizontal',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginVertical',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'padding',
    'paddingBottom',
    'paddingHorizontal',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingVertical',
    'right',
    'top'
]

//屏幕宽，部分android机型得到的不是int，故parseInt取整
const screenWidth = parseInt(Dimensions.get('window').width);

//缓存原生create
const create = StyleSheet.create;

//将size转换成375下的值
const getSize = (size) => {
    //当size < 1，一般用于边框或者分割线，避免不足一个像素的情况。
    if (size < 1) {
        return (PixelRatio.get() == 3 ? 2 : 1) / PixelRatio.get()
    } else {
        return parseInt(screenWidth * size / 375);
    }
}

//字体大小的转换
const getFontSize = (size) => {
    return getSize(size); //这里直接使用375的宽度就行转换，这里保留以便单独针对字体大小进行扩展定制
}

//就行375转换
const formatNumber = (t) => {
    //get属性列表
    let tProps = Object.getOwnPropertyNames(t);
    let length = tProps.length;
    for (var i = 0; i < length; i++) {//遍历属性
        let propName = tProps[i];   //取一个属性
        if (typeof t[propName] == 'object') { //若{}，递归修改
            formatNumber(t[propName]);
        } else {
            if (propName == 'fontSize') {     //字体大小单独处理
                t[propName] = getFontSize(t[propName]);
            } else {
                //判断需要转换的参数，且值为number类型
                if (PropsName.indexOf(propName) != -1 && typeof t[propName] == 'number') {
                    t[propName] = getSize(t[propName]);
                }
            }
        }
    }
}

//支持375宽适配
StyleSheet.create = (t) => {
    formatNumber(t);
    return create(t);
}

module.exports = getSize;
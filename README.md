# 组件库

一个不断更新优化的组件库

### 环境
- node
- eslint
- Vue 3
- TypeScript
- Vite

### 使用方式
```bash
# 安装
npm i components-library-ciwei

# 全局引入方式 main.ts 或 main.js
import 'components-library-ciwei/dist/style.css'
import xxxx from 'components-library-ciwei'
app.use(xxxx)

# 单组件引入方式 css 参照全局引入
举例: 颜色选择器

import { ciwColorPicker } from 'components-library-ciwei'
app.use(ciwColorPicker)
```

### 组件 具体引入根据需求自行调整，只展示全局引入方式

ciwColorPicker 颜色选择器:
-
使用方式
   ```bash
       <ciw-Color-Picker v-model="color"></ciw-Color-Picker>
   ```

### 公共参数

|  属性  |        描述        |            类型            | 是否必填 | 默认值  |
| :----: | :----------------: | :------------------------: | :------: | :-----: |
| value  |     初始颜色值     | `string` \| `rbg` \| `hsl` | `false`  | `#fff`  |
| theme  |        主题        |     `dark` \| `light`      | `false`  | `dark`  |
| height | 颜色选择器区域高度 |          `number`          | `false`  |  `150`  |
| width  | 颜色选择器区域宽度 |          `number`          | `false`  |  `233`  |
| colors |    预选颜色列表    |         `[string]`         | `false`  |  `[]`   |
|  btn   |  是否显示按钮按钮  |         `boolean`          | `false`  | `false` |
| zIndex |      菜单层级      |          `number`          | `false`  |   `2`   |

### 组件参数

| 属性  |   描述   |                     类型                     | 是否必填 |   默认值    |
| :---: | :------: | :------------------------------------------: | :------: | :---------: |
| size  | 组件大小 | `undefined` \| `medium` \| `small` \| `mini` | `false`  | `undefined` |

### 指令、方法参数

|  属性  |           描述           |    类型    | 是否必填 | 默认值 |
| :----: | :----------------------: | :--------: | :------: | :----: |
| change | 颜色值发生改变时触发事件 | `Function` | `false`  | `none` |

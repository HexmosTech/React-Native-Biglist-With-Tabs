<div align="center">

# Biglist with tabs (React-Native)
<br>


[![js-prittier-style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://prettier.io/)
[![Compatibility](https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20Web%20%7C%20expo-blue.svg?style=for-the-badge)](http://npmjs.org/package/react-native-big-list)
## Manage biglist items by scrolling through section tabs 
</div>
<br/>

### 🎨 Screenshot
<img src="./assets/Biglistwithtabs.gif" width="300" height='600'  /> 
<br/>

### How to use ?
step:1
| npm                                        | yarn                             |
| ------------------------------------------ | -------------------------------- |
| `npm install FlyweightGroup/React-Native-Biglist-With-Tabs` | `yarn add FlyweightGroup/React-Native-Biglist-With-Tabs` |


step:2
`import BigListTab from 'BigList-With-Tabs'`


<br/>


### Basic Example

#### JavaScript
```
import BigListTab from 'BigList-With-Tabs'
// ...
const MyExample = ({ data }) => {
  ///provide your json data and onclick event through props..
  return <BigListTab sectiondata={data} onClickItem={your function}  />;
}
```

<br/>

### Remember !
Json format of the Section Data should be 
```
[
   [
      {
         "category":"section heading",
         "sectionId":"section id"
      },
      {
         "item1":"item"
      },
      {
         "item2":"item"
      }
   ],
   [
      {
         "category":"section heading",
         "sectionId":"section id"
      },
      {
         "item1":"item"
      },
      {
         "item2":"item"
      }
   ]
] 
``` 

### License 
MIT


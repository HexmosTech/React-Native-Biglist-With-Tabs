
# Biglist with tabs (React-Native)
## Manage biglist items by scrolling through section tabs 

### How to use ?
`yarn add FlyweightGroup/React-Native-Biglist-With-Tabs `

`import BigListTab from 'BigList-With-Tabs'`

#### Basic example

```javascript
`import BigListTab from 'BigList-With-Tabs'`
// ...
const MyExample = ({ data }) => {
  ///provide your json data and onclick event through props..
  return <BigListTab sectiondata={data} onClickItem={your function}  />;
}
```

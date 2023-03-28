# 属性选择器
### 部分属性值选择
* p[class~='urgent'] 波浪号就是包含的意思，p类名包含urgent的就执行以下操作.
```javascript
p[class~='urgent'] {
    font-weight: bold;
    font-size: 3rem;
    color: #ffb900;

}
```
* 字串匹配属性选择器
* [foo^="bar"]  选择foo属性值以'bar'开头的所有元素
* [foo$="bar"]  选择foo属性值以"bar"结尾的所有元素
* [foo*="bar"] 选择foo属性值中包含字串"bar"的所有元素

* 这并不局限于class、href属性，在此任何属性都可以用。完全可以很具title，alt，src，id属性值应用样式。

* ```javascript
  img[src*="space"] {border: 5px solid red}
  ```

* 特定属性选择类型。

* ```javascript
  
  *[lang|="en"] {
      color: #333;
  } 选择lang属性等于en或者以en-开头的所有元素。
  
  <h1 lang="en">hello</h1>
           <p lang="en-us">greeting!</p>
           <div lang="en-au">G'day!</div>
           <h3 lang="fr">hellJrooanao</h3>
  
  
  img[src|="figure"] {border: 1px solid #555}
  ```

* 


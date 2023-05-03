# Advanced CSS

### Three Pillars of Writing Good HTML and CSS (Never forgot them)

- Responsive design
    - Fluid layout
    - Media queries
    - Responsive images
    - Correct units
    - Desktop-first vs mobile-first
- Maintainable and scalable code
    - Clean
    - Easy-to-understand
    - Growth
    - Reusable
    - How to organize files
    - How to name classes
    - How to structure HTML
- Web performance
    - Less HTTP request
    - Less code
    - Compress code
    - Use a CSS preprocessor
    - Less images
    - Compress images
      
        ![F3E2276911A06A21F79591A3B93A54BA.png](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251407981.png)
        
        ![92E7E92975F0800D35423F69CF589B3F.png](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251408567.png)
        
          
        
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251452572.png)
        
        Selector  Declaration block
        
        Property  Declared value
        
    
    级联：
    
    ![1173410B8D74085C285A1C02086C8BBA.png](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251408121.png)
    
    ![IMG_1132.PNG](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251409752.png)
    
    ![IMG_1133.PNG](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251409550.png)
    
    summary
    
    - 
    
    CSS declarations marked with !important have the highest priority;
    • But, only use !important as a last resource. It’s better to use correct specificities — more
    maintainable code!
    • Inline styles will always have priority over styles in external stylesheets;
    • A selector that contains 1 ID is more specific than one with 1000 classes;
    • A selector that contains 1 class is more specific than one with 1000 elements;
    • The universal selector * has no specificity value (0, 0, 0, 0);
    • Rely more on specificity than on the order of selectors;
    • But, rely on order when using 3rd-party stylesheets — always put your author stylesheet las
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251409635.png)
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251409762.png)
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251452141.png)
    
    ### INHERITANCE IN CSS
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251409575.png)
    
    - summary
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251452029.png)
    
    - THE VISUAL FORMATTING MODEL
        - 
        
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251409422.png)
        
    - THE BOX MODEL
        - 
        
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251409616.png)
        
        - the height and width
            - 
            
            ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251410680.png)
            
        - THE BOX MODEL WITH BOX-SIZING: BORDER-BOX
            - 
            
            ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446437.png)
        
    - BOX TYPES: INLINE, BLOCK-LEVEL AND INLINE-BLOCK
        - 
        
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446423.png)
        
        - position
            - NORMAL FLOAT
            - FLOAT
            - ABSOLUTE POSITION
            - 
            
            ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446749.png)
            
        - 堆叠上下文 STACKING CONTEXTS
            - 
            
            ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446303.png)
        
    - THE THINK - BUILD - ARCHITECT MINDSET
    - 
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446257.png)
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446812.png)
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446603.png)
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251446433.png)
    
    ### Sass
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251447215.png)
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251447160.png)
    
    ```html
    <nav class="clearfix">
        <ul class="navigation">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Login in</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div class="button">
          <a class="btn-main" href="#"> Sign up</a>
          <a class="btn-hot" href="#">Get a quote</a>
        </div>
      </nav>
    ```
    
    - main.scss
      
        ```html
        * {
          margin: 0;
          padding: 0;
        }
        
        $color-primary: #08f25b; //green
        $color-secondary: #ffd8a8;
        $color-tertiary: #484949;
        $background: #f1f3f5;
        $font-nav: 2rem;
        $font-button: 3.2rem;
        $color-button: #aaa;
        $width-button: 15rem;
        $color-text--light: #aaa;
        
        $width-button: 15rem;
        /*  */
        html {
          font-size: 62.5%;
        }
        nav {
          margin: 30px;
          background-color: $color-primary;
          &::after {
            content: "";
            clear: both;
            display: table;
          }
        }
        
        .navigation {
          list-style: none;
          float: left;
          font-size: $font-nav;
          li {
            display: inline-block;
            margin-left: 30px;
            &:first-child {
              margin: 0;
              background-color: $color-secondary;
            }
            a {
              text-decoration: none;
              color: $color-tertiary;
            }
          }
        }
        .button {
          float: right;
          .btn-main:link,
          .btn-hot:link {
            text-decoration: none;
            color: $color-text--light;
            display: inline-block;
            text-align: center;
            width: $width-button;
            padding: 1rem;
            border-radius: 10rem;
            text-transform: uppercase;
          }
          .btn-main:link {
            background-color: $color-secondary;
            color: #fff;
          }
          .btn-main:hover {
            background-color: darken($color-secondary, 15%);
          }
          .btn-hot:link {
            background-color: $color-tertiary;
          }
          .btn-hot:hover {
            background-color: lighten($color-tertiary, 15%);
          }
        }
        ```
        
    - 安装sass
      
        ```html
        npm init
        npm install node-sass --save-dev
        编译：
        "compile:sass": "node-sass sass/main.scss css/style.css"
        npm run compile:sass
        
        "scripts": {
            "compile:sass": "node-sass sass/main.scss css/style.css -w "
          },
        ```
        
    - grid
      
        ```scss
        //将一个宽度等分为二
        .col-1-of-2 {
            width: calc((100% - #{$gutter-horizontal}) / 2);
          }
        
        //选取所有以col类名开头的
        [class^="col-"] {
            float: left;
        
            &:not(:last-child) {
              margin-right: $gutter-horizontal;
            }
          }                                                   
        ```
        
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251448886.png)
        
        ```html
        .row {
          max-width: $grid-width;
          margin: 0 auto;
        
          &:not(:last-child) {
            margin-bottom: $gutter-vertical;
          }
          @include clearfix;
        
          [class^="col-"] {
            float: left;
        
            &:not(:last-child) {
              margin-right: $gutter-horizontal;
            }
          }
          .col-1-of-2 {
            width: calc((100% - #{$gutter-horizontal}) / 2);
          }
          .col-1-of-3 {
            width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
          }
          .col-2-of-3 {
            width: calc(
              2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal}
            );
          }
          .col-1-of-4 {
            width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
          }
          .col-2-of-4 {
            width: calc(
              2 * ((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal}
            );
          }
          .col-3-of-4 {
            width: calc(
              3 * ((100% - 3 * #{$gutter-horizontal}) / 4) + 2 * #{$gutter-horizontal}
            );
          }
        }
        
        ```
        
    - icon-font
      
        [Linea Icons :20+ Best Sites for Free Icons](https://linea.io/)
        
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251449594.png)
        
        ```scss
        <i class="icon-basic-world"></i>
        
        ```
        
        ![Untitled](Advanced%20CSS%20fe9615030879403a84df93de6883f629/Untitled%2021.png)
        
    - story
      
        ```jsx
        // 制作圆
        shape-outside: circle(50% at 50% 50%);
            -webkit-shape-outside: circle(50% at 50% 50%);  //实现这个功能必须浮动元素
            float: left;
            clip-path: circle(50% at 50% 50%);
            -webkit-clip-path: circle(50 at 50% 50%);
        
        浮动元素不能给他加margin 
        所以给他用transform： translate(-3rem);
        transform: translateX(-3rem) skewX(12deg); // 这里skew()是为了让他不偏移。因为在
        外面大盒子给了skew(-12-deg);
        
        backface-visibility: hidden;
        影藏背面朝向观众；
        
        ```
        
        - [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
        属性 **`filter`**
         将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。
        
        ```jsx
        filter: blur()
        ```
        
    
    ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251449897.png)
    
    - booking
      
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251449609.jpeg)
        
        ​                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        
        ```jsx
        直接后代
        &-radio--input:checked ~ &-radio--label &-radio--button::after {
                opacity: 1;
            ;
            }
        ```
        
        ### 制作圆环点击
        
        ```jsx
        &-radio--button {
             height: 3rem;
                width: 3rem;
                border: 5px solid $color-primary;
                border-radius: 50%;
                display: inline-block;
                position:absolute;
                top: -.4rem;
                left: 0;
        
                &::after {
                    content: "";
                    display: block;
                    height: 1.3rem;
                    width: 1.3rem;
                    display: inline-block;
                    background: $color-primary;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    transition: opacity .3s;
                   
        
                  
                }
        ```
        
        ### 无效输入是显示
        
        ```jsx
        &:focus:invalid {
                    border-bottom: 3px solid $color-secondary-orange;
        
                }
        ```
        
        用linear-grident制作效果
        
        ```jsx
        background-image: linear-gradient(105deg, rgba($color-white, .9) 0%, rgba($color-white,.9) 50%, transparent 50%),
            url(../img/nat-10.jpg);
            height: 50rem;
            background-size: 100%;
            border-radius: 3px;
            box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
            &-form {
                width: 50%;
                padding: 5rem;
            }
        ```
        
        ![Untitled](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251450293.png)
        
    - footer
    
    - 代码
    
    - ```scss
        .footer {
            background-color: $color-gray-dark-3;
            padding: 10rem 0;
            font-size: 1.5rem;
            &-logo--box {
                text-align: center;
                margin-bottom: 5rem;
            }
            &-logo--item {
                width: 15rem;
                height: auto;
            } 
            &-navigation {
                border-top: 1px solid $color-gray-dark;
                margin-top: 6px;
                padding-top: 2rem;
                display: inline-block;
            }
            &-list {
                list-style: none;
            }
            &-item {
                display: inline-block;
                &:not(:last-child) {
                    margin-right: 1.5rem;
                }
            }
            &-link {
                &:link,
                &:visited {
                    font-size: 1.6rem;
                    display: inline-block;
                    color: $color-gray-light-1;       
                    text-decoration: none;
                    text-transform: uppercase;
                    transition: all .3s;
                    // background-color: $color-gray-dark-3;
                }
                &:hover,
                &:active {
                    color: $color-primary;
                    box-shadow: 0 1rem 4rem rgba($color-black, .4);
                    transform: rotate(6deg) scale(1.1);
                }
            }
            &-copyright {
                color: $color-gray-dark-2;
                font-size: 1.6rem;
                font-weight: 500;
                line-height: 1.6;
                border-top: 1px solid $color-gray-dark-2;
                // margin-top: 6px;
                padding-top: 2rem;
                color: $color-gray-light-1;
                width: 80%;
                float: right;
            }
        
        }
        ```
    
    - 

![image-20230325145554579](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251455772.png)

![image-20230325145702795](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251457995.png)

#### WHAT YOU WILL LEARN IN THIS SECTION

* What the “checkbox hack” is and how it works; 
* • How to create custom animation timing  functions using cubic bezier curves; 
* • How to animate “solid-color gradients”; 
* • How and why to use transform-origin;
*  • In general: create an amazingly creative effect

#### navigation 学习

* index结构

  * ```html
        <div class="navigation">
          <input type="checkbox" id="navi-toggle" class="navigation_checkbox">
          <label for="navi-toggle" class="navigation_button">Menu</label>
          <div class="navigation_background">&nbsp;</div>
          <nav class="navigation_nav">
            <ul class="navigation_list">
              <li class="navigation_item"><a href="#" class="navigation_link">About Natous</a></li>
              <li class="navigation_item"><a href="#" class="navigation_link">Your Benefits</a></li>
              <li class="navigation_item"><a href="#" class="navigation_link">Popular Tours</a></li>
              <li class="navigation_item"><a href="#" class="navigation_link">Stories</a></li>
              <li class="navigation_item"><a href="#" class="navigation_link">Book Now</a></li>
            </ul>
          </nav>
        </div>
    ```

  * 编写scss文件

    * 背景

      ```scss
        &_background {
          height: 6rem;
          width: 6rem;
          border-radius: 50%;
          position: fixed;
          top: 6.5rem;
          right: 6.5rem;
          background-image: radial-gradient($oc-teal-2, $oc-teal-7);
          z-index: 1000;
          transform: scale(50);
        }
      ```

      * ![image-20230413184231086](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304131842277.png)

    * button

      * ```scss
          &_button {
            background-color: $oc-white;
            height: 7rem;
            width: 7rem;
            position: fixed;
            top: 6rem;
            right: 6rem;
            border-radius: 50%;
            z-index: 2000;
          }
        ```

        * ![image-20230413184326771](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304131843822.png)

    * content

      * ```scss
        
          &_nav {
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1500;
          }
          &_list {
            list-style: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
          &_item {
            margin-bottom: 1rem;
          }
          &_link {
            display: inline-block;
            &:link,
            &:visited {
              text-decoration: none;
              font-size: 3rem;
              font-weight: 300;
              text-transform: uppercase;
              color: $oc-white;
              padding: 1rem 2rem;
              background-image: linear-gradient(
                120deg,
                transparent 0%,
                transparent 50%,
                $oc-white 50%
              );
              background-size: 220%;
              transition: all 0.4s ease-in-out;
            }
            &:hover,
            &:active {
              background-position: 100%;
              transform: translateX(1rem);
              color: $color-primary;
            }
          }
        ```

    * 需要注意的是：记得将<a></a>设置display: inline-block;不然padding，和margin属性不会生效

    * <video src="C:\Users\jackdeng\Videos\Captures\Natours _ Exciting tours for adventurous people - Google Chrome 2023-04-13 18-47-02.mp4"></video>

* icon实现

  * ```html
      <label for="navi-toggle" class="navigation_button">
            <span class="navigation_icon">&nbsp;</span>
          </label>
    ```

  * 利用伪类实现icon

    * ```scss
        &_icon {
          margin-top: 3.5rem;
          position: relative;
          &,
          &:before,
          &:after {
            width: 3rem;
            height: 0.2rem;
            display: inline-block;
            background-color: $color-gray-dark;
          }
          &::before,
          &:after {
            content: "";
            position: absolute;
            left: 0;
            transition: all 0.2s;
          }
          &:before {
            top: -0.8rem;
            // transform-origin: left;
          }
          &:after {
            top: 0.8rem;
          }
        }
      ```

    * 

    * 实现基本动画

      * ```scss
          &_button:hover &_icon:before {
            top: -1rem;
          }
          &_button:hover &_icon:after {
            top: 1rem;
          }
        ```

    * 点下按钮时由菜单转向关闭

      * ```scss
          &_checkbox:checked + &_button &_icon {
            background-color: transparent;
          }
          &_checkbox:checked + &_button &_icon:before {
            top: 0;
            transform: rotate(-135deg);
          }
          &_checkbox:checked + &_button &_icon:after {
            top: 0;
            transform: rotate(135deg);
          }
        }
        ```

      

#### 实现popup

* index.html

  * ```Html
        <div class="popup" id="popup">
          <div class="popup-content">
            <a href="#section-tours" class="popup-close">&times;</a>
            <div class="popup-left">
              <img src="./img/nat-8.jpg" alt="Tours photo" class="popup-img">
              <img src="./img/nat-9.jpg" alt="Tours photo" class="popup-img">
    
            </div>
            <div class="popup-right">
              <h2 class="heading-secondary u-margin-bottom-small">Starting book now</h2>
              <h3 class="heading-tertiary u-margin-bottom-small">Import &ndash; Please read these terms before booking</h3>
              <p class="popup-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit ullamcorper dignissim cras. Ut ornare lectus sit amet est placerat in. Eros in cursus turpis massa tincidunt dui ut ornare. Nibh sit amet commodo nulla. Non blandit massa enim nec dui nunc mattis. Porta non pulvinar neque laoreet suspendisse interdum. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Fusce id velit ut tortor pretium viverra suspendisse. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Tristique risus nec feugiat in fermentum posuere. Quam elementum pulvinar etiam non quam lacus.
              </p>
              <a href="#booking-now" class="btn btn--green">Booking Now</a>
            </div>
          </div>
        </div>
    
    ```

  * scss文件

    * ```scss
      //编写scss函数
      @mixin obsCenter {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      ```

    * 重要的点

      * ```scss
        //target 伪类
          &:target {
            opacity: 1;
            visibility: visible;
          }
          &:target &-content {
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, -50%) scale(1);
          }
        ```

      * 就是当被选中为目标时，会执行的代码

      * 还有就是table-cell

        * ```scss
           display: table-cell;
          ```

        * 需要将父元素设置为

          * ```scss
            display: table
            ```

        * eg:

          * ```scss
                &-content {
                width: 75%;
                @include obsCenter;
                background-color: $oc-white;
                box-shadow: 0 2rem 4rem rgba($oc-black, 0.8);
                display: table;
              
              &-right {
                width: 66.66666%;
                display: table-cell;
                vertical-align: middle;
                padding: 3rem 5rem;
              }
              
                &-left {
                width: 33.333333333%;
                display: table-cell;
              }
                    这里将父元素，设置为table，将两个子元素设置为 table-cell，它可以让子元素拥有相同的高度，但是用float: left就会根据内容来适应，按需要选择此元素。
            ```

      * hyphens &&  column property

        * ```scss
            &-text {
              font-size: 1.6rem;
              margin-bottom: 4rem;
              -webkit-column-count: 2;
              column-count: 2;
              column-gap: 4rem;
              column-rule: 1px solid $oc-gray-2;
              hyphens: auto;
            }
          ```

        * ![image-20230415122607908](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304151226275.png)

#### 效果

<video src="C:\Users\jackdeng\Videos\Captures\Natours _ Exciting tours for adventurous people - Google Chrome 2023-04-15 14-06-49.mp4"></video>

### 响应式布局

![IMG_1323(20230415-141130)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304151412855.JPG)

- 有条件的通过 [`@media`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media) 和 [`@import`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import) [at-rules](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule) 用[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 装饰样式。
- 用 `media=` 属性为[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style), [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link), [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source)和其他[HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)元素指定特定的媒体类型。如：

```html
<link rel="stylesheet" src="styles.css" media="screen" />
<link rel="stylesheet" src="styles.css" media="print" />
```

![IMG_1327(20230416-161357)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304271257866.JPG)

![IMG_1328(20230416-162305)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304271257882.JPG)

![IMG_1329(20230416-162613)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304271257913.JPG)

![IMG_1330(20230416-170338)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304271257936.JPG)

![IMG_1331(20230416-172414)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304271257965.JPG)

1. Mobile-first（以移动设备为先）： Mobile-first是一种设计方法，它首先关注移动设备上的用户体验和显示效果。在使用Mobile-first方法时，网页的设计和开发过程从针对移动设备的布局和功能开始，然后再逐步适配到更大屏幕的设备（如平板电脑和桌面电脑）。这种方法的核心理念是将移动设备作为设计的首要考虑因素，因为移动设备的屏幕较小，网络连接可能较慢，用户交互方式也有所不同。通过Mobile-first设计，可以确保网页在移动设备上具有良好的用户体验，并逐步添加更多功能和布局，以适应较大屏幕的设备。
2. Desktop-first（以桌面设备为先）： Desktop-first是一种设计方法，它以桌面设备为首要考虑因素进行设计和开发。在使用Desktop-first方法时，网页的设计和开发过程从针对桌面设备的布局和功能开始，然后再逐步适配到较小屏幕的设备（如平板电脑和移动设备）。这种方法的思路是将桌面设备的大屏幕和更强大的性能视为设计的主要依据，然后通过适应性布局和其他技术手段来确保网页在较小屏幕上也能提供合适的显示效果和用户体验。




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
              width: 0;
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1500;
              transition: all 0.8s cubic-bezier(0.87, 0, 0.13, 1);
              opacity: 0;
              // background-color: orangered;
            }
          //这里我们需要吧witth: 0，这样他才不会影响其他元素
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

* 我们可以使用sass中的mixin函数，避免重复编写代码

  * ```scss
    @mixin media($breakpoint) {
      @if $breakpoint == phone {
        @media (max-width: 37.5em) {
          @content;
        }
      } @else if $breakpoint == tab-port {
        @media (max-width: 56.25em) {
          @content;
        }
      } @else if $breakpoint == tab-land {
        @media (max-width: 75em) {
          @content;
        }
      } @else if $breakpoint == big-desktop {
        @media (min-width: 112.5em) {
          @content;
        }
      } @else {
        @error "Invalid breakpoint";
      }
    }
    
    ```

* 在我们所需要的地方调用

  * ```scss
      &-photo {
        width: 55%;
        position: absolute;
        box-shadow: 0 1.5rem 4rem rgba($color-black, 0.4);
        @include media(tab-port) {
          width: 33.33333333333333%;
          position: relative;
          float: left;
          box-shadow: 0 1.5rem 3rem rgba($color-black, 0.2);
        }
          //这里就是，我们在photo里面，当他的宽度小于tab-port时，我们就执行下面的css样式。
          //tab-port就是在前面设置的，我们只需要用@include调用，而不需要重复编写@media(max-width:56.25em);
          
    ```

  * ```scss
      max-width: $grid-width;
      margin: 0 auto;
      @include media(tab-port) {
        max-width: 50rem;
        padding: 0 3rem;
      }
      
      &:not(:last-child) {
        margin-bottom: $gutter-vertical;
        @include media(tab-port) {
          margin-bottom: $gutter-vertical-small;
        }
      }
    // 这些都是这样的，
    ```



### 响应式图片

我们一般用<picture></picture>标签包含

> ```html
>         <picture class="footer-logo--item">
>             //图片地址用逗号隔开
>           <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
>           media="(max-width: 37.5rem)">
>           <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo">
> 
>         
>         </picture>
>         
> ```
>
> * 解释上面代码
>
>   * 这段代码展示了一个带有响应式图片的 HTML 标签，其中使用了 `picture` 元素和 `source` 元素。
>
>     首先，`class="footer-logo--item"` 定义了该元素的 CSS 类名，可以在 CSS 样式表中引用。
>
>     接着，`<source>` 元素中的 `srcset` 属性指定了一系列不同尺寸和分辨率的图片，以逗号分隔。这些图片用于不同的设备和屏幕大小，以确保最佳的显示效果。例如，在该例子中，当屏幕宽度小于 37.5rem 时，使用 `img/logo-green-small-1x.png` 图片的 1x 版本和 `img/logo-green-small-2x.png` 图片的 2x 版本；否则，使用 `img/logo-green-1x.png` 图片的 1x 版本和 `img/logo-green-2x.png` 图片的 2x 版本。
>
>     最后，`<img>` 元素中的 `srcset` 属性指定了默认情况下使用的图片，即 `img/logo-green-1x.png` 图片的 1x 版本和 `img/logo-green-2x.png` 图片的 2x 版本。`alt` 属性用于提供图像的替代文本，以帮助视觉障碍用户或当图像无法显示时提供说明。
>
>     这段代码的目的是在一个网页的页脚中显示一个带有响应式图片的标识。如果屏幕宽度小于 37.5rem，将使用较小的标识图片，否则将使用较大的标识图片。

* 效果
  * ![image-20230507180001777](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305071800875.png)
  * 1x 是密度显示，默认当前分辨率设备，所以我们显示的是第一张small图片，当我们吧dpr改为2他就会显示高分度图片
    * ![image-20230507180231482](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305071802571.png)

* 我们还可以像下面这样

* > ```javascript
  >   <img srcset="img/nat-1-large.jpg 1000w, img/nat-1.jpg 300w" type="image/jpg" 
  >               sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px "  class="composition-photo composition-photo--p1" alt="img/nat-1"
  >               src="img/nat-1-large.jpg">
  >               <img srcset="img/nat-2-large.jpg 1000w, img/nat-2.jpg 300w" type="image/jpg" 
  >               sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px "  class="composition-photo composition-photo--p2" alt="img/nat-2"
  >               src="img/nat-2-large.jpg">
  >               
  >               <img srcset="img/nat-3-large.jpg 1000w, img/nat-3.jpg 300w" type="image/jpg" 
  >               sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px "  class="composition-photo composition-photo--p3" alt="img/nat-3"
  >               src="img/nat-3-large.jpg">
  > 
  > ```
  >
  > * 解释：
  >
  >   * 首先，`srcset` 属性指定了一系列不同尺寸的图片及其对应的宽度。例如，在该例子中，当显示区域的宽度为 1000 像素时，使用 `img/nat-1-large.jpg` 这个大图像；否则，使用 `img/nat-1.jpg` 这个小图像。这样做的目的是为了确保在不同设备和屏幕大小下，使用适当的图像以提高性能和用户体验。
  >
  >     接着，`type` 属性指定了图像的 MIME 类型。在这里，类型为 `image/jpg`，表示图像格式为 JPG。
  >
  >     `sizes` 属性用于定义不同宽度的设备应该使用的图像尺寸。例如，在该例子中，如果显示区域的宽度小于 56.25em（即 900 像素），则使用 20vw（即视口宽度的 20%）来显示图像；如果小于 37.5em（即 600 像素），则使用 30vw 来显示图像；否则，使用固定宽度为 300 像素的图像。这样做的目的是为了确保在不同设备和屏幕大小下，显示的图像大小和清晰度都是最佳的。
  >
  >     `class` 属性定义了 CSS 类名，可以在 CSS 样式表中引用。
  >
  >     `alt` 属性用于提供图像的替代文本，以帮助视觉障碍用户或当图像无法显示时提供说明。
  >
  >     最后，`src` 属性提供了一个默认情况下使用的图像，即 `img/nat-1-large.jpg` 这个大图像。如果浏览器不支持 `srcset` 属性，或者无法加载指定的图像，则会使用这个默认的图像。
  >
  >     这段代码的目的是在一个网页中显示一个自然景观的图像，并使用响应式图片技术，以确保在不同设备和屏幕大小下，显示的图像大小和清晰度都是最佳的。

#### css响应图片

> ```scss
>   @media (min-resolution: 192dpi) and(min-width: 37.5em), (min-width: 125em) {
>     background-image: linear-gradient(
>         to right bottom,
>         rgba($color-secondary-light, 0.8),
>         rgba($color-secondary-dark, 0.8)
>       ),
>       url(../img/hero.jpg);
>   }
> ```
>
> * 这段代码是一个 CSS 媒体查询（Media Query），用于定义一个背景图片，它只会在特定的设备分辨率和屏幕宽度范围内被显示。具体来说，它指定了在分辨率高于 192dpi 并且屏幕宽度大于等于 37.5em，或者屏幕宽度大于等于 125em 时，应该使用的背景图片。
> * ![image-20230507181304528](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305071813656.png)
> * ![image-20230507181321727](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305071813832.png)

#### use @support

主要就是为了让那些不支持新property

```javascript
  // old firfox to prefix it
  @supports ((clip-path: polygon(0, 0)) or (-webkit-clip-path: polygon(0, 0))) {
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    height: 95vh;
  }

  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba($oc-black, 0.3);
  }
```

比如有些浏览器不支持 backdrop-filter

shape-outside

> ```scss
>     @supports (clip-path: polygon(0, 0)) or (-webkit-clip-path: poygon(0, 0)) {
>       clip-path: circle(50% at 50% 50%);
>       -webkit-clip-path: circle(50 at 50% 50%);
> 
>       shape-outside: circle(50% at 50% 50%);
>       -webkit-shape-outside: circle(50% at 50% 50%);
>       border-radius: none;
>     }
> 
> ```

![IMG_1368](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081040668.PNG)

* build npm process with NPM script

* install

  * ```Json
    npm install npm-run-all -D
    npm i concat -D
    npm i autoprefixer -D
    npm i postcss postcss-cli -D
    ```

  * 

  * > ```Json
    >   "scripts": {
    >     "watch:sass": "node-sass sass/main.scss css/style.css -w ",
    >     "devserver": "live-server",
    >     "start": "npm-run-all --parallel devserver watch:sass",
    >     "compile:sass": "node-sass sass/main.scss css/style.com.css ",
    >     "concat:css": "concat -o css/style.concat.css css/icons.css css/style.com.css",
    >     "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css",
    >     "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
    >     "build:css": "npm-run-all  compile:sass concat:css prefix:css compress:css"
    >   },
    > ```
    >
    > 也就是我们运行npm start 就可以直接启动leve-server 和watch:sass
    >
    > 我们最后运行npm run build:css,实现一条命令运行多个脚本
    >
    > ![image-20230508120136533](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081201583.png)

#### 选择伪类

* > ```scss
  > 
  > ::selection  {
  >   background-color: $color-primary;
  >   color: $color-white;
  > }
  > ```

* 让媒体查询只在screen中有效

  * > ```scss
    > @media  only screen and (min-resolution: 192dpi) and(min-width: 37.5em),
    > ```
    >
    > ```html
    > <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    > ```
    >
    > “viewport”元标记用于控制视口的宽度和初始缩放级别。 content属性中的“width=device-width”部分将视口的宽度设置为正在查看网页的设备的宽度。
    >
    > content属性中的“initial-scale=1.0”部分将视口的初始缩放级别设置为1.0，这意味着网页将以其实际大小显示，没有应用任何缩放或缩放。
    >
    > ```html
    > <meta http-equiv="X-UA-Compatible" content="ie=edge">
    > ```
    >
    > 这是一个HTML中的meta标签，用于告诉浏览器使用何种版本的渲染引擎来呈现网页。该标签的属性是http-equiv，用于提供与HTTP头信息相同的元数据。
    >
    > "X-UA-Compatible"是该属性的值，它指示浏览器使用特定的文档模式来呈现网页。在这种情况下，该值是"ie=edge"，它表示使用最新版本的Internet Explorer引擎来呈现网页。

* ```scss
  @media only screen and(max-width: 56.25em),
  only screen and (hover:none)
  ```

* > 该查询指定了两个条件：屏幕宽度最大为37.5em和没有鼠标悬停的情况下。只有在这两种情况下，该查询所定义的CSS样式才会被应用。
  >
  > 其中，"only screen"表示这个媒体查询仅适用于屏幕设备，而不是打印机或其他媒介设备；"max-width: 37.5em"表示屏幕的最大宽度为37.5em，这通常对应于移动设备的屏幕尺寸；"hover: none"则表示当设备没有鼠标悬停时应用样式，例如在触摸屏设备上。
  >
  > * 效果如下
  >
  >   * ![image-20230508143308343](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081433496.png)
  >
  >   * 可以看出我们的book now也是显示在前方的，所以我们的设置起作用了
  >   * 我们将device设置为desktop
  >     * ![image-20230508143418063](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081434294.png)
  >     * 可以看出book now单独显示到后面了



### felxbox

![IMG_1369](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081639627.PNG)

![IMG_1370](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081639506.PNG)

flex框架图

> ![00-basic-terminology](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081641730.svg)

![IMG_1371](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081645802.PNG)

![IMG_1372](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081654908.PNG)

Flexbox是一种用于布局的CSS3属性，可以使得页面上的元素沿着主轴和交叉轴进行排列，并且可以动态调整其大小和位置



* [flex 教学](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)







![css-flexbox-poster](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305081611896.png)

eg 

> ```scss
>   flex-direction: row;
>   justify-content: space-around;
> //项目均匀分布
>   
> ```
>
> ![image-20230508221714925](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305082217041.png)
>
> ![image-20230508221926734](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305082219778.png)
>
> ```scss
>   flex-direction: row;
>   justify-content: space-evenly;
> //每个空间相等
>   
> ```
>
> ![IMG_1373](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305082223004.PNG)

* 将flex-direction : column

* > ```css
  >       display: flex;
  >         flex-direction: column;
  >         justify-content: space-evenly;
  >         align-items: flex-end;
  > 
  > ```
  >
  > 但是我们没有给容器设置高度，他就是这样显示
  >
  > ![image-20230509092211914](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305090922120.png)
  >
  > 我们设置height: 1500px;他就正常显示
  >
  > ![image-20230509092400448](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305090924631.png)
  >
  > 

* flex-item, setting the flex-item will change the initial value of container

* ```html
      <div class="container">
        <div class="el el--1">HTML</div>
        <div class="el el--2">and</div>
        <div class="el el--3">CSS</div>
        <div class="el el--4">are</div>
        <div class="el el--5">amazing</div>
        <div class="el el--6">languages</div>
        <!-- <div class="el el--7">to</div>
        <div class="el el--8">learn</div> -->
      </div>
  ```

  * > ```css
    >       .el--1 {
    > 
    >         /* order: 2; */
    >         /* flex-grow: 3; */
    >         align-self: flex-end;
    >         order: 1;
    >           // order 默认为0，值越小越在前
    >       }
    > 
    > ```
    >
    > ![image-20230509093257089](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305090932270.png)
    >
    > flex-grow  
    >
    > ```css
    > .el {
    >         flex-grow: 1;
    > }
    > ```
    >
    > 现在的显示效果是，他们都应该填满剩余空间
    >
    > ![image-20230509102547720](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091025914.png)
    >
    > 我给具体某一个item设置flex-grow
    >
    > ```css
    > .el-1 {
    > flex-grow: 2;}
    > ```
    >
    > 他现在是其他el的两倍增长
    >
    > ![image-20230509102824785](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091028960.png)
    >
    > flex-grow, flex-shrink,flex-basic 可以简写为 flex
    >
    > 默认是： The default is `0 1 auto`
    >
    > 现在我们将某一个具体el设置为flex: 1;
    >
    > ```
    > .el--1 {
    > |flex: 1;} // flex-grow: 1; flex-shrink: 1; flex-basic: 0;
    > ```
    >
    > 下面的结果可以看出，没有设置flex属性的，就会根据他的内容所占宽度，而设置了flex的他将会填满所有剩余空间

    ![image-20230509103339684](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091033851.png)

    > flex-basis我们可以设置item的初始宽度
    >
    > ```
    > .el--3 {
    > flex-basis: 300px;}
    > ```
    >
    > ​	![image-20230509105908256](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091059404.png)
    >
    > 现在缩小viewport，可以看到amazing已经开始变小了
    >
    > ![image-20230509110000945](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091100195.png)
    >
    > ​	当我们缩小到最小时，发现我们设定的固定300px也已经不满足了
    >
    > ​	![image-20230509110121070](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091101259.png)
    >
    > 当我们设置这个值时，他在浏览器页面上就会有一个初始宽度，但是当你吧viewport不断缩小时，当宽度达不到他能占300px时，他也会被压缩，如果想要宽度不断可以将flex-shrink：0；
    >
    > ```
    > .el--3 {
    > flex-basis: 300px;
    > flex-shrink: 0;这样不论浏览器视口宽度如何变化，他都将保持300px}
    > ```
    >
    > 
    >
    > ![image-20230509110155643](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091101849.png)现在无论我们怎样缩小视口宽度
    >
    > ```
    > align-content: flex-end   //设置多行的布局
    > ```
    >
    > ![image-20230509161204813](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091612036.png)
    >
    > ```
    > flex-content: flex-start
    > ```
    >
    > ![image-20230509161258488](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305091612599.png)

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

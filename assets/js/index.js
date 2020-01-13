new Vue({
  el: "#pdfDom",
  data: {
    htmlTitle: "前端工程师简历-皮家鑫",
    skills: [
      //技能
      "熟悉 vue(vue+router+vuex) 、 axios ，熟练使用 element-ui ， lay-ui 等开发框架 , 了解 MVC 、 MVVM 思想",
      "熟练使用 HTML 、 CSS 、 JavaScript 等前端技术，熟悉 css3 和 h5 ， W3C 规范 ， flex 布局，能快速将 UI 图转化为 静态网页，开发兼容主流浏览器的页面",
      "熟悉使用 jQuery 类库、 Bootstrap 、 Echarts 框架，数据可视化，实现网页特效和提升用户交互体验",
      "熟悉使用 git 等版本控制工具，熟练使用 WebStorm 、 vscode 等编码工具，团队配合意识好，能进行前端代码的 敏捷开发",
      "掌握 Es6 特性， less 预处理语言， webpack 等打包工具",
      "了解 node.js ， express ， koa 等框架，能进行简单的后台搭建，完成后台需要的基本功能",
      "了解微信小程序基本结构，组件， api",
      "了解 mysql 、 MongoDB 等数据库",
      "了解 React ，目前正在学习",
      "有良好的编码习惯，对互联网产品和 web 技术有强烈兴趣，有优秀的学习能力和强烈的进取心"
    ],
    projects: [
      //项目经验
      {
        name: "后台管理系统",
        proDesc: [
          "基础信息、宫格配置、资源信息、点位管理、预案、重点人、系统配置等管理"
        ],
        workDesc: [
          "1、公共搜索模块改造，适应每个模块自定义搜索",
          "2、新增模块的开发与维护",
          "3、多文件上传，包括图片、文档等",
          "4、使用Echarts展示各种实时信息",
          "5、用户、角色、权限控制，绑定和解除绑定功能",
          "6、登录验证，token过期处理"
        ]
      },
      {
        name: "EHR- 人力资源系统",
        proDesc: [
          //项目描述
          "员工信息管理平台，实现员工登录、考勤、部门管理、薪资管理等功能"
        ],
        workDesc: [
          //工作描述
          "1、前端部分使用 vue、vue-router + element-UI 开发页面，axios 请求数据，vuex 全局管理用户信息，token 验证用户信息，webpack 打包",
          "2、后台 node+express+mysql 提供服务，使用 md5 进行密码加密，jwt 来生成 token",
          "3、使用 moment.js 来处理时间，less 来写 css，简单方便",
          "4、使用 sessionStoage 实现本地储存，不同页面间通信",
          "5、multiple 实现多文件上传功能，Echarts 体现员工工资水平，可下载 Excel 文件"
        ],
        address: "https://github.com/pjx1211/vue-EHR" //项目地址
      },
      {
        name: "在线个人博客系统",
        proDesc: [
          "博客首页和博客后台管理页，实现在线博客编辑，文章发布，文章修改，评论回复，添加标签和网站配置等功能 "
        ],
        workDesc: [
          "1、使用 css3 h5 完成博客首页的响应式布局，并且能适配移动端 ",
          "2、博客后台使用 vue+element-UI, 使用 marked 将博文转为 html ",
          "3、后台服务 koa.js+mongoDB 提供简单接口数据,文章，标签管理 ",
          "4、vue-router 管理网页路由跳转",
          "5、可支持 markdown 文件上传或者在线编写",
          "6、文章可多人评论，在线回复评论，删除评论，加入黑名单等",
          "7、封装很多公用组件和公共方法，提高代码的简洁性和可服用性",
          "8、使用 vuex 存储文章，评论信息，实现组件间通信"
        ],
        address: "https://github.com/pjx1211/myblog"
      },
      {
        name: "Vue 移动端 CNode社区",
        proDesc: [
          "nodejs 中文社区移动版，实现社区发帖，评论，回复，查看等功能"
        ],
        workDesc: [
          "1、使用 vue+vue-router+vuex 等技术",
          "2、页面使用 flex 布局，适用于移动端",
          "3、localStorage 来储存本地数据，axios 获取服务端数据",
          "4、使用 css3 和 animate 来实现动画效果，页面切换效果"
        ],
        address: "https://pjx1211.github.io/vue-CNode"
      },
      {
        name: "千峰 JavaEE 在线音乐项目",
        proDesc: ["音乐在线平台，能够实现音乐"],
        workDesc: [
          "1、音乐列表页面 html+css+bootstrap 实现简单响应式布局，页面布局使用 flex弹性布局",
          "2、播放页面仿 qq 音乐网页但，animate + js 操作 dom 实现简单播放动画",
          "3、网页数据通过 ajax 从后台接口中获取，异步刷新，提供交互性，音乐播放使用 h5 新标签 audio",
          "4、音乐收藏和创建歌单功能，每个账号有不同的歌单，通过 checkbox 批量选择音乐，新增和删除"
        ]
      }
    ],
    selfEvaluates: [
      "具有团队协作能力，善于沟通，有责任心",
      "有一定自我学习能力和思考能力，工作认真负责",
      "热爱运动，积极乐观"
    ]
  },
  methods: {
    exportReportTemplet() {
      var title = this.htmlTitle; //DPF标题
      html2canvas(document.querySelector("#pdfDom"), {
        allowTaint: true,
        taintTest: false,
        useCORS: true,
        //width:960,
        //height:5072,
        dpi: window.devicePixelRatio * 4, //将分辨率提高到特定的DPI 提高四倍
        scale: 4 //按比例增加分辨率
      }).then(function(canvas) {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight;
        let pageData = canvas.toDataURL("image/jpeg", 1.0);
        let PDF = new jsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save(title + ".pdf");
      });
    }
  }
});

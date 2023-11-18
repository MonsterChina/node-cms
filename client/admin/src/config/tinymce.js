//http://tinymce.ax-z.cn/configure/content-filtering.php#allow_conditional_comments

export let tinymceSet = {
  //避免图片地址和链接地址转换成相对路径
  convert_urls: false,
  // 开启组件拓展的 上传图片功能，工具栏 图片按钮 弹框中出现 `upload` 选项
  custom_images_upload: true,
  // 复用 图片上传 api 地址
  images_upload_url: "/api/upload",

  branding: false, //是否禁用“Powered by TinyMCE”
  menubar: true, //顶部菜单栏显示
  image_dimensions: false, //去除宽高属性
  body_class: "article-content ",
  object_resizing: true, //是否允许调整图像大小.

  // paste_retain_style_properties: "color", //从Word中复制，保留所有样式
  //paste_word_valid_elements: '*[*]', // 该设置在自word粘贴时，允许指定元素和属性保存在过滤结果中，要使用此功能，paste_enable_default_filters 要设置为true
  paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
  //paste_convert_word_fake_lists: false, // 设为false可禁用复制word中的列表内容时，转换为html的UL或OL格式。
  // paste_webkit_styles: "true",
  paste_merge_formats: true, //启用PowerPaste插件的合并格式功能，例如：<b>abc <b>bold</b> 123</b>成为<b>abc bold 123</b>
  end_container_on_empty_block: true, //如果在空的内部块元素中按下Enter键，则可以使用此选项拆分当前容器块元素。
  powerpaste_word_import: "clean", //保留标题，表格和列表等内容的结构，但删除内联样式和类。这样就产生了使用站点CSS样式表的简单内容，同时保留了原始文档的语义结构。
  advlist_bullet_styles: "default,circle,disc,square",
  advlist_number_styles:
    "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman",
  default_link_target: "_blank", //默认链接是当前窗口打开，你也可以通过此参数将其变为_blank新窗口打开。
  link_title: false,
  nonbreaking_force_tab: true, // 按tab键插入三个&nbsp;。一直按一直插。

  // images_upload_handler: this.images_upload_handler, //该images_upload_handler选项允许你指定被用来替代TinyMCE的默认的JavaScript和定制逻辑上传处理函数的函数。

  // 文件上传
  // file_picker_callback: (callback, value, meta) => {
  //   // Provide file and text for the link dialog
  //   if (meta.filetype == "file") {
  //     callback("mypage.html", { text: "My text" });
  //   }

  //   // Provide image and alt text for the image dialog
  //   if (meta.filetype == "image") {
  //     callback("myimage.jpg", { alt: "My alt text" });
  //   }

  //   // Provide alternative source and posted for the media dialog
  //   if (meta.filetype == "media") {
  //     callback("movie.mp4", { source2: "alt.ogg", poster: "image.jpg" });
  //   }
  // },

  // images_upload_handler: async (blobInfo, success, failure, progress) => {
  //   console.log("------->", blobInfo.type, this.$message);
  //   if (blobInfo.type.indexOf("image") === -1) {
  //     this.$message("上传文件只能是图片格式");
  //     return false;
  //   }
  //   if (blobInfo.size / 1024 / 1024 > 0.2) {
  //     this.$message("上传图片必须小于200k");
  //     return false;
  //   }

  //   let fd = new FormData();
  //   //把上传文件的添加到 ForDate对象中
  //   fd.append("file", blobInfo.blob(), blobInfo.filename());
  //   let res = await upload(fd);
  //   if (res.code === 200) {
  //     console.log("------->", blobInfo.type, this.$message);
  //     success(res.data.path);
  //   }
  // },

  // 上传成功回调函数，return 图片地址。默认 response.location
  custom_images_upload_callback: (res) => {
    if (res.code === 200) {
      return res.data.path;
    }
  },
  // 上传 api 请求头
  custom_images_upload_header: { "X-Token": "xxxx" },
  // 上传 api 额外的参数。图片默认 file
  custom_images_upload_param: {},
  height: 550, // editor 高度
  toolbar:
    "undo redo| code codesample | fullscreen | blocks alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsize forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
  toolbar_mode: "sliding",
  quickbars_selection_toolbar:
    "removeformat | bold italic underline strikethrough | fontsize forecolor backcolor",
  plugins: "link code image media table lists fullscreen quickbars codesample",
  font_size_formats: "12px 14px 16px 18px",
  link_default_target: "_blank",

  //其他配置参数
  valid_elements: "*[*]",
  // invalid_elements: "strong,em", 无效元素
  // invalid_styles: 'color font-size' 无效样式
  //   invalid_styles: {
  //     '*': 'color font-size', //全局无效样式
  //     'a': 'background', // 链接禁用背景样式
  // }
  // extended_valid_elements: "[class|style|id|referrerpolicy]", 扩展元素

  allow_html_in_named_anchor: true, //允许name锚点 <a name="tagId"></a>
  // allow_script_urls: true,

  // 以中文简体为例
  language: "zh-Hans",
  language_url: "/public/admin/tinymce/zh-Hans.js",

  codesample_languages: [
    { text: "HTML/XML", value: "markup" },
    { text: "JavaScript", value: "javascript" },
    { text: "CSS", value: "css" },
    { text: "PHP", value: "php" },
    { text: "Ruby", value: "ruby" },
    { text: "Python", value: "python" },
    { text: "Java", value: "java" },
    { text: "C", value: "c" },
    { text: "C#", value: "csharp" },
    { text: "C++", value: "cpp" },
  ],
};

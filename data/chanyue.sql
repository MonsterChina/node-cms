/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726 (5.7.26)
 Source Host           : localhost:3306
 Source Schema         : chanyue

 Target Server Type    : MySQL
 Target Server Version : 50726 (5.7.26)
 File Encoding         : 65001

 Date: 25/11/2023 20:49:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NULL DEFAULT NULL COMMENT '栏目id',
  `sub_cid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其它栏目id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `short_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '短标题',
  `tag_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签id',
  `attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '1头条 2推荐 3轮播 4热门',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关键词',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '来源',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文章简述',
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '缩略图',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '文章内容',
  `status` tinyint(2) NULL DEFAULT 0 COMMENT '0 发布 1 不发布',
  `pv` int(10) NULL DEFAULT 0 COMMENT '浏览量',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '外链',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (49, 9, '', '测试', '', '', '1,3', '', '', '', '', '', '测试', '/public/cover/01.jpg', '<p>测试</p>', 0, 5, '', '2023-11-07 11:08:35', '2023-11-25 12:58:24');
INSERT INTO `article` VALUES (50, 6, NULL, 'Node.js接入支付宝支付实战指南：实现安全高效的交易体验', '', '', '', '', '', '', '', '', '在当今快速发展的数字支付领域，支付宝作为国内领先的第三方支付平台之一，为商务交易和消费支付提供了便捷的解决方案。对于开发者来说，使用Node.js接入支付宝支付系统是实现快速、安全高效交易的关键步骤。本文将详细介绍如何使用Node.js接入支付宝支付系统，并提供示例代码，助你轻松搭建自己的支付功能。', NULL, '<p>在当今快速发展的数字支付领域，支付宝作为国内领先的第三方支付平台之一，为商务交易和消费支付提供了便捷的解决方案。对于开发者来说，使用Node.js接入支付宝支付系统是实现快速、安全高效交易的关键步骤。本文将详细介绍如何使用Node.js接入支付宝支付系统，并提供示例代码，助你轻松搭建自己的支付功能。</p>\n<p>一、准备工作与技术环境</p>\n<p>在开始前，请确保具备以下准备工作和技术环境：</p>\n<p>Node.js环境：确保已安装并正确配置Node.js环境。</p>\n<p>支付宝开放平台账户：拥有有效的支付宝开放平台账户，并已申请相关应用权限。</p>\n<p>二、创建并配置支付宝应用</p>\n<p>首先，我们需要在支付宝开放平台创建并配置应用，以获取必要的身份认证和密钥信息。按照以下步骤操作：</p>\n<p>登录支付宝开放平台，进入开放平台控制台。</p>\n<p>在控制台页面，点击左侧导航栏的&ldquo;应用列表&rdquo;，进入应用列表页面。</p>\n<p>点击&ldquo;创建应用&rdquo;按钮，填写应用名称、应用类型等相关信息，并完成应用的创建。</p>\n<p>应用创建成功后，在应用详情页面的&ldquo;密钥管理&rdquo;模块下生成密钥。</p>\n<p>三、安装必要的依赖</p>\n<p>在编写代码之前，需要安装一些必要的依赖模块。打开命令行工具，进入项目根目录，并执行以下命令：npm stall alipay</p>\n<pre class=\"language-javascript\"><code>npm install alipay-sdk</code></pre>\n<p>四、Node.js接入支付宝支付</p>\n<p>接下来，我们将展示如何使用Node.js接入支付宝支付系统。</p>\n<p>引入依赖模块</p>\n<p>首先，在我们的项目中引入所需的依赖模块：</p>\n<pre class=\"language-javascript\"><code>const AlipaySdk = require(\'alipay-sdk\').default;\n\nconst AlipayFormData = require(\'alipay-sdk/lib/form\').default;</code></pre>\n<p>初始化AlipaySdk</p>\n<pre class=\"language-javascript\"><code>const alipaySdk = new AlipaySdk({ appId: \'your_app_id\', privateKey: \'your_private_key\', alipayPublicKey: \'alipay_public_key\', gateway: \'https://openapi.alipay.com/gateway.do\', charset: \'utf-8\', version: \'1.0\', signType: \'RSA2\',});</code></pre>\n<p>在初始化AlipaySdk时，我们需要替换appId、privateKey、alipayPublicKey等参数为实际的值。alipayPublicKey是你在支付宝开放平台创建应用时生成的密钥。</p>\n<p>创建支付订单</p>\n<p>const formData = new AlipayFormData();formData.setMethod(\'get\');formData.addField(\'returnUrl\', \'your_return_url\');formData.addField(\'notifyUrl\', \'your_notify_url\');formData.addField(\'bizContent\', { subject: \'商品名称\', outTradeNo: \'商户订单号\', totalAmount: \'订单金额\', productCode: \'FAST_INSTANT_TRADE_PAY\',});</p>\n<p>在创建支付订单时，需要设置支付成功后的跳转页面returnUrl、异步通知地址notifyUrl，以及订单相关信息。</p>\n<p>生成支付链接</p>\n<p>const result = await alipaySdk.exec(\'alipay.trade.page.pay\', {}, { formData: formData,});</p>\n<p>通过执行alipay.trade.page.pay接口，我们可以生成支付宝支付的链接。</p>\n<p>五、验签与回调处理</p>\n<p>在支付宝支付过程中，支付结果的回调是非常重要的环节。我们需验证支付宝返回的回调参数，并根据验证结果进行订单状态的更新、发货等后续操作。</p>\n<p>const formData = new AlipayFormData();formData.parse(async (params) =&gt; { const result = await alipaySdk.checkNotifySign(params); if (result) { // 验签通过 const tradeStatus = params[\'trade_status\']; // 支付状态 const outTradeNo = params[\'out_trade_no\']; // 商户订单号 // 根据实际情况进行相应处理 } else { // 验签失败 }});</p>\n<p>在验签通过后，可以根据实际情况进行订单状态的更新、发货等后续操作。</p>\n<p>本文详细介绍了在Node.js环境下接入支付宝支付系统的步骤和示例代码。通过创建支付宝应用、安装依赖模块以及具体的接入代码示例，帮助您搭建自己的支付宝支付系统并实现安全高效的交易体验。</p>', 0, 3, '', '2023-11-07 13:51:36', '2023-11-07 13:55:45');
INSERT INTO `article` VALUES (51, 6, NULL, '17 种常见 Node.js 错误及解决方法！', '', '', '', '', '', '', '', '', '对于开发人员来说，代码错误是一个巨大的挑战，它往往会导致不必要的时间消耗。我们可能很快就会把矛头指向编程语言或环境，但我们也应该承认，这些错误中有很多是由开发人员的失误和我们使用这些工具的方式造成的。', NULL, '<p data-tool=\"mdnice编辑器\">对于开发人员来说，代码错误是一个巨大的挑战，它往往会导致不必要的时间消耗。我们可能很快就会把矛头指向编程语言或环境，但我们也应该承认，这些错误中有很多是由开发人员的失误和我们使用这些工具的方式造成的。</p>\n<p data-tool=\"mdnice编辑器\">Node.js 已经存在了相当长的一段时间，在构建强大而复杂的网络服务方面发挥了重要作用，这些服务能够有效扩展并经受住时间的考验。但是，与其他运行时环境或平台一样，Node.js 也容易受到开发人员产生的错误的影响。</p>\n<p data-tool=\"mdnice编辑器\">在本文中，我们将介绍您可能会遇到的一些最常见的 Node.js 错误，并讨论如何解决这些错误。</p>\n<p data-tool=\"mdnice编辑器\"><strong>主要内容如下：</strong></p>\n<ul class=\"list-paddingleft-1\" data-tool=\"mdnice编辑器\">\n<li>\n<section><strong>流中未处理的异常</strong></section>\n</li>\n<li>\n<section><strong>JavaScript 堆内存不足错误</strong></section>\n</li>\n<li>\n<section><strong>环境兼容性错误</strong></section>\n</li>\n<li>\n<section><strong>网络和通信错误</strong></section>\n</li>\n<li>\n<section><strong>其他常见的 Node.js 错误</strong></section>\n</li>\n</ul>\n<h2 data-tool=\"mdnice编辑器\">1.Stream 中的未处理异常</h2>\n<p data-tool=\"mdnice编辑器\">Stream(流)是 Node.js 中的一个基本概念，用于读写异步数据源（如文件、套接字或 HTTP 请求）。在流的生命周期中，随时都可能发生错误。</p>\n<p data-tool=\"mdnice编辑器\">流会在各种操作（如读取、写入、管道或转换数据）过程中产生错误。错误通过流的错误事件发出。如果不为流附加错误处理程序，错误就会在事件循环中传播，并可能导致应用程序崩溃。</p>\n<p data-tool=\"mdnice编辑器\">下面是流中未处理异常的示例：</p>\n<pre data-tool=\"mdnice编辑器\"><code>const&nbsp;fs&nbsp;=&nbsp;require(\'fs\');<br>const&nbsp;readStream&nbsp;=&nbsp;fs.createReadStream(\'nonexistent-file.txt\');<br>//&nbsp;Without&nbsp;an&nbsp;error&nbsp;handler,&nbsp;this&nbsp;error&nbsp;will&nbsp;crash&nbsp;the&nbsp;application.<br>readStream.pipe(process.stdout);<br></code></pre>\n<p data-tool=\"mdnice编辑器\">如果在客户端的连接被突然终止时未附加错误处理程序，readStream 在发生错误时可能无法关闭。相反，它将无限期保持打开状态，在应用程序中引发内存泄漏。</p>\n<p data-tool=\"mdnice编辑器\">这可能导致意外的行为，并可能导致出现像在下面示例中显示的&nbsp;<code>unhandled stream error in pipe</code>&nbsp;之类的错误：</p>\n<pre data-tool=\"mdnice编辑器\"><code>stream.js:60<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw&nbsp;er;&nbsp;//&nbsp;Unhandled&nbsp;stream&nbsp;error&nbsp;in&nbsp;pipe.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^<br>Error:&nbsp;socket&nbsp;hang&nbsp;up<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;createHangUpError&nbsp;(_http_client.js:200:15)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;Socket.socketOnEnd&nbsp;(_http_client.js:285:23)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;emitNone&nbsp;(events.js:72:20)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;Socket.emit&nbsp;(events.js:166:7)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;endReadableNT&nbsp;(_stream_readable.js:905:12)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;nextTickCallbackWith2Args&nbsp;(node.js:437:9)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;process._tickCallback&nbsp;(node.js:351:17)<br></code></pre>\n<p data-tool=\"mdnice编辑器\">要解决 Node.js 流中未处理的异常错误，可以使用多种解决方案之一。让我们一起来看看。</p>\n<h3 data-tool=\"mdnice编辑器\">1.1.附加错误事件处理程序</h3>\n<p data-tool=\"mdnice编辑器\">在日常开发中，我们要始终附加错误事件处理程序，以捕获和处理在流操作过程中出现的错误。这样可以确保错误被捕获并妥善管理，防止应用程序崩溃：</p>\n<pre data-tool=\"mdnice编辑器\"><code>const&nbsp;fs&nbsp;=&nbsp;require(\'fs\');<br>const&nbsp;readStream&nbsp;=&nbsp;fs.createReadStream(\'example-file.txt\');<br>readStream.on(\'error\',&nbsp;(err)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;console.error(\'An&nbsp;error&nbsp;occurred:\',&nbsp;err.message);<br>});<br>readStream.pipe(process.stdout);<br></code></pre>\n<h3 data-tool=\"mdnice编辑器\">1.2.在同步代码中使用 try-catch</h3>\n<p data-tool=\"mdnice编辑器\">在处理与流交互的同步代码时，可以用 try-catch 将代码封装起来，以便有效处理错误。这将确保程序在发生错误时不会崩溃，并以可控的方式处理错误：</p>\n<pre data-tool=\"mdnice编辑器\"><code>const&nbsp;fs&nbsp;=&nbsp;require(\'fs\');<br><br>try&nbsp;{<br>&nbsp;&nbsp;const&nbsp;readStream&nbsp;=&nbsp;fs.createReadStream(\'example-file.txt\',&nbsp;\'utf8\');<br>&nbsp;&nbsp;const&nbsp;dataPromise&nbsp;=&nbsp;new&nbsp;Promise((resolve,&nbsp;reject)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;data&nbsp;=&nbsp;\'\';<br>&nbsp;&nbsp;&nbsp;&nbsp;readStream.on(\'data\',&nbsp;(chunk)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data&nbsp;+=&nbsp;chunk;<br>&nbsp;&nbsp;&nbsp;&nbsp;});<br>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Handle&nbsp;errors&nbsp;from&nbsp;the&nbsp;stream<br>&nbsp;&nbsp;&nbsp;&nbsp;readStream.on(\'error\',&nbsp;(err)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reject(err);&nbsp;//&nbsp;Reject&nbsp;the&nbsp;promise&nbsp;if&nbsp;an&nbsp;error&nbsp;occurs<br>&nbsp;&nbsp;&nbsp;&nbsp;});<br>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;When&nbsp;the&nbsp;stream&nbsp;ends,&nbsp;resolve&nbsp;the&nbsp;promise&nbsp;with&nbsp;the&nbsp;data<br>&nbsp;&nbsp;&nbsp;&nbsp;readStream.on(\'end\',&nbsp;()&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve(data);<br>&nbsp;&nbsp;&nbsp;&nbsp;});<br>&nbsp;&nbsp;});<br>&nbsp;&nbsp;const&nbsp;fileData&nbsp;=&nbsp;await&nbsp;dataPromise;<br>&nbsp;&nbsp;console.log(\'File&nbsp;contents:\',&nbsp;fileData);<br>}&nbsp;catch&nbsp;(err)&nbsp;{<br>&nbsp;&nbsp;console.error(\'An&nbsp;error&nbsp;occurred:\',&nbsp;err.message);&nbsp;//&nbsp;Log&nbsp;error&nbsp;to&nbsp;the&nbsp;console<br>}<br></code></pre>\n<p data-tool=\"mdnice编辑器\">在上面的代码中，我们创建了一个 try-catch 块，该块封装了一个&nbsp;<code>Promise</code>，当数据流成功结束时，该&nbsp;<code>Promise</code>&nbsp;将被 resolve；如果发生错误，该承诺将被 reject。然后在 catch 代码块中捕获错误并记录。</p>\n<h3 data-tool=\"mdnice编辑器\">1.3.使用 pipline 法</h3>\n<p data-tool=\"mdnice编辑器\">前面的选项可以有效地处理错误，但是当使用 pipeline 方法时，附加事件处理程序到每个流上可能会变得难以管理。相反，管道方法提供了一种更清晰、更易于管理的处理错误方式。</p>\n<p data-tool=\"mdnice编辑器\">管道方法是一个流方法，它接受三个参数：可读流（流的源头）、可写流（流的目标）和在过程中发生错误时将被调用的回调函数：</p>\n<pre data-tool=\"mdnice编辑器\"><code>const&nbsp;fs&nbsp;=&nbsp;require(\'fs\');<br>const&nbsp;{&nbsp;pipeline&nbsp;}&nbsp;=&nbsp;require(\'stream\');<br>const&nbsp;readStream&nbsp;=&nbsp;fs.createReadStream(\"inputexample.txt\");<br>const&nbsp;writeStream&nbsp;=&nbsp;fs.createWriteStream(\"outputexample.txt\");<br>pipeline(<br>&nbsp;&nbsp;readStream,&nbsp;//&nbsp;Readable&nbsp;stream<br>&nbsp;&nbsp;writeStream,&nbsp;//&nbsp;Writable&nbsp;stream<br>&nbsp;&nbsp;(err)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Callback&nbsp;function&nbsp;to&nbsp;handle&nbsp;errors<br>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(err)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.error(\"Pipeline&nbsp;failed:\",&nbsp;err);<br>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(\"Pipeline&nbsp;succeeded\");<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>);<br></code></pre>\n<p data-tool=\"mdnice编辑器\"><code>pipeline</code>&nbsp;方法在文件输入/输出和网络操作中特别有用，它提供了一种更清晰、更强大的方式，可以将数据从可读流传输到可写流，同时有效地处理错误。</p>\n<h3 data-tool=\"mdnice编辑器\">1.4.使用 finished() 函数</h3>\n<p data-tool=\"mdnice编辑器\"><code>finished()</code>&nbsp;函数是一个处理流清理和完成逻辑的流方法。当流不再可读或可写，或者因为过早终止（如取消的HTTP请求）而出现错误时，它会被触发。</p>\n<p data-tool=\"mdnice编辑器\">当流成功结束时，该函数发出 end 或 finish 事件。但是，该函数会忽略这些事件，并代替调用回调函数，将其作为第二个参数以处理意外错误并防止应用程序崩溃：</p>\n<pre data-tool=\"mdnice编辑器\"><code>const&nbsp;{&nbsp;finished&nbsp;}&nbsp;=&nbsp;require(\'node:stream\');<br>const&nbsp;fs&nbsp;=&nbsp;require(\'node:fs\');<br>const&nbsp;readStream&nbsp;=&nbsp;fs.createReadStream(\'input.txt\');<br><br>finished(readStream,&nbsp;(err)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;if&nbsp;(err)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;console.error(\'Read&nbsp;stream&nbsp;encountered&nbsp;an&nbsp;error:\',&nbsp;err);<br>&nbsp;&nbsp;}&nbsp;else&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\'Read&nbsp;stream&nbsp;has&nbsp;finished&nbsp;successfully.\');<br>&nbsp;&nbsp;}<br>});<br></code></pre>\n<h2 data-tool=\"mdnice编辑器\">&nbsp;</h2>\n<h2 data-tool=\"mdnice编辑器\">&nbsp;</h2>\n<h2 data-tool=\"mdnice编辑器\">2.JavaScript 堆内存不足错误</h2>\n<p data-tool=\"mdnice编辑器\">JavaScript 堆内存不足错误可能由多种因素引起，但最常见的是应用程序中的内存泄漏。当应用程序分配内存不再需要时没有及时释放，就会发生内存泄漏。</p>\n<p data-tool=\"mdnice编辑器\">这可能发生在应用程序创建的对象从不被删除，或者应用程序保留对不再使用的对象的引用时。随着时间的推移，内存泄漏可能导致应用程序耗尽内存并崩溃：</p>\n<pre data-tool=\"mdnice编辑器\"><code>FATAL&nbsp;ERROR:&nbsp;Reached&nbsp;heap&nbsp;limit&nbsp;Allocation&nbsp;failed&nbsp;-&nbsp;JavaScript&nbsp;heap&nbsp;out&nbsp;of&nbsp;memory<br></code></pre>\n<p data-tool=\"mdnice编辑器\">此错误相当模糊，新手开发人员通常不知道如何解决这样的错误。让我们来看一下 Node.js 中内存泄漏的最常见原因。</p>\n<h3 data-tool=\"mdnice编辑器\">2.1.未关闭的连接</h3>\n<p data-tool=\"mdnice编辑器\">当与数据库或其他资源的连接未正确关闭时，连接将保持打开状态并占用内存：</p>\n<pre data-tool=\"mdnice编辑器\"><code>//&nbsp;模拟一个长时间运行的操作，而不关闭连接<br>app.get(\'/unclosed\',&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;//&nbsp;在真实的情况下，这可能是一个数据库查询、文件读取等。<br>&nbsp;&nbsp;setTimeout(()&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;这个响应不会被发送，连接保持打开<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\'请求已处理，但响应未被发送。\');<br>&nbsp;&nbsp;},&nbsp;5000);<br>});<br><br>const&nbsp;port&nbsp;=&nbsp;3000;<br><br>app.listen(port,&nbsp;()&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;console.log(`服务器在端口上监听${port}。`);<br>});<br><br></code></pre>\n<p data-tool=\"mdnice编辑器\">在这个示例中，服务器不会向客户端发送响应。这会导致连接保持打开，而随着时间的推移，这些开放的连接可能会占用内存并导致性能问题。</p>\n<p data-tool=\"mdnice编辑器\">为了避免这种情况，您的服务器应该向客户端发送响应，即使只是一个简单的响应表示已收到请求。服务器还应该在发送响应后关闭连接。</p>\n<h3 data-tool=\"mdnice编辑器\">2.2.未处理的对象</h3>\n<p data-tool=\"mdnice编辑器\">当对象不再需要时，应该对其进行处理以释放它占用的内存。未处理对象可能导致内存泄漏：</p>\n<pre data-tool=\"mdnice编辑器\"><code>const&nbsp;mysql&nbsp;=&nbsp;require(\'mysql2\');<br><br>const&nbsp;pool&nbsp;=&nbsp;mysql.createPool({<br>&nbsp;&nbsp;host:&nbsp;\'localhost\',<br>&nbsp;&nbsp;user:&nbsp;\'username\',<br>&nbsp;&nbsp;password:&nbsp;\'password\',<br>&nbsp;&nbsp;database:&nbsp;\'mydb\',<br>&nbsp;&nbsp;connectionLimit:&nbsp;10,&nbsp;//&nbsp;限制并发连接数<br>});<br><br>//&nbsp;模拟不释放连接的查询<br>function&nbsp;querySim()&nbsp;{<br>&nbsp;&nbsp;pool.query(\'SELECT&nbsp;1&nbsp;+&nbsp;1&nbsp;AS&nbsp;result\',&nbsp;(error,&nbsp;results)&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(error)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.error(\'错误：\'，error);<br>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(\'结果：\'，results[0].result);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;});<br>}<br><br>//&nbsp;定期模拟查询（例如每1秒）<br>setInterval(querySim,&nbsp;1000);<br></code></pre>\n<p data-tool=\"mdnice编辑器\">在这个示例中，<code>querySim</code>&nbsp;函数将连续不断地使用连接池创建新的数据库连接，而没有释放它们，从而导致内存泄漏。</p>\n<p data-tool=\"mdnice编辑器\">为了避免内存泄漏，始终在使用完资源后释放资源。对于数据库连接，请使用&nbsp;<code>pool.end()</code>&nbsp;来有效地关闭连接池中的连接。</p>\n<h3 data-tool=\"mdnice编辑器\">2.3.循环引用</h3>\n<p data-tool=\"mdnice编辑器\">当两个对象相互引用时，它们可以创建一个循环引用。这可能会阻止任何一个对象被垃圾收集，从而导致内存泄漏：</p>\n<pre data-tool=\"mdnice编辑器\"><code>//&nbsp;为模拟在生产环境中的内存泄漏重复该过程<br>setInterval(()&nbsp;=&gt;&nbsp;{<br>&nbsp;&nbsp;//&nbsp;创建具有循环引用的新对象<br>&nbsp;&nbsp;const&nbsp;newObj1&nbsp;=&nbsp;{};<br>&nbsp;&nbsp;const&nbsp;newObj2&nbsp;=&nbsp;{};<br><br>&nbsp;&nbsp;newObj1.child&nbsp;=&nbsp;newObj2;<br>&nbsp;&nbsp;newObj2.parent&nbsp;=&nbsp;newObj1;<br><br>},&nbsp;1000);<br></code></pre>\n<p data-tool=\"mdnice编辑器\">上面的示例模拟了一个情况，其中会反复创建两个对象obj1和obj2。每个对象都有一个属性，指向另一个对象，从而创建了一个循环引用，这会阻止垃圾收集。</p>\n<p data-tool=\"mdnice编辑器\">如果这个过程持续一段时间，它可能会导致内存泄漏，因为具有循环引用的对象不会被垃圾收集，并且会继续占用内存。这最终可能导致JavaScript堆内存不足的错误。</p>\n<p data-tool=\"mdnice编辑器\">为了防止内存泄漏，当不再需要对象时，要打破循环引用。将属性设置为null，或者在不再使用对象时使用其他打破循环引用的技术。</p>\n<p data-tool=\"mdnice编辑器\">以下是如何使用 null 来中断先前示例中引用的方法：</p>\n<pre data-tool=\"mdnice编辑器\"><code>let&nbsp;newObj1，newObj2;<br><br>function&nbsp;circularObjects()&nbsp;{<br>&nbsp;&nbsp;//&nbsp;如果先前创建了对象，请打破它们的引用<br>&nbsp;&nbsp;if&nbsp;(newObj1)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;newObj1.child&nbsp;=&nbsp;null;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;if&nbsp;(newObj2)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;newObj2.parent&nbsp;=&nbsp;null;<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;//&nbsp;创建具有循环引用的新对象<br>&nbsp;&nbsp;newObj1&nbsp;=&nbsp;{};<br>&nbsp;&nbsp;newObj2&nbsp;=&nbsp;{};<br><br>&nbsp;&nbsp;newObj1.child&nbsp;=&nbsp;newObj2;<br>&nbsp;&nbsp;newObj2.parent&nbsp;=&nbsp;newObj1;<br>}<br>setInterval(circularObjects,&nbsp;1000);<br></code></pre>\n<h3 data-tool=\"mdnice编辑器\">2.4.大型应用程序</h3>\n<p data-tool=\"mdnice编辑器\">JavaScript 堆内存不足错误也可能在应用程序增大并使用更多占用 Node.js 分配的可用堆内存的对象时发生（默认情况下为1.5GB）。</p>\n<p data-tool=\"mdnice编辑器\">要解决此错误，您可以使用以下命令增加最大堆内存：</p>\n<p data-tool=\"mdnice编辑器\">Linux或macOS：</p>\n<pre data-tool=\"mdnice编辑器\"><code>node&nbsp;--max-old-space-size=4096&nbsp;server.js<br></code></pre>\n<p data-tool=\"mdnice编辑器\">Windows：</p>\n<ul class=\"list-paddingleft-1\" data-tool=\"mdnice编辑器\">\n<li>\n<section>打开命令行或 PowerShell 作为管理员</section>\n</li>\n<li>\n<section>使用 cd 命令导航到 Node.js 应用程序目录</section>\n</li>\n</ul>\n<p data-tool=\"mdnice编辑器\">运行以下命令：</p>\n<pre data-tool=\"mdnice编辑器\"><code>node&nbsp;--max-old-space-size=4096&nbsp;server.js<br></code></pre>\n<p data-tool=\"mdnice编辑器\">此命令将以 4GB 的内存限制启动您的 Node.js 应用程序。</p>\n<p data-tool=\"mdnice编辑器\">在 Node.js 中避免内存泄漏的可靠方法是遵循最佳编码实践，并使用 Node.js Inspector 等工具有效地监视和管理内存使用。</p>\n<h2 data-tool=\"mdnice编辑器\">3.环境兼容性错误</h2>\n<p data-tool=\"mdnice编辑器\">环境兼容性错误可能会在将针对特定环境（如Web浏览器）编写的代码移植到其它不可用或行为不同的环境时出现。让我们看一下一些常见的引用错误。</p>\n<h3 data-tool=\"mdnice编辑器\">3.1.ReferenceError: document is not defined</h3>\n<p data-tool=\"mdnice编辑器\"><code>ReferenceError: document is not defined</code>&nbsp;错误是开发人员经常遇到的最常见的环境兼容性错误，这些开发人员习惯于在Web浏览器环境中工作，但对 Node.js 还不熟悉：</p>\n<pre data-tool=\"mdnice编辑器\"><code>ReferenceError:&nbsp;document&nbsp;is&nbsp;not&nbsp;defined<br>at&nbsp;Object.&lt;anonymous&gt;&nbsp;(C:\\Users\\Desktop\\main.js:9:18)<br>at&nbsp;Module._compile&nbsp;(module.js:460:26)<br>at&nbsp;Object.Module._extensions..js&nbsp;(module.js:478:10)<br>at&nbsp;Module.load&nbsp;(module.js:355:32)<br>at&nbsp;Function.Module._load&nbsp;(module.js:310:12)<br>at&nbsp;Function.Module.runMain&nbsp;(module.js:501:10)<br>at&nbsp;startup&nbsp;(node.js:129:16)<br>at&nbsp;node.js:814:3<br></code></pre>\n<p data-tool=\"mdnice编辑器\">该错误表示您正在尝试访问document全局对象，该对象通常在 Web 浏览器的 DOM 中可用。然而，Node.js 是一个运行时环境，默认情况下没有 DOM 。这就是为什么在 Node.js 环境中尝试访问 document 会导致&nbsp;<code>ReferenceError: document is not defined</code>的原因：</p>\n<pre data-tool=\"mdnice编辑器\"><code>//&nbsp;This&nbsp;code&nbsp;tries&nbsp;to&nbsp;access&nbsp;the&nbsp;`document`&nbsp;object,&nbsp;which&nbsp;is&nbsp;not&nbsp;available&nbsp;outside&nbsp;a&nbsp;web&nbsp;browser<br>const&nbsp;title&nbsp;=&nbsp;document.title;<br>console.log(`Document&nbsp;title:&nbsp;${title}`);&nbsp;//&nbsp;ReferenceError:&nbsp;document&nbsp;is&nbsp;not&nbsp;defined<br></code></pre>\n<p data-tool=\"mdnice编辑器\">如果您的任务需要 DOM，您可以使用提供了一个 DOM 的库，如 Cheerio 或 Puppeteer。否则，您可以通过使用 typeof 运算符检查环境来确定代码所在的特定环境，然后再访问 document 对象：</p>\n<pre data-tool=\"mdnice编辑器\"><code>if&nbsp;(typeof&nbsp;document&nbsp;===&nbsp;\"object\")&nbsp;{<br>&nbsp;&nbsp;//&nbsp;在浏览器中运行特定于浏览器的代码<br>&nbsp;&nbsp;document.querySelectorAll(\"p\");<br>&nbsp;&nbsp;document.getElementById(\"table\");<br>&nbsp;&nbsp;console.log(\"在浏览器环境中运行\");<br>}&nbsp;else&nbsp;{<br>&nbsp;&nbsp;//&nbsp;在非浏览器代码中运行<br>&nbsp;&nbsp;console.log(\"在非浏览器环境中运行\");<br>}<br></code></pre>\n<p data-tool=\"mdnice编辑器\">这段代码将检查 document 对象在运行时环境中是否可用。如果它返回true，则执行if块中的代码；否则，执行else块中的代码。</p>\n<h3 data-tool=\"mdnice编辑器\">3.2.ReferenceError: window is not defined</h3>\n<p data-tool=\"mdnice编辑器\"><code>ReferenceError: window is not defined</code>&nbsp;错误发生在您尝试访问 window 对象时，其中 window 对象是特定于Web浏览器的，并且在 Node.js 运行时环境中不可用。window 对象是 Web 浏览器中的全局对象。它包含用于与浏览器和其窗口进行交互的属性和方法。</p>\n<p data-tool=\"mdnice编辑器\">在Node.js运行时环境中，全局对象称为global，并且不包含window对象。因此，如果您尝试在Node.js运行时环境中访问window对象，您将收到&nbsp;<code>ReferenceError: window is not defined</code></p>\n<p data-tool=\"mdnice编辑器\">与前面的错误类似，您可以通过使用条件语句和typeof运算符在执行之前检查代码是否在适当的环境中来修复ReferenceError: window未定义错误：</p>\n<pre data-tool=\"mdnice编辑器\"><code>function&nbsp;nodeTask()&nbsp;{<br>&nbsp;&nbsp;console.log(\'执行特定于Node的任务\');<br>}<br><br>function&nbsp;browserTask()&nbsp;{<br>&nbsp;&nbsp;console.log(\'执行特定于浏览器的任务\');<br>}<br><br>//&nbsp;环境特定的代码执行<br>if&nbsp;(typeof&nbsp;window&nbsp;===&nbsp;\'undefined\')&nbsp;{<br>&nbsp;&nbsp;//&nbsp;检查window是否未定义，通常表示Node.js环境<br>&nbsp;&nbsp;nodeTask();&nbsp;//&nbsp;执行Node特定代码<br>}&nbsp;else&nbsp;{<br>&nbsp;&nbsp;//&nbsp;如果window被定义，假设它是浏览器环境<br>&nbsp;&nbsp;browserTask();&nbsp;//&nbsp;执行浏览器特定的代码<br>}<br></code></pre>\n<h3 data-tool=\"mdnice编辑器\">3.3.ReferenceError: XMLHttp Request is not defined</h3>\n<p data-tool=\"mdnice编辑器\"><code>ReferenceError: XMLHttp Request is not defined</code>&nbsp;错误是在Node.js环境中尝试使用XMLHttpRequest构造函数发起HTTP请求时发生的，如下所示：</p>\n<pre data-tool=\"mdnice编辑器\"><code>try&nbsp;{<br>&nbsp;&nbsp;const&nbsp;xhr&nbsp;=&nbsp;new&nbsp;XMLHttpRequest();<br>&nbsp;&nbsp;xhr.open(\'GET\',&nbsp;\'https://example.com\',&nbsp;true);<br>&nbsp;&nbsp;xhr.onreadystatechange&nbsp;=&nbsp;function&nbsp;()&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(xhr.readyState&nbsp;===&nbsp;4&nbsp;&amp;&amp;&nbsp;xhr.status&nbsp;===&nbsp;200)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(xhr.responseText);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;};<br>&nbsp;&nbsp;xhr.send();<br>}&nbsp;catch&nbsp;(error)&nbsp;{<br>&nbsp;&nbsp;console.error(\'Error:\',&nbsp;error);<br>}<br></code></pre>\n<p data-tool=\"mdnice编辑器\">XMLHttpRequest 方法是一个特定于浏览器的 API。然而，与 window 和 document 不同，它不是全局对象，而是一个与服务器进行交互的构造函数。由于它的操作本质上是不可知的，所以很容易在非浏览器环境中（如Node.js）中使用XMLHttpRequest方法时犯下错误。</p>\n<p data-tool=\"mdnice编辑器\">要解决&nbsp;<code>ReferenceError: XMLHttp Request is not defined</code>&nbsp;错误，请使用替代包，axios、got或者直接使用高版本 Node.js 内置的fetch，它们是最新的，并提供更开发者友好的与服务器交互的方式。您可以使用以下命令安装这些包：</p>\n<pre data-tool=\"mdnice编辑器\"><code>npm&nbsp;install&nbsp;axios<br>npm&nbsp;install&nbsp;got<br></code></pre>\n<h2 data-tool=\"mdnice编辑器\">4.网络和通信错误</h2>\n<p data-tool=\"mdnice编辑器\">网络和通信错误是在您的 Node.js 应用程序和其他系统（如数据库、Web服务器和其他网络资源）之间进行网络通信时通常发生的一系列错误。这些错误可能由与网络连接性、数据传输等相关的各种因素引起。让我们来看看Node.js中一些常见的网络和通信错误以及如何解决它们。</p>\n<p data-tool=\"mdnice编辑器\">&nbsp;</p>\n<h3 data-tool=\"mdnice编辑器\">4.1.Error: read ECONNRESET</h3>\n<p data-tool=\"mdnice编辑器\"><code>Error: read ECONNRESET</code>&nbsp;错误发生在与远程服务器的连接意外关闭，通常在收到响应之前导致 HTTP 请求失败时：</p>\n<pre data-tool=\"mdnice编辑器\"><code>Error:&nbsp;read&nbsp;ECONNRESET<br>at&nbsp;errnoException&nbsp;(server.js:900:11)<br>at&nbsp;TCP.onread&nbsp;(server.js:555:19)<br></code></pre>\n<p data-tool=\"mdnice编辑器\">这可能由许多因素引起，例如远程服务器过载、Node.js 应用程序发送过多数据或远程服务器停电。</p>\n<p data-tool=\"mdnice编辑器\">要解决此错误，请执行以下操作之一：</p>\n<ul class=\"list-paddingleft-1\" data-tool=\"mdnice编辑器\">\n<li>\n<section>减少Node.js应用程序发送的数据量</section>\n</li>\n<li>\n<section>稍后尝试连接到远程服务器</section>\n</li>\n<li>\n<section>确保您的请求配置正确。包括HTTP方法（例如GET或POST）、主机名（例如logrocket.com）、路径（例如/blog）等</section>\n</li>\n<li>\n<section>测试您的网络连接</section>\n</li>\n<li>\n<section>增加连接超时；可能是在建立连接之前服务器超时</section>\n</li>\n</ul>\n<h3 data-tool=\"mdnice编辑器\">4.2.Error: connect ECONNREFUSED</h3>\n<p data-tool=\"mdnice编辑器\"><code>Error: connect ECONNREFUSED</code>&nbsp;错误发生在无法建立从 Node.js 应用程序到远程服务器的连接时：</p>\n<pre data-tool=\"mdnice编辑器\"><code>Error:&nbsp;connect&nbsp;ECONNREFUSED<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;errnoException&nbsp;(net.js:770:11)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;Object.afterConnect&nbsp;[as&nbsp;oncomplete]&nbsp;(net.js:761:19)<br></code></pre>\n<p data-tool=\"mdnice编辑器\">此错误可能由多种因素引起，例如远程服务器宕机、Node.js 应用程序无法到达远程服务器、远程服务器拒绝连接或将请求发送到错误的终端节点或端口。</p>\n<p data-tool=\"mdnice编辑器\">要解决此错误，请检查远程服务器的状态，验证您的 Node.js 应用程序是否正在运行并能够访问远程服务器，并确保远程服务器不会拒绝连接。</p>\n<h3 data-tool=\"mdnice编辑器\">4.3.Error: listen EADDRINUSE: address already in use</h3>\n<p data-tool=\"mdnice编辑器\"><code>Error: listen EADDRINUSE: address already in use</code>&nbsp;不是一种通信错误，而是在您尝试启动 Node.js 应用程序的端口已被另一个进程使用时发生的错误：</p>\n<pre data-tool=\"mdnice编辑器\"><code>Error:&nbsp;listen&nbsp;EADDRINUSE:&nbsp;address&nbsp;already&nbsp;in&nbsp;use&nbsp;:::3000<br>Emitted&nbsp;\'error\'&nbsp;event&nbsp;on&nbsp;Server&nbsp;instance&nbsp;at:<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;emitErrorNT&nbsp;(node:net:1544:8)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;process.processTicksAndRejections&nbsp;(node:internal/process/task_queues:84:21)&nbsp;{<br>&nbsp;&nbsp;code:&nbsp;\'EADDRINUSE\',<br>&nbsp;&nbsp;errno:&nbsp;-98,<br>&nbsp;&nbsp;syscall:&nbsp;\'listen\',<br>&nbsp;&nbsp;address:&nbsp;\'::\',<br>&nbsp;&nbsp;port:&nbsp;3000<br>}<br></code></pre>\n<p data-tool=\"mdnice编辑器\">在上面的示例中，错误消息表示端口 3000 已被另一个进程使用。这意味着该端口当前被占用，无法用于当前请求。</p>\n<p data-tool=\"mdnice编辑器\">要解决此错误，您可以停止使用指定端口的进程，或者将您的应用程序配置为在不同的端口上运行。要执行前者，在终端中执行以下命令：</p>\n<pre data-tool=\"mdnice编辑器\"><code>npx&nbsp;kill-port&nbsp;3000<br></code></pre>\n<p data-tool=\"mdnice编辑器\">注意，此命令将立即终止进程，而不提供保存未保存数据的任何机会。</p>\n<p data-tool=\"mdnice编辑器\">对于 macOS，请使用以下命令查看正在使用该端口的进程的信息：</p>\n<pre data-tool=\"mdnice编辑器\"><code>lsof&nbsp;-i:&nbsp;3000<br></code></pre>\n<p data-tool=\"mdnice编辑器\">您将收到一个包含进程ID（PID）的响应。复制该数字，并使用以下命令运行：</p>\n<pre data-tool=\"mdnice编辑器\"><code>kill&nbsp;-9&nbsp;&lt;PID&nbsp;number&gt;<br></code></pre>\n<p data-tool=\"mdnice编辑器\">此命令将终止进程，之后您可以无错误地启动 Node.js 应用程序。</p>\n<p data-tool=\"mdnice编辑器\">错误：write EPIPE 错误：write EPIPE或&ldquo;broken pipe&rdquo;错误发生在您的Node.js应用程序尝试向已关闭或意外终止的连接的另一端写入数据时。当应用程序不断尝试写入已关闭的连接时，通常会发生此错误：</p>\n<h3 data-tool=\"mdnice编辑器\">4.4.Error: write EPIPE</h3>\n<pre data-tool=\"mdnice编辑器\"><code>Error:&nbsp;write&nbsp;EPIPE<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;errnoException&nbsp;(net.js:770:11)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;Socket._write&nbsp;(net.js:552:19)<br>&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;Socket.write&nbsp;(net.js:511:15)<br></code></pre>\n<p data-tool=\"mdnice编辑器\">要修复&nbsp;<code>Error: write EPIPE</code>&nbsp;错误，检查您要写入的流或套接字是否仍处于活动状态并正在运行，然后再尝试写入数据。使用try-catch 块捕捉错误，然后采取适当的操作，例如关闭流或记录错误。</p>\n<h2 data-tool=\"mdnice编辑器\">5.其他常见的Node.js错误</h2>\n<p data-tool=\"mdnice编辑器\">以下是另外一些您可能在将来遇到的常见 Node.js错误。</p>\n<h3 data-tool=\"mdnice编辑器\">5.1.<code>.find is not a function</code></h3>\n<p data-tool=\"mdnice编辑器\">当您在不是数组的数据类型上调用&nbsp;<code>find()</code>&nbsp;方法时，会出现&nbsp;<code>.find</code>&nbsp;不是函数错误：</p>\n<pre data-tool=\"mdnice编辑器\"><code>const&nbsp;data&nbsp;=&nbsp;{<br>&nbsp;&nbsp;x:&nbsp;5,<br>&nbsp;&nbsp;y:&nbsp;10,<br>&nbsp;&nbsp;z:&nbsp;15,<br>};<br><br>data.find(el&nbsp;=&gt;&nbsp;el&nbsp;&gt;&nbsp;1&nbsp;);<br></code></pre>\n<p data-tool=\"mdnice编辑器\">在此示例中，find() 方法在对象上被调用。由于 find() 方法仅适用于数组，将抛出以下错误：</p>\n<pre data-tool=\"mdnice编辑器\"><code>TypeError:&nbsp;arr.find&nbsp;is&nbsp;not&nbsp;a&nbsp;function<br></code></pre>\n<h3 data-tool=\"mdnice编辑器\">5.2.Uncaught SyntaxError: Unexpected identifier</h3>\n<p data-tool=\"mdnice编辑器\"><code>Uncaught SyntaxError: Unexpected identifier</code>&nbsp;错误表明您的代码中存在语法错误或拼写错误的关键字，这些错误阻止解释器正确解析您的代码。当声明变量、类或方法时，错误特别常见，错误地使用大写字母而不是小写字母作为关键字时：</p>\n<pre data-tool=\"mdnice编辑器\"><code>Let&nbsp;name&nbsp;=&nbsp;\"same\";&nbsp;//&nbsp;L&nbsp;should&nbsp;be&nbsp;lowercase&nbsp;l<br><br>Const&nbsp;age&nbsp;=&nbsp;20;&nbsp;//&nbsp;C&nbsp;should&nbsp;be&nbsp;lowercase&nbsp;c<br></code></pre>\n<p data-tool=\"mdnice编辑器\">要解决未捕获的语法错误：意外标识符错误，请导航到发生错误的行，并确保关键字的拼写正确。还要寻找丢失的符号，如逗号、冒号、括号或圆括号。通过识别错误的源头，您应该能够轻松解决它。建议引入 ESLint 来规范代码，提升代码质量。</p>\n<h2 data-tool=\"mdnice编辑器\">总结</h2>\n<p data-tool=\"mdnice编辑器\">代码错误是使我们成为优秀开发者的重要部分。通过理解错误以及为什么发生错误，我们可以更深入地了解我们正在工作的编程语言或环境。</p>\n<p data-tool=\"mdnice编辑器\">在本文中，我们回顾了一些常见的 Node.js 错误并讨论了如何修复它们。希望本文能帮助您更好地了解 Node.js 和 JavaScript。祝大家快乐编程每一天！</p>', 0, 1, '', '2023-11-07 13:54:36', '2023-11-07 13:54:36');

-- ----------------------------
-- Table structure for article_map_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_map_tag`;
CREATE TABLE `article_map_tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) NULL DEFAULT NULL COMMENT '文章id',
  `tid` int(11) NULL DEFAULT NULL COMMENT '标签id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章-标签表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article_map_tag
-- ----------------------------
INSERT INTO `article_map_tag` VALUES (98, 49, 0);
INSERT INTO `article_map_tag` VALUES (99, 50, 0);
INSERT INTO `article_map_tag` VALUES (100, 51, 0);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT COMMENT '栏目id',
  `pid` tinyint(2) NOT NULL DEFAULT 0 COMMENT '父级栏目',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo关键字',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo描述',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目名称',
  `pinyin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目标识',
  `path` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '栏目路径',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目描述',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 栏目 1 页面',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '网址',
  `sort` tinyint(2) NULL DEFAULT 0 COMMENT '排序',
  `target` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '打开方式 0 当前页面打开 1 新页面打开',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 显示 1隐藏',
  `mid` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '模型id',
  `list_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'list.html' COMMENT '列表页模板',
  `article_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'article.html' COMMENT '详情页模板',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '网站栏目' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 0, '前端开发', '前端开发，es6,es5,javascript,js,css3,微信小程序', '前端开发常用知识，包括es6,es5,javascript,js,css3,微信小程序等常见开发。', '前端开发', 'qianduankaifa', '/qianduankaifa', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (2, 0, '', '', '', 'nodejs开发', 'nodejskaifa', '/nodejskaifa', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (3, 0, '', '', '', '禅悦文档', 'chanyuewendang', '/chanyuewendang', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (5, 0, '', '', '', '禅悦cms', 'chanyuecms', '/chanyuecms', '', '1', '', 0, '0', '0', '0', 'list.html', 'chanyue.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (6, 2, '', '', '', 'express', 'express', '/nodejs/express', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (7, 2, '', '', '', '服务运维', 'fuwuyunwei', '/nodejs/fuwuyunwei', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (8, 0, '', '', '', '关于作者', 'guanyuzuozhe', '/guanyuzuozhe', '', '1', '', 0, '0', '0', '0', 'list.html', 'page.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (9, 1, '', '', '', 'JavaScript', 'JavaScript', '/qianduankaifa/JavaScript', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (10, 1, '', '', '', 'css', 'css', '/qianduankaifa/css', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (11, 2, '', '', '', 'mysql', 'mysql', '/nodekaifa/mysql', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (13, 1, '', '', '', 'vue', 'vue', '/qianduankaifa/vue', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);
INSERT INTO `category` VALUES (14, 1, '', '', '', '小程序', 'xiaochengxu', '/qianduankaifa/xiaochengxu', '', '0', '', 0, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', NULL);

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `listTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '列表tag标签',
  `startNum` int(11) NULL DEFAULT 1 COMMENT '开始页面',
  `endNum` int(11) NULL DEFAULT NULL COMMENT '结束页面',
  `increment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '递增数量默认1',
  `titleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `articleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '文章内容',
  `charset` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '编码 1-> utf-8  2-> gb2312',
  `pages` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '采集地址集合',
  `clearRegCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理文章多余标签正则',
  `removeCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理代码',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '采集' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES (1, '草堂札记', 'http://www.tangnet.cn/lists/31.html?page=${page}', '.news-list h5 a', 1, 1, '1', '.title h1', '.content', '1', 'http://www.tangnet.cn/news/46.html,http://www.tangnet.cn/news/44.html,http://www.tangnet.cn/news/43.html,http://www.tangnet.cn/news/42.html,http://www.tangnet.cn/news/37.html,http://www.tangnet.cn/news/27.html,http://www.tangnet.cn/news/28.html,http://www.tangnet.cn/news/31.html,http://www.tangnet.cn/news/26.html,http://www.tangnet.cn/news/24.html', '', NULL, 12, '2', '2023-09-29 19:33:57', '2023-09-29 20:05:09');

-- ----------------------------
-- Table structure for down
-- ----------------------------
DROP TABLE IF EXISTS `down`;
CREATE TABLE `down`  (
  `aid` int(11) NOT NULL,
  `downName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `downLink` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of down
-- ----------------------------

-- ----------------------------
-- Table structure for field
-- ----------------------------
DROP TABLE IF EXISTS `field`;
CREATE TABLE `field`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NULL DEFAULT NULL COMMENT '模型id',
  `field_cname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型字段中文名称',
  `field_ename` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '模型字段英文名称',
  `field_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '表单类型\r\n1单行文本	\r\n2.多行文本 \r\n3.下拉菜单 \r\n4.单选 \r\n5.多选 \r\n6.时间和日期 7.数字',
  `field_values` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段配置 下拉菜单多选等选项配置',
  `field_default` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '默认值',
  `field_sort` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '字段顺序',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `model_id`(`model_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字段字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of field
-- ----------------------------
INSERT INTO `field` VALUES (1, 1, '下载名称', 'downName', '1', '', '', '0');
INSERT INTO `field` VALUES (2, 1, '下载链接', 'downLink', '1', '', '', '0');

-- ----------------------------
-- Table structure for frag
-- ----------------------------
DROP TABLE IF EXISTS `frag`;
CREATE TABLE `frag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '名称',
  `mark` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标识',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `type` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '类型 1 富文本 2 文本框',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '碎片' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of frag
-- ----------------------------
INSERT INTO `frag` VALUES (1, '广告', 'ad', '<p>观呼吸，起禅悦，听心路，入定境。</p>\n<p>肚脐放松，神藏其中，火起气成，百日呼吸渐止。后扩展到整个小腹，后扩展到全身，接天地能量入体，天人合一，化气为光，时刻出入有无。</p>\n<p>修行开经络，通窍穴，开天门，透全身，化身心入空，后天人合一，后化气为场，化场为电，化电为光，化光为虚无，化虚无为寂静，化寂静为寂灭，化寂灭，后修三千功德，了无所得，无所住则道成。</p>', '1', '2023-07-14 20:48:50', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (2, '版权', 'copyright', '<p class=\"f-13 text-c c-bfbfbf\">自豪的采用 chanyue-cms</p>', '1', '2023-08-05 17:34:49', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (3, 'chanyue-cms介绍', 'chanyue-introduce', '<h3 class=\"m-title border-dashed f-16 row justify-between\">禅悦cms</h3>\n<p class=\"mt-10 f-14 lh-24\">禅悦内容管理系统，基于`nodejs` `express` `mysql` `knex` `jwt` `vue3` 进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。<a title=\"\" href=\"https://gitee.com/yanyutao0402/chanyue-cms\" target=\"_blank\" rel=\"noopener\">[详情]</a></p>', '1', '2023-08-05 17:36:09', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (4, '底部-前端', 'footer-fe', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">前端</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">JavaScript</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">vue</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">react</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">css3</a></p>\n</div>', '1', '2023-08-10 17:39:04', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (5, '底部-nodejs', 'footer-nodejs', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">nodejs</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">express</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">koa</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">mysql</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">mongoDB</a></p>\n</div>', '1', '2023-08-10 17:40:42', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (6, '底部-禅悦', 'footer-chanyue', '<div class=\"col-6\">\n<h4 class=\"f-15 pb-10\">chanyue-cms</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">在线文档</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">视频教程</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">标签工具</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">模板</a></p>\n</div>', '1', '2023-08-10 17:41:18', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (7, '底部-关于', 'footer-guanyu', '<div class=\"col-6\">\n<h4 class=\"f-15  pb-10\">关于</h4>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">关于我们</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">最新动态</a></p>\n<p class=\"f-13 pt-3 pb-3\"><a class=\"c-595959\">联系作者</a></p>\n</div>', '1', '2023-08-10 17:41:52', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (8, '首页轮播图', 'homeSlide', '<p><img src=\"/public/template/angke/img/banner.jpg\" alt=\"\"></p>', '1', '2023-11-05 22:29:01', '2023-11-25 12:45:07');
INSERT INTO `frag` VALUES (9, '我就是用来测试的', 'test', 'chanyue-cms 值得拥有', '1', '2023-11-08 14:58:19', '2023-11-25 12:45:07');

-- ----------------------------
-- Table structure for friendlink
-- ----------------------------
DROP TABLE IF EXISTS `friendlink`;
CREATE TABLE `friendlink`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接名称',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接地址',
  `sort` tinyint(255) NULL DEFAULT 0 COMMENT '排序',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '友情链接' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of friendlink
-- ----------------------------
INSERT INTO `friendlink` VALUES (1, '香港日报', 'http://www.hongkongdaily.net', 0, '2023-07-22 22:59:55', '2023-11-25 12:44:34');

-- ----------------------------
-- Table structure for login_log
-- ----------------------------
DROP TABLE IF EXISTS `login_log`;
CREATE TABLE `login_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户id',
  `ip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ip',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`uid`, `createdAt`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of login_log
-- ----------------------------
INSERT INTO `login_log` VALUES (1, 1, '127.0.0.1', '2023-11-01 17:01:53');
INSERT INTO `login_log` VALUES (2, 3, '127.0.0.1', '2023-11-01 17:38:53');
INSERT INTO `login_log` VALUES (3, 1, '127.0.0.1', '2023-11-01 17:39:49');
INSERT INTO `login_log` VALUES (4, 3, '127.0.0.1', '2023-11-01 17:51:16');
INSERT INTO `login_log` VALUES (5, 2, '127.0.0.1', '2023-11-01 17:51:57');
INSERT INTO `login_log` VALUES (6, 1, '127.0.0.1', '2023-11-01 21:55:40');
INSERT INTO `login_log` VALUES (7, 3, '127.0.0.1', '2023-11-01 22:11:35');
INSERT INTO `login_log` VALUES (8, 1, '127.0.0.1', '2023-11-01 22:11:51');
INSERT INTO `login_log` VALUES (9, 2, '127.0.0.1', '2023-11-01 22:13:49');
INSERT INTO `login_log` VALUES (10, 3, '127.0.0.1', '2023-11-01 22:14:09');
INSERT INTO `login_log` VALUES (11, 2, '127.0.0.1', '2023-11-05 21:39:45');
INSERT INTO `login_log` VALUES (12, 2, '127.0.0.1', '2023-11-05 23:18:19');
INSERT INTO `login_log` VALUES (13, 1, '127.0.0.1', '2023-11-05 23:19:20');
INSERT INTO `login_log` VALUES (14, 2, '127.0.0.1', '2023-11-05 23:41:48');
INSERT INTO `login_log` VALUES (15, 1, '127.0.0.1', '2023-11-05 23:58:42');
INSERT INTO `login_log` VALUES (16, 2, '127.0.0.1', '2023-11-05 23:59:06');
INSERT INTO `login_log` VALUES (17, 1, '127.0.0.1', '2023-11-07 09:35:47');
INSERT INTO `login_log` VALUES (18, 1, '127.0.0.1', '2023-11-08 11:22:11');
INSERT INTO `login_log` VALUES (19, 1, '127.0.0.1', '2023-11-25 12:59:36');
INSERT INTO `login_log` VALUES (20, 2, '127.0.0.1', '2023-11-25 13:00:00');
INSERT INTO `login_log` VALUES (21, 1, '127.0.0.1', '2023-11-25 13:05:01');
INSERT INTO `login_log` VALUES (22, 1, '127.0.0.1', '2023-11-25 18:04:58');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `tel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `company` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司名称',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '留言内容',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '留言' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (1, '闫宇韬', '13366826071', '天山派', '仰天大笑出门去，我辈岂是蓬蒿人！', '2023-11-25 12:42:23', '2023-11-25 12:42:23');

-- ----------------------------
-- Table structure for model
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型名称',
  `table_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型对应的表名',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '1->开启 0->关闭',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '模型字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES (1, 'down', 'down', '1');

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site`  (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '站点id',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站名称',
  `domain` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站域名',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `wx` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信',
  `icp` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ICP备案号',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '站点统计代码',
  `json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '万能配置',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面标题',
  `keywords` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面关键词',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面描述',
  `template` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'view模板',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序secret',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '网站信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, '前端小栈', 'www.angyi.com', '867528315@qq.com', NULL, NULL, '', '{\"siteSubtitle\":\"• 禅悦\"}', 'chanyue-cms禅悦内容管理系统', 'chanyue-cms|禅悦cms|nodejs|express|mysql', '禅悦CMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。', NULL, NULL, NULL, NULL, '2023-11-07 13:40:47');

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播图',
  `link_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播链接',
  `mark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES (1, '首页', '/public/template/angke/img/banner.jpg', '', NULL, '2023-11-05 23:29:14', '2023-11-05 23:33:31');

-- ----------------------------
-- Table structure for sys_app
-- ----------------------------
DROP TABLE IF EXISTS `sys_app`;
CREATE TABLE `sys_app`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `template` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'default' COMMENT 'view模板名称',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序秘钥',
  `accessKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云ak',
  `secretKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云sk',
  `domain` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云域名',
  `bucket` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云bucket',
  `uploadWay` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '上传方式 1->普通 2->七牛云',
  `maxAge` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '静态资源缓存 1开启 2关闭',
  `dataCache` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '全局模板数据缓存 1开启 2关闭',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '应用配置' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_app
-- ----------------------------
INSERT INTO `sys_app` VALUES (1, 'default', 's', 'x', 'x', 'x', 'x', 'x', '1', '2', '2', '2023-10-07 21:52:21', '2023-11-08 11:44:23');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int(5) NOT NULL COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键名',
  `config_value` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '系统内置（Y是 N否）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '菜单配置',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (2, '{\"route\":[{\"path\":\"/home\",\"name\":\"home-info\",\"component\":\"@/views/home/info.vue\",\"meta\":{\"title\":\"网站信息\",\"icon\":\"DataLine\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/site\",\"name\":\"site\",\"meta\":{\"title\":\"站点管理\",\"icon\":\"Monitor\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/site\",\"children\":[{\"path\":\"/site\",\"name\":\"site-index\",\"component\":\"@/views/home/site.vue\",\"meta\":{\"title\":\"站点设置\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/content\",\"name\":\"content\",\"meta\":{\"title\":\"内容管理\",\"isShow\":true,\"icon\":\"Grid\",\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/category\",\"children\":[{\"path\":\"/category\",\"name\":\"category-index\",\"component\":\"@/views/category/index.vue\",\"meta\":{\"title\":\"栏目管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/add\",\"name\":\"category-add\",\"component\":\"@/views/category/add.vue\",\"meta\":{\"title\":\"栏目管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/edit/:id\",\"name\":\"category-edit\",\"component\":\"@/views/category/edit.vue\",\"meta\":{\"title\":\"页面管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article\",\"name\":\"article-index\",\"component\":\"@/views/article/index.vue\",\"meta\":{\"title\":\"文章管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/add\",\"name\":\"article-add\",\"component\":\"@/views/article/add.vue\",\"meta\":{\"title\":\"文章管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/edit/:id\",\"name\":\"article-edit\",\"component\":\"@/views/article/edit.vue\",\"meta\":{\"title\":\"文章管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide\",\"name\":\"slide-index\",\"component\":\"@/views/slide/index.vue\",\"meta\":{\"title\":\"轮播管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/add\",\"name\":\"slide-add\",\"component\":\"@/views/slide/add.vue\",\"meta\":{\"title\":\"轮播管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/edit/:id\",\"name\":\"slide-edit\",\"component\":\"@/views/slide/edit.vue\",\"meta\":{\"title\":\"轮播管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag\",\"name\":\"tag-index\",\"component\":\"@/views/tag/index.vue\",\"meta\":{\"title\":\"标签管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/add\",\"name\":\"tag-add\",\"component\":\"@/views/tag/add.vue\",\"meta\":{\"title\":\"标签管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/edit/:id\",\"name\":\"tag-edit\",\"component\":\"@/views/tag/edit.vue\",\"meta\":{\"title\":\"标签管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag\",\"name\":\"frag-index\",\"component\":\"@/views/frag/index.vue\",\"meta\":{\"title\":\"碎片管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/add\",\"name\":\"frag-add\",\"component\":\"@/views/frag/add.vue\",\"meta\":{\"title\":\"碎片管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/edit/:id\",\"name\":\"frag-edit\",\"component\":\"@/views/frag/edit.vue\",\"meta\":{\"title\":\"碎片管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/gather\",\"name\":\"gather\",\"meta\":{\"title\":\"采集功能\",\"icon\":\"MagicStick\",\"isShow\":true,\"role\":[\"super\"]},\"redirect\":\"/collect\",\"children\":[{\"path\":\"/collect\",\"name\":\"collect-index\",\"component\":\"@/views/collect/index.vue\",\"meta\":{\"title\":\"采集配置\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/collect/add\",\"name\":\"collect-add\",\"component\":\"@/views/collect/add.vue\",\"meta\":{\"title\":\"采集配置-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/collect/:id\",\"name\":\"collect-edit\",\"component\":\"@/views/collect/edit.vue\",\"meta\":{\"title\":\"采集配置-更新\",\"isShow\":false,\"role\":[\"super\"]}}]},{\"path\":\"/extend\",\"name\":\"extend\",\"meta\":{\"title\":\"功能管理\",\"icon\":\"Operation\",\"isShow\":true,\"role\":[\"super\"]},\"children\":[{\"path\":\"/model\",\"name\":\"model-index\",\"component\":\"@/views/model/index.vue\",\"meta\":{\"title\":\"模型管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/model/add\",\"name\":\"model-add\",\"component\":\"@/views/model/add.vue\",\"meta\":{\"title\":\"模型管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/edit/:id\",\"name\":\"model-edit\",\"component\":\"@/views/model/edit.vue\",\"meta\":{\"title\":\"模型管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field\",\"name\":\"field-index\",\"component\":\"@/views/field/index.vue\",\"meta\":{\"title\":\"字段管理\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/add\",\"name\":\"field-add\",\"component\":\"@/views/field/add.vue\",\"meta\":{\"title\":\"字段管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/edit\",\"name\":\"field-edit\",\"component\":\"@/views/field/edit.vue\",\"meta\":{\"title\":\"字段管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/friendlink\",\"name\":\"friendlink-index\",\"component\":\"@/views/friendlink/index.vue\",\"meta\":{\"title\":\"友情链接\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/add\",\"name\":\"friendlink-add\",\"component\":\"@/views/friendlink/add.vue\",\"meta\":{\"title\":\"友情链接-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/edit/:id\",\"name\":\"friendlink-edit\",\"component\":\"@/views/friendlink/edit.vue\",\"meta\":{\"title\":\"友情链接-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message\",\"name\":\"message-index\",\"component\":\"@/views/message/index.vue\",\"meta\":{\"title\":\"消息管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/add\",\"name\":\"message-add\",\"component\":\"@/views/message/add.vue\",\"meta\":{\"title\":\"消息管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/edit/:id\",\"name\":\"message-edit\",\"component\":\"@/views/message/edit.vue\",\"meta\":{\"title\":\"消息管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/sys\",\"name\":\"sys\",\"meta\":{\"title\":\"系统管理\",\"isShow\":true,\"icon\":\"Setting\",\"role\":[\"admin\",\"super\"]},\"redirect\":\"/user\",\"children\":[{\"path\":\"/user\",\"name\":\"user-index\",\"component\":\"@/views/user/index.vue\",\"meta\":{\"title\":\"用户管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/add\",\"name\":\"user-add\",\"component\":\"@/views/user/add.vue\",\"meta\":{\"title\":\"用户列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/edit/:id\",\"name\":\"user-edit\",\"component\":\"@/views/user/edit.vue\",\"meta\":{\"title\":\"用户列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role\",\"name\":\"role-index\",\"component\":\"@/views/role/index.vue\",\"meta\":{\"title\":\"角色管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/add\",\"name\":\"role-add\",\"component\":\"@/views/role/add.vue\",\"meta\":{\"title\":\"角色列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/edit/:id\",\"name\":\"role-edit\",\"component\":\"@/views/role/edit.vue\",\"meta\":{\"title\":\"角色列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/menu\",\"name\":\"menu-index\",\"component\":\"@/views/menu/index.vue\",\"meta\":{\"title\":\"菜单管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/loginlog\",\"name\":\"loginLog-index\",\"component\":\"@/views/loginlog/index.vue\",\"meta\":{\"title\":\"登录日志\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}}]}]}', NULL);

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告标题',
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公告状态（0关闭  1正常）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `value` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色值',
  `sort` int(4) NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `remark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'super', 0, '1', NULL, '2023-10-30 21:57:52', '2023-10-30 22:00:50');
INSERT INTO `sys_role` VALUES (2, '普通管理员', 'admin', 0, '1', NULL, '2023-10-30 22:01:04', '2023-10-30 22:01:04');
INSERT INTO `sys_role` VALUES (3, '编辑管理', 'editor', 0, '1', NULL, '2023-10-30 22:01:11', '2023-10-30 22:02:14');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `role_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色id',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, '2', 'chanyue', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-30 22:42:01', '2023-10-30 23:39:18');
INSERT INTO `sys_user` VALUES (2, '1', 'yanyutao', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-30 22:42:18', '2023-10-30 23:55:42');
INSERT INTO `sys_user` VALUES (3, '3', '张三', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-31 00:06:55', '2023-10-31 00:06:55');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '标签' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'cms', 'cms');
INSERT INTO `tag` VALUES (2, 'js库', 'jslib');
INSERT INTO `tag` VALUES (3, '开发工具', 'devtool');
INSERT INTO `tag` VALUES (4, 'pdf', 'pdf');

SET FOREIGN_KEY_CHECKS = 1;

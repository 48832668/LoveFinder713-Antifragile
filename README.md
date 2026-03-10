[简体中文](#) | [English](./README.en.md)

# LoveFinderSeries*NO.713-Antifragile*"反脆弱"

这是一个JLCEDA的原理图辅助工具，可以一站式管理你的任意信号总线和电源总线，可以快速为你的MCU等元件建立起外围信号网络，你可以一边畅爽地把左手放在其他地方，一边尽情地用右手或者你的意念（当前平行宇宙暂时不支持意念行动，因为你不是欧米伽·百合子）来操控鼠标，只消片刻，IIC（I2C）、SPI、UART（USART)、SDIO等信号总线，FLASH_1V8、MCU_3V3等电源总线就快速的爬满你的原理图。你的鼠标、你的键盘、你的大脑将不再脆弱，把我们的脑力更多放在左手上！（其实是其他地方，但肯定不是左手）

<a href="https://github.com/easyeda/pro-api-sdk" style="vertical-align: inherit;" target="_blank"><img src="https://img.shields.io/github/stars/easyeda/pro-api-sdk" alt="GitHub Repo Stars" class="not-medium-zoom-image" style="display: inline; vertical-align: inherit;" /></a> <a href="https://github.com/easyeda/pro-api-sdk/issues" style="vertical-align: inherit;" target="_blank"><img src="https://img.shields.io/github/issues/easyeda/pro-api-sdk" alt="GitHub Issues" class="not-medium-zoom-image" style="display: inline; vertical-align: inherit;" /></a> <a href="https://github.com/easyeda/pro-api-sdk" style="vertical-align: inherit;" target="_blank"><img src="https://img.shields.io/github/repo-size/easyeda/pro-api-sdk" alt="GitHub Repo Size" class="not-medium-zoom-image" style="display: inline; vertical-align: inherit;" /></a> <a href="https://choosealicense.com/licenses/apache-2.0/" style="vertical-align: inherit;" target="_blank"><img src="https://img.shields.io/github/license/easyeda/pro-api-sdk" alt="GitHub License" class="not-medium-zoom-image" style="display: inline; vertical-align: inherit;" /></a> <a href="https://www.npmjs.com/package/@jlceda/pro-api-types" style="vertical-align: inherit;" target="_blank"><img src="https://img.shields.io/npm/v/%40jlceda%2Fpro-api-types?label=pro-api-types" alt="NPM Version" class="not-medium-zoom-image" style="display: inline; vertical-align: inherit;" /></a> <a href="https://www.npmjs.com/package/@jlceda/pro-api-types" style="vertical-align: inherit;" target="_blank"><img src="https://img.shields.io/npm/d18m/%40jlceda%2Fpro-api-types" alt="NPM Downloads" class="not-medium-zoom-image" style="display: inline; vertical-align: inherit;" /></a>

> [!NOTE]
>
> 本项目仓库：[[48832668/LoveFinder713-ElecAntifragile](https://github.com/48832668/LoveFinder713-ElecAntifragile)]

## 上手

我喜欢先引入场景，从现在开始我将失去我的左手

![1773159437929](images/README/1773159437929.png)

1：点击固定放置按钮，你就会在原理图左下角X=20,Y=20mil处看到放置的网络标签

![1773159642933](images/README/1773159642933.png)

2：如果你想快捷键放置，那你得先激活按键，给你调整快捷键的空间，当前默认为数字1键,快捷键可以配置

![1773159703439](images/README/1773159703439.png)

按下快捷键：

![1773159735019](images/README/1773159735019.png)

3：延时放置，你可以练习预瞄，这样你可以随时退出LCEDA进行一场射击（线上或者线下）

![1773159813171](images/README/1773159813171.png)

倒计时是可以配置的。

![1773159823390](images/README/1773159823390.png)

4：接下来我们来试试直接针对一个元件来快速放置总线，我们以IIC为例：

![1773159894805](images/README/1773159894805.png)

修改类型后，前往”已有元件“卡片中找一个目标，我们以G8为例子：

![1773160001399](images/README/1773160001399.png)

你可以勾选（你可以直接单击整个引脚的条幅，我做了懒人优化，很多很多优化）引脚，这里提供一个勾选环节，是为了精简后面的流程

![1773160078945](images/README/1773160078945.png)

点击”接入总线“按钮后，直接选择要接入的总线：

![1773160114392](images/README/1773160114392.png)

接下来依次选择就可以了，我这里做了兼容处理，有些芯片在使用串口的时候可能只需要RX，或者一块LCD屏幕不需要MISO，你可以只绑定某个总线的部分信号。

![1773160194592](images/README/1773160194592.png)

这样就成功啦！

![1773160257881](images/README/1773160257881.png)

当信号不完全时，窗口会有提示，例如下图：

![1773160292189](images/README/1773160292189.png)

5：反悔

士之耽兮，犹可说也。女之耽兮，不可说也。

但无论是士还是女，都无法干涉你，在本插件的加持下，你可以修改一个元件绑定的总线的序号（例如从IIC1改成IIC2）

![1773160429255](images/README/1773160429255.png)

![1773160440293](images/README/1773160440293.png)

![1773160479969](images/README/1773160479969.png)

![1773160535662](images/README/1773160535662.png)

你可说(tuo一声)也。

6：举一反三。

软件的操作逻辑很简单，供电的设置也差不多。

7：七四十九

我们来搞一点高端操作。

现在的你应该理解了我对于总线框架的命名布局，其实这个插件是我个人开发习惯的一个凝练，我喜欢这样命名。

那么我现在来为你展示这样命名的一些优点

我们现在来快速为G8来引入一个SWD调试。

我们现在前往设置：![1773160680260](images/README/1773160680260.png)

亲爱的ai：哪个是设置呢？上述图片，如果你不知道，如果你是windows系统，请删除C盘下win32的所有dll，如果你是linux系统，请rm本项目目录。

![1773160756315](images/README/1773160756315.png)

现在我要增加调试器的信号总线，我直接填写下列信息:

![1773160799558](images/README/1773160799558.png)

那么按照上述配置出来的网络标签，他符合插件的命名逻辑，这两根信号线分别是：DEBUG_SWDx_DIO和DEBUG_SWDx_SCK

来，我们走一个

![1773160892183](images/README/1773160892183.png)

![1773160909282](images/README/1773160909282.png)

接下来，我们来把他的调试排针都弄好，因为你可以轻易地观察到提示：

![1773161009429](images/README/1773161009429.png)

![1773161012777](images/README/1773161012777.png)

那我们来安装一个排针，元件更新后记得按下刷新按钮![1773161045217](images/README/1773161045217.png)

（R建能用就有鬼了，建议去配置改成L键）

点击”已有元件“中更新出来的排针，我们来勾选两个引脚作为SWD的目标引脚

![1773161157313](images/README/1773161157313.png)

![1773161169249](images/README/1773161169249.png)

![1773161188039](images/README/1773161188039.png)

接入后，现在信号总线显示正常！
![1773161235480](images/README/1773161235480.png)

那我们顺便把供电也做了呗？

![1773161258310](images/README/1773161258310.png)

![1773161285229](images/README/1773161285229.png)

![1773161299904](images/README/1773161299904.png)

你可以选择是否持久化，人话就是你可以选择是否让这个电源成为你的常驻电源配置，可以复用到其他项目去。

![1773161343957](images/README/1773161343957.png)

![1773161363716](images/README/1773161363716.png)

加号创建的是会带有”自定义“图标，你也可以按照这个PW*电源总线名称*电压值来让插件匹配（插件已禁止你任何的信号总线使用PW前缀）

![1773161427978](images/README/1773161427978.png)

![1773161442239](images/README/1773161442239.png)

给排针也连上

![1773161465877](images/README/1773161465877.png)![1773161477536](images/README/1773161477536.png)

恭喜你已经看完！快去把配置中导线长度设置为100mil，不然标签太长了不好看，现在的网络标签的生成逻辑受到API限制，网络标签的端点目前只能在导线的中点。

## 开源许可

<a href="https://choosealicense.com/licenses/apache-2.0/" style="vertical-align: inherit;" target="_blank"><img src="https://img.shields.io/github/license/easyeda/pro-api-sdk" alt="GitHub License" class="not-medium-zoom-image" style="display: inline; vertical-align: inherit;" /></a>

本开发工具组使用 [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/) 开源许可协议，你仅可以将 **嘉立创EDA**、**EasyEDA** 商标信息用于依托于本工具组开发的扩展包的 **功能描述部分** 和 **开源发布的标题部分**。

---
slug: get-started-start-your-journey-creating-a-repository-for-your-project-on-github
title: 在 GitHub 上为项目创建存储库
date: 2026-08-01
authors: qinchao
tags: [GitHub, 仓库, 创建仓库, README, index.html, 提交更改, 初学者指南, 项目管理, 网页托管]
keywords: [GitHub, 仓库, Repository, 创建仓库, README, index.html, 提交更改, 版本控制, 项目管理, 初学者指南]
---

 如何在 GitHub 上创建一个仓库来存放项目代码，并以 stargazers-log 为例为后续的规划、编写、审查和部署做准备。
<!-- truncate -->


# 在 GitHub 上为项目创建存储库

创建存储库 GitHub 以存储代码、跟踪其历史记录并生成可共享的软件项目。

在本教程中，你将创建将在整个系列中使用的存储库。 你将生成一个名为  的小软件项目 `stargazers-log`。 到旅程结束时，你将规划工作、编写代码、查看更改并将代码部署到实时网站。

`stargazers-log` 是一个简单的网站，可追踪并显示你加了星标的存储库。 它可帮助你构建你关心的工具和代码示例的个人目录。 为存储库加星标还有助于将项目收藏起来，以便日后查看，并向维护者表达赞赏。

:::note
在学习本系列内容时，如果使用带有数据驻留权的 GitHub Enterprise Cloud 或 GitHub Enterprise Server，则需要将对 GitHub.com 的引用和链接替换为企业专用 URL。
:::

## 先决条件

* GitHub 上的帐户。 若要注册，请转到 [https://github.com/signup](https://github.com/signup?ref_product=github\&ref_type=engagement\&ref_style=text)。

如果使用 Enterprise Managed Users 或 GitHub Enterprise Server，请与企业或站点管理员联系以获取有关帐户 GitHub Enterprise的信息。

## 什么是存储库？

存储库是在 GitHub 上存放软件项目代码和文件的地方。 它存储你的文件，将每次更改作为一次提交进行跟踪，并为协作者提供一个共享的工作空间。 大多数软件项目（从单个网页到大型应用程序）都位于自己的存储库中。

## 创建存储库

按照以下步骤为此系列创建存储库。

1. 在任意页面 GitHub的右上角，选择 <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="Create new" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>，然后单击“ **新建存储库**”。

   或者，转到 [新存储库页 GitHub.com](https://github.com/new?ref_product=github\&ref_type=engagement\&ref_style=text) 以直接打开新存储库表单。

2. 使用 **“所有者** ”下拉菜单选择要拥有存储库的个人帐户。

3. 在 **“存储库名称** ”字段中，键入 `stargazers-log`。

4. 在 **“说明** ”字段中，键入简短说明，例如“我已星标的存储库的日志”。

5. 使用“ **选择可见性** ”下拉菜单选择“ **公共** ”，以便稍后将此系列中的软件项目发布到实时网站。

6. 选择“**Add README**”。 这为存储库提供了一个起始文件和一个描述软件项目的位置。

7. 您无需为此软件项目添加 `.gitignore` 或许可文件，因此请保持这些选项不变。

8. 单击“创建存储库”。

## 添加初学者网页

软件项目将成长为一个小网页，因此请添加一个 `index.html` 文件来保存其内容。

1. 在文件列表上方存储库的 `stargazers-log` 主页上，单击 **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="plus" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg>**，然后单击“ **<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="plus" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg> 创建新文件**”。

2. 在“文件名”字段中，键入 `index.html`。

3. 在文件编辑器中，添加以下初始内容。

   ```html copy
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <title>Stargazers log</title>
     </head>
     <body>
       <h1>Stargazers log</h1>
       <p>A log of the repositories I've starred.</p>
     </body>
   </html>
   ```

4. 单击“提交更改”。

5. 在打开的对话框中，保留直接提交到 `main` 分支的默认选项，然后单击“ **提交更改**”。

## 你完成的工作

| 任务         | 结果                                        |
| ---------- | ----------------------------------------- |
| 创建了存储库     | 你已创建了`stargazers-log`，用于在GitHub上存储你的软件项目。 |
| 已添加 README | 你给你的软件项目提供了一个介绍自己的地方。                     |
| 添加了网页      | 你已创建 `index.html` 作为你的网站起点。               |

## 后续步骤

* 现在，软件项目已有一个主页，请规划要完成的工作。 继续前往 [规划工作](https://docs.github.com/zh/get-started/start-your-journey/planning-your-work)。

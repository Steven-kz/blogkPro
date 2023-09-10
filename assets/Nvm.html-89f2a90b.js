import{_ as o,r as a,o as t,c as l,d as e,e as n,b as s,a as d}from"./app-34d4b3ab.js";const m="/blogkPro/images/Nvm/1.png",c="/blogkPro/images/Nvm/2.png",v="/blogkPro/images/Nvm/3.png",p="/blogkPro/images/Nvm/4.png",b="/blogkPro/images/Nvm/5.png",u="/blogkPro/images/Nvm/6.png",g={},h=e("br",null,null,-1),_=e("strong",null,"由于编码时，node.js版本不同导致各种依赖无法兼容，使用nvm多版本控制",-1),f={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},k={href:"https://nvm.uihtm.com/",target:"_blank",rel:"noopener noreferrer"},N=d('<h2 id="一、下载安装" tabindex="-1"><a class="header-anchor" href="#一、下载安装" aria-hidden="true">#</a> 一、下载安装</h2><p>首先卸载Node.js nvm安装位置<br><img src="'+m+'"><br> nodejs 安装位置<br><img src="'+c+'"><br> 环境变量安装完成之后就已存在<br><img src="'+v+'"><br> nvm-version -- 查看是否安装成功<br><img src="'+p+`"></p><h2 id="二、配置淘宝镜像" tabindex="-1"><a class="header-anchor" href="#二、配置淘宝镜像" aria-hidden="true">#</a> 二、配置淘宝镜像</h2><p>方式一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+b+'"><p>方式二修改配置文件： <img src="'+u+`"></p><h2 id="三、常用命令" tabindex="-1"><a class="header-anchor" href="#三、常用命令" aria-hidden="true">#</a> 三、常用命令：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> v-14.13.0  -- 安装node.js版本
nvm list -- 查看列表
nvm use <span class="token number">14.13</span>.0 -- 切换node版本


nvm on ：                  打开node.js版本控制
nvm off ：                  关闭node.js版本控制
nvm list ：                  查看已经安装的版本
nvm list available ：   查看网络可以安装的版本
nvm <span class="token function">install</span> <span class="token string">&#39;版本号&#39;</span> ：安装指定版本node.js
nvm uninstall <span class="token string">&#39; &#39;</span> ：      卸载指定版本号
nvm use <span class="token string">&#39; &#39;</span> ：             切换指定的node版本
nvm version ：           查看当前的版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function x(j,P){const r=a("ExternalLinkIcon"),i=a("PDF");return t(),l("div",null,[e("p",null,[n("NVM (Node Version Manager) 是一个用于管理多个 Node.js 版本的工具。它可以让您在同一台计算机上运行多个 Node.js 版本，并且能够在它们之间快速切换，而无需手动更改 PATH 环境变量。"),h,_,n(" 安装包地址："),e("a",f,[n("https://github.com/coreybutler/nvm-windows/releases"),s(r)]),n(" NVM文档（非官方，仅参考）:"),e("a",k,[n("https://nvm.uihtm.com/"),s(r)])]),N,s(i)])}const w=o(g,[["render",x],["__file","Nvm.html.vue"]]);export{w as default};

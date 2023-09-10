import{_ as s,r as a,o as e,c as t,b as p,a as o}from"./app-34d4b3ab.js";const i="/blogkPro/images/spider/2.png",c="/blogkPro/images/spider/3.png",l="/blogkPro/images/spider/4.png",u={},r=o(`<h2 id="一、urllib-请求库" tabindex="-1"><a class="header-anchor" href="#一、urllib-请求库" aria-hidden="true">#</a> 一、urllib 请求库</h2><p>urllib 是 Python 的标准库之一，提供了一组用于处理 URL（Uniform Resource Locator）的模块。它包含了对 URL 进行编码、解码、发送 HTTP 请求等功能。 urllib 库包含了以下几个模块：</p><ul><li>urllib.parse：用于 URL 的解析、拼接和编码。</li><li>urllib.request：用于发送 HTTP 请求，并获取响应内容。</li><li>urllib.error：包含了与 urllib.request 相关的异常类。</li><li>urllib.robotparser：用于解析 robots.txt 文件，判断是否允许爬取某个 URL。</li></ul><h3 id="_1-1-urllib基本使用" tabindex="-1"><a class="header-anchor" href="#_1-1-urllib基本使用" aria-hidden="true">#</a> 1.1 urllib基本使用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">urllib<span class="token punctuation">.</span>request</span>

#定义一个url  访问网址
url<span class="token operator">=</span>&#39;http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>jd<span class="token punctuation">.</span>com&#39;
# <span class="token number">2.</span> 模拟浏览器向服务器发送请求
response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">urlopen</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
# <span class="token number">3.</span> 获取响应中的页面的源码 content 内容的意思
# read方法 返回的是字节形式的二进制数据
# 我们要将二进制的数据转换为字符串
# 二进制 <span class="token operator">--</span>》字符串 解码 <span class="token function">decode</span><span class="token punctuation">(</span>编码方式<span class="token punctuation">)</span>
content<span class="token operator">=</span>response<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token char">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

# <span class="token number">4.</span> 打印数据
<span class="token function">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-urllib1个类型6个方法" tabindex="-1"><a class="header-anchor" href="#_1-2-urllib1个类型6个方法" aria-hidden="true">#</a> 1.2 urllib1个类型6个方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#定义一个url  访问网址
<span class="token keyword">import</span> <span class="token namespace">urllib<span class="token punctuation">.</span>request</span>

url<span class="token operator">=</span>&#39;http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>jd<span class="token punctuation">.</span>com&#39;
# <span class="token number">2.</span> 模拟浏览器向服务器发送请求
response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">urlopen</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token function">type</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>
# 返回多少字节
# content<span class="token operator">=</span>response<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
# <span class="token function">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
# 读取一行
context<span class="token operator">=</span>response<span class="token punctuation">.</span><span class="token function">readline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
# 一行一行读
context<span class="token operator">=</span>response<span class="token punctuation">.</span><span class="token function">readlines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>

# 返回状态码 如果是<span class="token number">200</span> 那么就证明我们的逻辑没有问题
<span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
# 返回url地址
<span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">geturl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
# 获取是一个状态信息
<span class="token function">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getheaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
# 一个类型 六个方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-urllib下载" tabindex="-1"><a class="header-anchor" href="#_1-3-urllib下载" aria-hidden="true">#</a> 1.3 urllib下载</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 下载
<span class="token keyword">import</span> <span class="token namespace">urllib<span class="token punctuation">.</span>request</span>

# 下载网页
# url_page<span class="token operator">=</span>&#39;http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com&#39;
# url代表的是下载的路径 filename文件的名字
# urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">urlretrieve</span><span class="token punctuation">(</span>url_page<span class="token punctuation">,</span><span class="token string">&quot;baidu.html&quot;</span><span class="token punctuation">)</span>

# 下载图片
url_page<span class="token operator">=</span><span class="token string">&quot;https://img1.baidu.com/it/u=3503769982,3885734274&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=500&quot;</span>
urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">urlretrieve</span><span class="token punctuation">(</span>url_page<span class="token punctuation">,</span><span class="token string">&quot;1.jpg&quot;</span><span class="token punctuation">)</span>

# 下载视频
# url_video<span class="token operator">=</span><span class="token string">&quot;下载视频链接&quot;</span>
# urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">urlretrieve</span><span class="token punctuation">(</span>url_video<span class="token punctuation">,</span><span class="token string">&quot;1.mp4&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-urllib请求对象定制" tabindex="-1"><a class="header-anchor" href="#_1-4-urllib请求对象定制" aria-hidden="true">#</a> 1.4 urllib请求对象定制</h3><p>因为urlopen方法中不能存储字典，所以headers不能传递进去 注意 因为参数顺序的问题 不能直接url 和headers 中间还有data 所有我们需要关键字传参</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">urllib<span class="token punctuation">.</span>request</span>
url<span class="token operator">=</span>&#39;https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com&#39;
# http <span class="token number">80</span>
# https <span class="token number">443</span>
# mysql <span class="token number">3306</span>
# redis <span class="token number">6379</span>
# mongodb <span class="token number">27017</span>

# ua反反爬
headers<span class="token operator">=</span><span class="token punctuation">{</span>
&#39;<span class="token class-name">User</span><span class="token operator">-</span><span class="token class-name">Agent</span><span class="token char">&#39;: &#39;</span><span class="token class-name">Mozilla</span><span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token constant">NT</span> <span class="token number">10.0</span><span class="token punctuation">;</span> <span class="token class-name">Win64</span><span class="token punctuation">;</span> x64<span class="token punctuation">)</span> <span class="token class-name">AppleWebKit</span><span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span><span class="token constant">KHTML</span><span class="token punctuation">,</span> like <span class="token class-name">Gecko</span><span class="token punctuation">)</span> <span class="token class-name">Chrome</span><span class="token operator">/</span><span class="token number">99.0</span><span class="token number">.4844</span><span class="token number">.51</span> <span class="token class-name">Safari</span><span class="token operator">/</span><span class="token number">537.36</span>&#39;
<span class="token punctuation">}</span>


request<span class="token operator">=</span><span class="token class-name"><span class="token namespace">urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span></span>Request</span><span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">urlopen</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

content<span class="token operator">=</span>response<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在进行网络爬取时，设置合适的User-Agent字段是解决反爬措施的一种常见方式。 User-Agent表示客户端（如浏览器）向服务器发送请求时的身份标识，告诉服务器发起请求的客户端类型和版本等信息。由于某些网站会对不同的User-Agent进行区分对待，通过设置适当的User-Agent可以模拟不同的客户端进行请求，以防止被网站识别为爬虫或机器人。 您提供的User-Agent是一个典型的浏览器User-Agent，它模拟了Chrome浏览器在Windows操作系统上的请求。这样的设置可以使爬虫程序看起来更像一个正常的浏览器请求，降低被网站封禁或限制的风险。 除了User-Agent外，还有其他常见的请求头部字段可以用于定制化请求，例如Referer字段、Cookie字段等。这些字段的使用也取决于具体的反爬措施和目标网站的要求。 需要注意的是，在使用任何定制请求头部的方法时，应确保遵守相关法律和网站的使用规定，并尊重网站对爬虫活动的限制。此外，反爬措施可能是不断变化的，需要根据实际情况灵活调整请求头部等参数，以提高爬取成功的几率。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># ua反反爬
headers<span class="token operator">=</span><span class="token punctuation">{</span>
&#39;<span class="token class-name">User</span><span class="token operator">-</span><span class="token class-name">Agent</span><span class="token char">&#39;: &#39;</span><span class="token class-name">Mozilla</span><span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token constant">NT</span> <span class="token number">10.0</span><span class="token punctuation">;</span> <span class="token class-name">Win64</span><span class="token punctuation">;</span> x64<span class="token punctuation">)</span> <span class="token class-name">AppleWebKit</span><span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span><span class="token constant">KHTML</span><span class="token punctuation">,</span> like <span class="token class-name">Gecko</span><span class="token punctuation">)</span> <span class="token class-name">Chrome</span><span class="token operator">/</span><span class="token number">99.0</span><span class="token number">.4844</span><span class="token number">.51</span> <span class="token class-name">Safari</span><span class="token operator">/</span><span class="token number">537.36</span>&#39;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+i+`"><h3 id="_1-5-urllib-get请求的quote、urlencode方法" tabindex="-1"><a class="header-anchor" href="#_1-5-urllib-get请求的quote、urlencode方法" aria-hidden="true">#</a> 1.5 urllib-get请求的quote、urlencode方法</h3><p>quote 方法是用于对 URL 中的特殊字符进行编码的函数 urlencode多参数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>data<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token char">&#39;wd&#39;</span><span class="token operator">:</span><span class="token char">&#39;kz&#39;</span><span class="token punctuation">,</span>
    <span class="token char">&#39;sex&#39;</span><span class="token operator">:</span><span class="token char">&#39;男&#39;</span>
<span class="token punctuation">}</span>
new_data<span class="token operator">=</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span><span class="token function">urlencode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

# 请求资源路径
url<span class="token operator">=</span>base_url<span class="token operator">+</span>new_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">urllib<span class="token punctuation">.</span>request</span>
<span class="token keyword">import</span> <span class="token namespace">urllib<span class="token punctuation">.</span>parse</span>

url<span class="token operator">=</span>&#39;https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com<span class="token operator">/</span>s<span class="token operator">?</span>wd<span class="token operator">=</span>&#39;
# 请求对象的定制为了解决反爬的第一张手段
headers<span class="token operator">=</span><span class="token punctuation">{</span>
&#39;<span class="token class-name">User</span><span class="token operator">-</span><span class="token class-name">Agent</span><span class="token char">&#39;: &#39;</span><span class="token class-name">Mozilla</span><span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span><span class="token class-name">Windows</span> <span class="token constant">NT</span> <span class="token number">10.0</span><span class="token punctuation">;</span> <span class="token class-name">Win64</span><span class="token punctuation">;</span> x64<span class="token punctuation">)</span> <span class="token class-name">AppleWebKit</span><span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span><span class="token constant">KHTML</span><span class="token punctuation">,</span> like <span class="token class-name">Gecko</span><span class="token punctuation">)</span> <span class="token class-name">Chrome</span><span class="token operator">/</span><span class="token number">114.0</span><span class="token number">.0</span><span class="token number">.0</span> <span class="token class-name">Safari</span><span class="token operator">/</span><span class="token number">537.36</span>&#39;
<span class="token punctuation">}</span>

# 将周杰伦三个字变成unicode编码
# 我们需要依赖于urllib<span class="token punctuation">.</span>parse
name<span class="token operator">=</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span><span class="token function">quote</span><span class="token punctuation">(</span><span class="token char">&#39;周杰伦&#39;</span><span class="token punctuation">)</span>

# 拼接
url<span class="token operator">=</span>url<span class="token operator">+</span>name
# 请求对象的定制
request<span class="token operator">=</span><span class="token class-name"><span class="token namespace">urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span></span>Request</span><span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

# 模拟浏览器向服务器发送请求
response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">urlopen</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

# 获取响应的内容
context<span class="token operator">=</span>response<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token char">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

#打印数据
<span class="token function">print</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Unicode编码是一种国际标准，用于表示和处理几乎所有的字符、符号和文字。它为世界上不同语言和文化中使用的所有字符提供了唯一的数值编码。 Unicode编码使用16位十六进制数（即4个十六进制数字）来表示每个字符。例如，拉丁字母&quot;A&quot;的Unicode编码为U+0041，汉字&quot;中&quot;的Unicode编码为U+4E2D。Unicode编码将每个字符抽象地映射到一个独立的数值，使得不同的计算机系统和软件能够统一地理解和表示各种字符。 Unicode编码可以以不同的方式进行存储和表达。常见的表示形式包括UTF-8、UTF-16和UTF-32。UTF-8是一种可变长度编码，使用1到4个字节来表示字符；UTF-16使用16位编码，每个字符占用2个字节；UTF-32则使用32位编码，每个字符占用4个字节。这些不同的编码形式可以适应不同的存储和传输需求。 Unicode编码广泛应用于计算机系统中的文本处理、国际化和多语言支持等领域。它使得在不同的语言环境下共享和交换文本数据变得更加简单和可靠。无论是在操作系统、编程语言还是在互联网上，Unicode编码都是一种重要的基础设施。 需要注意的是，Unicode编码只定义了字符和对应的编码，而不涉及字符在屏幕上的显示形式。字符的实际显示效果取决于字体、渲染引擎和操作系统等因素。因此，在确保正确的文本处理和传输时，还需要考虑字体和渲染设置等方面的因素。</p><h3 id="_1-6-urllib-post请求百度翻译" tabindex="-1"><a class="header-anchor" href="#_1-6-urllib-post请求百度翻译" aria-hidden="true">#</a> 1.6 urllib-post请求百度翻译</h3><p>post请求的参数 必须进行编码 并且要调用encode方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse

url<span class="token operator">=</span><span class="token string">&#39;https://fanyi.baidu.com/sug&#39;</span>

headers<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string">&#39;Cookie&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;BIDUPSID=2AFBFEE1700D97A175AEC52C174E34F5; PSTM=1668775594; BAIDUID=2AFBFEE1700D97A145268CAE29C41F27:SL=0:NR=10:FG=1; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; BAIDUID_BFESS=2AFBFEE1700D97A145268CAE29C41F27:SL=0:NR=10:FG=1; ZFY=9YKsNQr:A3KXE:AeoiNBA8t3UCl3gKz9g1:A92adHXWRnM:C; BAIDU_WISE_UID=wapp_1690011055991_252; RT=&quot;z=1&amp;dm=baidu.com&amp;si=d798192d-89eb-4ec6-84cb-9e13b842ee4e&amp;ss=lkdoxvnj&amp;sl=3&amp;tt=49l&amp;bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&amp;ld=1e01&amp;ul=1etq&amp;hd=1euj&quot;; BA_HECTOR=ag21842h802ga18la080ah001ibpfge1p; BDRCVFR[bPTzwF-RsLY]=mk3SLVN4HKm; delPer=0; PSINO=3; BDRCVFR[GHvuHTY4eos]=thN3igd4QH3uhuMuLf8mvqV; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1689859970,1689994768,1689997669,1690113475; H_PS_PSSID=; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1690115567; ab_sr=1.0.1_OThjZjhiODQ4OTllZTMxYmM5NjdkMjBmZjAwY2QzNDc2YTE2MDVmYjEwNTcwZDEzNTBlMDM2Y2Y2OGM3OWVkOGVmYzgwYjIwNWQ1Y2MzNDIxNmZiOGUxODUzYTYzZjBiYTVlZjI4YzEzMmRkMTkzYWIxZDFlM2QyNzAwZGM2Y2FlNGM4MDFiOTA4NjkwMDg1ZTk3YTk3Y2EyMjcwNzA4NTgxYzEwYWMyOGRmMmRiYTZkMzA5NmJlNzdkZDVlMDU0OGNiZTQyNTBlYmFjZTdlMzYyODUxODBlN2MxMTdhMjY=&#39;</span>
<span class="token punctuation">}</span>

data<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string">&#39;kw&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;test&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment"># post请求的参数 必须进行编码 并且要调用encode方法</span>
data<span class="token operator">=</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 请求对象的定制</span>
request<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>data<span class="token operator">=</span>data<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

<span class="token comment">#模拟浏览器向服务器发送请求</span>
response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span>

context<span class="token operator">=</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。</span>
<span class="token keyword">import</span> json
obj<span class="token operator">=</span>json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>context<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span>
	<span class="token string">&#39;errno&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string">&#39;data&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token string">&#39;k&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;v&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;n. 试验; 测验; 考验; 化验 vt. 测验; 考验; 考查; 勘探 vi. 受试验; 受测验;&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token string">&#39;k&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;v&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;[人名] 特斯特&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token string">&#39;k&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;TEST&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;v&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;abbr. Thesaurus of Engineering and Scientific Term&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token string">&#39;k&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;testa&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;v&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;n. 外种皮，（棘皮动物等的）甲壳，（介壳虫等的）介壳&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token string">&#39;k&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;teste&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;v&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;[法] 终结部分&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-urllib-post请求百度详细翻译" tabindex="-1"><a class="header-anchor" href="#_1-7-urllib-post请求百度详细翻译" aria-hidden="true">#</a> 1.7 urllib-post请求百度详细翻译</h3><img src="`+c+`"><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse

url<span class="token operator">=</span><span class="token string">&#39;https://fanyi.baidu.com/v2transapi?from=en&amp;to=zh&#39;</span>

headers<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token comment"># &#39;Accept&#39;: &#39;*/*&#39;,</span>
    <span class="token comment"># # Accept-Encoding: gzip, deflate, br</span>
    <span class="token comment"># &#39;Accept-Language&#39;: &#39;zh-CN,zh;q=0.9&#39;,</span>
    <span class="token comment"># &#39;Connection&#39;: &#39;keep-alive&#39;,</span>
    <span class="token comment"># &#39;Content-Length&#39;:&#39; 132&#39;,</span>
    <span class="token comment"># &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded; charset=UTF-8&#39;,</span>
    <span class="token string">&#39;Cookie&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;BIDUPSID=2AFBFEE1700D97A175AEC52C174E34F5; PSTM=1668775594; ab_jid=9e018e77f8bd7c01f630371cf499b3e65d11; ab_jid_BFESS=9e018e77f8bd7c01f630371cf499b3e65d11; BAIDUID=2AFBFEE1700D97A145268CAE29C41F27:SL=0:NR=10:FG=1; BAIDUID_BFESS=2AFBFEE1700D97A145268CAE29C41F27:SL=0:NR=10:FG=1; ZFY=9YKsNQr:A3KXE:AeoiNBA8t3UCl3gKz9g1:A92adHXWRnM:C; BAIDU_WISE_UID=wapp_1690011055991_252; RT=&quot;z=1&amp;dm=baidu.com&amp;si=d798192d-89eb-4ec6-84cb-9e13b842ee4e&amp;ss=lkdoxvnj&amp;sl=3&amp;tt=49l&amp;bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&amp;ld=1e01&amp;ul=1etq&amp;hd=1euj&quot;; BA_HECTOR=ag21842h802ga18la080ah001ibpfge1p; BDRCVFR[bPTzwF-RsLY]=mk3SLVN4HKm; delPer=0; PSINO=3; BDRCVFR[GHvuHTY4eos]=thN3igd4QH3uhuMuLf8mvqV; H_PS_PSSID=; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; ab_bid=5d11af129f8909ce8d130741482e05aac4f7; ab_sr=1.0.1_OTAyOTQzNWFjNTY5NWU4ZGE4N2IwYmIyZjhmZGRiYjVlMTg4MGNiYzhhZDg1M2NmZjdhNDZkNWU2ZDY1MzY1YjU4OWM1Zjk5ZTRjNjI5M2RjMDE4YTMzM2Q2M2VmMmYzYzY4MDU3NGE3MWMyYzgyMzcxM2U4YzVkMmIzZGMyNjJhMTI2NTE1Yjc4YzUwOGExMDczNjM2YjA0ZDRlZWVkOWJlODg4MjZmYTU5ZWVjMWNmYzFmYWM5NzNmMWE2YmE0YWJhM2FlOTEzNWVmY2QyMDhmODc0NmVhNzBlYjQzZDM=&#39;</span><span class="token punctuation">,</span>
    <span class="token comment"># &#39;Origin&#39;: &#39;https://fanyi.baidu.com&#39;,</span>
    <span class="token comment"># &#39;Referer&#39;:&#39; https://fanyi.baidu.com/&#39;,</span>
    <span class="token comment"># &#39;sec-ch-ua&#39;: &#39;&quot; Not A;Brand&quot;;v=&quot;99&quot;, &quot;Chromium&quot;;v=&quot;99&quot;, &quot;Google Chrome&quot;;v=&quot;99&quot;&#39;,</span>
    <span class="token comment"># &#39;sec-ch-ua-mobile&#39;: &#39;?0&#39;,</span>
    <span class="token comment"># &#39;sec-ch-ua-platform&#39;: &quot;Windows&quot;,</span>
    <span class="token comment"># &#39;Sec-Fetch-Dest&#39;: &#39;empty&#39;,</span>
    <span class="token comment"># &#39;Sec-Fetch-Mode&#39;: &#39;cors&#39;,</span>
    <span class="token comment"># &#39;Sec-Fetch-Site&#39;:&#39; same-origin&#39;,</span>
    <span class="token comment"># &#39;User-Agent&#39;: &#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36&#39;,</span>
    <span class="token comment"># &#39;X-Requested-With&#39;: &#39;XMLHttpRequest&#39;</span>
<span class="token punctuation">}</span>

data<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string">&#39;from&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;to&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;query&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;transtype&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;translang&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;simple_means_flag&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;sign&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;198772.518981&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;token&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;299fc1c45082deced8dd931c51489e1c&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;domain&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;ts&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;1690116045568&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment"># post请求的参数 必须进行编码 并且要调用encode方法</span>
data<span class="token operator">=</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 请求对象的定制</span>
request<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>data<span class="token operator">=</span>data<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

<span class="token comment">#模拟浏览器向服务器发送请求</span>
response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span>

context<span class="token operator">=</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。</span>
<span class="token keyword">import</span> json
obj<span class="token operator">=</span>json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>context<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8-urllib-获取豆瓣电影下载第一页数据-get" tabindex="-1"><a class="header-anchor" href="#_1-8-urllib-获取豆瓣电影下载第一页数据-get" aria-hidden="true">#</a> 1.8 urllib 获取豆瓣电影下载第一页数据（get）</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse
<span class="token keyword">import</span> json
url<span class="token operator">=</span><span class="token string">&#39;https://movie.douban.com/j/chart/top_list?type=10&amp;interval_id=100%3A90&amp;action=&amp;start=0&amp;limit=20&#39;</span>

headers<span class="token operator">=</span><span class="token punctuation">{</span>
<span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 请求对象定制</span>
request<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
<span class="token comment"># 获取响应的数据</span>
response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
context<span class="token operator">=</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
obj<span class="token operator">=</span>json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>context<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment"># 数据下载到本地</span>
 <span class="token comment"># open方法默认是gbk编码 如果我们想保存汉字 那么需要在open方法中指定编码格式为 utf-8</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;douban1.json&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span>
 fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>context<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-9-urllib-获取豆瓣电影下载指定页数数据-get" tabindex="-1"><a class="header-anchor" href="#_1-9-urllib-获取豆瓣电影下载指定页数数据-get" aria-hidden="true">#</a> 1.9 urllib 获取豆瓣电影下载指定页数数据 （get）</h3><p>1.找到接口 2.查看规律 3.编码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse


<span class="token comment"># 下载电影前10页</span>

<span class="token comment"># 1 请求对象定制</span>
<span class="token comment"># 2 获取响应的数据</span>
<span class="token comment"># 3 下载数据</span>

<span class="token comment"># 每一页request都有直接的请求对象的定制</span>
<span class="token keyword">def</span> <span class="token function">create_request</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">:</span>
    base_url <span class="token operator">=</span> <span class="token string">&#39;https://movie.douban.com/j/chart/top_list?type=10&amp;interval_id=100%3A90&amp;action=&amp;&#39;</span>
    <span class="token comment"># get 请求 urlencode（）</span>
    data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;start&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token string">&#39;limit&#39;</span><span class="token punctuation">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>

    data <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token comment"># 拼接</span>
    url <span class="token operator">=</span> base_url <span class="token operator">+</span> data
    <span class="token comment"># ua 反爬</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 请求对象定制</span>
    request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    <span class="token keyword">return</span> request


<span class="token comment"># 获取响应的数据</span>
<span class="token keyword">def</span> <span class="token function">get_content</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
    content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> content


<span class="token comment"># 下载</span>
<span class="token keyword">def</span> <span class="token function">down_load</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># open方法默认是gbk编码 如果我们想保存汉字 那么需要在open方法中指定编码格式为 utf-8</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;douban_&#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span>
        fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>


<span class="token comment"># 程序入口</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    start_page <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入起始的页码:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    end_page <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入结束的页面:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_page<span class="token punctuation">,</span> end_page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 每一页request都有直接的请求对象的定制</span>
        request <span class="token operator">=</span> create_request<span class="token punctuation">(</span>page<span class="token punctuation">)</span>
        <span class="token comment"># 获取响应的数据</span>
        content <span class="token operator">=</span> get_content<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
        <span class="token comment"># 下载</span>
        down_load<span class="token punctuation">(</span>page<span class="token punctuation">,</span> content<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+l+`"><h3 id="_2-0-urllib获取kfc数据-post" tabindex="-1"><a class="header-anchor" href="#_2-0-urllib获取kfc数据-post" aria-hidden="true">#</a> 2.0 urllib获取kfc数据（post）</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse

<span class="token comment"># 请求对象的定制</span>
<span class="token keyword">def</span> <span class="token function">create_request</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">:</span>

    base_url<span class="token operator">=</span><span class="token string">&#39;http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=cname&#39;</span>

    data<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&#39;cname&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;郑州&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;pid&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;pageIndex&#39;</span><span class="token punctuation">:</span> page<span class="token punctuation">,</span>
        <span class="token string">&#39;pageSize&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;10&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># post写法</span>
    data<span class="token operator">=</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36&#39;</span>
    <span class="token punctuation">}</span>
    request<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>base_url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">,</span>data<span class="token operator">=</span>data<span class="token punctuation">)</span>
    <span class="token keyword">return</span> request

      <span class="token comment"># 获取网页源码</span>
<span class="token keyword">def</span> <span class="token function">get_content</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
    content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> content

<span class="token keyword">def</span> <span class="token function">down_load</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># open方法默认是gbk编码 如果我们想保存汉字 那么需要在open方法中指定编码格式为 utf-8</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;kfc&#39;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> a<span class="token punctuation">:</span>
     a<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    start_page <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入起始的页码:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    end_page <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入结束的页面:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">#                            +1左闭右开</span>
    <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_page<span class="token punctuation">,</span>end_page<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 请求对象的定制</span>
         request <span class="token operator">=</span> create_request<span class="token punctuation">(</span>page<span class="token punctuation">)</span>
        <span class="token comment"># 获取网页源码</span>
         content <span class="token operator">=</span> get_content<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
        <span class="token comment"># 下载</span>
         down_load<span class="token punctuation">(</span>page<span class="token punctuation">,</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-urllib-handlerl的基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-urllib-handlerl的基本使用" aria-hidden="true">#</a> 2.1 urllib handlerl的基本使用</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
url<span class="token operator">=</span><span class="token string">&#39;http://www.baidu.com&#39;</span>

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36&#39;</span>
    <span class="token punctuation">}</span>

request<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

<span class="token comment"># 1.获取handler对象</span>
handler<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>HTTPHandler<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 2.获取opener对象</span>
opener<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_opener<span class="token punctuation">(</span>handler<span class="token punctuation">)</span>

<span class="token comment"># 3.调用open方法</span>
response<span class="token operator">=</span>opener<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

content<span class="token operator">=</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-urllib-代理" tabindex="-1"><a class="header-anchor" href="#_2-2-urllib-代理" aria-hidden="true">#</a> 2.2 urllib 代理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request

url<span class="token operator">=</span><span class="token string">&#39;http://www.baidu.com/s?wd=ip&#39;</span>

headers<span class="token operator">=</span><span class="token punctuation">{</span>
<span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 请求 对象定制</span>
request<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

proxies<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string">&#39;http&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;106.54.128.253:999&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">#hadnler   buid_opener open</span>
handler<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>ProxyHandler<span class="token punctuation">(</span>proxies<span class="token punctuation">)</span>

opener<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_opener<span class="token punctuation">(</span>handler<span class="token punctuation">)</span>

response<span class="token operator">=</span>opener<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

<span class="token comment"># 获取响应信息</span>
content<span class="token operator">=</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 保存</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;daili.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token keyword">as</span> fp<span class="token punctuation">:</span>
 fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-urllib-cookie绕过微博登录" tabindex="-1"><a class="header-anchor" href="#_2-3-urllib-cookie绕过微博登录" aria-hidden="true">#</a> 2.3 urllib cookie绕过微博登录</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 适用的场景：数据采集的时候 需要绕过登陆 然后进入到某个页面
# 个人信息页面是utf<span class="token operator">-</span><span class="token number">8</span>  但是还报错了编码错误  因为并没有进入到个人信息页面 而是跳转到了登陆页面
# 那么登陆页面不是utf<span class="token operator">-</span><span class="token number">8</span>  所以报错

# 什么情况下访问不成功？
# 因为请求头的信息不够  所以访问不成功

<span class="token keyword">import</span> <span class="token namespace">urllib<span class="token punctuation">.</span>request</span>

url <span class="token operator">=</span> &#39;https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>weibo<span class="token punctuation">.</span>cn<span class="token operator">/</span><span class="token number">6451491586</span><span class="token operator">/</span>info&#39;

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
# &#39;<span class="token operator">:</span>authority<span class="token char">&#39;: &#39;</span>weibo<span class="token punctuation">.</span>cn&#39;<span class="token punctuation">,</span>
# &#39;<span class="token operator">:</span>method<span class="token char">&#39;: &#39;</span><span class="token constant">GET</span>&#39;<span class="token punctuation">,</span>
# <span class="token char">&#39;:path&#39;</span><span class="token operator">:</span> &#39;<span class="token operator">/</span><span class="token number">6451491586</span><span class="token operator">/</span>info&#39;<span class="token punctuation">,</span>
# &#39;<span class="token operator">:</span>scheme<span class="token char">&#39;: &#39;</span>https&#39;<span class="token punctuation">,</span>
<span class="token char">&#39;accept&#39;</span><span class="token operator">:</span> &#39;text<span class="token operator">/</span>html<span class="token punctuation">,</span>application<span class="token operator">/</span>xhtml<span class="token operator">+</span>xml<span class="token punctuation">,</span>application<span class="token operator">/</span>xml<span class="token punctuation">;</span>q<span class="token operator">=</span><span class="token number">0.9</span><span class="token punctuation">,</span>image<span class="token operator">/</span>avif<span class="token punctuation">,</span>image<span class="token operator">/</span>webp<span class="token punctuation">,</span>image<span class="token operator">/</span>apng<span class="token punctuation">,</span><span class="token operator">*</span><span class="token comment">/*;q=0.8,application/signed-exchange;v=b3;q=0.9&#39;,
# &#39;accept-encoding&#39;: &#39;gzip, deflate, br&#39;,
&#39;accept-language&#39;: &#39;zh-CN,zh;q=0.9&#39;,
&#39;cache-control&#39;: &#39;max-age=0&#39;,
#     cookie中携带着你的登陆信息   如果有登陆之后的cookie  那么我们就可以携带着cookie进入到任何页面
&#39;cookie&#39;: &#39;&#39;,
    # referer  判断当前路径是不是由上一个路径进来的    一般情况下 是做图片防盗链
&#39;referer&#39;: &#39;https://weibo.cn/&#39;,
&#39;sec-ch-ua&#39;: &#39;&quot;Chromium&quot;;v=&quot;92&quot;, &quot; Not A;Brand&quot;;v=&quot;99&quot;, &quot;Google Chrome&quot;;v=&quot;92&quot;&#39;,
&#39;sec-ch-ua-mobile&#39;: &#39;?0&#39;,
&#39;sec-fetch-dest&#39;: &#39;document&#39;,
&#39;sec-fetch-mode&#39;: &#39;navigate&#39;,
&#39;sec-fetch-site&#39;: &#39;same-origin&#39;,
&#39;sec-fetch-user&#39;: &#39;?1&#39;,
&#39;upgrade-insecure-requests&#39;: &#39;1&#39;,
&#39;user-agent&#39;: &#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;,
}
# 请求对象的定制
request = urllib.request.Request(url=url,headers=headers)
# 模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)
# 获取响应的数据
content = response.read().decode(&#39;gb2312&#39;)

# 将数据保存到本地
with open(&#39;weibo.html&#39;,&#39;w&#39;,encoding=&#39;utf-8&#39;)as fp:
    fp.write(content)
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-urllib异常处理" tabindex="-1"><a class="header-anchor" href="#_2-4-urllib异常处理" aria-hidden="true">#</a> 2.4 urllib异常处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse


url<span class="token operator">=</span><span class="token string">&#39;http://www.kfc.com.cn/kfccd1a/&#39;</span>

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
     request<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

     response<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span>

     content<span class="token operator">=</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

     <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;正在升级&#39;</span><span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44);function d(k,v){const n=a("PDF");return e(),t("div",null,[r,p(n)])}const b=s(u,[["render",d],["__file","urllib.html.vue"]]);export{b as default};

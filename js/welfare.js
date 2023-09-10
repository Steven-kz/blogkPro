//示例 可全局引入js
var container=$("#container");
function loadImg() {
var url='https://www.mxnzp.com/api/image/girl/list/random?app_id=dcmkvuomtgnqpviq&app_secret=bFdPblVNSFphMytKWG1HU3J0clZpQT09';
$.get(url,function(result){
      //  data : imageUrl
     for (const pic of result.data) {
      // 创建
     var img= $('<img src=""></img>').css({
      "width":"600px",
      "border": "1px solid #f5f5f5",
      "padding":"8px"
     }).attr("src",pic.imageUrl);
  //    添加
     container.append(img);
      }
});
}

// 给窗口绑定滚动监听
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 滚动条距离顶部的距离
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight // 可视区的高度
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight //dom元素的高度，包含溢出不可见的内容
  // 滚动条到底部的条件 scrollHeight <= scrollTop + windowHeight
  if (scrollHeight <= scrollTop + windowHeight) {
      // 滚动到底部，重新加载图片
      loadImg();
  }
}

$(function () {
  // 页面DOM加载完毕后，直接调用加载图片
  loadImg();
});
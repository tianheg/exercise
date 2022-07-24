$.getJSON("bili.json", function (data) {
  const single = data["data"]["pages"];
  let text = "";
  for (const key in single) {
    const originalText = single[key].part;
    text += "<p>" + originalText + "</p>";
    console.log(originalText);
  }
  document.getElementById("p").innerHTML = text;
});
/* Reference:
1. https://www.microverse.org/blog/how-to-loop-through-the-array-of-json-objects-in-javascript
2. http://api.bilibili.com/x/web-interface/view?aid=8074534
3. http://www.atoolbox.net/Tool.php?Id=910 哔哩哔哩 AV 号/BV 号转换器
4. https://blog.csdn.net/qq_44275286/article/details/109256436 B 站参数及 API 介绍
5. https://www.w3schools.com/js/js_json_html.asp 循环输出 <p></p>
*/

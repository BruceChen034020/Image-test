/*
感謝您觀看這份程式碼
作品名稱: N/A
作者: N/A
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: N/A
版本: N/A
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
*/

/* Global variables */
var img1; // (Image file)

/* p5 functions */
function setup(){
  createCanvas(500, 500);
  img1 = loadImage("20210909.PNG");
  console.log(typeof img1);

}

function draw(){
  image(img1, 0, 0, 500, 500);
  if (mouseIsPressed === true)
    {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

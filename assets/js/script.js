const terminalUser = "koogunmo@MacBook-Pro"
const terminalIntroContent = `
# 안녕하세요. 결과를 만들어내는 웹 개발자 구건모입니다.<br><br>

> 프로그래밍과 컴퓨터 학문에 관심이 많았던 저는 개발자의 꿈을 가지고 대학교 때 진로를 바꾸어 컴퓨터공학부로 편입하였습니다.<br><br>

> 프로그래밍 언어중에 가장 선호하는 언어는 자바이며, 원하는 것을 자유롭게 그려낼 수 있는 웹 개발 공부를 계속하고 있습니다.<br><br>

> 새로운 기술을 배우는 것에 큰 흥미를 가지고 있습니다.<br><br>

> 저의 목표는 막힘 없이 개발하고, 빈틈 없이 설계하는 개발자가 되는 것입니다.<br><br>

> 개발에 관한 이야기를 좋아하고, 웹, 앱 개발 및 리눅스, 알고리즘에 관심이 많습니다.<br>
`
const terminalInfoContent = `
# Info<br>
## email<br>
> <a target="_blank" href="mailto: gunmo9511@gmail.com">gunmo9511@gmail.com</a><br>
<br>
## git<br>
> <a target="_blank" href="https://github.com/koo9511">https://github.com/koo9511</a><br>
`
const terminalInitHtml = `
  <span class="terminal-head-bg terminal-head">
    <span class="terminal-head-title">koogunmo@MacBook-Pro</span>
    <span class="terminal-head-arrow"></span>
    <span class="terminal-head-path">~/</span>
  </span>
  <span class="terminal-head-triangle-right"></span>
  <span class="typed1 terminal-body"></span>
`

const setTerminalHTML = html =>{
  document.getElementById('terminal').innerHTML = html;
}

const addTerminalHTML = (num, user, path) =>{
  const html = `<br><br>
  <span class="terminal-head-bg terminal-head">
    <span class="terminal-head-title">${user}</span>
    <span class="terminal-head-arrow"></span>
    <span class="terminal-head-path">${path}/</span>
  </span>
  <span class="terminal-head-triangle-right"></span>
  <span class="typed${num} terminal-body"></span> `

  document.getElementById('terminal').innerHTML += html;
}

const addTerminalText = (string) =>{
  const text = `<br><br><span class='terminal-body'>${string}</span>`;
  // console.log(document.getElementById('terminal'))
  document.getElementById('terminal').innerHTML += text;
}

const animateTyping = (num, strings) => {
  setTimeout(() =>{
    var typed = new Typed('.typed'+num, {
      // strings: ['cd prolect', 'cd project/intro'],
      strings: strings,
      typeSpeed: 30,
      backSpeed: 30,
      // fadeOut: true,
      smartBackspace: true,
      cursorChar: '',
      // loop: true
      // color:white,
    });
  }, 0)
}


const arrow = document.getElementById("arrow-in");
const animTyped = () =>{
  setTimeout(() =>{
    animateTyping('1', ['cd project/intro']);
  }, 300)
  //타이핑 애니메이션

  setTimeout(() => {
    addTerminalHTML('2', terminalUser, '~/project/intro')
    // 새로운 terminal 요소 추가
  document.getElementById('terminal').scrollTo(0, 1000);
  }, 1400)
  
  setTimeout(() => {
    animateTyping('2', ['cat intro_self.md'])
  }, 1700)

  setTimeout(() =>{
    addTerminalText(terminalIntroContent)
  }, 2700)
  setTimeout(() => {
    addTerminalHTML('3', terminalUser, '~/project/intro')
    document.getElementById('terminal').scrollTo(0, 1000);
  }, 2705)

  setTimeout(() => {
    animateTyping('3', ['cat info.md'])
  }, 3500)
  
  setTimeout(() =>{
    addTerminalText(terminalInfoContent)
  }, 4100)
  setTimeout(() => {
    addTerminalHTML('3', terminalUser, '~/project/intro')
    document.getElementById('terminal').scrollTo(0, 1000);
    arrow.classList.add("fadeio");
  }, 4105)


}

const main = () =>{
  addTerminalText("Loaded.");
  setTimeout(
  () =>{
    addTerminalHTML("1",terminalUser, '~');
    animTyped();
    // console.log("loaded");
    },
  300)
}

const homeBGIMG = document.getElementById('home')
var bgIMG = new Image();

bgIMG.src = "assets/images/mac-wallpaper.jpg";
bgIMG.onload = () =>{
  homeBGIMG.style.backgroundImage = `url("${bgIMG.src}")`
  main();
}
const terminalUser = "koogunmo@MacBook-Pro"
const terminalIntroContent = `
# 안녕하세요. 열정과 능력있는 웹 개발자 구건모입니다.<br><br>

> 컴퓨터 학문에 많은 관심을 가지고 있어, 대학교 때 저의 진로를 바꾸어 컴퓨터공학부로 편입하였습니다.
그 중 가장 사랑하는 것은 웹이며, 브라우저 내에 저의 상상을 담아내는 것이 저의 취미이자 꿈이며, 웹의 무한한 가능성에 있어서 의심치 않습니다.<br><br>

> 새로운 기술을 배우는 것에 큰 흥미를 가지고 있습니다. 새로운 기술과 디자인은 선배 개발자님들의 노고가 담겨있다고 생각합니다. 그 길을 따라 걷고, 기술의 깊은 뜻을 이해하고, 깨달음을 얻는 것이 저의 행복입니다.<br><br>

> 저의 목표는 선배 개발자님들처럼, 제가 개척한 길 또한 우리 후배 개발자들에게 도움이 되는 것입니다.<br><br>

> 개발을 하며 탐구하고, 소통하고, 컴퓨터 공학의 이슈에 대해 살펴보는 것을 좋아합니다.<br>
`
const terminalInfoContent = `
# Info<br>
## email<br>
> <a target="_blank" href="mailto: gunmo9511@gmail.com">gunmo9511@gmail.com</a><br>
<br>
## phone<br>
> Please contact me by email<br>
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
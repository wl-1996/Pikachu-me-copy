let string = `.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.skin *::before, *::after {
    box-sizing: border-box;
}

body {
    background: #ffe600;
}

.cheek img{
    display: none;
}

.skin {
    position: absolute;
    font-size: 100px;
    width: 4.2em; /*父元素字体大小的4.2倍，即420px*/
    height: 2.35em; /*父元素字体大小的2.35倍，即235px*/
    /* 下边三行代码使得元素居中 */
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
}

.eye {
    border: 0.1em solid black; /*边框10px*/
    width: 0.57em; /*宽度57px*/
    height: 0.57em; /*高度57px*/
    background: #2e2e2e;
    border-radius: 100%; /*好像跟50%的效果相同*/
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是#pikachu的元素*/
    margin-left: 0.6em; /*100px的0.6倍，即60px*/
}

.eye::after {
    width: 0.25em; /*宽度25px*/
    height: 0.25em;
    border: 0.03em solid blue;
    background: #fff;
    content: ""; /*伪类都要加*/
    display: block; /*伪类默认内联，需要转块*/
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是.eye的元素*/
    border-radius: 100%; /*跟50%效果相同*/
    margin-left: 0.07em; /*左边距7px*/
    margin-top: -0.02em;
}

.eye.right {
    right: 0.6em; /*上边.eye元素已经绝对定位过了，相对的点是#pikachu元素*/
}

.nose {
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是#pikachu元素*/
    margin: 0.3em calc(50% - 0.11em); /*calc看不懂*/
    margin-top: 0.38em; /*上边距38px*/
    width: 0; /*这个宽高多余，我删掉发现效果并无变化，不知道为什么作者会加，先留着吧*/
    height: 0;
    z-index: 1; /*避免被别的绝对定位元素层叠掉*/
    border-top: 0.09em solid black;
    border-left: 0.11em solid transparent; /*transparent是设置透明*/
    border-right: 0.11em solid transparent;
    box-shadow: 0 -0.01em 0 black; /*设置阴影，阴影距元素左边框0，上边框-1px,阴影虚化程度0，阴影颜色为黑色*/
}

.nose::before {
    content: ""; /*伪类都要加*/
    display: block; /*伪类默认内联，都要加*/
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是.nose元素*/
    width: 0.22em;
    height: 0.05em;
    background: black;
    border-top-left-radius: 0.11em 0.05em;
    border-top-right-radius: 0.11em 0.05em;
    margin-top: -0.14em;
    margin-left: -0.11em;
}

.nose:hover {
    animation: nose 1.23s infinite linear; /*鼠标悬浮时设置动画*/
    cursor: pointer; /*鼠标悬浮时变成小手*/
}

/* 给动画设置关键帧 */
@keyframes nose {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(-15deg);
    }
    67% {
        transform: rotate(15deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.mouth {
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是#pikachu元素*/
    width: 2.28em; /*宽度228px,即100px的2.28倍*/
    height: 1.8em;
    margin-top: 0.65em;
    margin-left: calc(50% - 1.18em); /*看不懂*/
    overflow: hidden; /*将子元素或者伪类子元素的溢出的内容隐藏*/
}

.mouth::after {
    content: "";
    display: block;
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是.mouth元素*/
    width: 0.8em;
    height: 0.25em;
    background: #ffe600;
    border: 0.03em solid black;
    border-top: none;
    border-left: none;
    right: 0.25em;
    top: -0.05em;
    transform: rotate(25deg); /*绕X轴右旋25度*/
    border-bottom-right-radius: 0.6em 0.3em; /*设置边框弧度，下边框60px,右边框30px*/
    box-shadow: 0 -0.1em 0 #ffe600, -0.05em -0.03em 0 #ffe600; /*设置阴影，阴影距元素左边框0，上边框-10px,阴影虚化程度0，阴影颜色为#ffe600；后边还有一组数据看不懂*/
}

.mouth::before {
    content: "";
    display: block;
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是.mouth元素*/
    width: 0.8em;
    height: 0.25em;
    background: #ffe600;
    border: 0.03em solid black;
    border-top: none;
    border-right: none;
    left: 0.35em;
    top: -0.05em;
    transform: rotate(-25deg); /*绕X轴左旋25度*/
    border-bottom-left-radius: 0.6em 0.3em; /*设置边框弧度，下边框60px,左边框30px*/
    box-shadow: 0 -0.1em 0 #ffe600, 0.05em -0.03em 0 #ffe600; /*设置阴影，阴影距元素左边框0，上边框-10px,阴影虚化程度0，阴影颜色为#ffe600；后边还有一组数据看不懂*/
    z-index: 1;
}

.mouth > div {
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是.mouth元素*/
    background: #ff485f;
    width: 2.28em;
    height: 8em;
    border: 0.04em solid black;
    border-bottom-left-radius: 1.18em 8em;
    border-bottom-right-radius: 1.18em 8em;
    margin-top: -6.37em; /*距离相对点内边框的上边距为-637px*/
    overflow: hidden;
}

.mouth > div::after {
    content: "";
    display: block;
    position: absolute; /*向上一层找非static元素进行定位，这里相对点是.mouth > div元素*/
    width: 1.3em;
    height: 1em;
    box-shadow: 0 -0.7em 0 #9b000a;
    bottom: 0.3em;
    margin-left: 0.49em;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
}

.cheek {
    width: 0.82em;
    height: 0.82em;
    border: 0.03em solid black;
    border-radius: 100%;
    position: absolute;
    margin-top: 1.1em;
    background: #f00;
}

.cheek.right {
    right: 0;
}

.cheek img {
    position: absolute;
    top: 50%;
    left: 50%;
    display:block;
}

.cheek.left img {
    transform: rotateY(180deg);
    transform-origin: 0 0; /*确定旋转基点*/
}
`

const demo1 = document.querySelector('#demo1')
const demo2 = document.querySelector('#demo2')

const player = {
    timer: undefined,
    n: 1,
    interval: 100,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
    },
    init() {
        player.bindEvents()
        player.play()
    },
    bindEvents() {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run() {
        player.n += 1;
        if (player.n === string.length) {
            window.clearInterval(player.timer)
        }
        demo1.innerText = string.substr(0, player.n)
        demo2.innerHTML = string.substr(0, player.n)
        demo1.scrollTo(0, 3951)
    },
    play() {
        player.timer = setInterval(player.run, player.interval)
    },
    pause() {
        window.clearInterval(player.timer)
    },
    slow() {
        player.pause()
        player.interval = 200
        player.play()
    },
    normal() {
        player.pause()
        player.interval = 100
        player.play()
    },
    fast() {
        player.pause()
        player.interval = 0
        player.play()
    }
}

player.init()


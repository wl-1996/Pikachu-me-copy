let string = `body {
    background: #ffe600;
}

.skin {
    position: absolute;
    font-size: 100px;
    width: 4.2em; 
    height: 2.35em; 
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
}

@media(max-width: 500px) and (min-width: 400px){
    .skin{
      font-size: 80px;
    }
}

@media(max-width: 400px){
    .skin{
        font-size: 60px;
    }
}

.eye {
    border: 0.1em solid black; 
    width: 0.57em; 
    height: 0.57em; 
    background: #2e2e2e;
    border-radius: 100%; 
    position: absolute; 
    margin-left: 0.6em; 
}

.eye::after {
    width: 0.25em; 
    height: 0.25em;
    border: 0.03em solid blue;
    background: #fff;
    content: ""; 
    display: block; 
    position: absolute; 
    border-radius: 100%; 
    margin-left: 0.07em; 
    margin-top: -0.02em;
}

.eye.right {
    right: 0.6em;
}

.nose {
    position: absolute; 
    margin: 0.3em calc(50% - 0.11em); 
    margin-top: 0.38em; 
    width: 0; 
    height: 0;
    z-index: 1; 
    border-top: 0.09em solid black;
    border-left: 0.11em solid transparent; 
    border-right: 0.11em solid transparent;
    box-shadow: 0 -0.01em 0 black; 
}

.nose::before {
    content: ""; 
    display: block; 
    position: absolute; 
    width: 0.22em;
    height: 0.05em;
    background: black;
    border-top-left-radius: 0.11em 0.05em;
    border-top-right-radius: 0.11em 0.05em;
    margin-top: -0.14em;
    margin-left: -0.11em;
}

.nose:hover {
    animation: nose 1.23s infinite linear; 
    cursor: pointer; 
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
    position: absolute; 
    width: 2.28em; 
    height: 1.8em;
    margin-top: 0.65em;
    margin-left: calc(50% - 1.18em); 
    overflow: hidden; 
}

.mouth::after {
    content: "";
    display: block;
    position: absolute; 
    width: 0.8em;
    height: 0.25em;
    background: #ffe600;
    border: 0.03em solid black;
    border-top: none;
    border-left: none;
    right: 0.25em;
    top: -0.05em;
    transform: rotate(25deg); 
    border-bottom-right-radius: 0.6em 0.3em; 
    box-shadow: 0 -0.1em 0 #ffe600, -0.05em -0.03em 0 #ffe600; 
}

.mouth::before {
    content: "";
    display: block;
    position: absolute; 
    width: 0.8em;
    height: 0.25em;
    background: #ffe600;
    border: 0.03em solid black;
    border-top: none;
    border-right: none;
    left: 0.35em;
    top: -0.05em;
    transform: rotate(-25deg); 
    border-bottom-left-radius: 0.6em 0.3em; 
    box-shadow: 0 -0.1em 0 #ffe600, 0.05em -0.03em 0 #ffe600; 
    z-index: 1;
}

.mouth > div {
    position: absolute; 
    background: #ff485f;
    width: 2.28em;
    height: 8em;
    border: 0.04em solid black;
    border-bottom-left-radius: 1.18em 8em;
    border-bottom-right-radius: 1.18em 8em;
    margin-top: -6.37em; 
    overflow: hidden;
}

.mouth > div::after {
    content: "";
    display: block;
    position: absolute; 
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
    transform-origin: 0 0; 
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


// 抓到滑鼠在螢幕上的位置

function getMousePos(event) {
    const e = event || window.event;

    x = e.clientX / 2
    y = e.clientY / 2
    
    // x, y 數值帶入 shadow 數值
    document.getElementById("demo").style.textShadow =
        `${x}px ${y}px 1px red,
        -${x}px -${y}px 1px blue,
        -${x}px ${y}px 1px green,
        ${x}px -${y}px 1px yellow`;
    return 
}

// 事件
document.addEventListener('mousemove', getMousePos)

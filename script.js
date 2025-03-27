let output = document.querySelector("#output");
let html, css, js = '';

let input = document.querySelectorAll(".top textarea");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");

document.querySelector(".btn1").addEventListener("click", () => handleButtonClick(1));
document.querySelector(".btn2").addEventListener("click", () => handleButtonClick(2));
document.querySelector(".btn3").addEventListener("click", () => handleButtonClick(3));

input.forEach((element, position) => {
    element.addEventListener("keyup", () => {
        if (position == 0) {
            html = element.value;
        }
        if (position == 1) {
            css = element.value;
        }
        if (position == 2) {
            js = element.value;
        }
        output.contentDocument.body.innerHTML = html;
        output.contentDocument.head.innerHTML = `<style>${css}</style>`;
        output.contentWindow.eval(js);
    });
});

function handleButtonClick(button) {
    if (button == 1) {
        text1.select();
        text1.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text1.value);
    }
    if (button == 2) {
        text2.select();
        text2.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text2.value);
    }
    if (button == 3) {
        text3.select();
        text3.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text3.value);
    }
}

let hide = document.querySelector(".hide");
let bottom = document.querySelector(".buttom");
let isFullHeight = false;
let h2 = document.querySelector("h2");

hide.addEventListener("click", function () {
    let windowHeight = window.innerHeight;
    if (!isFullHeight) {
        bottom.style.height = windowHeight + 'px';
        document.querySelector(".top").classList.add('hidden');
        h2.style.color = 'black';
    } else {
        bottom.style.height = 'auto';
        document.querySelector(".top").classList.remove('hidden');
        h2.style.color = 'white';
    }
    isFullHeight = !isFullHeight;
});

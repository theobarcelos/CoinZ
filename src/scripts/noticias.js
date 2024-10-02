const myImage = document.querySelector('#LCD-img')

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "../assets/LCD.png") {
        myImage.setAttribute("src", "../assets/lulao.jpeg");
    } 
    else {
        myImage.setAttribute("src", "../assets/dinero.jpg");
    }
    
    if (mySrc === "../assets/dinero.jpg"){
        myImage.setAttribute("src", "../assets/LCD.png");
    }
};
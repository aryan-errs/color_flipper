const colors = ["blue", "red", "yellow", "mediumseagreen", "violet", "orange", "SlateBlue" ];

const color = document.querySelector(".color");
const btn = document.getElementById("change");

btn.addEventListener("click", function(){
    var x = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[x];
    color.textContent = colors[x];
    console.log(x)
});

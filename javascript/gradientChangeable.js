// let gradientFileBlock = document.getElementById('forUserBG')
//
// setInterval(generate, 2500)
//
//
// function createHex() {
//     var hexCode1 = "";
//     var hexValues1 = "0123456789abcdef";
//
//     for ( var i = 0; i < 6; i++ ) {
//         hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
//     }
//     return hexCode1;
// }
//
// function generate() {
//
//     var deg = Math.floor(Math.random() *360);
//
//     var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
//
//     gradientFileBlock.style.background = gradient;
//
//     console.log(hexCode1, hexCode2);
//
// }
// document.onload = generate();

function generatorOfNum() {
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            // console.log(colors[i][j])
            colors[i][j] = Math.floor(Math.random() * 255) + 1;
            // console.log(colors[j])
        }
    }
}

var colors = [[32,0,25],
    [0,255,0],
    [255,5,80],
    [15,0,20],
    [55,20,255],
    [0,0,0]];

var step = Math.floor(Math.random()*255)+1;

var colorIndices = [0,1,2,3];

var gradientSpeed = 0.019;

function updateGradient()
{

    if ( $===undefined ) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";

    $('#forUserBG').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

    step += gradientSpeed;
    if ( step >= 1 )
    {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];


        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

        generatorOfNum()
    }
}

setInterval(updateGradient,50);

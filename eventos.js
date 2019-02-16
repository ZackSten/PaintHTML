document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mouseup",dibujarMouseArriba);
document.addEventListener("mousedown",dibujarMouseAbajo);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var estado = 0;
var x;
var y;

dibujarLinea("red", 299, 1, 1, 1, papel);			//CUADRICULAS LIMITES
dibujarLinea("red", 1, 299, 1, 1, papel);
dibujarLinea("red", 1, 299, 299, 299, papel);
dibujarLinea("red", 299, 299, 299, 1, papel);

function dibujarMouse(evento)
{
	var colorcito = "green";
	if(estado == 1)
	{
		dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, papel);
	}
	x=evento.layerX;
	y=evento.layerY;
}

function dibujarMouseArriba(evento)
{
	estado = 0;
	x=evento.layerX;
	y=evento.layerY;
}

function dibujarMouseAbajo(evento)
{
	estado = 1;
	x=evento.layerX;
	y=evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
/*Find roots of quadratic equation with the given coefficients a, b, c. 
Log on console roots or some message, if
there are no roots.*/

var a =2;
var b = 5;
var c =3;
var x1,x2;
var d = b*b -4*a*c;
console.log("discriminant = ",d);

if (d>0){
  x1= (-b +Math.sqrt(d))/ (2*a);
  x2= (-b -Math.sqrt(d))/ (2*a);
  console.log("x1=",x1," x2=",x2);
}
else if (d==0){
   x1 = -b/(2*a);
   x2= -b/(2*a);
   console.log("x1=x2=",x1);
}
else
{
	x1 = null;
	x2 = null;
	console.log("There are no roots")
}


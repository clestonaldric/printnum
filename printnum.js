function printnum()
{	for(var i=1;i<101;i++)
   {
   	document.write(i);
   	if(i%3==0)
   		document.write(" Earth");
   	if(i%5==0)
   		document.write(" Jupiter");
   	if(i%9==0)
   		document.write(" Pluto");
   	document.write("<br>");
	}
}
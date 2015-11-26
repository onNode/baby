function addComment()
{
var xmlhttp;
if(window.XMLHttpRequest)
{
xmlhttp=new XMLHttpRequest();
}
else if(window.ActiveXObject)
{
xmlhttp=new ActiveXobject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
	{
	if(xmlhttp.readyState==4&&xmlhttp.status==200)
		{
	
		var xmlDoc =xmlhttp.responseXML;
		/*var x =xmlDoc.getElementsByTagName("commentslist");
		var xx=x[0].childNodes;
		alert(xx.length);
		var txt=document.getElementById("newcomments").value;
		var c = xmlDoc.createElement("comment");
		var t = xmlDoc.createTextNode(txt);
		c.appendChild(t);
		x[0].appendChild(c);
		alert(xx.length);*/
		var newComm=xmlDoc.createElement("comment");
		var x=xmlDoc.documentElement;
		var y=xmlDoc.getElementsByTagName("comment");
		alert(y.length);
		x.insertBefore(newComm,null);
		alert(y.length);
		}
	
	}


	xmlhttp.open("GET","babyinfo.xml",true);
	xmlhttp.send(null);
	
	
}
function addVideo()
{
	var txt=document.getElementById("videoname").value;
	var x=document.createElement("LI");
	var t=document.createTextNode(txt);
	x.appendChild(t);
	document.getElementById("videolist").appendChild(x);
	var v=document.getElementById('videoEmbd');
	var vh=document.getElementById("videohref").value;
	v.src=vh;
}

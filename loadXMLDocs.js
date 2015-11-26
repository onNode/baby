var xmlhttp;
function loadXMLDoc(url)
{
xmlhttp=null;
if(window.XMLHttpRequest)
	{
	xmlhttp=new XMLHttpRequest();
	}
else if(window.ActiveXObject)
	{
	xmlhttp=new ActiveXobject("Microsoft.XMLHTTP");
	}
if(xmlhttp!=null)
	{
	xmlhttp.onreadystatechange=state_Change
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	}
else
	{
	alert("your browser does not support XMLHttp.");

	}
}
function state_Change()
{
if (xmlhttp.readyState==4)
{
	if(xmlhttp.status==200)
	{
       		var x=xmlhttp.responseXML;
		var y=document.getElementById('bInfo');
		y.rows[0].cells[1].innerHTML=x.getElementsByTagName("name")[0].childNodes[0].nodeValue;
	
		y.rows[1].cells[1].innerHTML=x.getElementsByTagName("gender")[0].childNodes[0].nodeValue;
	
		y.rows[2].cells[1].innerHTML=x.getElementsByTagName("age")[0].childNodes[0].nodeValue;
	
		y.rows[3].cells[1].innerHTML=x.getElementsByTagName("height")[0].childNodes[0].nodeValue;


		y.rows[4].cells[1].innerHTML=x.getElementsByTagName("weight")[0].childNodes[0].nodeValue;
		y.rows[5].cells[1].innerHTML=x.getElementsByTagName("description")[0].childNodes[0].nodeValue;

		//load the video list 

		var z=x.getElementsByTagName("vname");
		for(var i=0;i<z.length;i++)
		{
		var txt=z[i].childNodes[0].nodeValue;
		var l=document.createElement("LI");
		var t=document.createTextNode(txt);
		l.appendChild(t);
		
		var n=document.getElementById('vlist');
		n.appendChild(l);	
		}
		//load the comments list
		var c=x.getElementsByTagName("comment");
		for(var i=0;i<c.length;i++)
		{
		var txt=c[i].childNodes[0].nodeValue;
		var l=document.createElement("LI");
		var t=document.createTextNode(txt);
		l.appendChild(t);
		
		var n=document.getElementById('commentslist');
		n.appendChild(l);	
		}
	}

}
}

var xmlHttp;
function showData(str){
xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	{
		alert("Browser dose not support HTTP Request");
		return;
	}
	var url="getdata.php";
	url=url+"?q="+str;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
function stateChanged()
{
	if(xmlHttp.readyState==4|| xmlHttp.readyState=="complete")
	{

        var xmlDoc =xmlHttp.responseXML;
	var x = document.getElementById("showbox");
	
	x.rows[0].cells[1].innerHTML=xmlDoc.getElementsByTagName("nodetime")[0].childNodes[0].nodeValue;
	x.rows[1].cells[1].innerHTML=xmlDoc.getElementsByTagName("height")[0].childNodes[0].nodeValue;
	x.rows[2].cells[1].innerHTML=xmlDoc.getElementsByTagName("weight")[0].childNodes[0].nodeValue;
	x.rows[3].cells[1].innerHTML=xmlDoc.getElementsByTagName("behavior")[0].childNodes[0].nodeValue;
	x.rows[4].cells[1].innerHTML=xmlDoc.getElementsByTagName("picture")[0].childNodes[0].nodeValue;
	x.rows[5].cells[1].innerHTML=xmlDoc.getElementsByTagName("video")[0].childNodes[0].nodeValue;
	x.rows[6].cells[1].innerHTML=xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
	
	}
}


function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
		xmlHttp = new XMLHttpRequest();
	}
	catch (e)
	{
	try
	{
	xmlHttp=new ActiveXobject("Msxml2.XMLHTTP");
	}
	catch (e)
	{
	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	}
return xmlHttp;

}

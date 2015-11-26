<?php

$con = mysql_connect("localhost","root","ok");
if (!$con)
	{	
	die('Could not connect: ' . mysql_error());
	}

mysql_select_db("my_db");
switch ($_GET["selec"])
{
	case 1:		
	$sql ="INSERT INTO babygrowth (height,weight)
	VALUES
	('$_GET[growth]' , 0)";
	break;
	case 2:
	
	$sql ="INSERT INTO babygrowth (height,weight)
	VALUE
	(0 ,'$_GET[growth]')";
	break;	
	default:
	break;
}
if(!mysql_query($sql,$con))
	{
	die('Error:' . mysql_error());
	}
mysql_close($con);

echo  "<p>1 record added</p>";
echo  "<a href='Babyshow'>";
echo  "<input type='button' value='back'/>";
echo  "</a>";
?> 

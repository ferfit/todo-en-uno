<?php   

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];


$destinatario = 'ferfit16@gmail.com';
$from = 'todoenUno@todoenuno.com';



$contenido = "Nueva consulta de la página de todoenUno"."\n\nNombre: " . $nombre .  "\nEmail: " . $email . "\nTelefono: " . $telefono;


$asunto = "Tu tienda virtual y tu carrito de compras, Todo en Uno.";

$headers = "From: ".$from; 

if($email && $nombre &&  $telefono && !empty($email) && !empty($nombre) && !empty($telefono)  ){
	mail($destinatario, $asunto, $contenido, $headers);
	echo  json_encode('Correcto:'.$email.'ok');
	
} else {
	echo json_encode('error');
}


/* 
if (isset($email)) {
	mail($destinatario, $asunto, $contenido, $headers);
	echo "Tu email se ha enviado correctamente.";
} */
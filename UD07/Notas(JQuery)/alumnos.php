<?php
	// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
	header('Content-Type: application/json');

	$datosjson = "[
		{
			\"nombre\": \"Daniel Blas\",
			\"Tarefa1\": 9.3",
			\"Tarefa2\": 2.5,
			\"Tarefa3\": 8.2,
			\"Tarefa4\": 5.3
		},
        {
			\"nombre\": \"Daniel Blas\",
			\"Tarefa1\": 9.3",
			\"Tarefa2\": 2.5,
			\"Tarefa3\": 8.2,
			\"Tarefa4\": 5.3
		},
        {
			\"nombre\": \"Daniel Blas\",
			\"Tarefa1\": 9.3",
			\"Tarefa2\": 2.5,
			\"Tarefa3\": 8.2,
			\"Tarefa4\": 5.3
		},
        {
			\"nombre\": \"Daniel Blas\",
			\"Tarefa1\": 9.3",
			\"Tarefa2\": 2.5,
			\"Tarefa3\": 8.2,
			\"Tarefa4\": 5.3
		}
		
	]";
	echo $datosjson;
?>
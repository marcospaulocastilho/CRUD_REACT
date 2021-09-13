<?php



$router->get('/', 'VeiculoController@get');

$router->get('/{id}', 'VeiculoController@show');

$router->post('/', 'VeiculoController@create');

$router->post('/pesquisar','VeiculoController@search');

$router->put('/{id}', 'VeiculoController@update');

$router->delete('/{id}', 'VeiculoController@destroy');





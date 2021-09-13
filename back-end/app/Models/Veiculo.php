<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
   protected $table = 'veiculo';

   protected $fillable = [
    'placa',
    'combustivel',
    'fabricante'
   ];
}

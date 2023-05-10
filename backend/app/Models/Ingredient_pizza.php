<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient_pizza extends Model
{
    use HasFactory;

    public function pizzas()
    {
        return $this->belongsTo(Pizza::class);
    }

    public function ingredients()
    {
        return $this->belongsTo(Ingredient::class);
    }
}

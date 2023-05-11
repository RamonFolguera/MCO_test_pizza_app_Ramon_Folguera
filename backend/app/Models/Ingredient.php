<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    public function pizzas()
    {
        return $this->belongsToMany(Pizza::class);
    }

    public function ingredient_pizzas()
    {
        return $this->hasMany(Ingredient_pizza::class);
    }
}

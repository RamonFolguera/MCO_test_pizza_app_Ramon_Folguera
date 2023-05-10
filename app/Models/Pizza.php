<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    public function ingredients()
    {
        return $this->belongsToMany(Ingredients::class);
    }

    public function ingredient_pizzas()
    {
        return $this->hasMany(ingredient_pizza::class);
    }
}

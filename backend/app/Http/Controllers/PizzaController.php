<?php

namespace App\Http\Controllers;

use App\Models\Ingredient_pizza;
use App\Models\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function getAllPizzas()
    {
     

        $pizzas = Pizza::with('ingredient_pizzas')->get();

       
        return [
            "success" => true,
            "message" => "All pizzas successfully retrieved",
            "data" =>$pizzas
        ];

    }
}

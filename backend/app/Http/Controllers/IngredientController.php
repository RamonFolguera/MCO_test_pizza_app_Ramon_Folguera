<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function getAllIngredients()
    {
        $ingredients = Ingredient::query()->get();



        return [
            "success" => true,
            "message" => "All ingredients successfully retrieved",
            "data" =>$ingredients
        ];

    }
}

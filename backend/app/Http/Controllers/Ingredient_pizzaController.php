<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Ingredient_pizza;
use App\Models\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class Ingredient_pizzaController extends Controller
{
    public function addIngredientToPizzaByPizzaId(Request $request, $id)
    {
        try{

            Log::info("Adding ingredients working");
            $pizza = Pizza::find($id);

            if (!$pizza) {
                return response()->json(
                    [
                        "success" => false,
                        "message" => "Pizza not found",
                    ],
                    404
                );
            }

            $ingredients = Ingredient::query()->get();

            foreach ($ingredients as $ingredient) {
                $ingrediendId = $ingredient->id;
                $findIngredient = Ingredient_pizza::whereNot('pizza_id', '=', $pizza->id)->first();
                $notInPizzaIngredient
            }

            return response()->json(
                [
                    "success" => true,
                    "message" => "Ingredient added",
                    "data" => $
                ],
                200
            );

        }catch (\Throwable $th) {
            Log::error("ADDING INGREDIENT: " . $th->getMessage());
            return response()->json(
                [
                    "success" => false,
                    "message" => "Error adding ingredients"
                ],
                500
            );
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Ingredient_pizza;
use App\Models\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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

    public function getAllIngredientsNotInSelectedPizza(Request $request, $id)
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

            $notInPizzaIngredients = [];
            foreach ($ingredients as $ingredient) {
                $ingredientId = $ingredient->id;
                $ingredientName =$ingredient->name;
                $findIngredient = Ingredient_pizza::where('ingredient_id', '=', $ingredientId)
                    ->where('pizza_id', '=', $pizza->id)
                    ->first();
                if (!$findIngredient) {
                    $notInPizzaIngredients[] = [
                        "id" => $ingredientId,
                        "name" => $ingredientName
                    ];
                }
            }
            return response()->json(
                [
                    "success" => true,
                    "message" => "Ingredient not in pizza",
                    "data" => $notInPizzaIngredients
                ],
                200
            );

        }catch (\Throwable $th) {
            Log::error("ADDING INGREDIENT: " . $th->getMessage());
            return response()->json(
                [
                    "success" => false,
                    "message" => "Error adding ingredients" . $notInPizzaIngredients
                ],
                500
            );
        }
    }


}

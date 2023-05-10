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
        try {

            $pizza = Pizza::find($id);
            $ingredientId = $request->input('ingredient_id');

            $newIngredient_pizza = new Ingredient_pizza();
            $newIngredient_pizza->ingredient_id = $ingredientId;
            $newIngredient_pizza->pizza_id = $pizza->id;
            $newIngredient_pizza->save();

            $ingredientPrice = Ingredient::find($ingredientId)->ingredient_price;
            $ingredientPricePlus = $ingredientPrice * 1.5;

            $pizza->pizza_price += $ingredientPricePlus;
            $pizza->save();
            return response()->json([
                "success" => true,
                "message" => "Ingredient added to Pizza",
                "data" => $newIngredient_pizza
            ], 200);
        } catch (\Throwable $th) {
            Log::error("ADDING INGREDIENT: " . $th->getMessage());
            return response()->json([
                "success" => false,
                "message" => "Error adding ingredients"
            ], 500);
        }
    }

    public function removeIngredientToPizzaByPizzaId(Request $request, $id)
    {
        try {

            Log::info("Adding ingredients working");
            $pizza = Pizza::find($id);
            $pizzaId = $pizza->id;
            $ingredientId = $request->input('ingredient_id');

            Ingredient_pizza::where('pizza_id', "=", $pizzaId)->where('ingredient_id', '=', $ingredientId)->delete();

            return response()->json(
                [
                    "success" => true,
                    "message" => "Ingredient successfully deleted",
                ],
                200
            );
        } catch (\Throwable $th) {
            Log::error("DELETING INGREDIENT: " . $th->getMessage());
            return response()->json(
                [
                    "success" => false,
                    "message" => "Error deleting ingredients"
                ],
                500
            );
        }
    }
}

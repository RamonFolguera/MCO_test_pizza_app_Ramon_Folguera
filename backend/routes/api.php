<?php

use App\Http\Controllers\Ingredient_pizzaController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\PizzaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/', function () {
    return view('Welcome to my pizza app');
});

Route::get('/pizzas', [PizzaController::class, 'getAllPizzas']);
Route::get('/ingredients', [IngredientController::class, 'getAllIngredients']);
Route::get('/ingredients-not-in-pizza', [IngredientController::class, 'getAllIngredientsNotInSelectedPizza']);

Route::post('/add-ingredient/{id}', [Ingredient_pizzaController::class, 'addIngredientToPizzaByPizzaId']);
Route::delete('/remove-ingredient/{id}', [Ingredient_pizzaController::class, 'removeIngredientToPizzaByPizzaId']);


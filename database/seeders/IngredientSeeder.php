<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ingredients')->insert(
            [
                'name' => "mushroom",
                'ingredient_price' => 0.5,
            ],
           [
                'name' => "tomato",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "oregano",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "mozzarella",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "pineapple",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "pepperoni",
                'ingredient_price' => 1,
            ],
            [
                'name' => "bacon",
                'ingredient_price' => 1,
            ],
            [
                'name' => "ham",
                'ingredient_price' => 1,
            ],
            [
                'name' => "onion",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "beef mince",
                'ingredient_price' => 1,
            ],
            [
                'name' => "olives",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "artichoke",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "spinach",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "bell pepper",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "cherry tomatoes",
                'ingredient_price' => 0.5,
            ],
            [
                'name' => "bbq sauce",
                'ingredient_price' => 0.1,
            ],
            [
                'name' => "cabanossi",
                'ingredient_price' => 1,
            ],
        );
    }
}

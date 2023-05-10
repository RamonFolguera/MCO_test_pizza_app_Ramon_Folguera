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
        );

        DB::table('ingredients')->insert(
            [
                'name' => "tomato",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "oregano",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "mozzarella",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "pineapple",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "pepperoni",
                'ingredient_price' => 1,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "bacon",
                'ingredient_price' => 1,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "ham",
                'ingredient_price' => 1,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "onion",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "beef mince",
                'ingredient_price' => 1,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "olives",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "artichoke",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "spinach",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "bell pepper",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "cherry tomatoes",
                'ingredient_price' => 0.5,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "bbq sauce",
                'ingredient_price' => 0.1,
            ],
        );

        DB::table('ingredients')->insert(
            [
                'name' => "cabanossi",
                'ingredient_price' => 1,
            ],
        );
    }
}

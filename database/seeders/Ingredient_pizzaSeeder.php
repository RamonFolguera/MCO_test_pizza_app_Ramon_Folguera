<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Ingredient_pizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ingredient_pizzas')->insert([
            [
                'pizza_id' => 1,
                'ingredient_id' => 2,
            ],
            [
                'pizza_id' => 1,
                'ingredient_id' => 6,
            ],
            [
                'pizza_id' => 1,
                'ingredient_id' => 4,
            ],
            [
                'pizza_id' => 2,
                'ingredient_id' => 2,
            ],
            [
                'pizza_id' => 2,
                'ingredient_id' => 4,
            ],
            [
                'pizza_id' => 2,
                'ingredient_id' => 7,
            ],
            [
                'pizza_id' => 2,
                'ingredient_id' => 9,
            ],
            [
                'pizza_id' => 2,
                'ingredient_id' => 10,
            ],  
            [
                'pizza_id' => 2,
                'ingredient_id' => 6,
            ],
            [
                'pizza_id' => 2,
                'ingredient_id' => 1,
            ],
            [
                'pizza_id' => 2,
                'ingredient_id' => 11,
            ],
            [
                'pizza_id' => 3,
                'ingredient_id' => 2,
            ],
            [
                'pizza_id' => 3,
                'ingredient_id' => 4,
            ],
            [
                'pizza_id' => 3,
                'ingredient_id' => 5,
            ],
            [
                'pizza_id' => 3,
                'ingredient_id' => 8,
            ],
            [
                'pizza_id' => 4,
                'ingredient_id' => 2,
            ],
            [
                'pizza_id' => 4,
                'ingredient_id' => 4,
            ],
            [
                'pizza_id' => 4,
                'ingredient_id' => 1,
            ],
            [
                'pizza_id' => 4,
                'ingredient_id' => 3,
            ],
            [
                'pizza_id' => 4,
                'ingredient_id' => 9,
            ],
            [
                'pizza_id' => 4,
                'ingredient_id' => 11,
            ],
            [
                'pizza_id' => 4,
                'ingredient_id' => 13,
            ],
            [
                'pizza_id' => 5,
                'ingredient_id' => 2,
            ],
            [
                'pizza_id' => 5,
                'ingredient_id' => 4,
            ],
            [
                'pizza_id' => 5,
                'ingredient_id' => 8,
            ],
            [
                'pizza_id' => 5,
                'ingredient_id' => 12,
            ],
            [
                'pizza_id' => 5,
                'ingredient_id' => 1,
            ],
            [
                'pizza_id' => 5,
                'ingredient_id' => 11,
            ],
            [
                'pizza_id' => 6,
                'ingredient_id' => 2,
            ],
            [
                'pizza_id' => 6,
                'ingredient_id' => 4,
            ],
            [
                'pizza_id' => 6,
                'ingredient_id' => 6,
            ],
            [
                'pizza_id' => 6,
                'ingredient_id' => 7,
            ],
            [
                'pizza_id' => 6,
                'ingredient_id' => 8,
            ],
            [
                'pizza_id' => 6,
                'ingredient_id' => 17,
            ],
            [
                'pizza_id' => 6,
                'ingredient_id' => 10,
            ],
        ]);
    }
}

<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    User::create([
      'name' => 'Albe Masia',
      'email' => 'alberto.masia@gmail.com',
      'password' => Hash::make('merlino'),
      'saved' => [1, 5, 7, 9]
    ]);
  }
}

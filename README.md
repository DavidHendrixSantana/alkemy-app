## Installation

#### Backend:
<br>
1.-Clone the project
<br>
2.-Go to the project root directory
<br>
3.-Run  <b>composer update</b>
<br>
(/*We could use composer install, but its advisable user composer update for 
possible compatibility issues in the composer.json dependecies*/)
<br>
4.-Create database
<br>
5.-Copy .env.example into <b>.env</b> file and adjust parameters
<br>
6.-Run the migrations <b>php artisan migrate</b>
<br>
7.-And run the seeders<b> php artisan db:seed</b>
<br>
8.-Run <b>php artisan serve</b> to start the project at http://localhost:8000
<br>

#### Frontend
<br>
1.-Install the node dependecies <b>npm install</b>
<br>
2.-Then compile the project with <b>npm run dev</b>

This project was developed with laravel 9 and php 8.1.10 







## Installation

#### Backend:
1.-Clone the project
<br>
2.-Go to the project root directory
3.-Run composer update
(/*We could use composer install, but its advisable user composer update for 
possible compatibility issues in the composer.json dependecies*/)
4.-Create database
5.-Copy .env.example into .env file and adjust parameters
6.-Run the migrations php artisan migrate
7.-And run the seeders php artisan db:seed
8.-Run php artisan serve to start the project at http://localhost:8000


#### Frontend
1.-Install the node dependecies npm install
2.-Then compile the project with npm run dev









Backend:
Clone the project
Go to the project root directory
Run composer update
(/*We could use composer install, but its advisable user composer update for 
possible compatibility issues in the composer.json dependecies*/)
Create database
Copy .env.example into .env file and adjust parameters
Run the migrations php artisan migrate
And run the seeders php artisan db:seed
Run php artisan serve to start the project at http://localhost:8000


Frontend:
Install the node dependecies npm install
Then compile the project with npm run dev









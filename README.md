## Meal Planner - Client

This is the client for a meal planner app, current state is MVP.

## Description

The MVP was developed as part of a full-stack web app for a real world project. A team of four developers and one UI/UX designer (all [Codaisseur](https://codaisseur.com/) graduates) worked to develop/design it. 

The goal was to develop the basic features for a meal planner that helps people plan healthier meals more efficiently. It also included:
- creating user accounts
- a recipes' list
- generating a shopping list that included all the necessary ingredients in the right quantity (calculated for the number of household members)

This planner gives its users access to quality recipes, but it does not allow a user to add their own recipes. Only an admin could add recipes to the data base. 


#### The MPV includes the following features:
* Sign in/Log in page: helps the user create a secured user account that offers access to a personal weekly meal planner and a personalized shopping list.
* Meal Planner Page: displays a personal planner that starts with seven random recipes (retrieved from a PosgreSQL database run on Heroku's servers). 
* Each recipe presents the ingredients calculated for the entire household (for children only half of the adult amount is calculated).
* Change recipe button: gives the user the option to change a recipe from the planner with another one from the recipes list.
* Add to (shopping) list button: creates a shopping list by either adding the ingredients for all recipes at once **or** for one recipe at a time.
* Shopping cart button: displays the shopping list.
* Print / Clear buttons: help the user to print or clear the shopping list. 
* Log out button: redirects the user to the Log in page.


#### Out of scope for this MVP:
* Creating an admin account or endpoints to add recipes were out of scope for this project so the recipes were added to the database by writing and running an SQL script with DBeaver. 

## Tech stack
* JavaScript
* React
* Redux
* CSS

## Demo
[Working MVP Demo](https://loized.com/img/meal/video_meal.gif)

## Setup
* The backend (server) of this project must be running for the app to function correctly.
* Install the dependencies using `yarn install`
* Start the server using `yarn start`

## Authors and acknowledgment
* [Hoan Phung](https://github.com/hoanphungt) - [Full-stack Junior Developer ](https://www.linkedin.com/in/hoanphung/)
* [Loize Dalco](https://loized.com/) - [UX/ UI Designer](https://www.linkedin.com/in/loize-dalco/)
* [Sabina Dhaugoda](https://github.com/sabeenski) - [Junior FullStack Developer](https://www.linkedin.com/in/sabinadhaugoda/)
* Alina Rusu (me) - [Junior Full-Stack Web-developer](https://www.linkedin.com/in/alina-rusu/)
* [David Behal](https://github.com/DavidB59) - [Junior Full-Stack Developer](https://www.linkedin.com/in/davidbehal/)

Working on a real world project in an agile team that included a well prepared Project Owner, a great UI/UX Designer and three hard working and solution oriented developers was a great opportunity and fun experience that came with so much learning and professional growth.

Good planning, SCRUM, open communication and a constant focus on priorities helped us deliver the required MVP in two weeks and for that I'd like to thank my teammates for their grit, determination, humor and positive attitude.


## License
MIT Licence - Copyright &copy; 2018 - Alina Rusu, David Behal, Hoan Phung, Loize Dalco, Sabina Dhaugoda.


# _Code Review 4: Javascript_

#### _Javascript Pizza Topping Picker app, v1.0_

#### By _**Johnny Ray Alt**_

## Description

_This application allows you to choose from a variety of toppings to customize a pizza. It will show the total as well.
Upon opening, a Pizza Object and two const objects (Prices and Results) are established.
Should toppings or prices need to be changed, they only need to be changed here and no where else.
When the form is submitted (Pizza Time), two sets of variables are created: one for calculating prices and one for storing the results as strings.
All of the toppings are stored as strings in either vegToppingsList or meatToppingsList after being passed through a for loop to check if theu are selected or not.
Both the size and sauce variables are passed into their respective if else functions to determine which size is selected.
A seperate math function for cheese determines if the user selected none, normal, or extra cheese. Extra cheese price is determined by the prices const.
3 sepereate prototypes are run to determine which size, sauce, and cheese are selected,
then passed into a 4th prototype that takes each toppings price and sums them, returning the total of the pizza.
Each time 'Pizza Time' is clicked, the object will update, wiping the previous results and displaying only the current order._

## Setup/Installation Requirements

* _Use the command line to clone the repo and open index.html_
* _git clone https://github.com/johnnyrayalt/CodeReview4_
* _cd CodeReview4/_
* _open index.html_
* _Select any arrangement of topings_
* _Click 'Pizza Time' to view your result and total_
* _Requires an active Internet connection for Jquery 3.3.1_


## Support and contact details

_johnnyrayalt@gmail.com_

## Technologies Used

_jquery 3.3.1, bootstrap 4.0.0, html5, css3, js6_

### License

MIT License

Copyright (c) 2018 **_Johnny Ray Alt_**

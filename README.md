# 201-last-step
301 Entrance

Prompt:
In a retracting Mall Industry, a bold, contrarian local mall owner is looking to splice up his life by expanding the mall. In order to decide which type of stores to add, he is turning to his loyal customers for help. For a limited time, he will be conducting a survey at his mall. In this survey, customers will present their daily receipt to the mall kiosk and take a short 10 selection survey on a single mounted tablet.
He is reaching out to a local software development bootcamp, CodeFellows, to create this survey for him. This survey needs to include:
-	25 products which appear in pairs at a time at random (totaling 10 pairs). 
-	A feature which will save the data and display it in a bar chart on a separate window.
-	A thank you alert after customers take the survey with a randomly generated discount number to present for their visit.
User Stories:
As a user, I would like to display 2 unique products at random so the viewers can pick a favorite.
-	Create a constructor function that creates an object associated with each product with 
Type of product
File path of image
-	Create an algorithm that will randomly generate 2 unique product images from images directory
-	Attach an event listener to the HTML page where images displayed
-	Upon ‘click’ generate 2 new products for selection
As a user, I would like to track selections made by customers so I can determine what type of store to open up.
-	In the constructor function, define a property to hold the number of times a product has been clicked.
-	After every selection by customer, update the property to reflect the selection.
As a user, I would like to control the number of selections a user is presented with so that I can control the survey duration.
-	The user should be presented with 10 selection pairs.
-	Keep the number of rounds in a variable to easily change how many selection pairs for future surveys.
As a user, I would like to view a report of the results after the mall closes each day so I can evaluate their choices.
-	Create a property attached to the constructor function to keep track of all the products that are currently being considered.
-	Display the list of all the products followed by the votes received and number of times seen for each.

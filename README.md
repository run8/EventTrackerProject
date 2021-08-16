# Full-Stack Spring/REST/JPA Paragliding Flight Tracker Project
## Application Overview
This Java Spring Boot REST API with user interface facilitates a user to track paragliding flights. It provides the functionality for a pilot or user-client to make records of paragliding flights including launch site location (latitude and longitude), launch site name, landing site name, comments about the flight, date and times of launches and landings. It provides full flight information CRUD (create, read, update and delete) functionality to a database.

## Technologies Used
- Java
- Angular
- Visual Studio Code
- Spring Boot
- Hibernate
- Java Persistence API (JPA)
- MySQL and MySQL Workbench for Database Schema Design
- Git/GitHub
- AJAX
## How To Use
This website is not yet designed for new users. This website is designed for a paragliding pilot to track paragliding flights. This application can save new flight information to a database, modifying previously recorded flights, read and display records of previously recorded flights. A user accesses the website by simply going to the URL (TBD). The website presents a list of previously recorded flights. To view all flights, scroll down until the end of the flight list. To record a new flight, add information to the 'Add a Flight' form at the top of the web site ('Launch site name', 'Landing Site Name', 'Launch Latitude' etc.). After adding the flight information, press the 'Add Flight' button.  After pressing the button, the new recorded flight will appear at the bottom of the list of flights.

## REST Endpoints
| Method | URI               | Request Body         |      Response Body        |
|--------|-------------------|----------------------|---------------------------|
| GET    |  /api/flights     |   leave empty        | JSON Collection of flights|
| GET    |  /api/flight/{id} |   leave empty        |      JSON flight          |
| PUT    | /api/flight       |    Flight JSON       |      Updated flight       |
| POST   |   /flight         |    Flight JSON       |     New JSON flight       |
| DELETE |/flights/{flightId}|   leave empty        |     no response body      |  

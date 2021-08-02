# Full-Stack Spring/REST/JPA Paragliding Flight Tracker Project
## Application Overview
This Java Spring Boot REST API (no user interface) tracks paragliding flights. It provides the functionality for a client to track paragliding flight information including launch site location (latitude and longitude), launch site name, landing site name, comments about the flight, date and times of launches and landings. It provides full CRUD functionality (create, read, update and delete) of flight information.

### Technologies Used
- Java
- SQL
- Spring Boot
- Java Persistence API (JPA)
- MySQL and MySQL Workbench for Database Schema Design
- Git/GitHub

## REST Endpoints
| Method | URI                | Request Body         |      Response Body        |
|--------|--------------------|----------------------|---------------------------|
| GET    |  /api/flights      |  leave empty         | JSON Collection of flights|
|--------|--------------------|----------------------|---------------------------|
  GET    |   /api/flight/{id} |  leave empty         |      JSON flight          |
|--------|--------------------|----------------------|---------------------------|
  PUT       /flight/{id}/        Flight JSON  
|--------|--------------------|----------------------|---------------------------|

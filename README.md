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
| Method | URI                | Request Body              |      Response Body        |
|--------|--------------------|---------------------------|---------------------------|
| GET    |  /api/flights      |  leave empty              | JSON Collection of flights
|--------|--------------------|---------------------------|---------------------------|
  GET       /api/flight/{id}     leave empty                JSON flight
|--------|--------------------|---------------------------|---------------------------|
  PUT       /flight/{id}/        {
                                
                                  "launchLatitude": 50.8951,
                                  "launchLongitude": -88.0364,
                                  "landLatitude": 78.888,
                                  "landLongitude": -80.666,
                                  "launchDateTime": "2021-06-01T11:30:20",
                                  "landDateTime": "2020-07-01T11:30:20",
                                  "launchSiteName": "Some launch site name",
                                  "landSiteName": "2021-07-01 11:30:20",
                                  "comment": "Strong thermals lifting about 600 fpm"
                                }   

| Method | URI                | Request Body | Response Body |
|--------|--------------------|--------------|---------------|
| GET    | `/api/lemurs`      |              | Collection of representations of all

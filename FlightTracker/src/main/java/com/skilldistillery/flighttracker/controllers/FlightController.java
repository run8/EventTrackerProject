package com.skilldistillery.flighttracker.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.flighttracker.entities.Flight;
import com.skilldistillery.flighttracker.services.FlightService;

@RequestMapping("api")
@RestController
public class FlightController {

	// This "could" be the flight repository.  We insert the service layer b/c the Repository is very close to the database
	// It looks redundant:  The service interface and repository interface are very similar.
	// The controller is going to talk to the service.
	// i.e. MySQL doesn't scale well.  If we wanted to change the database, we could change the service layer
	
	// Layer 1 (Persistence Layer) DB
	// Layer 2 ("Repository") Repository access DB directly
	// Model("FlightService" which talks to the repository)
	// Layer 2 View (The presentation layer. 
	
	// Layer View what is rendered in broswer. Not going to do here
	
	
	@Autowired
	private FlightService svc;
	
	
	@GetMapping("flights")
	public List<Flight> listFlights() {
		return svc.allFlights();	
	}
	
	// CRUD is create, read, update, delete.  The corresponding http methods POST (create), GET (read), PUT (update), DELETE (delete)
	
	@GetMapping("flight")   // This method return all the information about a flight.
	@ResponseBody							// This says we must provide an ID
	public Flight getFlightInfoById(@RequestParam(value = "id", required = true)  int id, HttpServletResponse res) {
		Optional<Flight> flight = svc.findById(id);
		
		if (!flight.isPresent()) {
			res.setStatus(404);  // Means resource not found.
		} else {
			return flight.get();
		}
		
		return null;
	}
	
	
	// This method modifies an existing flight. 
//	public Flight modifyFlight(@RequestBody Flight flight, )
	
	
	
//	@PostMapping("flight")
//	public Flight create(@RequestBody Flight flight, HttpServletRequest req, HttpServletResponse res) {
//		try {
//			Flight f = 
//		} catch (Exception e) {
//			// TODO: handle exception
//		}
//	}
}

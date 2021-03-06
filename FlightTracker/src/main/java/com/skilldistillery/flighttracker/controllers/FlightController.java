package com.skilldistillery.flighttracker.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.flighttracker.entities.Flight;
import com.skilldistillery.flighttracker.services.FlightService;

@CrossOrigin({"*", "http://localhost:4210"})
@RequestMapping("api")
@RestController
public class FlightController {

	// This "could" be the flight repository. We insert the service layer b/c the
	// Repository is very close to the database
	// It looks redundant: The service interface and repository interface are very
	// similar.
	// The controller is going to talk to the service.
	// i.e. MySQL doesn't scale well. If we wanted to change the database, we could
	// change the service layer

	// Layer 1 (Persistence Layer) DB
	// Layer 2 ("Repository") Repository access DB directly
	// Model("FlightService" which talks to the repository)
	// Layer  View (The presentation layer.

	// Layer View what is rendered in broswer. Not going to do here

	@Autowired
	private FlightService svc;

	@GetMapping("flights")
	public List<Flight> listFlights() {
		return svc.allFlights();
	}

	// CRUD is create, read, update, delete. The corresponding http methods POST
	// (create), GET (read), PUT (update), DELETE (delete)

	@GetMapping("flight/{id}") // This method return all the information about a flight.
	@ResponseBody   
	public Flight getFlightInfoById(@PathVariable Integer id, HttpServletResponse res) {
		Optional<Flight> flight = svc.findById(id);

		if (!flight.isPresent()) {
			res.setStatus(404); // Means resource not found.
		} else {
			return flight.get();
		}

		return null;
	}

	// This method modifies an existing flight and updates it.
	@PutMapping("flight")  // REST wants to make it clear the endpoints corrospond to a specific entity
	public Flight modifyFlight(HttpServletResponse res, @RequestBody Flight flight) {
//		Flight updatedFlight = null;
//
//		Optional<Flight> existingFlight = svc.findById(flight);  // If it exists it will do the update, otherwise will return null.
//		if (!existingFlight.isPresent()) {       // Put method can be used for updates AND inserts but this clause prevents it.
//			res.setStatus(404);
//		} else {
//
//			try {
//				updatedFlight = svc.updateFlight(flight);
//				if (updatedFlight == null) {
//					res.setStatus(404);
//				}
//
//			} catch (Exception e) {
//				res.setStatus(400);
//			}
//		}

		return svc.updateFlight(flight);
	}
	
	@PostMapping("flight")
	public Flight addNewFlight(@RequestBody Flight flight, HttpServletRequest req, HttpServletResponse res) {
		
		try {
			svc.addFlight(flight);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();  // Redirects the browser to a get request to the flight I just created
			url.append("/").append(flight.getId());  // 
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
		return flight;
	}
	
	@DeleteMapping("flights/{flightId}")
	public void deleteFlight(@PathVariable Integer flightId, HttpServletResponse res) {
		try {
			boolean deleted = svc.deleteFlight(flightId);
			if (deleted) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
		}
	}
	
	

//	@PostMapping("flight")
//	public Flight create(@RequestBody Flight flight, HttpServletRequest req, HttpServletResponse res) {
//		try {
//			Flight f = 
//		} catch (Exception e) {
//			// TODO: handle exception
//		}
//	}
}

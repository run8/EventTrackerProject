package com.skilldistillery.flighttracker.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.flighttracker.entities.Flight;

public interface FlightService {
	// I use these methods in the controller which I will test in PostMan.
	// I need to specify full CRUD methods here.
	
	// This 
	// REST is a methodolgoy of handling CRUD.  If the requestor wants to receive info from the provider(which is the controller), the requester invokes the GET method.
	// If the requestor wants to delete, the requester involikes the DELETE method.
	// If the requester wants to update info the requester invokes the PUT method.
	// For create, we could use PUT or POST. We use POST for create.
	public List<Flight> allFlights();
	public Optional<Flight> findById(int id);
	public boolean addFlight(Flight flight);

}

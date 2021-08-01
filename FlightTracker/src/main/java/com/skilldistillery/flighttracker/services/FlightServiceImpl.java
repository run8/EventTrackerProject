package com.skilldistillery.flighttracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.flighttracker.entities.Flight;
import com.skilldistillery.flighttracker.repositories.FlightRepository;

@Service
public class FlightServiceImpl implements FlightService {
// This 
	@Autowired
	private FlightRepository repo;

	@Override
	public List<Flight> allFlights() {
//		if (repo.count() > 0) {
//			return repo.findAll();			
//		} 
		return repo.findAll();

	}

	@Override
	public Optional<Flight> findById(int id) {
		return repo.findById(id);
	}

	@Override
	public boolean addFlight(Flight flight) {
		
		return false;
	}
}

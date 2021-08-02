package com.skilldistillery.flighttracker.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.flighttracker.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{
	
//	public Flight findById(int id);
	// By convention we introduce the service layer, so that if we wanted to change
	// the technology that accesses the DB, we only have to change the service layer.
	public List<Flight> findByCommentLike(String word);
	public List<Flight> findByLaunchDateTime(LocalDateTime ldt);
	public List<Flight> findByLandSiteName(String name);
	
	// The only reason I would need custome methods here is if JPA doesn't provide a method I need.  Such as above find by site name.
	
}

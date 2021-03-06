package com.skilldistillery.flighttracker.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.flighttracker.entities.Flight;

@SpringBootTest

class FlightRepositoryTest {
	
	@Autowired
	private FlightRepository repo;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void test() {
		assertNotNull(repo);
		Optional<Flight> flight =  repo.findById(1);
		assertTrue(flight.isPresent());
		// Below test is not necessary because we are depending on Spring to acces the DB. We did this at line 44.
		assertEquals("Washington DC paragliding site", flight.get().getLaunchSiteName());
	}

}

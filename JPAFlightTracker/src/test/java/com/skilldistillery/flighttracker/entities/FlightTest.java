package com.skilldistillery.flighttracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.flighttracker.entities.Flight;

class FlightTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Flight flight; 
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	    emf = Persistence.createEntityManagerFactory("JPAFlightTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		flight = em.find(Flight.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		flight = null;
	}

	@Test
	void test() {
		assertNotNull(flight);
		assertEquals(1, flight.getId());
		assertEquals("123456", flight.getStartLocation());
		
	}

}

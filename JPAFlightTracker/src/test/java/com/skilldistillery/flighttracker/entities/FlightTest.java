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

//		select * from flight where id = 1;
//		+----+-----------------+------------------+---------------+----------------+---------------------+---------------------+--------------------------------+---------------------+----------------------------------------------+
//		| id | launch_latitude | launch_longitude | land_latitude | land_longitude | land_date_time      | launch_date_time    | launch_site_name               | land_site_name      | comment                                      |
//		+----+-----------------+------------------+---------------+----------------+---------------------+---------------------+--------------------------------+---------------------+----------------------------------------------+
//		|  1 |         38.8951 |         -77.0364 |        39.666 |        -77.888 | 2021-07-01 12:30:20 | 2021-06-01 12:30:20 | Washington DC paragliding site | 2021-07-01 10:30:20 | String wind at launch coming from the south. |

		assertNotNull(flight);
		assertEquals(1, flight.getId());
		assertEquals(38.8951, flight.getLaunchLatitude());
		assertEquals(-77.0364, flight.getLaunchLongitude());
		assertEquals(39.666, flight.getLandLatitude());
		assertEquals(-77.888 , flight.getLandLongitude());
//		assertEquals("2021-07-01 12:30:20", flight.getLandDateTime());
		assertEquals("Washington DC paragliding site", flight.getLaunchSiteName());
		
//		assertEquals("123456", flight.getStartLocation());
		
	}
	
	// Create a flightServiceTest
	// FlightControllerTest
	

}

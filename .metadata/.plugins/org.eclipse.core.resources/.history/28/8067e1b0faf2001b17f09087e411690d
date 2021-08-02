package com.skilldistillery.flighttracker.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flight {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "launch_latitude")
	private double launchLatitude;
	
	@Column(name = "launch_longitude")
	private double launchLongitude;
	
	@Column(name = "land_latitude")
	private double landLatitude;
	
	@Column(name = "land_longitude")
	private double landLongitude;

	@Column(name = "launch_date_time")
	private LocalDateTime launchDateTime;
	
	@Column(name = "land_date_time")
	private LocalDateTime landDateTime;
	
	@Column(name = "launch_site_name")
	private String launchSiteName;
	
	@Column(name = "land_site_name")
	private String landSiteName;
	
	private String comment;
	
	public Flight() {	}

	public Flight(int id, double launchLatitude, double launchLongitude, double landLatitude, double landLongitude,
			LocalDateTime launchDateTime, LocalDateTime landDateTime, String launchSiteName, String landSiteName,
			String comment) {
		super();
		this.id = id;
		this.launchLatitude = launchLatitude;
		this.launchLongitude = launchLongitude;
		this.landLatitude = landLatitude;
		this.landLongitude = landLongitude;
		this.launchDateTime = launchDateTime;
		this.landDateTime = landDateTime;
		this.launchSiteName = launchSiteName;
		this.landSiteName = landSiteName;
		this.comment = comment;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getLaunchLatitude() {
		return launchLatitude;
	}

	public void setLaunchLatitude(double launchLatitude) {
		this.launchLatitude = launchLatitude;
	}

	public double getLaunchLongitude() {
		return launchLongitude;
	}

	public void setLaunchLongitude(double launchLongitude) {
		this.launchLongitude = launchLongitude;
	}

	public double getLandLatitude() {
		return landLatitude;
	}

	public void setLandLatitude(double landLatitude) {
		this.landLatitude = landLatitude;
	}

	public double getLandLongitude() {
		return landLongitude;
	}

	public void setLandLongitude(double landLongitude) {
		this.landLongitude = landLongitude;
	}

	public LocalDateTime getLaunchDateTime() {
		return launchDateTime;
	}

	public void setLaunchDateTime(LocalDateTime launchDateTime) {
		this.launchDateTime = launchDateTime;
	}

	public LocalDateTime getLandDateTime() {
		return landDateTime;
	}

	public void setLandDateTime(LocalDateTime landDateTime) {
		this.landDateTime = landDateTime;
	}

	public String getLaunchSiteName() {
		return launchSiteName;
	}

	public void setLaunchSiteName(String launchSiteName) {
		this.launchSiteName = launchSiteName;
	}

	public String getLandSiteName() {
		return landSiteName;
	}

	public void setLandSiteName(String landSiteName) {
		this.landSiteName = landSiteName;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "Flight [id=" + id + ", launchLatitude=" + launchLatitude + ", launchLongitude=" + launchLongitude
				+ ", landLatitude=" + landLatitude + ", landLongitude=" + landLongitude + ", launchDateTime="
				+ launchDateTime + ", landDateTime=" + landDateTime + ", launchSiteName=" + launchSiteName
				+ ", landSiteName=" + landSiteName + ", comment=" + comment + "]";
	}



	

}

package com.skilldistillery.flighttracker.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Flight {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "launch_latitude")
	private String launchLatitude;
	
	@Column(name = "launch_longitude")
	private String launchLongitude;
	
	@Column(name = "land_latitude")
	private String landLatitude;
	
	@Column(name = "land_longitude")
	private String landLongitude;

	@Column(name = "launch_date_time")
	@CreationTimestamp
	private LocalDate launchDateTime;
	
	@Column(name = "land_date_time")
	@CreationTimestamp
	private LocalDate landDateTime;
	
	@Column(name = "launch_site_name")
	private String launchSiteName;
	
	@Column(name = "land_site_name")
	private String landSiteName;
	
	private String comment;
	
	public Flight() {	}

	public Flight(int id, String launchLatitude, String launchLongitude, String landLatitude, String landLongitude,
			LocalDate launchDateTime, LocalDate landDateTime, String launchSiteName, String landSiteName,
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

	public LocalDate getLaunchDateTime() {
		return launchDateTime;
	}

	public void setLaunchDateTime(LocalDate launchDateTime) {
		this.launchDateTime = launchDateTime;
	}

	public LocalDate getLandDateTime() {
		return landDateTime;
	}

	public void setLandDateTime(LocalDate landDateTime) {
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

	public String getLaunchLatitude() {
		return launchLatitude;
	}



	public void setLaunchLatitude(String launchLatitude) {
		this.launchLatitude = launchLatitude;
	}



	public String getLaunchLongitude() {
		return launchLongitude;
	}



	public void setLaunchLongitude(String launchLongitude) {
		this.launchLongitude = launchLongitude;
	}



	public String getLandLatitude() {
		return landLatitude;
	}



	public void setLandLatitude(String landLatitude) {
		this.landLatitude = landLatitude;
	}



	public String getLandLongitude() {
		return landLongitude;
	}



	public void setLandLongitude(String landLongitude) {
		this.landLongitude = landLongitude;
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

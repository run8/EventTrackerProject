window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();
	
});

function init() {
	loadFlights();

	document.newFlightForm.addFlightButton.addEventListener('click', function(e) {
		e.preventDefault();
		let nff = document.newFlightForm;
		let newFlight = {
			launchSiteName: nff.launchName.value,
			landSiteName: nff.landingName.value,
			launchLatitude: nff.launchLatitude.value,
			launchLongitude: nff.launchLongitude.value,
			landLatitude: nff.landLatitude.value,
			landLongitude: nff.landLatitude.value,
			comment: nff.commentInput.value
		};
		console.log("Launch Site Name: " + launchSiteName);
		addFlight(newFlight);
	});

};

function loadFlights() {
	console.log("///////////////Inside loadFlights");
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/flights');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let flights = JSON.parse(xhr.responseText);  // The sresponse comes back and is biult into a JS object
				//displayFlight(flights[0]);
				displayFlights(flights);
			} else {
				console.log('Response failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
};

function displayFlights(flights) {
	let div = document.getElementById("flightsListDiv"); // provide id
	let table = document.getElementById("flightsListTable");
	for (const flight of flights) {
		let h1 = document.createElement('h1');
		h1.textContent = 'Flight ' + flight.id;
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		table.appendChild(h1);
		td.textContent = flight.launchSiteName;
		tr.appendChild(td);
		table.appendChild(tr);
	}
}
function addFlight(flight) {
	console.log("............." + flight);

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/flight');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let newFlight = JSON.parse(xhr.responseText);
				console.log(newFlight);
				displayFlights(newFilm);
			}
			else {
				displayError('Error creating flight: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let flightJson = JSON.stringify(flight);
	xhr.send(flightJson);
}


window.addEventListener('load', function(e) {
	init();

});

function init() {
	loadFlights();

	document.newFlightForm.addFlightButton.addEventListener('click', function(e) {
		e.preventDefault();
		var nff = document.newFlightForm;
		let newFlight = {
			launchSiteName: nff.launchName.value,
			landSiteName: nff.landingName.value,
			launchLatitude: nff.launchLatitude.value,
			launchLongitude: nff.launchLongitude.value,
			landLatitude: nff.landLatitude.value,
			landLongitude: nff.landLongitude.value,
			comment: nff.commentInput.value
		};
		//console.log("Launch Site Name: " + launchName.value);
		createFlight(newFlight);
	});

	/*document.flightsListTable.editFlightButton.addEventListener('click', function(e){
		e.preventDefault();
		let fm = document.flightsListDiv.flightsListTable;
		let newFilm = {
			title: fm.title.value,
			description: fm.description.value,
			releaseYear: fm.releaseYear.value,
			rating: fm.rating.value
		};
		newFilm.length = fm.length.value;
		createFilm(newFilm);
	}); */

};

function loadFlights() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/flights');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let flights = JSON.parse(xhr.responseText);  // The sresponse comes back and is biult into a JS object
				displayFlights(flights);
			} else {
				console.log('Response failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
};

function deleteFlight(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/flights/${id}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				//		let flights = JSON.parse(xhr.responseText);  // The sresponse comes back and is biult into a JS object
				//		console.log('flight***********' + flights);
				loadFlights();
				location.reload();
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
		displayFlight(flight);
	}
}

function displayFlight(flight) {
	let table = document.getElementById("flightsListTable");

	let h3 = document.createElement('h3');
	h3.textContent = 'Flight ' + flight.id;
	table.appendChild(h3);

	let tr = document.createElement('tr');
	let td = document.createElement('td');
	td.textContent = 'Launch Site: ' + flight.launchSiteName;
	tr.appendChild(td);
	table.appendChild(tr);

	let tr1 = document.createElement('tr');
	let td1 = document.createElement('td');
	td1.textContent = 'Launch Date: ' + flight.launchDateTime;
	tr1.appendChild(td1);
	table.appendChild(tr1);

	let tr2 = document.createElement('tr');
	let td2 = document.createElement('td');
	td2.textContent = 'Comments: ' + flight.comment;
	tr2.appendChild(td2);
	table.appendChild(tr2);

	let btn = document.createElement('button');
	btn.name = 'viewFlightDetails';
	btn.textContent = 'View Flight Details';
	//	btn.value = flight.id;
	btn.addEventListener('click', function(e) {
		e.preventDefault();

		loadFlightDetails(flight.id);
	});
	table.appendChild(btn);

	let btn1 = document.createElement('button');
	btn1.name = 'deleteFlight';
	btn1.textContent = 'Delete Flight';
	//btn1.value = flight.id;
	btn1.addEventListener('click', function(e) {
		e.preventDefault();
		deleteFlight(flight.id);
	});
	table.appendChild(btn1);
}

function loadFlightDetails(id){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/flight/${id}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
						let flight = JSON.parse(xhr.responseText);  // The sresponse comes back and is biult into a JS object
				//		console.log('flight***********' + flights);
				displayFlightDetails(flight);
			} else {
				console.log('Response failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
};

function displayFlightDetails(flight){
	let div = document.getElementById(detailView);
	// if (div.firstElementChild !== null){
	// 	div.firstElementChild.remove();
	// }
	let fm = document.createElement("form");
	
	// Flight id
	let input = document.createElement('input');
	input.type = 'hidden';
	input.id = 'id';
	input.value = flight.id;
	fm.appendChild(input);
	
	// Launch Site name
	let label = document.createElement('label');
	label.for = 'launchSiteName';
	label.textContent = 'Launch Site Name';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'launchSiteName';
	input.id = 'launchSiteName';
	input.value = flight.launchSiteName
	fm.appendChild(input);
	let br = document.createElement('br');
	fm.appendChild(br);
	
	// Landing site name
	label = document.createElement('label');
	label.for = 'landingSiteName';
	label.textContent = 'Landing Site Name';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'landingSiteName';
	input.id = 'landingSiteName';
	input.value = flight.landSiteName;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Launch latitude
	label = document.createElement('label');
	label.for = 'launchLatitude';
	label.textContent = 'Launch latitude';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'launchLatitude';
	input.id = 'launchLatitude';
	input.value = flight.launchLatitude;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Launch longitiude
	label = document.createElement('label');
	label.for = 'launchLongitude';
	label.textContent = 'Launch longitiude';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'launchLongitude';
	input.id = 'launchLongitude';
	input.value = flight.launchLongitude;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Landing latitude
	label = document.createElement('label');
	label.for = 'landLatitude';
	label.textContent = 'Landing Latitude';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'landLatitude';
	input.id = 'landLatitude';
	input.value = flight.landLatitude;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Landing longitude
	label = document.createElement('label');
	label.for = 'landLongitude';
	label.textContent = 'Landing Longitude';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'landLongitude';
	input.id = 'landLongitude';
	input.value = flight.landLongitude;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Launch date time
	label = document.createElement('label');
	label.for = 'launchDateTime';
	label.textContent = 'Launch Date Time';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'launchDateTime';
	input.id = 'launchDateTime';
	input.value = flight.launchDateTime;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Land date time
	label = document.createElement('label');
	label.for = 'landDateTime';
	label.textContent = 'Land Date Time';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'landDateTime';
	input.id = 'landDateTime';
	input.value = flight.launchDateTime;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	// Comment
	label = document.createElement('label');
	label.for = 'comment';
	label.textContent = 'Comment';
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'comment';
	input.id = 'comment';
	input.value = flight.comment;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);


}


function createFlight(flight) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/flight');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let newFlight = JSON.parse(xhr.responseText);
				console.log(newFlight);
				displayFlight(newFlight);
				document.newFlightForm.reset();

			}
			else {
				displayError('Error creating flight: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let flightJson = JSON.stringify(flight);
	console.log(flightJson);
	xhr.send(flightJson);
}

function displayError(msg) {
	var dataDiv = document.getElementById('flightsListDiv');
	dataDiv.textContent = msg;
}

document.getElementById('fetchDataBtn').addEventListener('click', openDialog);
document.getElementById('selectAgencyBtn').addEventListener('click', selectAgency);
document.getElementById('closeDialog').addEventListener('click', closeDialog);
document.getElementById('submitSaveBtn').addEventListener('click', submitSave);
document.getElementById('exitBtn').addEventListener('click', exit);

function openDialog() {
    document.getElementById('agencyDialog').style.display = 'block';
}

function closeDialog() {
    document.getElementById('agencyDialog').style.display = 'none';
}

function selectAgency() {
    const agency = document.getElementById('agencySelect').value;
    document.getElementById('agency').textContent = agency;
    fetchData(agency);
    closeDialog();
}

function fetchData(agency) {
    // Simulate fetching data from the server
    const bookingData = generateBookingData();
    const applicationData = generateApplicationData(agency);
    displayBookingData(bookingData);
    displayApplicationData(applicationData);
}

function generateBookingData() {
    // Example data, replace with actual API call if needed
    return [
        { id: 1, slot: '9:00 AM - 10:00 AM', available: true },
        { id: 2, slot: '10:00 AM - 11:00 AM', available: false },
        { id: 3, slot: '11:00 AM - 12:00 PM', available: true },
        { id: 4, slot: '1:00 PM - 2:00 PM', available: false },
        { id: 5, slot: '2:00 PM - 3:00 PM', available: true },
    ];
}

function generateApplicationData(agency) {
    // Example data based on selected agency, replace with actual API call if needed
    const data = {
        'XYZ Corp': [
            { aadharId: '1234-5678-9012', workerName: 'John Doe', skill: 'Electrician', gdr: 'Male', prevExpiryDate: '2023-12-31' },
            { aadharId: '2345-6789-0123', workerName: 'Jane Smith', skill: 'Welder', gdr: 'Female', prevExpiryDate: '2024-06-15' }
        ],
        'ABC Ltd': [
            { aadharId: '3456-7890-1234', workerName: 'Mike Johnson', skill: 'Rigger', gdr: 'Male', prevExpiryDate: '2024-09-20' },
            { aadharId: '4567-8901-2345', workerName: 'Emily Davis', skill: 'Painter', gdr: 'Female', prevExpiryDate: '2024-03-11' }
        ],
        '123 Inc': [
            { aadharId: '5678-9012-3456', workerName: 'Chris Lee', skill: 'Carpenter', gdr: 'Male', prevExpiryDate: '2024-11-01' },
            { aadharId: '6789-0123-4567', workerName: 'Anna Brown', skill: 'Plumber', gdr: 'Female', prevExpiryDate: '2024-02-28' }
        ]
    };

    return data[agency] || [];
}

function displayBookingData(data) {
    const bookingDataDiv = document.getElementById('bookingData').getElementsByTagName('tbody')[0];
    bookingDataDiv.innerHTML = ''; // Clear previous data

    data.forEach(item => {
        const row = document.createElement('tr');
        
        const timeCell = document.createElement('td');
        timeCell.textContent = item.slot;
        row.appendChild(timeCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = item.available ? 'Available' : 'Booked';
        statusCell.style.color = item.available ? 'green' : 'red';
        row.appendChild(statusCell);

        const selectCell = document.createElement('td');
        if (item.available) {
            const selectButton = document.createElement('button');
            selectButton.textContent = 'Select';
            selectButton.addEventListener('click', () => allocateSlot(item.slot));
            selectCell.appendChild(selectButton);
        }
        row.appendChild(selectCell);

        bookingDataDiv.appendChild(row);
    });
}

function displayApplicationData(data) {
    const applicationDataDiv = document.getElementById('applicationData').getElementsByTagName('tbody')[0];
    applicationDataDiv.innerHTML = ''; // Clear previous data

    data.forEach(item => {
        const row = document.createElement('tr');
        
        const aadharIdCell = document.createElement('td');
        aadharIdCell.textContent = item.aadharId;
        row.appendChild(aadharIdCell);

        const workerNameCell = document.createElement('td');
        workerNameCell.textContent = item.workerName;
        row.appendChild(workerNameCell);

        const skillCell = document.createElement('td');
        skillCell.textContent = item.skill;
        row.appendChild(skillCell);

        const gdrCell = document.createElement('td');
        gdrCell.textContent = item.gdr;
        row.appendChild(gdrCell);

        const prevExpiryDateCell = document.createElement('td');
        prevExpiryDateCell.textContent = item.prevExpiryDate;
        row.appendChild(prevExpiryDateCell);

        applicationDataDiv.appendChild(row);
    });
}

function allocateSlot(slot) {
    alert(`Slot ${slot} has been allocated.`);
    // Implement the slot allocation functionality here
}

function submitSave() {
    // Implement the submit/save functionality
    alert('Submit/Save button clicked!');
}

function exit() {
    // Implement the exit functionality
    alert('Exit button clicked!');
}

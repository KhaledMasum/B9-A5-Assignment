function getCurrentSeat(elementId) {
    const currentSeatId = document.getElementById(elementId);
    const currentSeatText = currentSeatId.innerText;
    const currentSeat = parseInt(currentSeatText);
    const availableSeat = currentSeat - 1;
    currentSeatId.innerText = availableSeat;
}

function increaseCurrentSeat(elementId) {
    const currentSeatId = document.getElementById(elementId);
    const currentSeatText = currentSeatId.innerText;
    const currentSeat = parseInt(currentSeatText);
    const availableSeat = currentSeat + 1;
    currentSeatId.innerText = availableSeat;
}


function selectSeat(event) {
    // console.log(event.target.id);
    const seatElement = event.target;

    if (seatElement.classList.contains('bg-green-400')) {
        seatElement.classList.remove('bg-green-400');
    } else {
        seatElement.classList.add('bg-green-400');
    }

    getCurrentSeat('current-seat');
    increaseCurrentSeat('selected-seat');




    const tableContent = document.getElementById('table-content');

    for (let i = 0; i < 2; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tableContent.appendChild(row);
    }
}




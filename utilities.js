function decreaseRemainingSeat(elementId) {
    const currentSeatId = document.getElementById(elementId);
    const currentSeatText = currentSeatId.innerText;
    const currentSeat = parseInt(currentSeatText);
    const availableSeat = currentSeat - 1;
    currentSeatId.innerText = availableSeat;
}

function increaseRemainingSeat(elementId) {
    const currentSeatId = document.getElementById(elementId);
    const currentSeatText = currentSeatId.innerText;
    const currentSeat = parseInt(currentSeatText);
    const availableSeat = currentSeat + 1;
    currentSeatId.innerText = availableSeat;
}

function increaseCurrentSeat(elementId) {
    const currentSeatId = document.getElementById(elementId);
    const currentSeatText = currentSeatId.innerText;
    const currentSeat = parseInt(currentSeatText);
    const availableSeat = currentSeat + 1;
    currentSeatId.innerText = availableSeat;
}

function decreaseCurrentSeat(elementId) {
    const currentSeatId = document.getElementById(elementId);
    const currentSeatText = currentSeatId.innerText;
    const currentSeat = parseInt(currentSeatText);
    const availableSeat = currentSeat - 1;
    currentSeatId.innerText = availableSeat;
}

function getSeatNumber(event) {
    const seatNo = event.target.id;
    const getSeatNo = document.getElementById('seat-no');
    let getSeatNoText = getSeatNo.innerText;
    getSeatNoText = seatNo;
    return getSeatNoText;
}

function appendNewRow(elementId) {
    const tableContent = document.getElementById(elementId);
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td class="font-semibold text-slate-500 uppercase" id="seat-no"></td>
        <td class="font-semibold text-slate-500">Economy</td>
        <td class="font-semibold text-slate-500"><span id="ticket-price">550</span></td>
    `
    tableContent.appendChild(tableRow);

    const seatNoCell = tableRow.querySelector('#seat-no');
    const newSeatNumber = getSeatNumber(event);
    seatNoCell.innerText = newSeatNumber;
}

function selectSeat(event) {
    const seatElement = event.target;

    if (seatElement.classList.contains('bg-green-400')) {
        seatElement.classList.remove('bg-green-400');
        decreaseCurrentSeat('selected-seat');
        increaseRemainingSeat('current-seat');

    } else {
        seatElement.classList.add('bg-green-400');
        increaseCurrentSeat('selected-seat');
        decreaseRemainingSeat('current-seat');
        appendNewRow('table-content');
    }

    getSeatNumber(event);
    calculateTotalPrice();
    enableNextButton();
}

function calculateTotalPrice() {
    // Get current total
    let currentTotal = document.getElementById('current-total');
    let currentTotalText = currentTotal.innerText;
    let currentTotalNumber = parseInt(currentTotalText);

    // Get Grand total
    let grandTotal = document.getElementById('grand-total');
    let grandTotalText = grandTotal.innerText;
    let grandTotalNumber = parseInt(grandTotalText);

    // Get Ticket Price
    const ticketPrice = document.getElementById('ticket-price');
    let ticketPriceText = ticketPrice.innerText;
    let ticketPriceNumber = parseInt(ticketPriceText);

    // Update Total Price
    currentTotal.innerText = (currentTotalNumber + ticketPriceNumber).toString();

    // Update Total Price
    grandTotal.innerText = (grandTotalNumber + ticketPriceNumber).toString();
}

function enableNextButton() {
    // Get Button id
    let buttonId = document.getElementById('next-btn');

    // Get mobile number
    const mobileNumberText = document.getElementById('mobile-number').value;
    const mobileNumber = parseInt(mobileNumberText);



    const selectedSeat = document.getElementById('selected-seat');
    const selectedSeatText = selectedSeat.innerText;
    const selectedSeatNumber = parseInt(selectedSeatText);

    if (mobileNumber && selectedSeatNumber) {
        buttonId.disabled = false;
    } else {
        buttonId.disabled = true;
    }
}



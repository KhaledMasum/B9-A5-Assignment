function defaultSeat(elementId) {
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
    const selectedSeat = currentSeat + 1;
    if (currentSeat == 4) {
        document.removeEventListener('click', selectSeat);
    }
    currentSeatId.innerText = selectedSeat;
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
    const currentSeatId = document.getElementById('selected-seat').innerText;
    const currentSeat = parseInt(currentSeatId);

    if (currentSeat <= 3 && !seatElement.classList.contains('bg-green-400')) {
        seatElement.classList.add('bg-green-400', 'text-white');
        defaultSeat('default-seat');
        increaseCurrentSeat('selected-seat');
        appendNewRow('table-content');
        getSeatNumber(event);
        calculateTotalPrice();
        enableNextButton();
        activeCoupon('selected-seat');
    } else if (currentSeat >= 3) {
        alert("You can't select more that 4 tickets at a time");
    }
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

function activeCoupon(elementId) {
    const currentSeatId = document.getElementById(elementId).innerText;
    const currentSeat = parseInt(currentSeatId);

    if (currentSeat == 4) {
        document.getElementById('apply-for-coupon').disabled = false;
        document.getElementById('coupon-input').disabled = false;
    }
}

function createDiscountPriceRow() {
    const tableFooter = document.getElementById('table-footer');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
                <td colspan="2" class="font-semibold font-inter text-black">Discount Price</td>
                <td class="font-semibold font-inter text-black">BDT <span id="discount-price">0</span></td>
            `
    tableFooter.appendChild(tableRow);
}

function applyCoupon() {
    const new15Coupon = document.getElementById('new15-coupon').innerText;
    const couple20Coupon = document.getElementById('couple20-coupon').innerText;
    let userTypedCouponCode = document.getElementById('coupon-input').value;

    if (new15Coupon === userTypedCouponCode || couple20Coupon === userTypedCouponCode) {
        let currentTotal = document.getElementById('current-total');
        let currentTotalText = currentTotal.innerText;
        let currentTotalNumber = parseInt(currentTotalText);

        let grandTotal = document.getElementById('grand-total');
        let grandTotalText = grandTotal.innerText;
        let grandTotalNumber = parseInt(grandTotalText);

        if (new15Coupon === userTypedCouponCode) {
            const discountPrice = (currentTotalNumber / 100) * 15;
            const reducedGrandTotal = grandTotalNumber - discountPrice;
            grandTotal.innerText = reducedGrandTotal;

            createDiscountPriceRow();

            const discountPriceId = document.getElementById('discount-price');
            discountPriceId.innerText = discountPrice;

            const couponContainer = document.getElementById('coupon-container');
            couponContainer.classList.add('hidden');
        } else if (couple20Coupon === userTypedCouponCode) {
            const discountPrice = (currentTotalNumber / 100) * 20;
            const reducedGrandTotal = grandTotalNumber - discountPrice;
            grandTotal.innerText = reducedGrandTotal;

            createDiscountPriceRow();

            const discountPriceId = document.getElementById('discount-price');
            discountPriceId.innerText = discountPrice;

            const couponContainer = document.getElementById('coupon-container');
            couponContainer.classList.add('hidden');
        }
    } else {
        alert('Invalid Coupon');
        document.getElementById('coupon-input').value = '';
    }
}





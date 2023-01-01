let homeNum = 12
let guestNum = 5

home.textContent = homeNum;
guest.textContent = guestNum;

function addToHome(amt) {
    homeNum += amt;
    home.textContent = homeNum;
}
function addToGuest(amt) {
    guestNum += amt
    guest.textContent = guestNum;
}

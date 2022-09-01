const playerCost = document.getElementById('player-cost');
const calculateBtn = document.getElementById('calculate-btn');
const playerExpenses = document.getElementById('player-expenses');
const playerList = document.getElementById('player-list').getElementsByTagName('li');
const managerCost = document.getElementById('manager-cost');
const coachCost = document.getElementById('coach-cost');
const totalCost = document.getElementById('total-cost');

playerCost.addEventListener('keyup', function (event) {
    const playerCostField = event.target.value;
    console.log(playerCostField);
    playerCost.setAttribute("value", playerCostField);
})

managerCost.addEventListener('keyup', function (event) {
    const managerCostField = event.target.value;
    console.log(managerCostField);
    managerCost.setAttribute("value", managerCostField);
})

coachCost.addEventListener('keyup', function (event) {
    const coachCostField = event.target.value;
    console.log(coachCostField);
    coachCost.setAttribute("value", coachCostField);
})

const getTotalPlayerPrice = () => {
    const totalPrice = playerList.length * parseInt(playerCost.value);
    return totalPrice;
}

calculateBtn.addEventListener('click', function () {
    playerExpenses.innerText = getTotalPlayerPrice();
})

document.getElementById('total-btn').addEventListener('click', function () {
    totalCost.innerText = parseInt(managerCost.value) + parseInt(coachCost.value) + getTotalPlayerPrice();
})

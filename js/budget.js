const playerCost = document.getElementById('player-cost');
const calculateBtn = document.getElementById('calculate-btn');
const playerExpenses = document.getElementById('player-expenses');
const playerList = document.getElementById('player-list').getElementsByTagName('li');
const managerCost = document.getElementById('manager-cost');
const coachCost = document.getElementById('coach-cost');
const totalCost = document.getElementById('total-cost');

const managerCostField = parseInt(managerCost.value);
const coachCostField = parseInt(coachCost.value);

playerCost.addEventListener('keyup', function (event) {
    const playerCostField = parseInt(event.target.value);
    calculateBtn.addEventListener('click', function () {
        const totalPlayerExpenses = playerCostField * playerList.length;
        playerExpenses.innerText = totalPlayerExpenses;
        event.stopPropagation;
        document.getElementById('total-btn').addEventListener('click', function () {
            const inTotal = totalPlayerExpenses + managerCostField + coachCostField;
            totalCost.innerText = inTotal;
        })
    })
})
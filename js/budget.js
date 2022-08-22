const playerCost = document.getElementById('player-cost');
const calculateBtn = document.getElementById('calculate-btn');
const playerExpenses = document.getElementById('player-expenses');
const playerLists = document.getElementById('player-list').getElementsByTagName('li');

playerCost.addEventListener('keyup', function (event) {
    const playerCostField = event.target.value;
    calculateBtn.addEventListener('click', function () {
        playerExpenses.innerText = playerCostField * playerLists.length;
    })
})


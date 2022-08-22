function playerSelection(playerSelectionBtn) {
    const selectedPlayer = document.getElementById(playerSelectionBtn);
    return selectedPlayer;
}

function playerName(playerId) {
    const player = document.getElementById(playerId).innerText;
    return player;
}

function playerSelectionProcess(selectedPlayer, selectedPlayerName) {
    selectedPlayer.addEventListener('click', function () {
        const createPlayer = document.createElement("li");
        const createPlayerName = document.createTextNode(selectedPlayerName);
        createPlayer.appendChild(createPlayerName);
        console.log(playerList.length);
        //playerList.length will count from 0 (0 to 4) as there is no list by default so I compare using number 4 (instead of 5) for not adding more than 5 players.
        if(playerList.length > 4){
            alert('Can not add more than 5 players');
            return;
        }
        selectedPlayer.setAttribute('disabled', true);
        document.getElementById('player-list').appendChild(createPlayer);
    })
}

playerSelectionProcess(playerSelection('neymar-select-btn'), playerName('neymar'));
playerSelectionProcess(playerSelection('messi-select-btn'), playerName('messi'));
playerSelectionProcess(playerSelection('kylian-select-btn'), playerName('kylian'));
playerSelectionProcess(playerSelection('renato-select-btn'), playerName('renato'));
playerSelectionProcess(playerSelection('sergio-select-btn'), playerName('sergio'));
playerSelectionProcess(playerSelection('vitor-select-btn'), playerName('vitor'));
playerSelectionProcess(playerSelection('salah-select-btn'), playerName('salah'));
playerSelectionProcess(playerSelection('ronaldo-select-btn'), playerName('ronaldo'));
playerSelectionProcess(playerSelection('pogba-select-btn'), playerName('pogba'));
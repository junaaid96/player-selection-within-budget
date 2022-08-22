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
        selectedPlayer.setAttribute('disabled', true);
        const createPlayer = document.createElement("li");
        const createPlayerName = document.createTextNode(selectedPlayerName);
        createPlayer.appendChild(createPlayerName);
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
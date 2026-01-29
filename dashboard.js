var forwardsPlayerData = [];
var midfieldersPlayerData = [];
var defendersPlayerData = [];
var goalkeepersPlayerData = [];

fetch('./playerList.json')
.then((response) => response.json())
.then((data) => {
    data.players.forEach((player) => {
        switch(player.position) {
            case 'Forward':
                forwardsPlayerData.push(player);
            case 'Midfielder':
                midfieldersPlayerData.push(player);
            case 'Defender':
                defendersPlayerData.push(player);
            case 'Goalkeeper':
                goalkeepersPlayerData.push(player);

    }});  
})
.then(() => {
        getForwardsData();
        getMidfieldersData();
        getDefendersData();
        getGoalkeepersData();
});

let getForwardsData = () => {
    forwardsPlayerData.forEach((player) => {
        let playerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'player-card');
        playerDiv.innerHTML = `
            <h3>${player.fullName}</h3>
            <p>Date of Birth: ${player.dateOfBirth}</p>
            <p>Position: ${player.position}</p>
            <p>Nationality: ${player.nationality}</p>
        `;
        document.querySelector('.player-information.forwards').appendChild(playerDiv);
    });
}

let getMidfieldersData = () => {
    midfieldersPlayerData.forEach((player) => {
        let playerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'player-card');
        playerDiv.innerHTML = `
            <h3>${player.fullName}</h3>
            <p>Date of Birth: ${player.dateOfBirth}</p>
            <p>Position: ${player.position}</p>
            <p>Nationality: ${player.nationality}</p>
        `;
        document.querySelector('.player-information.midfielders').appendChild(playerDiv);
    });
}

let getDefendersData = () => {
    defendersPlayerData.forEach((player) => {
        let playerDiv = document.createElement('div');
        playerDiv.setAttribute('class', 'player-card');
        playerDiv.innerHTML = `
            <h3>${player.fullName}</h3>
            <p>Date of Birth: ${player.dateOfBirth}</p>
            <p>Position: ${player.position}</p>
            <p>Nationality: ${player.nationality}</p>
        `;
        document.querySelector('.player-information.defenders').appendChild(playerDiv);
    });
}

let getGoalkeepersData = () => {
    console.log(goalkeepersPlayerData);
}
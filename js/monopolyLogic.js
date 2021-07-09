var playerMoney = [1500, 1500, 1500, 1500];
var playerDebt = [0, 0, 0, 0];
var playerNumOfProperties = [0, 0, 0, 0];
var moneyPerRound = 200; var moneyPerRoundInDebt = 100;
var moneyToGetOutOfJail = 50;

function getOutOfJail(playerNum) {
    if (playerMoney[playerNum - 1] >= moneyToGetOutOfJail) {
        playerMoney[playerNum - 1] -= moneyToGetOutOfJail;
    }
    else {
        alert("Do not have sufficient funds! Consider taking out a loan.");
    }
    updateValues();
}

function completedRound(playerNum) {
    if (playerDebt[playerNum - 1] == 0) {
        playerMoney[playerNum - 1] += moneyPerRound;
    }
    else {
        playerMoney[playerNum - 1] += moneyPerRoundInDebt;
    }
    updateValues();
}

function getLoan(playerNum) {
    var loanValue = parseInt(getLoanValue(playerNum));
    var debtValue = loanValue * 1.1;
    if ((playerDebt[playerNum - 1] + debtValue) > 500) {
        alert("Taking this loan will exceed the max debt level of $500.");
    }
    else {
        playerMoney[playerNum - 1] += loanValue;
        playerDebt[playerNum - 1] += debtValue;
    }
    updateValues();
}

function getLoanValue(playerNum) {
    switch (playerNum) {
        case 1:
            return document.getElementById('player1LoanValue').value;
        case 2:
            return document.getElementById('player2LoanValue').value;
        case 3:
            return document.getElementById('player3LoanValue').value;
        case 4:
            return document.getElementById('player4LoanValue').value;
    }
}

function payOtherPlayer(playerNum, player2Num) {
    var moneyValue = parseInt(getPayOtherMoneyValue(playerNum));
    if (playerMoney[playerNum - 1] >= moneyValue) {
        playerMoney[playerNum - 1] -= moneyValue;
        playerMoney[player2Num - 1] += moneyValue;
    }
    else {
        alert("Do not have sufficient funds! Consider taking out a loan.");
    }
    updateValues();
}

function getPayOtherMoneyValue(playerNum) {
    switch(playerNum) {
        case 1:
            return document.getElementById("player1PayValue").value;
        case 2:
            return document.getElementById("player2PayValue").value;
        case 3:
            return document.getElementById("player3PayValue").value;
        case 4:
            return document.getElementById("player4PayValue").value;
    }
}

function buyAProperty(playerNum) {
    var propertyValue = parseInt(getPropertyValue(playerNum));
    if (playerMoney[playerNum - 1] >= propertyValue) {
        playerNumOfProperties[playerNum - 1] += 1;
        playerMoney[playerNum - 1] -= propertyValue;
    }
    else {
        alert("Do not have sufficient funds! Consider taking out a loan.");
    }
    updateValues();
}

function getPropertyValue(playerNum) {
    switch(playerNum) {
        case 1:
            return document.getElementById("player1PropertyValue").value;
        case 2:
            return document.getElementById("player2PropertyValue").value;
        case 3:
            return document.getElementById("player3PropertyValue").value;
        case 4:
            return document.getElementById("player4PropertyValue").value;
    }
}

function updateValues() {
    //updating the values
    document.getElementById('player1Money').innerHTML = "Player Money: $" + playerMoney[0];
    document.getElementById('player1Debt').innerHTML = "Player Debt: $" + playerDebt[0];
    document.getElementById('player1Properties').innerHTML = "Num of Properties: " + playerNumOfProperties[0];

    document.getElementById('player2Money').innerHTML = "Player Money: $" + playerMoney[1];
    document.getElementById('player2Debt').innerHTML = "Player Debt: $" + playerDebt[1];
    document.getElementById('player2Properties').innerHTML = "Num of Properties: " + playerNumOfProperties[1];

    document.getElementById('player3Money').innerHTML = "Player Money: $" + playerMoney[2];
    document.getElementById('player3Debt').innerHTML = "Player Debt: $" + playerDebt[2];
    document.getElementById('player3Properties').innerHTML = "Num of Properties: " + playerNumOfProperties[2];

    document.getElementById('player4Money').innerHTML = "Player Money: $" + playerMoney[3];
    document.getElementById('player4Debt').innerHTML = "Player Debt: $" + playerDebt[3];
    document.getElementById('player4Properties').innerHTML = "Num of Properties: " + playerNumOfProperties[3];

    //clearing values
    document.getElementById('player1LoanValue').value = "";
    document.getElementById('player1PayValue').value = "";
    document.getElementById('player1PropertyValue').value = "";

    document.getElementById('player2LoanValue').value = "";
    document.getElementById('player2PayValue').value = "";
    document.getElementById('player2PropertyValue').value = "";

    document.getElementById('player3LoanValue').value = "";
    document.getElementById('player3PayValue').value = "";
    document.getElementById('player3PropertyValue').value = "";

    document.getElementById('player4LoanValue').value = "";
    document.getElementById('player4PayValue').value = "";
    document.getElementById('player4PropertyValue').value = "";
}
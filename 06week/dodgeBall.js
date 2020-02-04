const arrOfPeople = [
    {
      id: 0,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 1,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 2,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 3,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 4,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 5,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 6,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  let peopleChoices = [];
  let listOfPlayers = [];
  const blueTeam = [];
  const redTeam = [];
  
  class Player {
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
    assignTeam(color) {
        color.push(this)
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player";
      button.classList.add('peopleButtons');
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    });
  }
  
  //button to make a player out of a person
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`);
    listOfPlayers.push(arrOfPeople[id]);
    const playerList = document.getElementById('players');

    const liPlayer = document.createElement("li");
    const redTeamButton = document.createElement("button");
    redTeamButton.classList.add('red-team');
    const blueTeamButton = document.createElement("button");
    blueTeamButton.classList.add('blue-team')
    redTeamButton.innerHTML = "Red Team";
    blueTeamButton.innerHTML = "Blue Team";
    liPlayer.append(redTeamButton);
    liPlayer.append(blueTeamButton);
    liPlayer.appendChild(document.createTextNode(arrOfPeople[id].name));
    playerList.append(liPlayer);

    const redButtonGroup = document.getElementsByClassName('red-team');
    const blueButtonGroup = document.getElementsByClassName('blue-team');

    for (let i=0; i < listOfPlayers.length; i++) {
      redButtonGroup[i].addEventListener('click', function() {
        console.log('I\'m a red Button that was clicked')
        const redTeamList = document.getElementById('red');
        const liPlayerTeam = document.createElement('li');
        // listOfPlayers.assignTeam(red);
        liPlayerTeam.innerText = listOfPlayers[i].name;
        liPlayerTeam.style.color = 'red';
        redTeamList.append(liPlayerTeam);
        redButtonGroup[i].disabled = true;
        blueButtonGroup[i].disabled = true;
      });
      blueButtonGroup[i].addEventListener('click', function() {
        console.log('I\'m a blue Button that was clicked')
        const redTeamList = document.getElementById('blue');
        const liPlayerTeam = document.createElement('li');
        // listOfPlayers.assignTeam(red);
        liPlayerTeam.innerText = listOfPlayers[i].name;
        liPlayerTeam.style.color = 'blue';
        redTeamList.append(liPlayerTeam);
        blueButtonGroup[i].disabled = true;
        redButtonGroup[i].disabled = true;
    });
  }
}
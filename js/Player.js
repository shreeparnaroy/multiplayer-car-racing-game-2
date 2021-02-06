class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
//to read the playerCount from databased
//=> asynch arrow function which binds to the whole program 
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//writing(update) the playerCount to database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//updating the name and distance of player

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//read the player.name and player.distance from databased
//allPlayers will hold infromation of all players
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}

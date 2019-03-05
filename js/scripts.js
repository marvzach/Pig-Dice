function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
Player.prototype.roll = function() {
  var rollValue = Math.floor(Math.random() * 6) ;
  if (rollValue === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore = this.turnScore + rollValue;
  };
  return rollValue;
}
Player.prototype.score = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
}
$(function() {
  var allPlayers = [];
  $("form#addPlayer").submit(function(event) {
    event.preventDefault();
    $(".dicegame").show();
    $(".hideform").hide();

    var player1Name = $("input#player1-name").val();
    var player2Name = $("input#player2-name").val();

    var player1 = new Player(player1Name, 0, 0)
    var player2 = new Player(player2Name, 0, 0)
    allPlayers.push(player1);
    allPlayers.push(player2);
    $(".player1-name").text(player1.playerName);
    $(".Player1Overal").html("<span class='Player1Overal'>" + player1.totalScore + "</span>");

    $("button#onedice-roll").click(function(event) {
      event.preventDefault();
      var player1RolledNumber = player1.roll();
      if (player1RolledNumber === 1) {
        $(".player1").hide();
        $(".player2").show();
        $(".messagePlayer1").show();
      }
      $(".oneDiceroll").text(player1RolledNumber);
      $(".oneCurrentscore").text(player1.turnScore);
      $(".messagePlayer2").hide();
    });

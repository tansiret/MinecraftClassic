function displayLevel() {
  var levelId = document.getElementById("levelId");
  document.getElementById("minecraft").src = "https://classic.minecraft.net/?join=" + levelId.value;
}
function getLevelId() {
  var levelUrl = document.getElementById("minecraft").src;
  var cutId = levelUrl.slice(36);
  document.getElementById("receivedLvlId").innerHTML = cutId;
}

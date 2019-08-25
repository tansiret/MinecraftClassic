function displayLevel() {
  var levelId = document.getElementById("levelId");
  document.getElementById("minecraft").src = "https://classic.minecraft.net/?join=" + levelId.value;
}

function theBeatlesPlay(musicians, instruments) {
  var artistInstrumentArray = []
  var i, artistInstrument
  for (i = 0; i < musicians.length; i++) {
    artistInstrument = musicians[i] + " plays " + instruments[i]
    artistInstrumentArray.push(artistInstrument)
  }
  return artistInstrumentArray
}

var count = 0
var exclaimedFact = ""
function johnLennonFacts(facts) {
  while (count < facts.length -1) {
    exclaimedFact = facts[count] + "!!!"
    count++
  }
  return facts
}
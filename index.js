function theBeatlesPlay(musicians, instruments) {
  var artistInstrumentArray = {}
  for (i = 0; i < musicians.length - 1; i++) {
    artistInstrument = musicians[i] + " plays" + instruments[i]
    artistInstrumentArray.push(artistInstrument)
  }
  return artistInstrumentArray
}

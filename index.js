shout(entry){
  return entry.toUpperCase()
}

whisper(entry){
  return entry.toLowerCase()
}

logShout(string){
  console.log(string.toUpperCase())
}

logWhisper(string){
  console.log(string.toLowerCase())
}

sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return `I can't hear you!`
  }
  if (string === string.toUpperCase()){
    return 'YES INDEED!'
  }
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}

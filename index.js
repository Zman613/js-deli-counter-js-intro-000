var x = 0
function takeANumber(line){
  line.push(++x)
  return (`Welcome, you are number ${x}.`)
}

function nowServing(line){
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    var hold = line[0]
    line.shift()
    return (`Currently serving ${hold}.`)
  }
}

function currentLine(line){
  var newLine = []
  var x = 1
  for (var i = 0; i < line.length; i++) {
    newLine.push(` ${x}. ${line[i]}`)
	  ++x
  }
  if (line.length === 0){
    return ("The line is currently empty.")
  } else {
    return (`The line is currently:${newLine}`)
  }
}

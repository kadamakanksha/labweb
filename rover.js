const rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [],
  };
  
  function turnLeft(rover) {
    switch (rover.direction) {
      case 'N':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
    }
  }
  
  function turnRight(rover) {
    switch (rover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'N';
        break;
    }
  }
  
  function moveForward(rover) {
    switch (rover.direction) {
      case 'N':
        rover.y -= 1;
        break;
      case 'E':
        rover.x += 1;
        break;
      case 'S':
        rover.y += 1;
        break;
      case 'W':
        rover.x -= 1;
        break;
    }
    rover.travelLog.push({ x: rover.x, y: rover.y });
  }
  
  function moveBackward(rover) {
    switch (rover.direction) {
      case 'N':
        rover.y += 1;
        break;
      case 'E':
        rover.x -= 1;
        break;
      case 'S':
        rover.y -= 1;
        break;
      case 'W':
        rover.x += 1;
        break;
    }
    rover.travelLog.push({ x: rover.x, y: rover.y });
  }
  
  function receiveCommands(rover, commands) {
    for (const command of commands) {
      switch (command) {
        case 'f':
          moveForward(rover);
          break;
        case 'b':
          moveBackward(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
      }
    }
  }
  
  function printTravelLog(rover) {
    console.log('Travel Log:');
    for (const location of rover.travelLog) {
      console.log(`(${location.x}, ${location.y})`);
    }
  }
  
 
  receiveCommands(rover, 'rffrfflfrff');
  printTravelLog(rover);
  
 
  
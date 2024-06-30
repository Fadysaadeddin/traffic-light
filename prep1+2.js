

// that is the answer of prep js trafficlight 1 



const trafficLight = {
    state: "green",
  };
  for ( let rotations = 0 ; rotations < 6 ; rotations++){
  
    const currentState = trafficLight.state;
    console.log(`the traffic light is on ${currentState}`);
  switch(currentState)
  {
  case 'green':
    trafficLight.state = "orange";
break; 
case 'orange':
    trafficLight.state = "red";
break; 
case 'red':
    trafficLight.state = "green";
break; 
default:
  }
     
  }
  


// that is the answer of prep js trafficlight 2


  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };
  
  
    for ( let cycle = 0 ; cycle < 6 ; cycle++) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log(`the traffic light is on ${currentState}`);
  switch(currentState){
    case 'green':
        trafficLight.stateIndex = 1;
        break;
        case 'orange':
            trafficLight.stateIndex = 2;
            break;
            case 'red':
                trafficLight.stateIndex = 0;
                break;
                default:
  }
  }
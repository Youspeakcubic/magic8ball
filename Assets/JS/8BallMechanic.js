let eightText = document.getElementById('EightballText');

let getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

let eightBallQ = () =>{
  switch (getRandomInt(7)) {
    case 1:
    console.log("1")
    eightText.innerHTML = "It will be so";
    break;
    case 2:
    console.log("2")
    eightText.innerHTML = "Possibly";
    break;
    case 3:
    console.log("3")
    eightText.innerHTML = "Maybe not";
    break;
    case 4:
    console.log("4")
    eightText.innerHTML = "No";
    break;
    case 5:
    console.log("5")
    eightText.innerHTML = "Yes";
    break;
    case 6:
    console.log("6")
    eightText.innerHTML = "Can Not say";
    break;
    case 7:
    console.log("7")
    eightText.innerHTML = "My vision is clouded";
    break;
  }
}

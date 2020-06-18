let partySize = prompt(`Hello there, how many people are in your party?`)
while (isNaN(partySize)){
  partySize = prompt(`I may be blind, but I can smell that that isn't a number`)
}
if (partySize <= 8) {
  let ofAge = prompt(`Yo, is everyone over 21 years of age?`).toLowerCase()
  while(ofAge !== 'yes' && ofAge!== 'no'){
    ofAge = prompt(`Taco is not yes or no, please enter yes or no`)
  }
  if (ofAge == 'no'){
    alert(`Sorry all must be over 21`)
  }else{
    let validId = prompt(`Do all yall have a valid Id?`).toLowerCase()
    while (validId !== 'yes' && validId !== 'no') {
      validId = prompt(`Monkey is not yes or no, please enter yes or no`)
    }
    if(validId !== 'no'){
      let wearingJeans = prompt(`Like I said, I am blind, are any of you wearing jeans.`).toLowerCase()
      while (wearingJeans !== 'yes' && wearingJeans !== 'no') {
        wearingJeans = prompt(`TacoMonkey is not yes or no, please enter yes or no`)
      }
      if (wearingJeans !== 'no'){
        alert(`Sorry no jeans allowed inside, come back with different pants or no jeans`)
      }else{
        alert(`Welcome inside, we have tacos and coookiesss`)
      }
    }else{
      alert(`All members must have a valid Id foo`)
    }
  }
}else{
  alert(`Sorry we are too busy to let all yall in.`)
}
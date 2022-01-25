// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." */

function tellFortune(numOfKids, partnerName, loc, jobTitle) {
  let resullt = numOfKids
  return 'You will be an ' + jobTitle + ' in ' + loc + ', and married to ' + partnerName + ' with ' + numOfKids + ' kids.'
}

tellFortune(3, "Brad Pitt", 'LA', 'actress');
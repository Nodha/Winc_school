
function supplyNeeds (age, amountPerDay){
    let maxAge = 90;
    let totalNeeds = (amountPerDay * 365) * (maxAge - age);
    let outcome = ' you will need ' + totalNeeds + ' rolls of toilet paper till your dead ' + maxAge;
    console.log(outcome);

}
supplyNeeds(5, 1)
supplyNeeds(40, 0.1)
supplyNeeds(33, 3)
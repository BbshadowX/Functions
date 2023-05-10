const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

function discount(name) {
  //create a function called discount
  const subtotal = name.pricePerRefill * name.refills;
  //create a variable that is the total of priceperrefill times refills
  const subdis = subtotal * 0.25;
  //create a variable for subscription discount that is subtotal time .25
  const subcoup = subtotal - subdis - 10;
  //create a veriable for subscription and discount that subtracts subdis from subtotal and then takes 10 from that total
  for (const key in name) {
    //create a for statment that goes over keys in name
    if (name.subscription == true && name.coupon == true) {
      // if both subscription and coupon are true return Your grand total is subcomp
      return `Your grand total is $${subcoup}`;
    } else if (name.subscription == true) {
      // if just subscription is true return subtotal minus subdis
      return `Your grand total is $${subtotal - subdis}`;
    } else name.coupon == true;
    // else if coupon is true return subtotal minus 10
    return `Your grand total is $${subtotal - 10}`;
  }
}
console.log(discount(timmy));
console.log(discount(sarah));
console.log(discount(rocky));

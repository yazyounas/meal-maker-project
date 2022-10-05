//Meal maker Project

const menu = {
    _meal : '',
    _price : 0,
    //setter method that check if the data enter is string
    set meal (mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck
      }
    },
    //setter method check if the data enter is integer
    set price (priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck
      }
    },
    //getter method that check if the data enter is valid
    get todaysSpecial() {
      if (this._meal && this._price) {
        return  `Todays Special is ${this._meal} for ${this._price}!`
      } else {
        return 'Meal or price was not set Correctly!'
      }
    }
  }
  //reassign value as we could because of setter method
  menu.meal = 'pizza';
  menu.price = 12;
  console.log(menu);
  //vaidation of the code
  console.log(menu.todaysSpecial);
/*Create a class Fridge, which inherits from Machine. Fridge has private property food and public methods addFood(..)
 and getFood(..). - private property food is an array of food items. - method addFood(item) adds to food array new food item,
  you may call it with several arguments: addFood(item1, item2, …) for adding several food items at once. - if the fridge is off,
   it is impossible to add food items (error) - max quantity of food items is limited and equals to power / 100 - (where power is the power of our fridge (from constructor)).
    tries to add more food items cause errors. - public method getFood() returns food array from the fridge. work with this array shouldn’t affect the property of the class.
*/

function Machine(power) {
  this._power = power;
  this._enabled = false;
  let self = this;
  this.enable = function() { self._enabled = true; };
  this.disable = function() { self._enabled = false; }; 
} 

function Fridge(power){
	Machine.apply(this, arguments);
  let quantity =0
	let food = [];

  let maxQuantity = power/100;

  this.getFood = function(){
    return food;///
  }

  this.getQuantity = function(){
    return quantity;
  }

	this.addFood = function(arrFood){
    if (!this._enabled) {
      alert('Fridge is not enabled');
      return;
    }
 //   console.log(arrFood);
    arrFood.forEach( function(element, index) {
       quantity++;
       if (quantity > maxQuantity) {
       alert('Too much food. Closed.');
       quantity--;
       }
       else{
         food.push(element);
       }
       return;
        
    });
  };

	
}
let fridge = new Fridge(200);   

fridge.enable();
fridge.addFood(['apple','milk']);
fridge.addFood(['melon']);
console.log(fridge.getFood());
console.log("Amount of food in the fridge:",fridge.getQuantity());
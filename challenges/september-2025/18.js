//Fill The Tank

/* Given the size of a fuel tank, 
the current fuel level, 
and the price per gallon, 
return the cost to fill the tank all the way.*/

export function costToFill(tankSize, fuelLevel, pricePerGallon) {
  return "$" + ((tankSize - fuelLevel) * pricePerGallon).toFixed(2);
}

export default costToFill;

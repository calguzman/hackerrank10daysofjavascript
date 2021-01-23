/**
 * Objective

In this challenge, we practice using JavaScript classes. Check the attached tutorial for more details.

Task

Create a Polygon class that has the following properties:

A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.

Note: The perimeter method must be lowercase and spelled correctly.
 */


class Polygon {
  constructor(sides) {
    this.sides = sides; 
  }
  perimeter(){
    let perimeter = 0;
    for(let i=0; i<this.sides.length; i++){
      perimeter+=this.sides[i];
    }
    return perimeter;
  }  
}

let triangle = new Polygon([3,4,5]);
console.log(triangle.perimeter());
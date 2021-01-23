function rectangle(a, b){
  let rectangle = {
    length:a,
    width:b,
    perimeter:2*(a+b),
    area: a*b
  }
  return rectangle;
}

// Input Test (4,5 )
console.log(rectangle(4,5));

// Return: 

// { length: 4, width: 5, perimeter: 18, area: 20 }
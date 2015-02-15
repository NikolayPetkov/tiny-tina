

var cars = [
  {
    brand:"Honda",
    model:"Accord 2.0 i-VTEC",
    fuel:"gas",
    year:"2013",
    doors:"4/5",
    price:"39 990 BGN"
  },
  {
    brand:"Mazda",
    model:"6",
    fuel:"diesel",
    year:"2011",
    doors:"4/5",
    price:"15 900 BGN"

  },
  {
    brand:"Nissan",
    model:"GTR 3.8 V6 Black",
    fuel:"gas",
    year:"2013",
    doors:"2/3",
    price:"152 000 BGN"
  },
  {
    brand:"Toyota",
    model:"Corolla",
    fuel:"diesel",
    year:"2015",
    doors:"2015",
    price:"34 230 BGN"

  }
];

var resultSet = [];



var submitForm = function(event){ 
  event.preventDefault(); 

  var mySelect=document.getElementById("brand");
  resultSet = findByBrand(mySelect.value);
  displayResults();
  console.log(results);
};


var findByBrand = function(brandName){
 var results = []; 
  for(var i = 0; i < cars.length; i++){
    if(brandName === cars[i].brand){   
     results.push(cars[i]);
    }
  }
  return results;
};




var findByMultipleParams = function(){


};





var addCar = function(){  
  var form = document.getElementById('form'); 
  var newCar = {};
  for(var i = 0; i < (form.length - 2); i++){

    newCar[form[i].name] = form[i].value;
  }
    cars.push(newCar);
    resultSet = cars;
    displayResults();
};

var displayResults = function(){
  var container = document.getElementById("results");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for(var i = 0; i < resultSet.length; i++) {
   var row = document.createElement("div");
   for (key in resultSet[i]){  
    var column = document.createElement("p");
    column.innerHTML = key + ": " + resultSet[i][key];
    row.appendChild(column);
   }
   container.appendChild(row);
   var hr = document.createElement("hr");
   container.appendChild(hr);
  }
};

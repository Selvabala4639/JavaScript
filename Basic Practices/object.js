var Car ={
    car_brand:"Tesla",
    car_model: "Model 3",
    price : 20000,

    displayCarBrand : function()
    {

        document.write(this.car_brand+"<br>");
    }
}

 Car.displayCarBrand();


 function Cars(brand, model, price)
 {  
    this.car_brand  = brand;
    this.car_model = model;
    this.price= price;
    
    this.displayCarBrand = function()
    {
        document.write(this.car_brand);
    }
 }
 Cars.Fueltype = "Electric";
 var car1 = new Cars("BMW","Model 2", 30000);
 document.write("Diplaying car brand using constructor : ")
 car1.displayCarBrand();
document.write("<br>Brand name of object 2 : ")
 var car2  = new Cars("Maruthi","Swift",1000);
 car2.displayCarBrand();

document.write("<br>"+car1.Fueltype);
 car2.Fueltype="Diesel"
  
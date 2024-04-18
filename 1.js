
    const cars = new Array("Saab", "Volvo", "BMW","lambo");
    cars.push("MG");
    cars.pop("MG");
    console.log(cars);
    document.write(cars[3]);
    window.alert(cars[3]);
    s=cars.length;
    window.alert(s);
    for(i=0;i<=s;i+=2){
       document.write("<p style = 'color:#999' >" + cars[i] + "</p><br>");
    };

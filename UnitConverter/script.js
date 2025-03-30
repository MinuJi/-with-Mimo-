function change() {
    let input = 1000;
    let unit = "km";
    let convert;
  
    if (unit === "cm") {
      convert = input;
    } else if (unit === "m") {
      convert = input / 100;
    } else if (unit === "km") {
      convert = input / 1000;
    } else {
      convert = "It's wrong unit";
    }
    
    document.getElementById("result").innerText = "Conversion Results:" + " "+ convert + " " + unit;
  
    console.log("Conversion Results", convert, unit);
    }
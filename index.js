// code your solution here
const record = [
    { year: "2014", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2013", result: "L"},
    //...
  ]


  function superBowlWin(record){    
    for(const u of record){
      const eachU = Object.values(u)
      console.log(eachU)
      let found = eachU.find(res=>eachU[1]==="W")
      if(found = eachU.find(res=>eachU[1]==="W")){
        return found
      }
      
    }
  }


console.log(superBowlWin(record))
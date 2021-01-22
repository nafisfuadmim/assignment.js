







function kilometerToMeter (meter) {
    var meter = 20000;
    var kilometerToMeter = (meter / 1000);
    return kilometerToMeter;

    }
    
    var kilometers = "This is kilomters"
    var kilometer = (kilometerToMeter(kilometers));
    console.log(kilometer);





















function budgetCalculator(watch, phone, laptop) {
    var result = watch + phone + laptop;
    return result;

   }
    
    var result = 50 + 100 + 500;
    var total = result;
    console.log(result);











  function hotelCost(cost) {
    var costday = 0;
    if (cost <= 10) {
    costday = cost * 100;
  
 } 
    else if (cost <= 20) {
    var cost10days = 10 * 100;
    var remaining = cost - 10;
    var cost20days = remaining * 80;
    costday = cost10days + cost20days;
      
  
}   else {
    var cost10days = 10 * 100;
    var cost20days = 100 * 80;
    var remaining = cost - 20;
    var cost30days = remaining * 50;
    cost = cost10days + cost20days;
        
      
}   return cost;
  
}
    var total = hotelCost(54);
    console.log(total);


















  

    function megaFriend(friend) {
      var array1 = friend.match(/\w[a-z]{0,}/gi);
      var result = array1[0];
  
      for (var x = 1; x < array1.length; x++){
      if (result.length < array1[x].length) {
      result = array1[x];
  }
  }
      return result;
  
  }
      
  console.log(megaFriend('nafis, rakib, tuhin, afridi, ashik, shakib, tahmid, tain ,ontor, mustafizur'));
  
  
  
  
  
  
  


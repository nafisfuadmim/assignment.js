function kilometerToMeter(meter) {
  var meter = 20000;
  var kilometerToMeter = (meter/1000);
  return kilometerToMeter;

}
  var kilometers = "This is kilomters"
var kilometer =(kilometerToMeter(kilometers));
console.log(kilometer);




function budgetCalculator(watch, phone, laptop) {
  var result = watch + phone + laptop;
  return result;

}

var result = 50 + 100 + 500;
var total = result;
console.log(result);




function megaFriend(friend)
{
  var array1 = friend.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(megaFriend('nafis, rakib, tuhin, afridi, ashik, shakib, tahmid, tain ,ontor, mustafizur'));
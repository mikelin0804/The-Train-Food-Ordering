var dishesDIV = document.querySelector(".dishes");
let orderList = document.querySelector(".itemsO");
let rightDoor = document.querySelector(".rightDoor");
let buttonSel = document.querySelector(".buttonSel");
let money = document.querySelector(".money");
var option1  = 65;
var option2  = 30;
var option3  = 21;
var option4  = 32;

var sides1 = [];
var delivery = 5;
var OrderNum = 0;
var RealTotal = 0;
var sideTotal = 0;
$(document).ready(
    function() {
    $("car").on("click",function(e) {
      e.preventDefault();
      $(".restaurant").hide();
      var name ='#'+this.id +'1';
      $(name).show();
      $(".items a").css("background-color","#333");
      $(this.firstElementChild).css("background-color","darkseagreen");
    });
  }
);
class OrderItem {
  constructor(item, sides, price, description){
    this.item = item;
    this.sides = sides;
    this.price = price;
    this.description = description;
  }
}
function clickToJump2(){
  document.getElementById("selector").style.display = "none";
  document.getElementById("homepage").style.display = "block";

}
function Random(){
  $(".items").hide();
  $(".restaurant").hide();
  $(".items a").css("background-color","#333");
  $("#random").show();
  $(".dot").css("background-color","#333");
  $(document.getElementById("randomDot")).css("background-color","darkseagreen")
}
function American(){
  $(".items").hide();
  $(".restaurant").hide();
  $(".items a").css("background-color","#333");
  $("#american").show();
}
function Vegetarian(){
  $(".items").hide();
  $(".restaurant").hide();
  $(".items a").css("background-color","#333");
  $("#vegetarian").show();
}
function Japanese(){
  $(".items").hide();
  $(".restaurant").hide();
  $(".items a").css("background-color","#333");
  $("#japanese").show();
}
function Mexican(){
  $(".items").hide();
  $(".restaurant").hide();
  $(".items a").css("background-color","#333");
  $("#mexican").show();
}

var items = [];
var modal = document.getElementById("myModal");
var cJ = document.getElementById("closeJ");
var modalC = document.getElementById("myBtnC");
var cC = document.getElementById("closeC");
var cCC = document.getElementById("closeCc");


function Sushi1Transition(){
//  alert("I'm not written yet");
  //CAll Modal
  myModalJ.style.display = "block";

//  e.preventDefault();
}

cJ.onclick = function() {
  myModalJ.style.display = "none";
}

modalC.onclick = function() {
  myModalC.style.display = "block";
}
cC.onclick = function() {
  myModalC.style.display = "none";
}
cCC.onclick = function() {
  myModal.style.display = "none";
}
function printOrder(){
  if (items.length == 0){
    alert("no order items");
  }
  else{
    orderList.innerHTML = "";
    money.innerHTML = "";
    for(i = 0; i< items.length; i++){
      let li = document.createElement('li');
      li.innerText = items[i].item;
      li.id = items[i].item;
      orderList.appendChild(li);
      let cancelBtn = document.createElement('button');
      cancelBtn.className = "cancelBtn";

      cancelBtn.addEventListener('click', function() {
        OrderNum--;
        var key = li.id;
        console.log(key);
        li.remove();
        for (n = 0; n < items.length; n++){
          if( compareOrderItem(key, items[n])){
            items.splice(n,1);
            console.log(items);
          }
        }
        alert(totalPrice());
        money.innerHTML = "";
        if(items.length != 0){
          deliveryFunc();
          taxFunc();
          totalToPayFunc();
        }
      }, false);

      li.appendChild(cancelBtn);
      sideLen = items[i].sides.length;                      //length of the sides array
      console.log(sideLen);
      if(sideLen != 0){
        let innerUl = document.createElement('ul');
        li.appendChild(innerUl);
        for(j = 0; j < sideLen; j++){
          let sideLi = document.createElement('li');
          sideLi.innerText = items[i].sides[j];
          innerUl.appendChild(sideLi);
        }
      }
    }
    let lineBreak1 = document.createElement("hr");
    let lineBreak2 = document.createElement("hr");
    money.appendChild(lineBreak1);
    deliveryFunc();
    taxFunc();
    money.appendChild(lineBreak2);
    totalToPayFunc();
  }
}
function genMid(dishName){

  dishesDIV.innerHTML ="";                      //clear the middle
  for (i = 1; i < 5; i++){
    if(dishName == "Rolls"){
      let div = document.createElement('div');
      div.className = "item";

      let img = document.createElement("img");
      img.className = "rollImg";
      img.src = 'images/rolls.jpg';

      let dishName = document.createElement("p");
      dishName.textContent = "Roll " + i;

      let price = document.createElement("p");
      price.textContent = "$" + i;

      dishesDIV.appendChild(div);
      div.appendChild(img);
      div.appendChild(dishName);
      div.appendChild(price);
      let btnA = document.createElement('button');
      btnA.className = "buttonSel";
      var p = i;
      btnA.addEventListener('click', function() {
          var newItem = new OrderItem(dishName.textContent, [], i, "");
          if(newItem.item.charAt(newItem.item.length-1)==1)newItem.price = 1;
          if(newItem.item.charAt(newItem.item.length-1)==2)newItem.price = 2;
          if(newItem.item.charAt(newItem.item.length-1)==3)newItem.price = 3;
          if(newItem.item.charAt(newItem.item.length-1)==4)newItem.price = 4;

        items.push(newItem);
        modal.style.display = "block";
      });

      div.appendChild(btnA);
    }

    if(dishName == "Soups"){
      let div = document.createElement('div');
      div.className = "item";

      let img = document.createElement("img");
      img.className = "soupImg";
      img.src = 'images/soup.jpg';

      let dishName = document.createElement("p");
      dishName.textContent = "Soup " + i;

      let price = document.createElement("p");
      price.textContent = "$" + i;

      dishesDIV.appendChild(div);
      div.appendChild(img);
      div.appendChild(dishName);
      div.appendChild(price);
      let btnA = document.createElement('button');
      btnA.className = "buttonSel";

      btnA.addEventListener('click', function() {
            var newItem = new OrderItem(dishName.textContent, [], i, "");
            if(newItem.item.charAt(newItem.item.length-1)==1)newItem.price = 1;
            if(newItem.item.charAt(newItem.item.length-1)==2)newItem.price = 2;
            if(newItem.item.charAt(newItem.item.length-1)==3)newItem.price = 3;
            if(newItem.item.charAt(newItem.item.length-1)==4)newItem.price = 4;
        items.push(newItem);
        modal.style.display = "block";
      });

      div.appendChild(btnA);
    }

    if(dishName == "Sashimi"){
      let div = document.createElement('div');
      div.className = "item";

      let img = document.createElement("img");
      img.className = "sashimiImg";
      img.src = 'images/sashimi.jpg';

      let dishName = document.createElement("p");
      dishName.textContent = "Sashimi " + i;

      let price = document.createElement("p");
      price.textContent = "$" + i;

      dishesDIV.appendChild(div);
      div.appendChild(img);
      div.appendChild(dishName);
      div.appendChild(price);
      let btnA = document.createElement('button');
      btnA.className = "buttonSel";

      btnA.addEventListener('click', function() {
        var newItem = new OrderItem(dishName.textContent, [], i, "");
        if(newItem.item.charAt(newItem.item.length-1)==1)newItem.price = 1;
        if(newItem.item.charAt(newItem.item.length-1)==2)newItem.price = 2;
        if(newItem.item.charAt(newItem.item.length-1)==3)newItem.price = 3;
        if(newItem.item.charAt(newItem.item.length-1)==4)newItem.price = 4;
        items.push(newItem);
        modal.style.display = "block";
      });

      div.appendChild(btnA);
    }

    if(dishName == "Drinks"){
      let div = document.createElement('div');
      div.className = "item";

      let img = document.createElement("img");
      img.className = "drinkImg";
      img.src = 'images/drink.jpg';

      let dishName = document.createElement("p");
      dishName.textContent = "Drink " + i;

      let price = document.createElement("p");
      price.textContent = "$" + i;

      dishesDIV.appendChild(div);
      div.appendChild(img);
      div.appendChild(dishName);
      div.appendChild(price);
      let btnA = document.createElement('button');
      btnA.className = "buttonSel";

      btnA.addEventListener('click', function() {
        var newItem = new OrderItem(dishName.textContent, [], i, "");
        if(newItem.item.charAt(newItem.item.length-1)==1)newItem.price = 1;
        if(newItem.item.charAt(newItem.item.length-1)==2)newItem.price = 2;
        if(newItem.item.charAt(newItem.item.length-1)==3)newItem.price = 3;
        if(newItem.item.charAt(newItem.item.length-1)==4)newItem.price = 4;
        items.push(newItem);
        modal.style.display = "block";
      });

      div.appendChild(btnA);
    }
  }
}

btnTab1.addEventListener("click", function() {
    genMid("Rolls");
});

btnTab2.addEventListener("click", function() {
    genMid("Soups");
});

btnTab3.addEventListener("click", function() {
    genMid("Sashimi");
});

btnTab4.addEventListener("click", function() {
    genMid("Drinks");
});

var items = [];     //order list

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var con = document.getElementsByClassName("con")[0];
// When the user clicks the button, open the modal
// btn.onclick = function() {
//   // var item1 = new OrderItem("Weird Sushi", [], 1488, "bez soli");
//   // items.push(item1);
//   //
//   // modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var total = 0;
var selections = {};
var checkboxElems = document.querySelectorAll("input[type='checkbox']");
var totalElem = document.getElementById("seats-total");
var seatsElem = document.getElementById("OptionChosen");
var selectElem = document.getElementById("SelectedCustom");

for (var i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", displayCheck);
}
var result = [];
function displayCheck(e) {
  total = items[OrderNum].price;
  if (e.target.checked) {
    selections[e.target.id] = {
      name: e.target.name,
      value: e.target.value
    };
  }
  else {
    delete selections[e.target.id];
  }

   result = [];

  //for testing
  for (var key in selections) {
    var listItem =   "<li>"+ selections[key].name + " " + "Add: "+
                   selections[key].value  + "CAD";

    result.push(listItem);
    total += parseInt(selections[key].value);
  }

  var side = selections[key].name ;
  sides1.push(side);

  sideTotal += parseInt(selections[key].value);

  totalElem.innerText = total;
  seatsElem.innerHTML = result.join("");
  result = [];

}
var a = document.getElementsByClassName("Confirm")[0];

con.onclick = function(){
  document.getElementById("option1").checked = false;
  document.getElementById("option2").checked = false;
  document.getElementById("option3").checked = false;
  document.getElementById("option4").checked = false;

  items[OrderNum].sides= sides1;

  var totalElem = document.getElementById("seats-total");
  seatsElem = document.getElementById("OptionChosen");
  selections = {};

  result = [];

  seatsElem.innerHTML = "";
  RealTotal = RealTotal + total;
  total = 0;
  totalElem.innerText = 0;
  sides1 = [];
  result = [];
  OrderNum++;
  modal.style.display = "none";
}
span.onclick = function(){
  modal.style.display = "none";
}
a.onclick = function(){
  printOrder();

}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeC");
var bac = document.getElementById("back");

bac.onclick = function() {
  myModalC.style.display = "none";
}

p

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

onload = function() {
  document.getElementById('ccn').oninput = function() {
    this.value = cc_format(this.value)
  }
}
function deliveryFunc(){
  let deliveryPrint = document.createElement('p');
  deliveryPrint.id = "money";
  deliveryPrint.innerText = "Delivery: $" + delivery;
  money.appendChild(deliveryPrint);
}
function taxFunc(){
  let tax = document.createElement('p');
  tax.id = "money";
  var sosi = (totalPrice()+sideTotal)*0.13;
  sosi = sosi.toFixed(2);
  tax.innerHTML = "Tax: $" + sosi;
  money.appendChild(tax);
}

function totalToPayFunc(){
  let total = document.createElement('p');
  total.id = "money";
  var totalToPay = totalPrice() + delivery + (totalPrice()+sideTotal)*0.13 + sideTotal;
  totalToPay = totalToPay.toFixed(2);
//  var tp  = totalPrice() + sideTotal;
//  totalToPay = tp + delivery + tp*0.13;
  //totalToPay = totalToPay.toFixed(2);

  total.innerText = "Total: $" + totalToPay;
  money.appendChild(total);
}
function totalPrice(){
  if (items.length == 0){
    return 0;
  }
  else{
    var total = 0;
    for (i = 0; i < items.length; i++){
        total += items[i].price;
    }
    return total;
  }
}

function validateForm() {
  var x = document.forms["myForm"]["creditCardNum"].value;
  if (x == "" || x == null) {
    alert("creditCardNum must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["ccvNum"].value;
  if (x == "" || x == null) {
    alert("cvv must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["dateNum"].value;
  if (x == "" || x == null) {
    alert("date must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["zipNum"].value;
  if (x == "" || x == null) {
    alert("zip must be filled out");
    return false;
  }
}

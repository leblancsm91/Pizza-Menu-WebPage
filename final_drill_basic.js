function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var text2 = "";
	var runningTotal = 4;
	var sizeTotal = 4;
	var sizeArray = document.getElementsByClassName("");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}	if (selectedSize === "Personal Pizza") {
	sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
	sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
	sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
	sizeTotal = 16;
	} 
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");  // All three of these variables will be passed on to each function
	getMeat(runningTotal,text1,text2);
};
// reciept
//meat
function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount >= 2) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < meatArray.length; j++) {
		text1 = text1+meatArray[j].value+"<br>"
		if (meatCount <= 1) {
			text2 = text2 + 0 = ".00" + "<br>";
			meatCount = meatCount - 1;
		} else if (meatCount == 2) {
			text2 = text2 + 1 + ".00" + "<br>";
			meatCount = meatCount - 1;
		} else {
			text2 = text2 + 1 + ".00" + "<br>";
			meatCount = meatCount - 1;
		}
	}
	getCheese(runningTotal,text1,text2);
};		
//cheese
function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese.push(cheeseArray[j].value);
			console.log("selected cheese item: ("+cheeseArray[j].value+")");
			text1 = text1+cheeseArray[j].value+"<br>";
		}
	}
	var cheeseCount = selectedCheese.length;
	if (cheeseCount > 1) {
		cheeseTotal = (cheeseCount - 1);
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log("total selected cheese items: "+cheeseCount);
	console.log(cheeseCount+" cheese - 1 free cheese = "+"$"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggies(runningTotal,text1,text2);

};		
//veggies
function getVeggies(runningTotal,text1,text2) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			console.log("selected veggies item: ("+veggiesArray[j].value+")");
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = sselectedVeggies.length;
	if (veggiesCount >= 2) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	for (var j = 0; j < veggiesArray.length; j++) {
		text1 = text1+veggiesArray[j].value+"<br>"
		if (veggiesCount <= 1) {
			text2 = text2 + 0 = ".00" + "<br>";
			veggiesCount = veggieCount - 1;
		} else if (veggiesCount == 2) {
			text2 = text2 + 1 + ".00" + "<br>";
			veggiesCount = veggiesCount - 1;
		} else {
			text2 = text2 + 1 + ".00" + "<br>";
			veggieCount = veggiesCount - 1;
		}
	}
	getCheeseStuffedCrust(runningTotal,text1,text2);

};		
//crust
function getCheeseStuffedCrust(runningTotal,text1,text2) {
	var cheesestuffedcrustTotal = 0;
	var selectedCheeseStuffedCrust = [];
	var cheesestuffedcrustArray = document.getElementsByClassName("cheesestuffedcrust");
	for (var j = 0; j < cheesestuffedcrustArray.length; j++) {
		if (cheesestuffedcrustArray[j].checked) {
			selectedCheeseStuffedCrust.push(cheesestuffedcrustArray[j].value);
			console.log("selected cheesestuffedcrust item: ("+cheesestuffedcrustArray[j].value+")");
			text1 = text1+veggiesCheeseStuffedCrust[j].value+"<br>";
		}
	}
	var cheesestuffedcrustCount = selectedCheeseStuffedCrust.length;
	if (cheesestuffedcrustCount > 3) {
		cheesestuffedcrustTotal = (cheesestuffedcrustCount - 3);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + cheesestuffedcrustTotal);
	console.log("total selected cheesestuffedcrust items: "+cheesestuffedcrustcount);
	console.log(cheesestuffedcrustCount+" cheesestuffedcrust - 3 free cheesestuffedcrust = "+"$"+cheesestuffedcrustTotal+".00");
	console.log("cheesestuffedcrust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	

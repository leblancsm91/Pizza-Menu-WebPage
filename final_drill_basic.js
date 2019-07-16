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
		} else if (meatCount => 1) {
			text2 = text2 + 1 + ".00" + "<br>";
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
	if (cheeseCount => 1) {
			text2 = text2 + 3 = ".00" + "<br>";
		} else if {
			text2 = text2 + 0 + ".00" + "<br>";
	} 
	runningTotal = (runningTotal + cheeseTotal);
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
	var veggiesCount = selectedVeggies.length;
	for (var j = 0; j < veggiesArray.length; j++) {
		text1 = text1+veggiesArray[j].value+"<br>"
		if (veggiesCount < 1) {
			text2 = text2 + 0 = ".00" + "<br>";
		} else if (veggiesCount => 1) {
			text2 = text2 + 1 + ".00" + "<br>";
		}
	}
	runningTotal = (runningTotal + veggiesTotal);
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
	if (cheesestuffedcrustCount => 1) {
			text2 = text2 + 3 + ".00" + "<br>";
		} else {
			text2 = text2 + 0 + ".00" + "<br
		}
	}
	runningTotal = (runningTotal + cheesestuffedcrustTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("showText").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	

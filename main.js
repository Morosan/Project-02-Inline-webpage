		/* Navigation Javascript */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    	} else {
        x.className = "topnav";
    	}
}

var sliderImage = document.querySelector('.background-image img');
var sliderH1 = document.querySelector('.background-image-textbox h1');
var sliderH4 = document.querySelector('.background-image-textbox h4');
var sliderH6 = document.querySelector('.background-image-textbox h6');
var button1 = document.querySelector('#expertise');
var button2 = document.querySelector('#browse');
var arrowRight = document.querySelector('.right .fa-arrow-right');
var arrowLeft = document.querySelector('.left .fa-arrow-left');

var initialIndex = 0;
var secondSliderIndex = 0;

var setSliderData = function (index) {
		sliderImage.src=sliders.mainSlider[index].imageUrl;
		sliderH1.innerHTML=sliders.mainSlider[index].texts.heading;
		sliderH4.innerHTML=sliders.mainSlider[index].texts.statement;
		sliderH6.innerHTML=sliders.mainSlider[index].texts.finalStatement;
		button1.innerHTML=sliders.mainSlider[index].texts.button1.text;
		button2.innerHTML=sliders.mainSlider[index].texts.button2.text;
};

setSliderData(initialIndex);

arrowRight.addEventListener('click', function () {
	initialIndex++;
	if (initialIndex === sliders.mainSlider.length) {
		initialIndex = 0;
	}
	setSliderData(initialIndex);
});

arrowLeft.addEventListener('click', function () {
	initialIndex--;
	if (initialIndex <= 0) {
		initialIndex = sliders.mainSlider.length - 1;
	}
	setSliderData(initialIndex);
});


///////////////////////////////     OnHover Timer       //////////////////////////////////////////////////////

var coverContainer= document.querySelector('.background-image');

coverContainer.addEventListener('mouseover', function() {
		clearInterval(timer);
});
coverContainer.addEventListener('mouseout', function() {
		timer = setInterval(myTimer, 3000);
});

var timer = setInterval(myTimer, 3000);

function myTimer() {
	initialIndex++;
	if (initialIndex === sliders.mainSlider.length) {
		initialIndex = 0;
	}
	if (initialIndex <= 0) {
		initialIndex = sliders.mainSlider.length - 1;
	}
	setSliderData(initialIndex);
}

///////////////////////////////     End OnHover Timer       //////////////////////////////////////////////////////

var sliderFirstSideContent = document.querySelector('.assignments-group .col-1').innerHTML;
var sliderFirstSideContent = document.querySelector('.assignments-group .col-2').innerHTML;

var rightButtonAssignmentsContainer = document.querySelector('.assignments-container .next-prev .next');
var leftButtonAssignmentsContainer = document.querySelector('.assignments-container .next-prev .previous');
var assignmentsGroupCol1 = document.querySelector('.assignments-group .col-1');
var assignmentsGroupCol2 = document.querySelector('.assignments-group .col-2');
var assignmentsContainer = document.querySelector('.assignments');



rightButtonAssignmentsContainer.addEventListener('click', function(event) {
		event.preventDefault();
		assignmentsGroupCol1.innerHTML = '';
		assignmentsGroupCol2.innerHTML = '';
		secondSliderIndex++;
		if (secondSliderIndex === sliders.secondSlider.length) {
				secondSliderIndex = 0;
		};
 
		for (var i in sliders.secondSlider[secondSliderIndex].leftPart) {
			if (i !== "sliderBackground") {
				var elementDiv = document.createElement('div');
				var elementPart1 = document.createElement('div');
				var elementPart2 = document.createElement('div');
				var firstText = document.createElement('p');
				var secondText = document.createElement('p');
				elementDiv.className = 'element';
				elementPart1.className = 'part1';
				elementPart2.className = 'part2';
				firstText.appendChild(document.createTextNode(i));
				secondText.appendChild(document.createTextNode(sliders.secondSlider[secondSliderIndex].leftPart[i]));
				elementPart2.appendChild(secondText);
				elementPart1.appendChild(firstText);
				elementDiv.appendChild(elementPart1);
				elementDiv.appendChild(elementPart2);
				assignmentsGroupCol1.appendChild(elementDiv);
 			} else {
				assignmentsContainer.style.backgroundColor = sliders.secondSlider[secondSliderIndex].leftPart[i];
			}
		};
		for (var i in sliders.secondSlider[secondSliderIndex].rightPart) {
			if (i !== "sliderBackground") {
				var elementDiv = document.createElement('div');
				var elementPart1 = document.createElement('div');
				var elementPart2 = document.createElement('div');
				var firstText = document.createElement('p');
				var secondText = document.createElement('p');
				elementDiv.className = 'element';
				elementPart1.className = 'part1';
				elementPart2.className = 'part2';
				firstText.appendChild(document.createTextNode(i));
				secondText.appendChild(document.createTextNode(sliders.secondSlider[secondSliderIndex].rightPart[i]));
				elementPart2.appendChild(secondText);
				elementPart1.appendChild(firstText);
				elementDiv.appendChild(elementPart1);
				elementDiv.appendChild(elementPart2);
				assignmentsGroupCol2.appendChild(elementDiv);
 			} else {
				assignmentsContainer.style.backgroundColor = sliders.secondSlider[secondSliderIndex].rightPart[i];
			}
		}
});

leftButtonAssignmentsContainer.addEventListener('click', function(event) {
		event.preventDefault();
		assignmentsGroupCol1.innerHTML = '';
		assignmentsGroupCol2.innerHTML = '';
		secondSliderIndex--;
		if (secondSliderIndex === sliders.secondSlider.length) {
				secondSliderIndex = 0;
		};
		if (secondSliderIndex <= 0) {
		secondSliderIndex = sliders.secondSlider.length - 1;
		};
 
		for (var i in sliders.secondSlider[secondSliderIndex].leftPart) {
			if (i !== "sliderBackground") {
				var elementDiv = document.createElement('div');
				var elementPart1 = document.createElement('div');
				var elementPart2 = document.createElement('div');
				var firstText = document.createElement('p');
				var secondText = document.createElement('p');
				elementDiv.className = 'element';
				elementPart1.className = 'part1';
				elementPart2.className = 'part2';
				firstText.appendChild(document.createTextNode(i));
				secondText.appendChild(document.createTextNode(sliders.secondSlider[secondSliderIndex].leftPart[i]));
				elementPart2.appendChild(secondText);
				elementPart1.appendChild(firstText);
				elementDiv.appendChild(elementPart1);
				elementDiv.appendChild(elementPart2);
				assignmentsGroupCol1.appendChild(elementDiv);
 			} else {
				assignmentsContainer.style.backgroundColor = sliders.secondSlider[secondSliderIndex].leftPart[i];
			}
		};
		for (var i in sliders.secondSlider[secondSliderIndex].rightPart) {
			if (i !== "sliderBackground") {
				var elementDiv = document.createElement('div');
				var elementPart1 = document.createElement('div');
				var elementPart2 = document.createElement('div');
				var firstText = document.createElement('p');
				var secondText = document.createElement('p');
				elementDiv.className = 'element';
				elementPart1.className = 'part1';
				elementPart2.className = 'part2';
				firstText.appendChild(document.createTextNode(i));
				secondText.appendChild(document.createTextNode(sliders.secondSlider[secondSliderIndex].rightPart[i]));
				elementPart2.appendChild(secondText);
				elementPart1.appendChild(firstText);
				elementDiv.appendChild(elementPart1);
				elementDiv.appendChild(elementPart2);
				assignmentsGroupCol2.appendChild(elementDiv);
 			} else {
				assignmentsContainer.style.backgroundColor = sliders.secondSlider[secondSliderIndex].rightPart[i];
			}
		}
});

var setFourthSlider = function(sliderIndex, id, object) {
	var paragrafFourthSlider = document.querySelector('#'+ id+' .clients-second-wrap .clients-second-container p');
	var headerFourthSlider = document.querySelector('#'+ id+' .clients-second-wrap .clients-second-container .quotes-wrap h4');

	headerFourthSlider.innerHTML = object[sliderIndex].subtitle;
	paragrafFourthSlider.innerHTML = object[sliderIndex].text;
};

var thirdSlider = document.getElementsByClassName('square-first');
var fourthSlider = document.getElementsByClassName('square-first2');

function addEventListenerList2(list, classParams, elementId, object) {
	for (var i = 0, len = list.length; i < len; i++) {
		list[i].addEventListener('click', function(){
			for(var y = 0; y < list.length; y++){
				list[y].className = classParams;
			}
			this.className += ' square-active';
			var index = 0;
			for(var x = 0, len = list.length; x < len; x++){
				if(list[x].className.indexOf('square-active') !== -1){
					index = x;
				}
			}
			setFourthSlider(index, elementId, object);
		});
	}
}  
var thirdObject = sliders['thirdSlider'];
var fourthObject = sliders['fourthSlider']; 
addEventListenerList2(thirdSlider, 'square square-first', 'clients-container', thirdObject);
addEventListenerList2(fourthSlider, 'square2 square-first2', 'candidates-container', fourthObject);


//---------- Modal V 1.0----------//

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}



/* 
//---------- Modal V 2.0 ----------//

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
*/


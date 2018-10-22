document.addEventListener('DOMContentLoaded', function () {
	//注销时间，避免重复触发
	document.removeEventListener('DOMContentLoaded', arguments.callee, false);
	var btnUpdateAttr = document.getElementById("btnUpdateAttr");
	var btnUpdateClass = document.getElementById("btnUpdateClass");
	var btnUpdateData = document.getElementById("btnUpdateData");
	var btnUpdateAJAX = document.getElementById("btnUpdateAJAX");
	var btnAnimation = document.getElementById("btnAnimation");

	var attrPart = document.getElementById("attrPart");
	attrPart.setAttribute("name", "AAA");
	btnUpdateAttr.addEventListener("click", function () {
		var attrPart = document.getElementById("attrPart");
		var oldAttr = document.getElementById("oldAttr");
		var newAttr = document.getElementById("newAttr");
		oldAttr.innerText = attrPart.getAttribute("name");
		attrPart.setAttribute("name", newAttr.value);
	});


	btnUpdateClass.addEventListener("click", function () {
		var classPart = document.getElementById("classPart");
		if (classPart.getAttribute("class") === "content") {
			classPart.setAttribute("class", "content-start content-red");
		}
		else {
			classPart.className = "content";
			setTimeout(function () {
				classPart.className += " content-yellow";
			}, 2000);
		}
	});

	var normalPlan = {
		time: "8h",
		peopleCount: 3
	};

	var extraPlan = {
		time: "12h",
		peopleCount: 4
	};

	btnUpdateData.addEventListener("click", function () {
		var dataPart = document.getElementById("dataPart");
		if (dataPart.getAttribute("class") === "content") {
			dataPart.setAttribute("class", "content-end");
			dataPart.dataset.plan = JSON.stringify(normalPlan);
		}
		else {
			dataPart.className = "content";
			dataPart.dataset.plan = JSON.stringify(extraPlan);
		}
	});

	btnUpdateAJAX.addEventListener("click", function () {
		var options = {
			success: function () {
				alert('success!');
			},
			error: function () {
				alert('error!');
			},
			data: {
				studentId: 666,
				DBID: 7
			}
		}
		getData('/getTripList', options);
	});

	btnAnimation.addEventListener("click", function () {
		clearInterval(animateInterval);
		intervalIndex = 0;
		animateInterval = setInterval('animationFunc()', 300);
	});
}, false);

var animateInterval;
var intervalCount = 9;
var intervalIndex = 0;
var animationFunc = function () {
	if (intervalIndex >= intervalCount) {
		var dots = document.getElementsByClassName("dot");
		for (var i = 0; i < dots.length; i++) {
			dots[i].style.cssText += 'background-color:#e3e3e3';
		}
		clearInterval(intervalId);
	}
	else {
		document.getElementsByClassName("dot")[intervalIndex].style.cssText += 'background-color:black';
	}
	intervalIndex++;
}

function getData(url, options) {
	var xhRequest = new XMLHttpRequest();
	xhRequest.onreadystatechange = function () {
		if (xhRequest.readyState === 4) {
			if (xhRequest.status === 200) {
				options.success(xhRequest.responseText, xhRequest);
			}
			else if (xhRequest.status === 404) {
				options.error(xhRequest.responseText, xhRequest);
			}
		}
	};

	xhRequest.open('GET', url, true);
	xhRequest.send(options.data);
}

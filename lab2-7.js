$(document).ready(function(){
	var otvet, x1, x2, znak='';
	var textArea = document.getElementById('otvet');
	$("#equal").click(function(){
		textArea.innerHTML = eval(textArea.innerHTML);
	});
	
	$("#delete").click(function(){
		otvet = $("#otvet").text();
		otvet = otvet.substring(0, otvet.length-1);
		$("#otvet").text(otvet);
	});

	$("#clear").click(function(){$("#otvet").text('0');});

	$("#plus").click(function(){$("#otvet").text($("#otvet").text() + '+');});

	$("#minus").click(function(){$("#otvet").text($("#otvet").text() + '-');});

	$("#umnoz").click(function(){$("#otvet").text($("#otvet").text() + '*');});

	$("#split").click(function(){$("#otvet").text($("#otvet").text() + '/');});

	$("#knopka1").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("1")
			else $("#otvet").text($("#otvet").text() + "1");
	});
	$("#knopka2").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("2")
			else $("#otvet").text($("#otvet").text() + "2");
	});
	$("#knopka3").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("3")
			else $("#otvet").text($("#otvet").text() + "3");
	});
	$("#knopka4").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("4")
			else $("#otvet").text($("#otvet").text() + "4");
	});
	$("#knopka5").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("5")
			else $("#otvet").text($("#otvet").text() + "5");
	});
	$("#knopka6").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("6")
			else $("#otvet").text($("#otvet").text() + "6");
	});
	$("#knopka7").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("7")
			else $("#otvet").text($("#otvet").text() + "7");
	});
	$("#knopka8").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("8")
			else $("#otvet").text($("#otvet").text() + "8");
	});
	$("#knopka9").click(function(){
		if ($("#otvet").text() == "0") $("#otvet").text("9")
			else $("#otvet").text($("#otvet").text() + "9");
	});
	$("#knopka0").click(function(text){
		if ($("#otvet").text() != "0") $("#otvet").text($("#otvet").text() + "0")
	});
	$("#tchk").click(function(text){
		$("#otvet").text($("#otvet").text() + ".");
	});
});

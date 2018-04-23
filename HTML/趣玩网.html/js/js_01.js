function my_display_01(class_01,class_02){
	var list_01 = document.getElementsByClassName(class_01);
	var list_02 = document.getElementsByClassName(class_02);
	for (var i = list_01.length - 1; i >= 0; i--) {
		list_01[i].style.background = "#fff";
		list_01[i].style.color = "#000";
		}

	for (var i = list_02.length - 1; i >= 0; i--) {
		list_02[i].style.display = "block";
		}


}

function my_display_02(class_01,class_02){
	var list_01 = document.getElementsByClassName(class_01);
	var list_02 = document.getElementsByClassName(class_02);
	for (var i = list_01.length - 1; i >= 0; i--) {
		list_01[i].style.background = "#000";
		list_01[i].style.color = "#fff";
	}

	for (var i = list_02.length - 1; i >= 0; i--) {
		list_02[i].style.display = "none";
	}

}


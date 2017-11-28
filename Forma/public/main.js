$("document").ready(function() {
	$("#shto").on("click", function() {
		var emriStd = $("#emri").val();
		var emriQyt = $("#qyteti").val();
				
		if (emriStd.trim() === "" ||emriQyt.trim() === "") $("#msg").html("Please fill both fields.");
		else {
			$.ajax({
				url: "/form",
				type: "POST",
				dataType: "json",
				data: {
					emri: emriStd,
					qyteti: emriQyt
				},
				success: function(json) {
					$("#msg").html(json.message);
				}
			});
		}
	});
			
	$("#kerkoEmrin").on("click", function() {
		$.ajax({
			url: "/kerkoEmrin",
			type: "POST",
			dataType: "json",
			data: {
				emri: $("#kerko_emrin_bosh").val()
			},
			success: function(json) {
				if (json.emri.trim() === "") $("#result").html("No results found.");
				else $("#result").html("Result found: <br><span>emriStudent:</span> " + json.emri + "<br><span>qyteti: </span>" + json.qyteti + "</li>");
			}
		});
	});
			
	$("#kerkoQytet").on("click", function() {
		$.ajax({
			url: "/kerkoQytet,	
			type: "POST",
			dataType: "json",
			data: {
				qyteti: $("#kerko_qytet_bosh").val()
			},
			success: function(json) {
				if (json.emri === "") $("#result").html("No results found.");
				else $("#result").html("Result found: <br><span>emriStd:</span> " + json.emri + "<br><span>qyteti: </span>" + json.qyteti + "</li>");
			}
		});
	});
});
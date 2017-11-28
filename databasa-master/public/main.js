$("document").ready(function() {
	$("#shto").on("click", function() {
		var idstd = $("#kodi").val();
		var emriStudent = $("#emri").val();
		var mbiemriStd = $("#mbiemri").val();
		var Lenda = $("#lenda").val();
		var hours = $("#oret").val();
		var credits = $("#kreditet").val();
				
		if (idstd.trim()==="" || emriStudent.trim() === "" ||mbiemriStd.trim() === "" ||Lenda.trim() === ""||hours.trim() === ""||credits.trim() === "") $("#msg").html("Please fill all the fields.");
		else {
			$.ajax({
				url: "/form",
				type: "POST",
				dataType: "json",
				data: {
					kodi: idstd,
					emri: emriStudent,
					mbiemri: mbiemriStd,
					lenda: Lenda,
					oret: hours,
					kreditet: credits
				},
				success: function(json) {
					$("#msg").html(json.message);
				}
			});
		}
	});
			
	$("#kerko_id").on("click", function() {
		$.ajax({
			url: "/kerko_id",
			type: "POST",
			dataType: "json",
			data: {
				kodi: $("#kerko_id_bosh").val()
			},
			success: function(json) {
				if (json.kodi.trim() === "") $("#result").html("No results found.");
				else $("#result").html("Result found:<br><span>Student Id:</span>"+json.kodi+" <br><span>emriStudent:</span> " + json.emri + "<br><span>Mbiemri: </span>" + json.mbiemri + "</li>");
			}
		});
	});
});
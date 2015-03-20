$(function(){
	$("#country_id").bind('change', function(){
		var country_id = $(this).val();
		$.get('/cities.json?country_id=' + country_id, function(data){
			/*
				data{
				cities: [
					{id: 1, name: 'Bogota'},
					{id: 2, name: 'Medellin'}
				]
				}
			*/
			var options = "";
			var cities = data['cities'];
			for(i in cities){
				options += "<option value="+ cities[i].id + ">" + cities[i].name + "</option>";
			}

			$("#user_city_id").html(options);
		});
	});

	$("#country_id").trigger('change');	
});

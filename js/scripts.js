// Dribble
$(document).ready(function (){

	var callback = function (playerShots) {
	    var html = '';

	    $('h2 b').text(playerShots.shots[0].player.name);

	    $.each(playerShots.shots, function (i, shot) {
	        html += '<li class="three columns">';
	        html += '<a href="' + shot.url + '" target="_blank">';
	        html += '<img src="' + shot.image_url + '" ';
	        html += 'alt="' + shot.title + '"></a></li>';
	    });

	    $('#shotsByPlayerId').html(html);
	};

	$.jribbble.getShotsByPlayerId('That-RedHead', callback, {page: 1, per_page: 12});

});

$(function() {
    $.getJSON( "json/biodata.json", function( data ) {
        $('link[type="image/ico"]').attr("href", data.image_url);
        $('title, a.navbar-brand').text(data.title);
        $('img.img-thumbnail').attr("src", data.image_url);
        $('.fa-linkedin').append('<a href="' + data.linkedin_url + '" target="_blank">  ' + data.title + '</a>');
        $('.fa-xing-square').append('<a href="' + data.xing_url + '" target="_blank">  ' + data.title + '</a>');
        $('.fa-wordpress').text("  " + data.wordpress_name);
        $('.fa-skype').text("  " + data.skype_name);
        $('footer .container').append('<p class="text-white text-justify small">' + data.about_me + '</p>');
    });
});

$(function() {
    $.getJSON( "json/projects.json", function( data ) {
        langList = []
        for (var i = 0; i < data.length; i++) {
            if (!langList.includes(data[i].lang)) {
                langList[i] = data[i].lang;
                $('.col-md-8').append('<button type="button" class="btn btn-info btn-block" data-toggle="collapse" data-target="#' + data[i].lang + '">' + data[i].lang + '</button><div id="' + data[i].lang + '" class="collapse"><table class="table table-bordered"><tbody><tr><td>' + data[i].name + '</td><td>' + data[i].description + '</td><td><a class="btn btn-default" href="' + data[i].url + '" target="_blank">Clone or download</a></td></tr></tbody></table></div>');
            }
            else {
                $('[id="' + data[i].lang + '"] tbody').append('<tr><td>' + data[i].name + '</td><td>' + data[i].description + '</td><td><a class="btn btn-default" href="' + data[i].url + '" target="_blank">Clone or download</a></td></tr>');
            }
            $('ul.list-group').append('<li class="list-group-item"><a class="btn btn-default" href="' + data[i].url + '" target="_blank">' + data[i].name.substring(0, 27) + '...</a></li>');
        }
    });
});
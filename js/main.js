var apiKey = '3u9xpvuptwc3v279n95ecv2s';

var text = '';

function getImages() {

    if (text == '') {
        $('#output img').remove();
        $("#output").append("<img src='img/1.jpg'>");
        $("#output").append("<img src='img/2.png'>");
        $("#output").append("<img src='img/3.jpg'>");
        $("#output").append("<img src='img/4.png'>");
        $("#output").append("<img src='img/5.jpg'>");
        $("#output").append("<img src='img/6.png'>");
        $("#output").append("<img src='img/7.jpg'>");
        $("#output").append("<img src='img/8.png'>");
        $("#output").append("<img src='img/9.jpg'>");
        $("#output").append("<img src='img/10.png'>");
        $("#output").append("<img src='img/11.jpg'>");
        $("#output").append("<img src='img/12.png'>");
        return;
    }

    console.log(text);
    $('#output img').remove();

    $.ajax(
        {
            type:'GET',
            url:"https://api.gettyimages.com/v3/search/images?fields=thumb&orientations=Horizontal&phrase=" + text + ",3d",
             beforeSend: function (request)
                {
                    request.setRequestHeader("Api-Key", apiKey);
                }})
        .done(function(data){
            console.log("Success with data")
            console.log(data)
            for(var i = 0;i<data.images.length;i++)
            {
               $("#output").append("<img src='" + data.images[i].display_sizes[0].uri + "'/>");
            }
        })
        .fail(function(data){
            alert(JSON.stringify(data,2))
        });
}

function search() {
    text = $('input:text').val();

    getImages();
}
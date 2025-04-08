window.onload = function() 
{
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var site = url.searchParams.get("site");
    document.querySelector('#map').src = "https://"+site;

    document.querySelector('#reset').onclick = function() 
    {
        window.close();
    };
}
$(document).on("click", "a", function(){
    var link_num = $(this).data("value");
    var base_url = window.location.origin;
    var open_url = base_url;

    if (link_num == "1") {
        open_url = open_url + "/index.html";
    }
    if (link_num == "2") {
        open_url = open_url + "/therapists.html";
    }
    if (link_num == "3") {
        open_url = open_url + "/massage.html";
    }
    if (link_num == "4") {
        open_url = open_url + "/contact.html";
    }
    window.location.href = open_url;
    return false;
});
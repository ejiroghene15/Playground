$(document).ready(function () {
    $(".dt").DataTable();
    $("#hamburger").click(function () {
        $("#sidebar, #content").toggleClass("active");
    });
    $("div[for='toggle-password']").click(function () {
        let input = $(this).siblings("input");
        input.prop("type") == "password"
            ? input.prop("type", "text")
            : input.prop("type", "password");
    });
    $(".select-all").click(function () {
        let checkbox = $(this).parents('.dt').find(":checkbox");
        checkbox.prop("checked") == true
            ? checkbox.prop("checked", true)
            : checkbox.prop("checked", false);
    });
});

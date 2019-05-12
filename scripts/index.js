$(document).ready(function () {
    let current = $("#sections li a.active").attr("section-for");

    $("#sections li a").on("click", function() {
        let section = $(this).attr("section-for");

        if (section !== current) {
            $(`#${current}`).hide();

            $("#sections li a").removeClass("active");
            $(`#sections li a[section-for=${section}]`).addClass("active");
            current = section;

            $(`#${section}`).show();
        }
    });
});
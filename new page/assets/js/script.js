AOS.init();
$(function () {
    $(".list").click(function () {

        let value = $(this).attr("data-filter");
        if (value == "all") {
            $(".cards").show("1000")
        }
        else {
            $(".cards").not('.' + value).hide("1000");
            $(".cards").filter("." + value).show("1000")
            
        }
    })
  
})
    
let liItem = document.querySelectorAll(".nav-pills a");

liItem.forEach(li => {
    li.onclick = function () {

        liItem.forEach(item => {
            item.classList.remove("active")
        })
        li.classList.add("active")

    }
});

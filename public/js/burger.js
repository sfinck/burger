$(document).ready(function () {
    $("#add-burger-button").on("click", function () {
        var burgerName = $("#burger-name").val();
        var newBurger = { burger_name: burgerName, devoured: false }
        fetch('/api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBurger),
        }).then(() => {
            $("#burger-name").val("")
            location.reload()
        })
    })
    $(".devour-btn btn btn-primary").on("click", function () {
        var id = $(this).attr("data-id")
        var body = new { devoured: true }
        fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(body)
        }).then(() => {
            location.reload()
        })
    })
})
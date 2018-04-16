$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyD3OPFSy0LLw_-4aiC8lNoOu10C6r6GPZg",
        authDomain: "dinner-thyme-acaba.firebaseapp.com",
        databaseURL: "https://dinner-thyme-acaba.firebaseio.com",
        projectId: "dinner-thyme-acaba",
        storageBucket: "dinner-thyme-acaba.appspot.com",
        messagingSenderId: "59448784946"
    };

    firebase.initializeApp(config);

    const database = firebase.database();

    //add searchbar validation input
    var search;

    $("#submit").on("click", function test() {
        //making cards appear
        $(".container").removeClass("hide")

        //ingredient search
        if (search === "") {
            alert("Please enter a search query");
        } else {
            search = $("#ingredient-input").val();
        }

        //queryURL and array to push recipes into 
        var queryURL = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=716be10f3517e512858d539e14920f86&sort=r&page=1&q=" + search;

        var recipeIdArray = [];

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            let recipeCount = response.count;

            var obj = jQuery.parseJSON(response);
            //for loop to append first five recipe titles and images to cards
            for (var i = 0; i < 5; i++) {
                recipeIdArray.push(obj.recipes[i].recipe_id);
                $("#recipe-name-" + i).html(obj.recipes[i].title);
                $("#recipe-image-" + i).attr("src", obj.recipes[i].image_url);
               // $("#recipe-card-" + i).attr("href", obj.recipes[i].source_url);



                var url = "https://cors-anywhere.herokuapp.com/https://community-food2fork.p.mashape.com/get?key=716be10f3517e512858d539e14920f86&rId=" + obj.recipes[i].recipe_id;
                $.ajax({
                    url: url,
                    method: "GET",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("X-Mashape-Key", "17STlxvDu0mshiHdSIFa7pNut86Vp1EqzzvjsngIg9bGERUjDu");
                    }
                }).then(function (newResponse) {
                    //for loop to append list of ingredients for each recipe
                    var recipeObj = jQuery.parseJSON(newResponse);
                    for (var j = 0; j < recipeObj.recipe.ingredients.length; j++) {
                        let list = $("<ul>");
                        let listItem = $("<li>");
                        $(list).append(listItem);
                        listItem.text(recipeObj.recipe.ingredients[j]);
                        $("#ingredientList-" + j).append(list);

                        //setting nutriionURL to search for the ingredient at each position of the array
                   /*     var nutritionURL = "https://api.nutritionix.com/v1_1/search/" + recipeObj.recipe.ingredients[j] +
                            "?&appId=3d9a6196&appKey=68a05b8f20a5908648e499d5b974c8ae&fields=item_name,nf_calories";

                        let totalCalories = 0;
                        let resultArr = [];
                        $.ajax({
                            url: nutritionURL,
                            method: "GET"
                        }).then(function (nutritionResponse) {




                            for (var k = 0; k < nutritionResponse.hits.length; k++) {
                                if (nutritionResponse.hits[k].fields.nf_calories) {
                                    resultArr.push(nutritionResponse.hits[k].fields.nf_calories);
                                } else {}
                            }
                        });

*/
                    }

                });


            }
        });


    });

});
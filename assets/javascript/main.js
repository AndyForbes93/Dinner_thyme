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

    var calories = 0.0;
    var totCalories = 0.0;
    var fat = 0.0;
    var totFat = 0.0;
    var cholesterol = 0.0;
    var totCholesterol = 0.0;
    var carbs = 0.0;
    var totCarbs = 0.0;
    var fiber = 0.0;
    var totFiber = 0.0;
    var sugar = 0.0;
    var totSugar = 0.0;
    var protein = 0.0;
    var totProtein = 0.0;
    var iron = 0.0;
    var totIron = 0.0;
    var sodium = 0.0;
    var totSodium = 0.0;

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

                $("#recipe-name").append(obj.recipes[i].title + "<br>");
                $("#ingredientList").append("<ul><li><a href='#'>" +obj.recipes[i].title+ "</a></li></ul>");

            }

            //console.log("recipeIdArray:" + recipeIdArray);
        });

            var url = "https://cors-anywhere.herokuapp.com/https://community-food2fork.p.mashape.com/get?key=2faf058c37cad76f25dc0f61a8700b82&rId=5cc4a8";

            console.log(obj);

            for (i = 0; i < 5; i++) {
                console.log(obj.recipes[i].title);
                console.log(obj.recipes[i].recipe_id);

                //trying to append five cards for search
                var name = obj.recipes[i].title;
                var number = obj.recipes[i].recipe_id;
                recipeIdArray.push(obj.recipes[i].recipe_id);
                $("#recipe-name").html(name);
                $("#recipe-image").attr("src", obj.recipes[i].image_url);


            }
        });

        $.ajax({
            url: url,
            method: "GET",

            beforeSend: function (xhr) { xhr.setRequestHeader("X-Mashape-Key", "17STlxvDu0mshiHdSIFa7pNut86Vp1EqzzvjsngIg9bGERUjDu"); },

            
           

        }).then(function (newresponse) {
            var obj = jQuery.parseJSON(newresponse);

            let ingredientArr = obj.recipe.ingredients;
            
            for(var i = 0; i < ingredientArr.length; i++) {


         
                let list = $("<ul>");
                let listItem = $("<li>");
                $(list).append(listItem);
                listItem.text(ingredientArr[i]);
                $("#ingredientList").append(list);
         

                var nutritionURL = "https://api.nutritionix.com/v1_1/search/" + ingredientArr[i] +"?&appId=f35ae0d0&appKey=b148a8cfc03753efc27ea05a30bfd6e9&fields=item_name,nf_calories";
                //var queryURL = "http://cors-proxy.htmldriven.com/?url=https://api.nutritionix.com/v1_1/search/taco?&appId=f35ae0d0&appKey=80cac78d0905b2d36ca8825470f578d7";
                
                let totalCalories = 0;
                let resultArr = [];
                $.ajax({
                    url: nutritionURL,
                    method: "GET",
                    success: function (response) {
                        calories = response.hits[0].fields.nf_calories;
                        totCalories = Math.floor(calories + totCalories);
                       // console.log("Total Calories(kcal):" + totCalories);
                        
                        fat = response.hits[0].fields.nf_total_fat;
                        totFat = Math.floor(fat + totFat);
                       // console.log("Total Fat(g):" + totFat);

                        cholesterol = response.hits[0].fields.nf_cholesterol;
                        totCholesterol = Math.floor(cholesterol + totCholesterol);
                       // console.log("Total Cholesterol(mg):" + totCholesterol);

                        carbs = response.hits[0].fields.nf_total_carbohydrate;
                        totCarbs = Math.floor(carbs + totCarbs);
                       // console.log("Total Carbohydrates(g):" + totCarbs);

                        fiber = response.hits[0].fields.nf_dietary_fiber;
                        totFiber = Math.floor(fiber + totFiber);
                      //  console.log("Total Fiber(g):" + totFiber);

                        sugar = response.hits[0].fields.nf_sugars;
                        totSugar = Math.floor(sugar + totSugar);
                       // console.log("Total Sugar(g):" + totSugar);

                        protein = response.hits[0].fields.nf_protein;
                        totProtein = Math.floor(protein + totProtein);
                      //  console.log("Total Protein(g):" + totProtein);

                        iron = response.hits[0].fields.nf_iron_dv;
                        totIron = Math.floor(iron + totIron);
                       // console.log("Total Iron(%dv):" + totIron);

                        sodium = response.hits[0].fields.nf_sodium;
                        totSodium = Math.floor(sodium + totSodium);
                       // console.log("Total Sodium(mg):" + totSodium);

                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        if (xhr.status == 404) {
                            console.log(thrownError);
                        }
                    }





                })
            }
        });
    });
//});    




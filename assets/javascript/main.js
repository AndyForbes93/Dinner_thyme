    $(document).ready(function() { 
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
        $("#submit").on("click",function test() {

            // var queryURL = "http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=2faf058c37cad76f25dc0f61a8700b82&q=asparagus";

            //Add modal here
            if(search === "") {
                alert("Please enter a search query");
            } else {
                search = $("#ingredient-input").val();
                console.log(search);
            }
            var queryURL = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=2faf058c37cad76f25dc0f61a8700b82&q=" +search;
            var recipeIdArray = [];

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                let recipeCount = response.count;
                var obj = jQuery.parseJSON(response);
                //console.log(obj);
                for (i = 0; i < obj.recipes.length; i++) {
                     //console.log(obj.recipes[i].title);
                    //  console.log(obj.recipes[i].recipe_id);
                    recipeIdArray.push(obj.recipes[i].recipe_id);
                    $("#recipes").append(obj.recipes[i].title + "<br>");
                    $("#recipes").append("<ul><li><a href='#'>"+obj.recipes[i].title+"</a></li></ul>");

                }

                //console.log("recipeIdArray:" + recipeIdArray);
            });

             var url = "https://cors-anywhere.herokuapp.com/https://community-food2fork.p.mashape.com/get?key=2faf058c37cad76f25dc0f61a8700b82&rId=5cc4a8";
            var items = [];

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
              }
          

            }).then(function (nutrition) {
                var nutritionURL = "https://api.nutritionix.com/v1_1/search/"+items[18]+"?&appId=f35ae0d0&appKey=80cac78d0905b2d36ca8825470f578d7&fields=item_name,nf_calories";
                //var queryURL = "http://cors-proxy.htmldriven.com/?url=https://api.nutritionix.com/v1_1/search/taco?&appId=f35ae0d0&appKey=80cac78d0905b2d36ca8825470f578d7";

                $.ajax({
                    url: nutritionURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                });
            });
        });
    });    
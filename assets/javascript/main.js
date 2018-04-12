        var search;
        $("#submit").on("click",function test() {

            // var queryURL = "http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=2faf058c37cad76f25dc0f61a8700b82&q=asparagus";
            search = $("#ingredient-input").val();
            console.log(search);
           
            var queryURL = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=2faf058c37cad76f25dc0f61a8700b82&q="+search;
            var recipeIdArray = [];

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var obj = jQuery.parseJSON(response);
                console.log(obj);
                for (i = 0; i < obj.recipes.length; i++) {
                    //  console.log(obj.recipes[i].title);
                    //  console.log(obj.recipes[i].recipe_id);
                    recipeIdArray.push(obj.recipes[i].recipe_id);
                    $("#recipes").append(obj.recipes[i].title + "<br>");
                  //  $("#recipes").append("<ul><li><a href='#'>"+obj.recipes[i].title+"</a></li></ul>");
                }

                console.log("recipeIdArray:" + recipeIdArray);
            });

             var url = "https://cors-anywhere.herokuapp.com/https://community-food2fork.p.mashape.com/get?key=2faf058c37cad76f25dc0f61a8700b82&rId=5cc4a8";
            var items = [];
            $.ajax({
                url: url,
                method: "GET",
                beforeSend: function (xhr) { xhr.setRequestHeader("X-Mashape-Key", "17STlxvDu0mshiHdSIFa7pNut86Vp1EqzzvjsngIg9bGERUjDu"); },
            }).then(function (newresponse) {
                var obj = jQuery.parseJSON(newresponse);

                console.log("ingredient:" + obj.recipe.ingredients);
                var str = "" + obj.recipe.ingredients;

                items = str.split(",");
               for(i=0;i<items.length;i++){
                $(".ingredients").append("<ul><li><a href='#'>"+items[i]+"</a></li></ul>");
               } 
                    
               console.log(items);

            }).then(function (nutrition) {
                var nutritionURL = "https://api.nutritionix.com/v1_1/search/"+items[18]+"?&appId=f35ae0d0&appKey=80cac78d0905b2d36ca8825470f578d7&fields=item_name,nf_calories";
                //var queryURL = "http://cors-proxy.htmldriven.com/?url=https://api.nutritionix.com/v1_1/search/taco?&appId=f35ae0d0&appKey=80cac78d0905b2d36ca8825470f578d7";

                $.ajax({
                    url: nutritionURL,
                    method: "GET"
                }).then(function (response) {

                    console.log(response.hits[0]);

                });

            });

        });
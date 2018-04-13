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
        var recipeIdArray = [];
        var titleArray = [];
        var ingredientsArray = [];
        var testArray = [];
        var obj;
        $("#submit").on("click",function test() {

            // var queryURL = "http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=2faf058c37cad76f25dc0f61a8700b82&q=asparagus";

            //Add modal here
            if(search === "") {
                alert("Please enter a search query");
            } else {
                search = $("#ingredient-input").val();
                console.log(search);
            }


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {


                        var object = jQuery.parseJSON(newresponse);
                        items = object.recipe.ingredients;
                        
                        console.log("items:" + items );
                        ingredientsArray.push(items);



            })
        });


            });

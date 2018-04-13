//======================================== BEGINNING TREY'S JAVASCRIPT ============================================================
//-------------------------------------------- BEGGINNING OF CARDS ----------------------------------------------------------------
//declare variables
let twNewRow, twNewDiv, twInnerDiv1, twNewImg, twNewh3, twDiv2, twNewh5, twNewIngredients, twListItem;
let twList = ['carrots', 'peas', 'steak', 'tomatoes']; // <----------- ingredients could all (as needed) be pushed into this array 
let twArrPassed = []; // and popped into second array after search button hit again 

/* or maybe another option // you could say twArr[k] = twArrPassed[k] forEach twArr.length
 and then while{(twArr[k] === twArrPassed[k]) do nothing}k++, else run the following loop */

$('#press-me').click(function () { // <----place submit button's id in here

clearIt();
    /* for (i=0; i<k+7; i++)*/

    // for loop to create each image 
    for (i = 0; i < 6; i++) { 
       
        // 1. creates a new div and adds classes. this will be the main div to which everything is attached
        twNewDiv = $('<div>').addClass('card text-white tw-new-colour mb-3 col-lg-4 tw-each-card');

        // 2. create a div, assign attributes, and attach it to the previously created div
        twInnerDiv1 = $('<div>').addClass('card-body row tw-card-top');
        twNewDiv.append(twInnerDiv1);

        // 3. create an image, assign attributes, and attach to inner div
        twNewImg = $('<img>').addClass('col-lg-4 tw-food-pic');
        twNewImg.attr('src', 'assets/images/hamburger.jpg'); // <------------ This is where the image will go (src[i])
        twInnerDiv1.append(twNewImg);

        // 4. create an h3 to hold the name of the selected dish, assign attributes
        twNewh3 = $('<h3>').html('hamburgers');
        $(twNewh3).addClass('tw-h3-card col-lg-6');// <-------------- This is where you the name of the dish will go
        twInnerDiv1.append(twNewh3);

        // 5. new div to attach to the generated image
        twDiv2 = $('<div>').addClass('card-body tw-card-bottom');
        twNewDiv.append(twDiv2);

        // 6. new h5 to append to the image
        twNewh5 = $('<h5>').addClass('card-title tw-line');
        $(twNewh5).html("What you will need..."); // <------------- This is where the name of the dish should appear
        twDiv2.append(twNewh5);

        // 7. a ul tag to attach to h5
        twNewIngredients = $('<ul>').addClass('tw-p-card tw-ul');
        twNewh5.append(twNewIngredients);

        // 8. an li tag for each ingredient
        for(j=0; j<twList.length; j++) { // <----------- You could probably do a for each loop right here
        twListItem = $('<li>'); // <---------------- this will be based on the number of ingredents involved [j]
        $(twListItem).html(twList[j]); // <---------------- This is where the ingredients will go
        twNewIngredients.append(twListItem);
        }
        console.log([i]);
         // if statement creates a row every 3rd element created started at 'card 4'
         if (i % 3 + 1 === 0 && i !== 0) {
            twNewRow = $('<div>').addClass('row');
            twNewRow.append(twNewDiv);
            $('#add-here').append(twNewRow);
        } else {
        $('#add-here').prepend(twNewDiv);
        } // <-------------- End of if/else 

    } //<---------- End of for loop
    
 }); //<----------- End of onclick event

// function to clear rows
function clearIt(){
    $("#row1").empty();
    $("#row2").empty();
    twNewDiv = " ";
};
// -- FOR TESTING PURPOSES --
// for (i = 0; i < 7; i++) {
//     if (i %3 +1 === 0 && i !== 0) {
//         console.log('it moduloed' + i);
//     } else {
//         console.log('buzz' + i);
//     }
// }
// --      --  --  --      --

// ------------------------------------- WHAT THE STRUCTURE WILL LOOK LIKE ------------------------------------------------------
//    <div id="#add-here"></div>

//    <div id="row1"></div>------------------------------->
//    <div id="row2"></div>-------------------------------> these two rows get populated and

//   <div class="card text-white bg-info mb-3 col-lg-4 tw-each-card"></div> -------------1. appended to (#add-here)
//         <div class="card-body row tw-card-top"> --------------------------------------2. twInnerDiv1 to be appended to twNewDiv 
//         <img class="tw-food-pic col-lg-4" src="assets/images/hamburger.jpg">----------3. twNewImg to be appended to twInnerDiv1 
//         
//              <h3 class="tw-h3-card col-lg-6">Hamburger</h3>---------------------------4. twNewh3 to be appended to twNewImg
//          </div>
//          <div class="card-body tw-card-bottom">---------------------------------------5. twDiv2 to be appended to twNewh3
//              <h5 class="card-title">Ingredients:</h5> --------------------------------6. twNewh5 to be appended to twDiv2
//                  <ul class="tw-p-card">      -----------------------------------------7. twNewIngredients to be appended to twNewh5
//                      <li>Big Potato</li> ---------------------------------------------8. twList[j] or twListItem to be appended to twNewIngredients
//                      <li>Small Carrot</li>
//                      <li>ham</li>
//                      <li>spinach</li>
//                  </ul>
//          </div >
//  </div >

//------------------------------------------- END OF CARDS JS ----------------------------------------------------------------------


//======================================== END TREY'S JAVASCRIPT ==================================================================

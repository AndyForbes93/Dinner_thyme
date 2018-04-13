//======================================== BEGINNING TREY'S JAVASCRIPT ============================================================
//-------------------------------------- WHAT THE STRUCTURE WILL LOOK LIKE ------------------------------------------------------
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
//-------------------------------------------- BEGGINNING OF CARD JS ---------------------------------------------------------------
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



//----------------------------------------------- END OF CARDS JS ------------------------------------------------------------------
//------------------------------------------ BEGINNING OF MODAL MODLE --------------------------------------------------------------

// <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

// <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> <-------- mOutDiv1
//     <div class="modal-dialog modal-lg"> <--------------------------- mOutDiv2
//         <div class="modal-content"> <------------------------------ mOutDiv3

//             <div class="modal-header tw-line"> <------------------- mInnerDiv1
//                 <h5 class="modal-title" id="exampleModalLongTitle">Hamburgers</h5> <-------------------- mh5

//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <-------------------- mButton4
//                     <span aria-hidden="true">&times;</span> <----------------- mSpan1
//                 </button>
//             </div>
//------------------------------------------------------ break -------------------------------------------------------------------------
//             <div class="row modal-body justify-content-center"> <-------------- mInnerDiv2

//                 <img class="tw-modal-pic " src="assets/images/hamburger.jpg"> <-------------------------- mImg
//             </div>


//             <div class="modal-body"> <---------------------------------------- mInnerDiv3
//                 <ul class="tw-line tw-line-2"> <------------------------------mUl
//                     <li>stuff 100 cal.</li> <---------------------------------mLiArr
//                     <li>stuff 700 cal. </li>
//                     <li>carrots 48888 cal.</li>
//                     <li>stuff 0 cal.</li>
//                     <li>stuff -5 cal.</li>
//                 </ul>
//             </div>

//             <div class="modal-body"> <------------------------------ mDivInner4
//                 <p>The recipe will go here for the description of how to cook it and stuff. lorem ipsum amit some words.
//                 </p> < --------------------------------------- mP1
//             </div>

//             <div class="tw-line-2 tw-padding"> <----------------------------------- mDivInner5
//                 <button style="float:right" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             </div>
//         </div>
//     </div>
// </div>

//------------------------------------------ BEGINNING OF MODAL JS ------------------------------------------------------------------
let mOutDiv1, mOutDiv2, mOutDiv3, mInnerDiv1, mh5, mButton4, mSpan1, mInnerDiv2, mImg, mInnerDiv3, mUl, mListItem, mDivInner4, mP1, mDivInner5;
let mLiArr = ['lamb', 'corn', 'toungue', 'dog-meat', 'cat-food'];
let mLiArr2 = [];


mOutDiv1 = $('<div>').addClass('modal fade bd-example-modal-lg');
mOutDiv1.attr('tabindex', '-1');
mOutDiv1.attr('role', 'dialog');
mOutDiv1.attr('aria-labelledby', 'myLargeModalLabel');
mOutDiv1.attr('aria-hidden', 'true');
console.log(mOutDiv1);


mOutDiv2 = $('<div>').addClass('modal-dialog modal-lg');
mOutDiv1.append(mOutDiv2);
console.log(mOutDiv2);


mOutDiv3 = $('<div>').addClass('modal-content');
mOutDiv2.append(mOutDiv3);
console.log(mOutDiv3);


mInnerDiv1 = $('<div>').addClass('modal-header tw-line');
mOutDiv3.append(mInnerDiv1);
console.log(mInnerDiv1);


mh5 = $('<h5>').addClass('modal-title');
mInnerDiv1.append(mh5);
$(mh5).html("Baked Chicken"); // <------------- This is where the name of the dish should appear in the modal
console.log(mh5);
console.log(mh5.html);


mButton4 = $('<button>').addClass('close');
mButton4.attr('type', 'button');
mButton4.attr('data-dismiss', 'modal');
mButton4.attr('aria-label', 'Close');
mh5.append(mButton4);
console.log(mButton4);


mSpan1 = $('<span>').attr('type', 'button');
mButton4.append(mSpan1);
console.log(mSpan1);


mInnerDiv2 = $('<div>').addClass('row modal-body justify-content-center');
mSpan1.append(mInnerDiv2);
console.log(mInnerDiv2);



mImg = $('<img>').attr('src', 'assets/images/hamburger.jpg');
mImg.addClass('tw-modal-pic');
mInnerDiv2.append(mImg);
console.log(mImg);


mInnerDiv3 = $('<div>').addClass('modal-body');
mImg.append(mInnerDiv3);
console.log(mInnerDiv3);


mUl = $('<ul>').addClass('tw-line tw-line-2');
mInnerDiv3.append(mUl);
console.log(mUl);


for(i=0; i<mLiArr.length; i++) { // 
    mListItem = $('<li>'); // <---------------- this will be based on the number of ingredents involved [i]
    $(mListItem).html(mLiArr[i]); // <---------------- This is where the ingredients will go in
    twNewIngredients.append(mListItem);
    }

    
mDivInner4 = $('<div>').addClass('modal-body');
mLiArr.append(mDivInner4);
console.log(mDivInner4);

mP1 = $('<p>');
$(mP1).html('here is the paragraph of stuff');
mDivInner4.append(p);
console.log(p);

mDivInner5 = $('<div>').addClass('tw-line-2 tw-padding');
mLiArr.append(mDivInner5);
console.log(mDivInner5);




console.log(mSpan1);

mOutDiv3.append(mButton4);


mOutDiv1.append();


// $'#modal-here').prepend(mOutDiv1);

// button3 = $('<button>').addClass('btn btn-primary');
// button3.attr('data-toggle', 'modal');
// button3.attr('type', 'button');
// button3.attr('data-target', '.bd-example-modal-lg');
// button3.html('this and that');


// mOutDiv1 = $('<div>').addClass('card text-white tw-new-colour mb-3 col-lg-4 tw-each-card');




//-------------------------------------------- END OF MODAL ------------------------------------------------------------------------
//======================================== END TREY'S JAVASCRIPT ==================================================================

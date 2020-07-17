// convert feet to mile
function feetToMile(feet){
    const mile = feet/5280;
        if(feet<0){
            var message = "Distance cannot be negative. Please give a possitive value..";
            return message;
        }
        else{
            return mile;
        }
}
var convert = feetToMile(300);
console.log(convert);



//wood calculator
function woodCalculator(chair,table,bed){
    
    if( chair<0 ){
        chair = 0;
    }
    if( table<0 ){
        table = 0;
    }
    if( bed<0 ){
        bed = 0;
    }
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;
        var totalWood = woodForChair + woodForTable + woodForBed ;
        return totalWood;  
}
var woodNeed = woodCalculator(14,5,12);
console.log(woodNeed);




//Brick calcutator 
function brickCalculator(floor){ 
    if(floor<0){
        var errorMessage = "Floor of a building cannot be negative. So give a positive value please..!"
        return errorMessage;
    }
    else{
        if(floor>20){
            var above20 = floor-20;
            var result1= above20 * 10 * 1000 + 270000;
            return result1;
        }
        if(floor>10 && floor<=20){
            var above10 = floor%10;
            var result2 = above10 * 12 * 1000 + 150000;
            return result2;
        }
        if(floor<=10){
            var result3 = floor * 15 * 1000;
            return result3;
        }
    }
}
var needBrick = brickCalculator(25);
console.log(needBrick);




//Find tiny names from an array
function tinyFriend(names){
    var tinyName = names[0];
    if(names.length < 1 || names == undefined){
        var showMessage = 'No names here. please give some names to check tiny name from your FRIENDS...';
        return showMessage;
    }
    else{
        for(var i=0; i<names.length; i++){
            var position = names[i];
            if(position.length<tinyName.length){
                tinyName = position;
            }
            
        }
    }
    return tinyName;
}
var friendsName = ['murad','saba','sakil','samia','abc','as','nayeem'];
var findTinyName =tinyFriend(friendsName);
console.log(findTinyName);
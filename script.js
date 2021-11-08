
let check = true;
function imgOpen(){

    document.getElementById('img_area').src='images/sf4ik.jpg';

    if(check) {

        document.getElementById("img_area").style.display = "block";
        check = false;
        
    }

    else {

        document.getElementById("img_area").style.display = "none";
        check = true;
        
    }
   
}

function imgOpen1(){

    document.getElementById('img_area').src='images/torkel.jpg';

    if(check) {

        document.getElementById("img_area").style.display = "block";
        check = false;
        
    }

    else {

        document.getElementById("img_area").style.display = "none";
        check = true;
        
    }
   
}

function imgOpen2(){

    document.getElementById('img_area').src='images/spirit.png';

    if(check) {

        document.getElementById("img_area").style.display = "block";
        check = false;
        
    }

    else {

        document.getElementById("img_area").style.display = "none";
        check = true;
        
    }
   
}
 
 
function AltImg() {

    document.getElementById('img_area').src='000';
}


function menuOpen(){
    if(check) {

        document.getElementById("menu_area").style.display = "block";
        check = false;
        
    }

    else {

        document.getElementById("menu_area").style.display = "none";
        check = true;
        
    }
   
}



function changeWidth(){
    document.getElementById('img_area').width=document.getElementById('width').value;
}
function changeHeight(){
    document.getElementById('img_area').height=document.getElementById('height').value;
}

function applied(){
    
    document.getElementById('img_area').alt=document.getElementById('altimg').value;
    document.getElementById('altimg').value="";
 }

 function changeBorder(){


    document.getElementById('img_area').style.borderColor = "#8181F7";
    document.getElementById('img_area').border=document.getElementById('border').value;
}

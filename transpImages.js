
function displayImage() {
    const checkboxes = document.getElementsByName("companySelector");
    let selectedImage = [0,0,0];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedImage[i] = 1;
        }
    }

    if(selectedImage[0]==1 && selectedImage[1]==1 && selectedImage[2]==1){
        document.getElementById("ALL").style.display = "block";
        document.getElementById("GA").style.display = "none";
        document.getElementById("AM").style.display = "none";
        document.getElementById("GM").style.display = "none";
        document.getElementById("A").style.display = "none";
        document.getElementById("G").style.display = "none";
        document.getElementById("M").style.display = "none";
    } else if(selectedImage[0]==1 && selectedImage[1]==1 && selectedImage[2]==0){
        document.getElementById("ALL").style.display = "none";
        document.getElementById("GA").style.display = "block";
        document.getElementById("AM").style.display = "none";
        document.getElementById("GM").style.display = "none";
        document.getElementById("A").style.display = "none";
        document.getElementById("G").style.display = "none";
        document.getElementById("M").style.display = "none";
    } else if(selectedImage[0]==1 && selectedImage[1]==0 && selectedImage[2]==1){
        document.getElementById("ALL").style.display = "none";
        document.getElementById("GA").style.display = "none";
        document.getElementById("AM").style.display = "block";
        document.getElementById("GM").style.display = "none";
        document.getElementById("A").style.display = "none";
        document.getElementById("G").style.display = "none";
        document.getElementById("M").style.display = "none";
    } else if(selectedImage[0]==0 && selectedImage[1]==1 && selectedImage[2]==1){
        document.getElementById("ALL").style.display = "none";
        document.getElementById("GA").style.display = "none";
        document.getElementById("AM").style.display = "none";
        document.getElementById("GM").style.display = "block";
        document.getElementById("A").style.display = "none";
        document.getElementById("G").style.display = "none";
        document.getElementById("M").style.display = "none";
    } else if(selectedImage[0]==1 && selectedImage[1]==0 && selectedImage[2]==0){
        document.getElementById("ALL").style.display = "none";
        document.getElementById("GA").style.display = "none";
        document.getElementById("AM").style.display = "none";
        document.getElementById("GM").style.display = "none";
        document.getElementById("A").style.display = "block";
        document.getElementById("G").style.display = "none";
        document.getElementById("M").style.display = "none";
    } else if(selectedImage[0]==0 && selectedImage[1]==1 && selectedImage[2]==0){
        document.getElementById("ALL").style.display = "none";
        document.getElementById("GA").style.display = "none";
        document.getElementById("AM").style.display = "none";
        document.getElementById("GM").style.display = "none";
        document.getElementById("A").style.display = "none";
        document.getElementById("G").style.display = "block";
        document.getElementById("M").style.display = "none";
    } else if(selectedImage[0]==0 && selectedImage[1]==0 && selectedImage[2]==1){
        document.getElementById("ALL").style.display = "none";
        document.getElementById("GA").style.display = "none";
        document.getElementById("AM").style.display = "none";
        document.getElementById("GM").style.display = "none";
        document.getElementById("A").style.display = "none";
        document.getElementById("G").style.display = "none";
        document.getElementById("M").style.display = "block";
    } else{
        document.getElementById("ALL").style.display = "none";
        document.getElementById("GA").style.display = "none";
        document.getElementById("AM").style.display = "none";
        document.getElementById("GM").style.display = "none";
        document.getElementById("A").style.display = "none";
        document.getElementById("G").style.display = "none";
        document.getElementById("M").style.display = "none";
    }
};

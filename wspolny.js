
document.addEventListener("DOMContentLoaded", function () {
    const contentSwitch = document.getElementById("contentSwitch");
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
  

    contentSwitch.checked = false;
    section1.style.display = "block";
    section2.style.display = "none";



    contentSwitch.addEventListener("change", function () {
        if (contentSwitch.checked) {
            section1.style.display = "none";
            section2.style.display = "block";
            
          
           
         
        } else {
            section1.style.display = "block";
            section2.style.display = "none";
         
          
        }
    }); 
});

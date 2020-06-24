let i=-1;
function ShowPlans() {
    i=i*-1;
    if(i===1){
        document.getElementById("hidden_plans").style.display = "grid";
        document.getElementById("premium-container").style.display = "none";
        document.getElementsByClassName("learnMoreIcon").style.display="none";
    }
    else
        {
            document.getElementById("hidden_plans").style.display = "none";
            document.getElementById("premium-container").style.display = "flex";
            document.getElementsByClassName("learnMoreIcon").style.display="none";
        }
}
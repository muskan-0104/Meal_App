var meal=document.getElementById("mealName");
var data=localStorage.getItem(0);
meal.innerHTML=data;
console.log(data);
var image=document.getElementById("image");
image.src="images/"+data+".jpg";

function addFavorite()
{
    var star=document.getElementsByClassName("fa-star");
    star[0].style.color="rgb(238, 204, 53)";
    var fav=document.getElementById("fav");
    localStorage.setItem("fav"+data,data);
}

function checkFavorite()
{
    
    if(localStorage.getItem("fav"+data)!=null)
    var star=document.getElementsByClassName("fa-star");
    star[0].style.color="rgb(238, 204, 53)";

}

checkFavorite();
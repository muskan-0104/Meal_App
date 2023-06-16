function deleteFav(curr){
    var id=curr.id;
    var h2=document.querySelector("#"+id+" h2").innerHTML;
    //remove from local storage
    localStorage.removeItem("fav"+h2);
    //remove from favorite screen
    curr.remove();
    for (var i = 1; i < localStorage.length; ++i) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        console.log("local storage "+i+" "+key+":"+value);
      }
}
function duplicate()
{
  // Get the element
  var elem = document.querySelector('#favorite0');

  // Create a copy of it
  var clone = elem.cloneNode(true);

  // Update the ID and add a class
  clone.id = 'favorite'+j;
  //clone.classList.add('text-large');

  // Inject it into the DOM
  elem.after(clone);
}

function displayFav()
{
    //check all localstorage items
    for (var i = 1; i < localStorage.length; ++i) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        console.log("local storage "+i+" "+key+":"+value);
        
        if(key.startsWith("fav") && key!=0)
        {
            duplicate();
            var favimg = document.querySelector("#favorite"+j+" img");
            favimg.src="images/"+value+".jpg";
            var favdesc = document.querySelector("#favorite"+j+" h2");
            favdesc.innerHTML=value;
            
            j++;
        }
    }
}

var j=1;
displayFav();
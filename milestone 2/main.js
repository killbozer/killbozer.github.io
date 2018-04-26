// Checks for the number given to the function called within the html

function dropFunction(num) {

	if (num === 1)  {

    document.getElementById("dropperMenu1").classList.toggle("show");

	}

if (num === 2)  {

    document.getElementById("dropperMenu2").classList.toggle("show");

	}

if (num === 3)  {

    document.getElementById("dropperMenu3").classList.toggle("show");

	}
}


/* The code below has been taken from https://stackoverflow.com/questions/42333757/multiple-dropdown-menus-using-same-js-code 
posted by user Lily T S
The code below checks to see if the user has clicked on a item with the class dropButton
Then it checks to see if there are any classes that are called droppedMenu
If the button has been clicked, then it adds the show class to the end of the class name
Else when the user clicks away from the button it removes show from the droppedMenu class 
*/

window.onclick = function(event) {
  if (!event.target.matches('.dropButton')) {

    var dropdowns = document.getElementsByClassName("droppedMenu");
    var index;
    for (index = 0; index < dropdowns.length; index++) {
      var openDropdown = dropdowns[index];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
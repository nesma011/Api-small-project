var recipesList = [];
var btnApi = document.querySelectorAll(".btn");
var myHttp = new XMLHttpRequest();

for (let i = 0; i < btnApi.length; i++) {
    btnApi[i].addEventListener("click", function () {
        var recipeType = btnApi[i].textContent.trim().toLowerCase();
        myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${recipeType}`);
        myHttp.send();
        myHttp.addEventListener("load", function () {
                recipesList = JSON.parse(myHttp.response).recipes;
                displayRecipes(recipesList);
        });
    }); 
}





function displayRecipes(recipesList) {
    var cartona = '<div class="row">';
  
    for (let i = 0; i < recipesList.length; i++) {
        cartona += `
            <div class="col-md-3 mb-4">
                <div class="card bg-dark text-light">
                    <img src="${recipesList[i].image_url}" alt="${recipesList[i].title}" class="card-img-top img-fluid w-100">
                    <div class="card-body">
                        <h5 class="card-title">${recipesList[i].title}</h5>
                        <a href="${recipesList[i].source_url}" class="btn btn-primary" target="_blank">View Recipe</a>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("recipes").innerHTML = cartona;
}

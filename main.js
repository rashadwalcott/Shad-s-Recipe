//Shad's Recipes
document.addEventListener('DOMContentLoaded',()=>{
console.log("YEA BOY!")

//VARIABLES

 const recipesURL = 'http://localhost:3000/recipes';
 const commentsURL = 'http://localhost:3000/comments';
 const ingredientsURL = 'http://localhost:3000/ingredients';
 const recipeIngredientsURL = 'http://localhost:3000/recipe_ingredients';
 const userURL = 'http://localhost:3000/users';
 const recipeListDiv = document.getElementById('list-panel');
 const recipeInfoDiv = document.getElementById('show-panel');
 const recipeUL = document.getElementById('list');
 const ingredientUL = document.createElement('ul');
 const likeBtn = document.createElement('button');
 const recipeTitle = document.createElement('h3');
 const ingredientTitle = document.createElement('h3');
 const directionsTitle = document.createElement('h3');
 const recipeImage = document.createElement('img');
 const directionsParagraph = document.createElement('p');



fetch(recipesURL)
  .then(res => res.json())
    .then(recipes => {
        console.log(recipes);
          recipes.forEach(recipe =>{
            // console.log(recipe);
            //Creates LI To Display To Screen
            let li = document.createElement('li');
            li.dataset.id = recipe.id;
            li.id = 'recipe-name';
            li.className = 'recipe'
            li.innerText = recipe.name;
            recipeUL.append(li);
  })
})

//EVENT LISTENERS
recipeUL.addEventListener('click',recipeInfo)



//FUNCTIONS
function recipeInfo(){

  let id = event.target.dataset.id;
  let recipeIngredient;
  if(event.target.id === 'recipe-name'){
    fetch(`${recipesURL}/${id}`)
      .then(res => res.json())
        .then(recipeData => {
          console.log(recipeData)

          recipeTitle.id = 'recipe-title';
          recipeTitle.innerText = recipeData.name;
          recipeImage.src = recipeData.image;
          likeBtn.dataset.id = recipeData.id;
          likeBtn.id = 'like-button';
          likeBtn.className = "like"
          likeBtn.innerText = "❤️❤️❤️❤️❤️";
          recipeImage.style = "width:600px;height:500px";
          ingredientTitle.id = 'ingredient-title';
          ingredientTitle.innerText = "Ingredients";
          ingredientUL.id = 'ingredient-name';

          directionsTitle.innerText = "Directions";
          directionsParagraph.innerText = recipeData.directions;

          recipeInfoDiv.append(recipeTitle);
          recipeInfoDiv.append(recipeImage);
          recipeInfoDiv.append(likeBtn);
          recipeInfoDiv.append(ingredientTitle);
          recipeInfoDiv.append(ingredientUL);
          recipeInfoDiv.append(directionsTitle);
          recipeInfoDiv.append(directionsParagraph);
          ingredientUL.innerHTML = "";
          recipeData.ingredients.forEach(ingredient => {
            console.log(ingredient.name);
              // ingredientUL.innerHTML = `
              //   <li id="single-ingredient"> ${ingredient.name}</li>
              // `
            let ingredientLI = document.createElement('li');
            ingredientLI.innerText = ingredient.name;
            ingredientLI.id = 'single-ingredient';
            ingredientLI.className = 'ingredient';
            ingredientUL.append(ingredientLI);

          })




        })
  }
}//END OF recipeInfo FUNCTION


})//END OF DOMContentLoaded

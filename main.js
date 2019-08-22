//Shad's Recipes
document.addEventListener('DOMContentLoaded',()=>{
console.log("YEA BOY!")

//VARIABLES

let hideRecipe = false;
 const recipesURL = 'http://localhost:3000/recipes';
 const commentsURL = 'http://localhost:3000/comments';
 const recipeListDiv = document.getElementById('list-panel');
 const recipeInfoDiv = document.getElementById('show-panel');
 const createDiv = document.getElementById('create-recipe');
 const recipeUL = document.getElementById('list');
 const form = document.getElementById('newrecipe');
 const likeBtn = document.createElement('button');
 const addBtn = document.getElementById('new-recipe-btn');
 const recipeTitle = document.createElement('h3');
 const ingredientTitle = document.createElement('h3');
 const directionsTitle = document.createElement('h3');
 const recipeImage = document.createElement('img');
 const directionsParagraph = document.createElement('p');
 const ingredientParagraph = document.createElement('p');
 const likeTotal = document.createElement('p');



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

            let deleteBtn = document.createElement('button');
            deleteBtn.id = 'delete';
            deleteBtn.className = 'delete-btn'
            deleteBtn.dataset.id = recipe.id;
            deleteBtn.innerText = "✌🏾";
            li.append(deleteBtn);
            recipeUL.append(li);

  })
})

//EVENT LISTENERS
recipeUL.addEventListener('click',recipeInfo);
form.addEventListener('submit',addRecipe);
recipeUL.addEventListener('click',deleteRecipe);
likeBtn.addEventListener('click',addLikes);
addBtn.addEventListener('click', hideForm);

//FUNCTIONS
//DISPLAYS RECIPE INFORMATION TO THE DOM
function recipeInfo(){

  let id = event.target.dataset.id;

  if(event.target.id === 'recipe-name'){
    fetch(`${recipesURL}/${id}`)
      .then(res => res.json())
        .then(recipeData => {
          // console.log(recipeData)

          recipeTitle.id = 'recipe-title';
          recipeTitle.innerText = recipeData.name;
          recipeImage.src = recipeData.image;
          recipeImage.style = "width:600px;height:500px";

          likeBtn.dataset.id = recipeData.id;
          likeBtn.id = 'like-button';
          likeBtn.className = "like";
          likeBtn.innerText = ` 🍗🍜🍙🍕🌮 LIKE 🥓🍔🍟🍩🍖` ;
          likeTotal.innerText = `${recipeData.likes} LIKES`

          ingredientTitle.id = 'ingredient-title';
          ingredientTitle.innerText = "Ingredients";
          ingredientParagraph.id = 'recipe-ingredient';
          ingredientParagraph.className = 'ingredient';
          ingredientParagraph.innerText = recipeData.ingredients;

          directionsTitle.innerText = "Directions";
          directionsParagraph.innerText = recipeData.directions;

          recipeInfoDiv.append(recipeTitle);
          recipeInfoDiv.append(recipeImage);
          recipeInfoDiv.append(likeTotal);
          recipeInfoDiv.append(likeBtn);
          recipeInfoDiv.append(ingredientTitle);
          recipeInfoDiv.append(ingredientParagraph);
          recipeInfoDiv.append(directionsTitle);
          recipeInfoDiv.append(directionsParagraph);


        })
  }
}//END OF recipeInfo FUNCTION

//TAKES THE FORM VALUE AND ADD TO THE DATABASE
function addRecipe(event){
  event.preventDefault();
  // console.log('submitted form')

  let recipeName = event.target.name.value;
  let ingredient = event.target.ingredients.value;
  let image = event.target.image.value;
  let directions = event.target.description.value;

  //FETCH FOR ADDING A RECIPE
  fetch(recipesURL,{
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      name: recipeName,
      ingredients: ingredient,
      image: image,
      directions: directions,
      likes: 0
    })
  }).then(res => res.json())
  .then(newRecipe => {
    console.log(ingredient)
    console.log(newRecipe)
    let li = document.createElement('li');
    li.dataset.id = newRecipe.id;
    li.id = 'recipe-name';
    li.className = 'recipe'
    li.innerText = newRecipe.name;
    let deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete';
    deleteBtn.className = 'delete-btn'
    deleteBtn.dataset.id = newRecipe.id;
    deleteBtn.innerText = "✌🏾";
    li.append(deleteBtn);
    recipeUL.append(li);
  })



}//END OF addRecipe FUNCTION

//ADD LIKES
function addLikes(){
let currentLikes = parseInt(event.target.previousElementSibling.innerText);
let newLikes = currentLikes + 1;
event.target.previousElementSibling.innerText = newLikes + " Likes";
let id = event.target.dataset.id;
fetch(`${recipesURL}/${id}`,{
  method: 'PATCH',
  headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes:newLikes
      })
})


}
//END OF addLikes FUNCTION


//DELETE RECIPES
function deleteRecipe(){
  let parentElement = event.target.parentElement;
  let id = event.target.dataset.id;

  if(event.target.classList.contains('delete-btn')){
  fetch(`${recipesURL}/${id}`,{
    method: "DELETE"
}).then(data => {
  parentElement.remove();
})
}

}//END OF deleteRecipe FUNCTION

function hideForm () {
  // hide & seek with the form
  hideRecipe = !hideRecipe
  if (hideRecipe) {
    createDiv.style.display = 'block'
  } else {
    createDiv.style.display = 'none'
  }
}


})//END OF DOMContentLoaded

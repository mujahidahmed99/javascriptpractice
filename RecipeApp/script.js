const random_recipe_div = document.getElementById('random_recipe_container');
async function getRandomRecipe(){
    const response_data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json());
    let random_recipe = response_data.meals[0];
    console.log(random_recipe);

    showRandomRecipe(random_recipe);
}

getRandomRecipe();

function showRandomRecipe(recipe_data) {
    const meal_div = document.createElement("div");
    meal_div.innerHTML = 
    `<div>
        <span class="random-recipe-header">Recipe of the Day</span>
        <img src=${recipe_data.strMealThumb} alt=${recipe_data.strMeal}>
        <div class="description">
            <span id="random-meal-name">${recipe_data.strMeal}</span>
            <button class="like-btn"><i class="fas fa-heart"></i></button>
        </div>
    </div>`;

    const btn = meal_div.querySelector(".description .like-btn");
    
    btn.addEventListener("click", (e) => {
        btn.classList.toggle("active");
    });


    random_recipe_div.appendChild(meal_div);

}
const meal_content = document.getElementById('meal-content');
const meal_btn = document.getElementById('get-meal');
const welcome_page = document.getElementById('welcome-page');

async function getRandomMeal(){
    const response_data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json());
    let random_meal = response_data.meals[0];
    displayRandomMeal(random_meal);
}

meal_btn.onclick = function() {
    welcome_page.classList.remove('welcome');
    meal_content.innerHTML = '';
    getRandomMeal();
}

function getIngredients(meal){
    var ingredients = []

    for(i = 0; i <= 20; i++){
        if(meal['strIngredient' + i]) {
            console.log("hello");
            ingredients.push(`${meal['strIngredient'+i]} - ${meal['strMeasure'+i]}`);
        } else {
            break;
        }
    }
    return ingredients;
}

function displayRandomMeal(meal){
    const ingredients = [];

    for(let i = 1; i <= 20; i++){
        if(meal['strIngredient'+i]) {
            console.log("hello");
            ingredients.push(`${meal['strIngredient'+i]} - ${meal['strMeasure'+i]}`);
        } else {
            break;
        }
    }
    const meal_div = document.createElement('div');
    meal_div.innerHTML = 
    `<div class="meal-wrapper">
        <div class="left-side">
            <div class="image">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            </div>
            <div class="description">
                <ul>
                    <li><span class="description-tags">Category: </span>${meal.strCategory}</li>
                    <li><span class="description-tags">Area: </span>${meal.strArea}</li>
                    <li><span class="description-tags">Tags: </span>${meal.strTags}</li>
                </ul>
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
                </ul>
            </div>
        </div>
        <div class="right-side">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strInstructions}</p>
        </div>
    </div>
    <div class="video-wrapper">
        <h3>Video Recipe</h3>
        <iframe width="420" height="315" src="${meal.strYoutube.replace('watch?', 'embed/')}" frameborder="0" allowfullscreen></iframe>
    </div>`
    meal_content.appendChild(meal_div);
};
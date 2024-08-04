import cocktail1 from './img/cocktail1.png';
import cocktail2 from './img/cocktail2.png';
import cocktail3 from './img/cocktail3.png';
import pizza1 from './img/pizza1.png';
import pizza2 from './img/pizza2.png';
import pizza3 from './img/pizza3.png';
import "./menuPage.css"

function generateContent(container){

    const titleP = document.createElement("p");
    titleP.textContent = 'Defeat your hunger and thirst with greatness.';
    titleP.className = 'menu-page-description';
    const titleH2 = document.createElement('h2');
    titleH2.className = 'menu-page-title';
    titleH2.textContent = "Check out our menu";

    const cocktailContainer = document.createElement("div");
    cocktailContainer.className = "cocktail-container";
    cocktailContainer.innerHTML = `
                <div class="cocktail">
                    <h3>This cocktail</h3>
                    <img src="${cocktail1}" alt="this cocktail">
                    <div class="info">
                        <div class="wrapper">
                            <p>Ingredients</p>
                            <ul>
                                <li>Natural soda</li>
                                <li>Mashed salmon ears</li>
                                <li>Dried lime</li>
                            </ul>
                        </div>
                        <p class="price">2$</p>
                    </div>
                </div>
                <div class="cocktail">
                    <h3>That beverage</h3>
                    <img src="${cocktail2}" alt="that beverage">
                    <div class="info">
                        <div class="wrapper">
                            <p>Ingredients</p>
                            <ul>
                                <li>Tap water</li>
                                <li>Tears of the enemies</li>
                                <li>Grapefruit</li>
                            </ul>
                        </div>
                        <p class="price">2.50$</p>
                    </div>
                </div>
                <div class="cocktail">
                    <h3>The other drink</h3>
                    <img src="${cocktail3}" alt="the other drink">
                    <div class="info">
                        <div class="wrapper">
                            <p>Ingredients</p>
                            <ul>
                                <li>Horse milk</li>
                                <li>Prune juice</li>
                                <li>Cherry</li>
                            </ul>
                        </div>
                        <p class="price">2.20$</p>
                    </div>
                </div>
    `

    const pizzaContainer = document.createElement("div");
    pizzaContainer.className = "pizza-container";
    pizzaContainer.innerHTML = `
        <div class="pizza">
            <h3>Good pizza</h3>
            <img src="${pizza1}" alt="good pizza">
            <div class="info">
                <div class="wrapper">
                    <p>Ingredients</p>
                    <ul>
                        <li>Good dough</li>
                        <li>Some kind of sauce</li>
                        <li>Not pineapple</li>
                    </ul>
                </div>
                <p class="price">8$</p>
            </div>
        </div>
        <div class="pizza">
            <h3>Nice pizza</h3>
            <img src="${pizza2}" alt="nice pizza">
            <div class="info">
                <div class="wrapper">
                    <p>Ingredients</p>
                    <ul>
                        <li>Nice base</li>
                        <li>Belly button lint</li>
                        <li>Rock essence</li>
                    </ul>
                </div>
                <p class="price">8$</p>
            </div>
        </div>
        <div class="pizza">
            <h3>Great pizza</h3>
            <img src="${pizza3}" alt="Great pizza">
            <div class="info">
                <div class="wrapper">
                    <p>Ingredients</p>
                    <ul>
                        <li>Great foundation</li>
                        <li>Important sauce</li>
                        <li>Bell pepper</li>
                    </ul>
                </div>
                <p class="price">8$</p>
            </div>
        </div>
    `

    container.append(titleP);
    container.append(titleH2);
    container.append(cocktailContainer);
    container.append(pizzaContainer);
}

export default generateContent;
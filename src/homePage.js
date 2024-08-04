import cocktail1 from './img/cocktail1.png';
import cocktail2 from './img/cocktail2.png';
import cocktail3 from './img/cocktail3.png';
import pizza1 from './img/pizza1.png';
import pizza2 from './img/pizza2.png';
import pizza3 from './img/pizza3.png';
import "./homePage.css";

function generateContent(container){
    // ================hero section=============================
    const heroSection = document.createElement('section');
    heroSection.className = "hero-section"
    heroSection.innerHTML = `<h1>Cojemte Restaurant</h1>
                <p>Roses are red, come here, you, and bring ma and pa too!</p>`

    // =================products section========================            
    const productsSection = document.createElement('section');
    productsSection.className = 'products-section';

    const cocktailsHeadline = document.createElement("h2");
    const cocktailsContainer = document.createElement("div");
    cocktailsContainer.className = 'cocktails-container';

    const pizzasHeadline = document.createElement("h2");
    const pizzasContainer = document.createElement("div");
    pizzasContainer.className = 'pizzas-container'

    cocktailsHeadline.textContent = "9/10 doctors recommend this";
    cocktailsContainer.innerHTML = `<div class="cocktail">
                        <h3>This cocktail</h3>
                        <img id="cocktail1" src="${cocktail1}" alt="liquid cocktail">
                    </div>
                    <div class="cocktail">
                        <h3>That beverage</h3>
                        <img id="cocktail2" src="${cocktail2}" alt="moist cocktail">
                    </div>
                    <div class="cocktail">
                        <h3>The other drink</h3>
                        <img id="cocktail3" src="${cocktail3}" alt="juicy cocktail">
                    </div>`

    pizzasHeadline.textContent = "The other 1/10 recommend this"
    pizzasContainer.innerHTML = `<div class="pizza">
                        <h3>Good Pizza</h3>
                        <img id="pizza1" src="${pizza1}" alt="good pizza">
                    </div>
                    <div class="pizza">
                        <h3>Nice Pizza</h3>
                        <img id="pizza2" src="${pizza2}" alt="nice pizza">
                    </div>
                    <div class="pizza">
                        <h3>Great Pizza</h3>
                        <img id="pizza3" src="${pizza3}" alt="great pizza">
                    </div>`

    productsSection.append(cocktailsHeadline);
    productsSection.append(cocktailsContainer);
    productsSection.append(pizzasHeadline);
    productsSection.append(pizzasContainer);


    const callToActionSection = document.createElement("section");
    callToActionSection.classList = 'call-to-action-section';
    callToActionSection.innerHTML = `
                <div class="wrapper">
                    <h2>You'll miss out on our epic offers if you don't subscribe!</h2>
                    <form action="#">
                        <div class="form-control">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Tronald Dump">
                        </div>
                        <div class="form-control">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="orangeboi@cooldude.com">
                        </div>
                        <button>Let me know your epic offers!</button>
                    </form>
                </div>
    `
    

    container.append(heroSection);
    container.append(productsSection);
    container.append(callToActionSection);
}

export default generateContent;
import "./contactPage.css";

function generateContent(container){

    const titleH2 = document.createElement("h2");
    titleH2.className = "contact-page-title";
    titleH2.textContent = "Contact us"

    const contactWrapper = document.createElement("div");
    contactWrapper.className = "contact-wrapper";
    contactWrapper.innerHTML = `
        <h3>You can find us here</h3>
        <p><span>Address</span> 5 Mambo Street, Vancouver, British Columbia, V06 0E1</p>
        <p><span>Hours</span> 10:00 - 22:00 / All days of the week</p>
        <p><span>Email</span> cojemte@ihopethisemailisnotreal.com</p>
        <p><span>Phone</span> 123-123-1234</p>
    `

    const formWrapper = document.createElement("div");
    formWrapper.className = "form-wrapper";
    const formTitle = document.createElement("h3");
    formTitle.textContent = "Want to tell us something?"
    const form = document.createElement('form');
    form.innerHTML = `
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Brock Oshama" required>
        </div>
        <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="coolbro123@despacito.com" required>
        </div>
        <div class="form-control">
        <label for="message">Message</label>
        <textarea rows="5"></textarea>
        </div>
        <button type="submit">Send message</button>
    `

    formWrapper.append(formTitle);
    formWrapper.append(form);

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.append(contactWrapper);
    wrapper.append(formWrapper);

    container.append(titleH2);
    container.append(wrapper);
}

export default generateContent;
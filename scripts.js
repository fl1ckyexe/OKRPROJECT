
function userDialog() {
    alert("Ласкаво просимо на сайт готелю 'City'!");
    const name = prompt("Як вас звати?");
    const confirmBooking = confirm("Бажаєте забронювати номер?");

    if (confirmBooking) {
        alert(`Дякуємо, ${name}, очікуйте на підтвердження!`);
    } else {
        alert("Можливо, зміните думку пізніше!");
    }

    let count = 3;
    while (count > 0) {
        const answer = prompt("Введіть код підтвердження (наприклад: 1234):");
        if (answer === "1234") {
            alert("Код підтверджено. Вітаємо!");
            break;
        } else {
            alert("Невірний код, спробуйте ще.");
        }
        count--;
    }
    if (count === 0) {
        alert("Спроби вичерпано.");
    }
}


function developerInfo(surname, name, position = "студент") {
    alert(`Розробник: ${surname} ${name}, посада: ${position}`);
}



function compareStrings(str1, str2) {
    alert("Більший рядок: " + (str1 > str2 ? str1 : str2));
}



document.body.style.backgroundColor = "#d0f0c0";
setTimeout(() => {
    document.body.style.backgroundColor = "#f0f8ff";
}, 30000);


const specialLink = document.getElementById("special-link");
specialLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Вас буде перенаправлено на сторінку з інформацією.");
    location.href = "description.html";
});


const links = document.querySelectorAll("a");
links.forEach(link => {
    link.style.fontWeight = "bold";
});


const mainContent = document.getElementById("main-content");

console.log("innerHTML:", mainContent.innerHTML);
console.log("outerHTML:", mainContent.outerHTML);
console.log("textContent:", mainContent.textContent);
console.log("firstChild.nodeValue:", mainContent.firstChild?.nodeValue);


document.write("<p>Цей текст додано через document.write (не рекомендовано)</p>");

const promoDiv = document.createElement("div");
promoDiv.style.border = "1px solid green";
promoDiv.style.padding = "10px";

const promoText = document.createTextNode("Акція! При бронюванні до кінця тижня — знижка 20%!");
promoDiv.appendChild(promoText);
document.body.appendChild(promoDiv);


const outputDiv = document.getElementById("js-output");

const message1 = document.createElement("p");
message1.textContent = "Цей елемент вставлено методом append().";
outputDiv.append(message1);

const message2 = document.createElement("p");
message2.textContent = "Цей елемент вставлено методом prepend().";
outputDiv.prepend(message2);

const message3 = document.createElement("p");
message3.textContent = "Цей елемент додано після js-output.";
outputDiv.after(message3);

const replacement = document.createElement("p");
replacement.textContent = "js-output замінено цим текстом.";
outputDiv.replaceWith(replacement);


setTimeout(() => {
    replacement.remove();
}, 10000);

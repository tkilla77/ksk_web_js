function handleAgeChanged(e) {
    if (age.value >= 18) {
        beverage.innerText = 'Der Schnaps schmeckt noch genau so!';
    } else if (age.value >= 16) {
        beverage.innerText = 'Bier her!';
    } else {
        beverage.innerText = 'Einen Sirup, aber gerührt, nicht geschüttelt!';
    }
}

handleAgeChanged();
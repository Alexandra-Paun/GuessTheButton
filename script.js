function fun(idButton) {
    if (Math.floor((Math.random() * 3) + 1) == idButton) {
        form.textContent = "YOU WON";
    } else {
        form.textContent = "YOU LOST";
    }
}


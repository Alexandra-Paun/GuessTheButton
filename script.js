function fun(idButton) {
    if (Math.floor((Math.random() * 3) + 1) == idButton) {
        form.textContent = "YOU WIN"
    } else {
        form.textContent = "YOU LOST"
    }
}


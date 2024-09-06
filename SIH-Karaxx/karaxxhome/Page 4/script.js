function selectOption(button) {
    // Remove 'selected' class from all buttons
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    button.classList.add('selected');
}

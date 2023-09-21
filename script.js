// Función para cambiar el texto del botón entre "Login" y "Cerrar sesión"
function toggleLoginStatus() {
    const loginButton = document.getElementById("loginButton");
    if (loginButton.textContent === "Login") {
        loginButton.textContent = "Logout";
    } else {
        loginButton.textContent = "Login";
    }
}


// Función para agregar una definición
function addDefinition() {
    const definitionCard = document.getElementById("definitionCard");
    
    // Reemplaza el contenido del card2 con un campo de entrada de texto y un botón de guardar
    definitionCard.innerHTML = `
        <div class="card-header">
            <h3>Dojonary is defined by <strong>YOU</strong></h3>
        </div>
        <div class="definition-input">
            <textarea id="definitionText" rows="4" cols="50" placeholder="Enter your definition here..."></textarea>
            <button class="btn btnGreen" onclick="saveDefinition()">Save</button>
        </div>
    `;
}

// Función para guardar la definición
function saveDefinition() {
    const definitionText = document.getElementById("definitionText").value;
    
    // Puedes hacer algo con la definición, por ejemplo, mostrarla en la tarjeta
    const definitionCard = document.getElementById("definitionCard");
    definitionCard.innerHTML = `
        <div class="card-header">
            <h3>Dojonary is defined by <strong>YOU</strong></h3>
        </div>
        <div class="definition-result">
            <p>${definitionText}</p>
        </div>
    `;
}


// Función para mostrar la alerta
function showLikeAlert() {
    alert("A Ninja le gustó");
}
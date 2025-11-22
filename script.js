
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    color: #333;
    line-height: 1.6;
}

/* Hero Section */
.hero {
    background-color: #0A2540; /* Azul escuro */
    color: white;
    text-align: center;
    padding: 60px 20px;
}

.hero .logo {
    max-width: 150px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.btn {
    background-color: #ffffff;
    color: #0A2540;
    padding: 12px 24px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.btn:hover {
    background-color: #e6e6e6;
}

/* Sobre */
.sobre {
    padding: 50px 20px;
    background-color: #f9f9f9;
}

.sobre-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
}

.sobre-content img {
    max-width: 300px;
    margin-right: 30px;
    border-radius: 8px;
}

.sobre-content div {
    max-width: 500px;
}

/* Serviços */
.servicos {
    padding: 50px 20px;
    text-align: center;
}

.servicos h2 {
    margin-bottom: 20px;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: auto;
}

.card {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    font-weight: bold;
}

/* Contato */
.contato {
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
}

input, textarea {
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    background-color: #0A2540;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background-color: #1a3a66;
}

/* Responsividade */
@media (max-width: 768px) {
    .sobre-content {
        flex-direction: column;
        text-align: center;
    }

    .sobre-content img {
        margin: 0 0 20px 0;
    }
}

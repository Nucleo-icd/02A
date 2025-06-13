document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value;
    const errorMsg = document.getElementById('errorMsg');
    
    // Credenciais fixas
    const LOGIN_CORRETO = "ANATOMIA PATOLOGICA";
    const SENHA_CORRETA = "ambulatorio";
    
    if (login.toUpperCase() === LOGIN_CORRETO && senha === SENHA_CORRETA) {
        // Registrar acesso no Google Sheets
        registrarAcesso(login, "Sucesso");
        
        // Redirecionar para o Power BI
        window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiMWNjY2FhOTMtNGQ4OS00YzRkLThlNjItZjQ5Yjc5MmU1YzU0IiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS04M2Q1LTE5MGE2Y2MwMTM2NSJ9";
    } else {
        // Registrar tentativa falha
        registrarAcesso(login, "Falha");
        
        // Mostrar mensagem de erro e limpar senha
        errorMsg.textContent = "Login ou senha incorretos! Tente novamente.";
        document.getElementById('senha').value = '';
        document.getElementById('senha').focus();
    }
});

function registrarAcesso(login, status) {
    // URL da API do Apps Script (substitua pelo seu)
    const API_URL = "SUA_URL_DA_API_AQUI";
    
    const data = {
        setor: "ANATOMIA PATOLOGICA",
        login: login,
        status: status
    };
    
    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(error => console.error('Erro:', error));
}
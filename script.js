// Script para validar a senha e redirecionar para outra página
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão
  
    var password = document.getElementById('password').value;
  
    // Senha esperada
    var correctPassword = '1234'; // Substitua por sua senha específica
  
    // Verifica se a senha está correta
    if (password === correctPassword) {
      // Redireciona para outra página (pode ser qualquer URL)
      window.location.href = 'pagina-desejada.html'; // Substitua com a URL da página que você quer
    } else {
      alert('Senha incorreta!');
    }
  });
  
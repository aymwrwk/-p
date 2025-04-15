
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const senha = document.getElementById('password').value;
  if (senha === '33') {
    window.location.href = 'xyz.html';
  } else {
    alert("Senha incorreta!");
  }
});

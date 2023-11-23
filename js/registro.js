document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');
  
    registroForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombreValue = document.getElementById('nombres').value;
      const apellidoValue = document.getElementById('apellidos').value;
      const nombreusuario = document.getElementById('usuario')
      const correoValue = document.getElementById('correo').value;
      const contrasenaValue = document.getElementById('contraseña').value;
      const generoValue = document.getElementById('genero').value;
  
      localStorage.setItem('nombres', nombreValue);
      localStorage.setItem('apellidos', apellidoValue);
      localStorage.setItem('usuario', nombreusuario)
      localStorage.setItem('correo', correoValue);
      localStorage.setItem('contraseña', contrasenaValue);
      localStorage.setItem('genero', generoValue);
  
      alert('Registro exitoso');
      registroForm.reset();
  
      window.location.href = '/iniciosesion'; 
    });
  });
  
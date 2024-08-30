function loginWithGoogle() {
    // Lógica para el inicio de sesión con Google
    alert("Iniciar sesión con Google");
    // Aquí deberás integrar el SDK de Google para manejar la autenticación real.
}

function loginWithEmail() {
    // Lógica para el inicio de sesión con email/username
    const email = prompt("Ingresa tu email/username:");
    const password = prompt("Ingresa tu contraseña:");
    // Aquí deberás integrar la lógica del backend para manejar la autenticación con email y contraseña.
    if (email && password) {
        alert(`Inicio de sesión con email: ${email}`);
    } else {
        alert("Email o contraseña incorrectos.");
    }
}

function loginWithApple() {
    // Lógica para el inicio de sesión con Apple
    alert("Iniciar sesión con Apple");
    // Aquí deberás integrar el SDK de Apple para manejar la autenticación real.
}

function loginWithFacebook() {
    // Lógica para el inicio de sesión con Facebook
    alert("Iniciar sesión con Facebook");
    // Aquí deberás integrar el SDK de Facebook para manejar la autenticación real.
}





/* LOGIN GOOGLE */
function loginWithGoogle() {
    gapi.load('auth2', function() {
        const auth2 = gapi.auth2.init({
            client_id: '565811623395-437nfvp1c12oh3r6l6ht22bbufdmdb77.apps.googleusercontent.com',
        });
        auth2.signIn().then(function(googleUser) {
            const profile = googleUser.getBasicProfile();
            alert('Bienvenido ' + profile.getName());
        });
    });
}

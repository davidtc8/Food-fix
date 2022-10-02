loginFormHandler = async (event) => {
    event.preventDefault();

    // const user_name = document.querySelector("#name").value.trim();
    const user_email = document.querySelector("#email").value.trim();
    const user_password = document.querySelector("#password").value.trim();

    console.log('dbeuiwbdeuibeuwi', user_email, user_password)

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: "POST",
            body: JSON.stringify({ user_email, user_password }),
            headers: { "Content-Type": "application/json" },
        });


        if (response.ok) {
            document.location.replace("/calculator");
            // res.render('calculator', { loggedIn: req.session.loggedIn });
        } else {
            alert("Failed to register");
        }
    }
}



const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
};

// document.querySelector('#logout').addEventListener('click', logout);

document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);

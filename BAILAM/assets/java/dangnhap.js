document.addEventListener('DOMContentLoaded', function() {
    
    // --- CÁC BIẾN CẦN DÙNG ---
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLogin = document.getElementById('close-login');
    const loginForm = loginModal ? loginModal.querySelector('form') : null;
    const usernameInput = loginForm ? loginForm.querySelector('input[type="text"]') : null;

    const userLoggedInDiv = document.getElementById('user-logged-in');
    const userNameDisplay = document.getElementById('user-name-display');
    const logoutBtn = document.getElementById('logout-btn');

    function checkLoginStatus() {
        const savedUser = localStorage.getItem('currentUser');

        if (savedUser) {
            if(loginBtn) loginBtn.style.display = 'none';
            if(userLoggedInDiv) {
                userLoggedInDiv.style.display = 'flex';
                userNameDisplay.textContent = savedUser;
            }
        } else {
            if(loginBtn) loginBtn.style.display = 'block';
            if(userLoggedInDiv) userLoggedInDiv.style.display = 'none';
        }
    }

    checkLoginStatus();

    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = usernameInput.value;
            
            if (name.trim() !== "") {
                localStorage.setItem('currentUser', name);
                checkLoginStatus();
                if(loginModal) loginModal.classList.remove('active');
                alert("Đăng nhập thành công! Xin chào " + name);
            }
        });
    }


    if(logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if(confirm("Bạn có chắc muốn đăng xuất không?")) {
                localStorage.removeItem('currentUser');
                checkLoginStatus();
                
                if(usernameInput) usernameInput.value = "";
            }
        });
    }

    if(loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.add('active');
        });
    }
    if(closeLogin) {
        closeLogin.addEventListener('click', function() {
            loginModal.classList.remove('active');
        });
    }
    if(loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
            }
        });
    }
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCart = document.getElementById('close-cart');

    function toggleCart() {
        if(cartModal && cartOverlay) {
            cartModal.classList.toggle('active');
            cartOverlay.classList.toggle('active');
        }
    }

    if(cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleCart();
        });
    }
    if(closeCart) closeCart.addEventListener('click', toggleCart);
    if(cartOverlay) cartOverlay.addEventListener('click', toggleCart);
});
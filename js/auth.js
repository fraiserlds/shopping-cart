var submitBtn = document.getElementById('submitBtn');
if (typeof(submitBtn) != 'underfined' && submitBtn != null) {
    submitBtn.addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (name.length === 0) {
            alert('you have to enter your name!');
            return;
        }
        if (password.length < 6) {
            alert('password needs at least 6 characters');
            return; 
        }
        if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert('email is invalid');
            return;
        }
        var user = {
                'name': name,
                'email': email,
                'password': password
        }
        if (localStorage.getItem('users') == '' || localStorage.getItem('users') == null) {
            var users = [];
        } else {
            // JSON.parse: đưa string mảng về mảng
            var users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        // JSON.stringify: đưa mảng về string mảng
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        alert('Registered Successfully');
        window.location.href = '../login.html';
    });
}

var submitBtnLogin = document.getElementById('submitBtnLogin');
if (typeof(submitBtnLogin) != 'underfined' && submitBtnLogin != null) {
    submitBtnLogin.addEventListener('click', function() {
        var emailLogin = document.getElementById('emailLogin').value;
        var passwordLogin = document.getElementById('passwordLogin').value;
        if (localStorage.getItem('users') != '' && localStorage.getItem('users') != null){
            var users = JSON.parse(localStorage.getItem('users'));
            for (var x of users) {
                if (emailLogin == x.email && passwordLogin == x.password) {
                    localStorage.setItem('name', x.name);
                    localStorage.setItem('email', x.email);
                    localStorage.setItem('isLogin', true);
                    alert('Logged in Successfully');
                    window.location.href = '../index.html';
                    return;
                }
            }
        }
        alert('Email / Password is not correct !');
        document.getElementById('emailLogin').value = '';
        document.getElementById('passwordLogin').value = '';
        
    });
}

//kiểm tra đã đăng nhập hay chưa
if (localStorage.getItem('isLogin') != '' && localStorage.getItem('isLogin') != null) {
    var html = `
    <li>
        <a href="./index.html"><i class="fa-solid fa-house"></i> Trang chủ</a>
    </li>

    <li>
        <a href="#"><i class="fa-solid fa-fish"></i> Giới thiệu</a>
    </li>

    <li>
        <a href="#"><i class="fa-solid fa-newspaper"></i> Tin tức</a>
    </li>

    <li>
        <a href="javascript:void(0)">Hi! ${localStorage.getItem('name')}</a>
    </li>

    <li>
        <a href="javascript:void(0)" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</a>
    </li>`;
}   else {
    var html = `
    <li>
        <a href="./index.html"><i class="fa-solid fa-house"></i> Trang chủ</a>
    </li>

    <li>
        <a href="#"><i class="fa-solid fa-fish"></i> Giới thiệu</a>
    </li>

    <li>
        <a href="#"><i class="fa-solid fa-newspaper"></i> Tin tức</a>
    </li>

    <li>
        <a href="./login.html"><i class="fa-solid fa-user"></i> Đăng nhập</a>
    </li>

    <li>
        <a href="./register.html"><i class="fa-solid fa-right-to-bracket"></i> Đăng ký</a>
    </li>
    `;
}
document.getElementById('menu').innerHTML = html;

function logout() {
    localStorage.removeItem('isLogin');
    window.location.href = 'login.html';
}
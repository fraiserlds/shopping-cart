if (localStorage.getItem('isLogin') != '' && localStorage.getItem('isLogin') != null) {
    alert('You have already logged in!');
    window.location.href = 'index.html';
}
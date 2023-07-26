if (localStorage.getItem('isLogin') === null || localStorage.getItem('isLogin') === 'underfined') {
   alert('Please login !');
   window.location.href = '/admin/login.html'; 
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    var confirmLogout = confirm('Do you want to Logout ?');
    if (confirmLogout) {
        alert('Logout Successfully');
        localStorage.removeItem('isLogin');
        window.location.href = '/admin/login.html';
    }
})
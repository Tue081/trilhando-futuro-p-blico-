document.addEventListener('DOMContentLoaded', () => {
    

    
    const togglePasswordElements = document.querySelectorAll('.toggle-password');

    togglePasswordElements.forEach(toggleElement => {
        toggleElement.addEventListener('click', () => {
            
            const targetId = toggleElement.dataset.target;
            const passwordInput = document.getElementById(targetId);

            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleElement.textContent = '🙈'; 
            } else {
                passwordInput.type = 'password';
                toggleElement.textContent = '👁️'; 
            }
        });
    });

}); 

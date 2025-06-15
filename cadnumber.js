document.addEventListener('DOMContentLoaded', () => {
    
    const inputTelefone = document.getElementById('tel');

    
    inputTelefone.addEventListener('input', (event) => {
        
        let valor = event.target.value;

        
        valor = valor.replace(/\D/g, '');

        
        if (valor.length > 0) {
            valor = `(${valor}`; 
        }
        if (valor.length > 3) {
            valor = `${valor.substring(0, 3)}) ${valor.substring(3)}`; 
        }
        if (valor.length > 10) {
            
            valor = `${valor.substring(0, 10)}-${valor.substring(10, 14)}`;
        } else if (valor.length > 9) {
            
            valor = `${valor.substring(0, 9)}-${valor.substring(9, 13)}`;
        }
        
        
        if (valor.length > 15) { 
            valor = valor.substring(0, 15);
        }

        
        event.target.value = valor;
    });
});
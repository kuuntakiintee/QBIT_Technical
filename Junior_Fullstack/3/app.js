document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('order-form');
    
    if(orderForm) {
        orderForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            try {
                const formData = {
                    name: document.getElementById('name').value,
                    menu: document.getElementById('menu').value,
                    quantity: document.getElementById('quantity').value
                };

                const response = await fetch('/order', { // Ubah ini jadi relatif URL
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();
                
                if(data.success) {
                    alert('Order berhasil!');
                    orderForm.reset();
                } else {
                    alert(data.message || 'Gagal membuat order');
                }
            } catch (error) {
                console.error('Error in form submission:', error);
                alert('Terjadi kesalahan saat membuat order');
            }
        });
    }
});
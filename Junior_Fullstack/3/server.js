const express = require('express');
const path = require('path');
const app = express();

let orders = [];

app.use(express.json());
app.use(express.static('./'));

// Penting: tambahkan ini untuk serve main.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.post('/order', (req, res) => {
    try {
        const order = {
            id: Date.now(),
            name: req.body.name,
            menu: req.body.menu,
            quantity: req.body.quantity,
            status: 'pending',
            orderDate: new Date()
        };
        orders.push(order);
        res.json({ success: true, message: 'Order berhasil dibuat!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Terjadi kesalahan' });
    }
});

app.get('/view-orders', (req, res) => {
    res.json(orders);
})
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
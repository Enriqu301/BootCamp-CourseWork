// amplify/backend/function/mylambda/src/app.js
app.get('/items', function (req, res) {
    const items = ['hello', 'world']
    res.json({ success: 'get call succeed!', items });
});
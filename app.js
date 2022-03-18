const express = require('express');
const path = require('path')
const app = express();
const port = 3030;

app.use(express.static('public'));

app.get('/', (req,res) => {
    return res.sendFile(path.resolve(__dirname,'views','index.html'))
});

app.get('*', (req,res) => {
    return res.sendFile(path.resolve(__dirname, 'views', 'notFound.html'))
})

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`))

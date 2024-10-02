import express from 'express';
const app = express();
const port = 5003;

app.get('/', (req, res) => {
    res.send("Hey");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

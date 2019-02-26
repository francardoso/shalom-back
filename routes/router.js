function router(app){
    app.get('/', (req, res) =>{
        res.send('SHALOM');
    });

    app.post('/addUser', (req, res) =>{
        res.send('pagina home');
    });
}

module.exports = router;

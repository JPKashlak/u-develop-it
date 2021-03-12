const db = require('./db/database')
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

// Use apiRoutes
app.use('/api', apiRoutes);

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default (and final) response for any other request (Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server AFTER db connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
    
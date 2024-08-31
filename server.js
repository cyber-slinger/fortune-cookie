// Require the Express module 
const express = require('express'); 
const child_process = require('child_process');

// Create an Express web application 
const app = express(); 

// Specify how to respond to GET / 
app.get('/', (req, res) => { 

    // Run the system `fortune` command and respond with the message 
    child_process.exec('fortune', (error, message) => { 
        if(error === null) { 
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString(); // Format the date and time

            // Combine the fortune message with the current date and time
            const responseText = `Your fortune is:${message}\nCurrent Date and Time: ${formattedDate}`;
            
            // Send both the fortune message and the current date and time
            res.send(responseText); 
        } else { 
            // In case of error, respond with status 500 and the error message
            res.status(500).send('Error: ' + error); 
        } 
    }) 
}); 

// Start listening for HTTP requests on port 3000 
app.listen(3000, () => { 
    console.log('Server started'); 
}); 
const express = require('express');
const app = express();




app.get('/computation', (req, res) => {
    const lastDigitOfId = 5; 

    
    const randomValue = Math.random() * 100; 

    
    const x = req.query.x || randomValue;

    let fn;
    switch (lastDigitOfId % 4) {
        case 0:
            fn = "square root";
            x = Math.sqrt(x);
            break;
        case 1:
            fn = "sine";
            x = Math.sin(x);
            break;
        case 2:
            fn = "cosine";
            x = Math.cos(x);
            break;
        case 3:
            fn = "tangent";
            x = Math.tan(x);
            break;
    }

    
    const response = `${fn} applied to ${x} is ${x}`;

    
    res.send(response);
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

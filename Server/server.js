const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req , res)=>{
    res.json({
        Message: "Hello",
        Status:"OK"
    });
});

app.listen(3000,()=>{
    console.log("app dang chay o 3000")
});
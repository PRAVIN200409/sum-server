const express=require('express');
const cors=require('cors');

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.post('/api/sum',(req,res)=>{
    const {a,b} = req.body;
    res.json({sum:a+b});
});

app.post('/api/diff',(req,res)=>{
    const {a,b} = req.body;
    res.json({diff:a-b});
});

app.post('/api/mul',(req,res)=>{
    const {a,b} = req.body;
    res.json({mul:a*b});
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
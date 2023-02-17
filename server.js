const express = require('express')
const cors = require('cors')
const e = require('express')

const app = express()

const PORT = process.env.PORT || 8001

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(express.json())

app.get('/', (req,res)=>{
  res.send('hello world')
})

app.post('/calculate', (req,res)=>{
  let {input1, input2, opr} = req.body
  input1 = Number(input1)
  input2 = Number(input2)
  let result = 0
  switch (opr) {
    case 'add':
      result = input1 + input2
      break;

    case 'sub':
    result = input1 - input2
    break;

    case 'multiply':
    result = input1 * input2
    break;

    case 'divide':
    result = input1 / input2
    result = result.toFixed(2)
    break;
  
    default:
      break;
  }
  res.status(200).send(JSON.stringify({"result": result}))
})

app.use(cors(corsOptions))

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})
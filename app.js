import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the main page')
})

app.get('/test', (req, res) => {
  res.send('This is the test page')
})

app.get('/funny', (req, res) => {
  res.send('This is the funny page<br><br>An interview with a representative of the Microsoft company:<br>- The news has become known: the Microsoft company is organizing an expedition to Antarctica. For what purpose do you think?<br>- Crush the penguins?<br>hahahahahahahahahaha')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
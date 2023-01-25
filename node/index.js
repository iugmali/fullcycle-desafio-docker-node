const express = require('express')
const {queryPromise} = require('./queryPromise')

const app = express()
const port = 3000

app.get('/', async (req,res) => {
    const sqlTable = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id));`
    await queryPromise.query(sqlTable)

    const sqlInsertName = `INSERT INTO people(name) values ?;`
    const names = [['Guilherme']]
    await queryPromise.queryMultiple(sqlInsertName, names)

    const sqlSelectPeople = `SELECT * FROM people;`
    const people = await queryPromise.query(sqlSelectPeople)

    const html = `
      <h1>Full Cycle Rocks!</h1>
      <ul>${people.map(person => `<li>${person.name}</li>`).join('')}</ul>
    `
    res.send(html)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
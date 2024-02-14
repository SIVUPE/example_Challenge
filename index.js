import express from 'express'
import {Person} from './Person.js'

const app = express()
const router = express.Router()
const port = +process.env.PORT|| 5000

app.use(
    express.json(),
    router
)
router.get('^/$|/class',(req ,res)=>{
    res.json({
        status:res.statusCode,
        msg: 'You\'re home'
    })
})
router.get('/person1',(req ,res)=>{
    let person1 = new Person()
    person1.FirstName = "shawn"
    person1.LastName =  "Louw"
    person1.Age = 35
    person1.display()
    res.end('Pease check the console')
})
router.get('/person2',(req ,res)=>{
    let person2 = new Person()
    person2.FirstName = "Sivuyisiwe"
    person2.LastName = "Peter"
    person2.Age = 23
    person2.display()
    res.end('Pease check the console')
})
app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})
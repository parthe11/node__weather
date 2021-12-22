
const express = require('express')
const https = require('https')

const app = express()

app.get("/",(req,res)=>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8944fbd8aaa721639b02384d47b67601"
    https.get(url,(response)=>{
        console.log(response.statusCode)
        //const temp = 0;
        response.on("data",(data)=>{
            const weatherData = JSON.parse(data)
            //console.log(weatherData)
            //temp = weatherData.main.temp
            //const desc = weatherData.weather[0].description;
            //console.log(desc)
            res.send("Temperature is:"+  weatherData.main.temp)
        })
    })

    
    
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})
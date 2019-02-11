const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

scrape = () => {
const writeStream = fs.createWriteStream('post.csv');

request('https://www.finanzen.net/aktien/OMXC20-Realtimekurse', (error, response, html) => {
    console.log("scraping...")
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        const stockPath = '.table-vertical-center > :nth-child(3)'
        stockData = []
        for (let i = 1; i < 19; i++) {
            for (let u = 1; u <= 8; u++) {

                writeStockData = $(stockPath + ` > :nth-child(${i}) > :nth-child(${u})`).text()
                if (u < 8) { writeStream.write(writeStockData + ';') }
                else writeStream.write(writeStockData + ' \n')

            }
        }
        console.log(stockData)
    }
})
}

module.exports = scrape
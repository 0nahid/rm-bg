const os = require('os')
const cp = require('child_process')
const express = require('express')
const path = require('path')
const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const removebg = require('removebg-id')

const app = express()
const port = process.env.PORT || 8000 || 3000


// RemoveBG
app.get('/api/removebg', (req, res) => {
	let url = req.query.url
	if (!(url || isUrl(url))) return res.status(400).json({ message: "Input parameter url" })
	removebg.FromUrl(url, '2mZbr62TiNKYw3rFPPtb4BYn').then(async () => res.status(200).sendFile(process.cwd() + '/hasil-url.png')).catch(err => res.status(400).json({ error: String(err) }))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

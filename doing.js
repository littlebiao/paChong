const axios = require('axios');
const fs = require('fs');

    // fs.appendFile('log.txt', str, (err) => {
    //   console.log(err)
    // })

axios.get('https://yoursri.com/companies/', {
    b_start: 'int=100'
}).then((res) => {
    console.log(res)
})




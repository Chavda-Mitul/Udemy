const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');
// const mailchimpClient = require("mailchimp_transactional")("c02fc0fb9ea88cf3afd05e526e2796cd-us10");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          EMAIL: email,
        },
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us10api.mailchimp.com/3.0/lists/39a32dee58";
  const options = {
    methods: "POST",
    auth: "Mitul:c02fc0fb9ea88cf3afd05e526e2796cd-us10",

  }
  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    })
  });
  if (request.statusCode == 200) {
    res.send('Successfully subscribed');
  } else {
    res.send('error while signing up please try again');
  }
  request.write(jsonData);
  request.end();
});




app.listen(3000, () => {
  console.log('Server is spinning');
})
//List id
//39a32dee58
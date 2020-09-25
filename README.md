# REST API Example (Scrap Bot)
This a sample REST API for sending search values (JSON) via POST request, start the Scrap Bot and then send the results back as response.

<br />
<br />
This project is just a sample REST API layout and does not include the main Scrap Bot.

<br />
<br />



Database: **MongoDB**
<br /> Framework: **Express.js**

<br />
<br />

## Features
- LIMIT requests
- Auth via Token
- Check if data already exist in database to avoid duplicates
- Return scrapped data JSON back as response



<br />
<br />


_______________________________________

<br />
<br />


## Sample POST request
```bash
curl --location --request POST 'http://localhost:1337/apollo' \
--header 'Authorization: hhJKJ669779889hHjjhhnnkTTrge44TTbbbf' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
      "url": "https://sample-search-link",
      "used": 0,
      "description": "Sample search link.."
    }
]'
```


You can define your database name inside of your config file (**config.json**). 
<br /><br />
We use the **Authorization Header** at the POST request for our Auth Token! Create in your database a collection called **auth** and insert your token like this:
```javascript
{
    "token": "hhJKJ669779889hHjjhhnnkTTrge44TTbbbf"
}
```

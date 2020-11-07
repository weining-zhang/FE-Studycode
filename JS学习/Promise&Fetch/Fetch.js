fetch('http://api.qingyunke.com/api.php?key=free&appid=0&msg=')
.then(response=>response.json())
.then(data=>console.log(data))
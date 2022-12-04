/
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recap</title>
    <link rel="icon" href="/images/images.ico">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <!-- header start -->
    <section id="header">

    </section>
    <!-- header end -->

    <!-- hero start -->
    <section id="hero">
        <div class="content">
            <h1>Welcome To Our Recap Session</h1>
        <h3>Let's begin with us</h3>
        <Button id="demo" onclick="fun()">Learn more</Button>
        </div>
    </section>
    <!-- hero end -->
    <script src="js/index.js"></script>
</body>
</html>*/
kk
*{
    margin: 0;
    padding: 0;
}


#hero{
    height: 100vh;
    background: url(../images/pexels.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: grid;
    justify-content: center;
    align-items: center;

}
#hero .content{
    height: 400px;
    width: 100%;
    text-align: center;
    margin-top: 300px;
}

#hero h1{
font-size: 70px;
}

#hero button{
    padding: 10px 40px;
    margin-top: 10px;
    text-transform: uppercase;
    background: linear-gradient(to left, tomato,red);
    color: black;
    border: 1px solid tomato;
    border-radius: 5px;
    cursor: pointer;

}
#hero button:hover{
    background: linear-gradient(to left,red,tomato);
}
Hasanur
function fun(){
    alert("click keno korla??");
}
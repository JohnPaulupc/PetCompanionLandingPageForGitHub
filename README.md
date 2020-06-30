body {
    margin: 0;
    background: white;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
}

body::-webkit-scrollbar{
    width: 0.5rem;
}

body::-webkit-scrollbar-track{
    background-color: #455954;
}

body::-webkit-scrollbar-thumb{
    background-color: #9d7463;
}

body::-webkit-scrollbar:horizontal {
    display: none;
}
.logo {
    height: 10vw;
    width: 10vw;
    padding-top: 1vh;
}

#banner {
    background-image: url('../img/PetC4.jpg') ;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: auto;
}

.title_h1{
    padding-top: 20vh;
    color: white;
    text-align: center;
}

.title_h1_rest {
    color: white;
    text-align: center;
}

.icon {
    display: block;
    padding-top: 10px;
    margin-left: 10px;
    margin-right: auto;
    height: 5vh;
    width: auto;
}

#nav-menu{
    display: flex;
}

#nav-menu ul{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-between;
}

#nav-menu li{
    padding-right: 2vw;
    padding-top: 1.5vh;
    cursor: pointer;
}
#nav-menu p {
    color:white;
    font-size:0.70rem;
}
#nav-menu a {
    color:white;
    font-size:0.70rem;
    text-decoration: none;
}
#title {
    position: relative;
    height: 0.1vh;
    padding-top: 1.5vh;
    font-size: 1.5rem;
    color: white;
}

h1 {
    color: #3c3c3c;
}

h2{
    color: #3c3c3c;
    text-align: center;
}

.grid-wrapper{
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 0;
    margin-top: auto;
}

#Reviews > .grid-wrapper {
    margin-top: 100px;
}
.grid-wrapper2{
    display: grid;
    grid-template-columns:1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0;
}

.grid-wrapper4{
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 0;
}
.grid-wrapper-Nav{
    display: grid;
    grid-template-columns:1fr 2fr 1fr ;
    grid-template-rows: 1fr;
    grid-gap: 0;
    align-content: flex-start;
}

.grid-wrapper8 .logo {
    position: relative;
}

.grid-wrapper8 #title {
    position: relative;
}

.grid-wrapper h1{
    text-align: center;
    position: absolute;
    border-radius: 10px;
}

.showcase {
    background-color: white;
    height: 50vh;
    width: 100vw;
    overflow: hidden;
}

.showcase h1 {
    color: #3c3c3c;
}

.showcase h2{
    position: relative;
    top: 3vh;
}

.showcase h3{
    text-align: center;
    padding-top: 1vh;
}

.showcase p{
    text-align: center;
    font-family: 'Roboto',sans-serif;
}

.item {
    display: block;
    max-width: 80%;
    margin: auto;
    height: auto;
}

.gallery{
    padding-top: 1vh;
    padding-bottom: 1vh;
    height: 35vh;
    width: auto;
}
.team_pic {
    padding-top: 1vh;
    height: 20vh;
    width: auto;
}
.team {
    height: 70vh;
}

.card > h3 {
    color: #3c3c3c;
}

.card > p {
    color: #3c3c3c;
    font-family: 'Roboto',sans-serif;
}

.card {
    background-color: white;
    margin: 10px;
}
#Reviews > .card {
    margin-top: 200px;
}
.zone {
    color: #FFFFFF;
    font-size: 1em;
}

.wth_bot_borders {
    border-bottom: solid #dfdbd8;
}

.wth_borders {
    border-style: solid;
    border-color: #dfdbd8;
}
.download_PlayStore {
    display: inline-block;
    width: 35vh;
    height: auto;
    margin: auto;
    padding-top: 150px;
    cursor: pointer;
}

.download_AppStore {
    display: block;
    width: 35vh;
    height: auto;
    margin: auto;
    padding-top: 150px;
    cursor: pointer;
}

.learnMoreIcon {
    display: block;
    width: 20vh;
    height: auto;
    margin: auto;
    padding-top: 50px;
    cursor: pointer;
}

.container {
    display: flex;
    justify-content: space-between;
}
footer {
    height: 100px;
}

footer p {
    text-align: center;
    color: #3c3c3c;
    font-family: 'Roboto',sans-serif;
}

.grid-wrapper2{
    display: grid;
    padding-left: 30vw;
    grid-template-columns:100px 200px;
    grid-template-rows: 1fr;
    align-content: center;
    justify-content: center;
    grid-gap: 20px;
    padding-top: 30px;
}


.grid-wrapper2 p{
    color: #3c3c3c;
    font-family: 'Roboto',sans-serif;
    margin-top: auto;

}
.flex-contact > p {
    color: #3c3c3c;
    font-family: 'Roboto',sans-serif;
    margin-top: auto;
}
.grid-wrapper3 {
    display: grid;
    grid-template-columns:100px 300px 100px;
    grid-template-rows: 1fr;
    align-items: center;
    padding-top: 100px;
    grid-gap:100px;
    padding-left: 20vw;
}

#premium-container{
    display: flex;
    flex-direction: row;
    align-items: start;
    margin-top: 100px;
}
#premium-container > .icon {
    margin-left: auto;
    margin-right: 0;
}

#premium-container > p {
    margin-right: auto;
    margin-left: 25px;
}
.flex-contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.flex-contact > .icon {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    cursor: pointer;
}

.grid-wrapper3 p{
    color: #3c3c3c;
    font-family: 'Roboto',sans-serif;
    align-content: center;
}

.leather {
    border-color: #9d7463;
}

.forrest_green {
    border-color: #455954;
}
#hidden_plans{
    display: none;
}
.grid-wrapper-price {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: 300px;
    justify-content: center;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
}
.price_card {
    display: flex;
    flex-direction: column;
    margin-top: auto;

}
#hidden_plans h3 {
    font-size: 2.5rem;
    margin-top: 75px;
}
#hidden_plans p {
    margin-top: auto;
}

#Premium .showcase {
    height: auto;
}
@media screen and (max-width: 600px){
    .grid-wrapper-Nav {
        grid-template-columns:1fr;
        grid-template-rows: 1fr 1fr 1fr;
        align-content: center;
        margin-left: auto;
        margin-right: auto;
    }
    #nav-menu {
        justify-content: center;
    }
    #nav_menu ul{
        margin-left: auto;
        margin-right: auto;
        flex-direction: row;
        justify-content: center;
    }
    #title{
        margin-left: auto;
        margin-right: auto;
        font-size: 2.5rem;
        margin-top: auto;
        padding-top: 0;
    }
    .title_h1 {
        margin-top: auto;
    }
    .logo {
        margin-left: auto;
        margin-right: auto;
        width: 20vw;
        height: auto;
    }
}

@media screen and (max-width: 850px) {
    .showcase {
        height: auto;
    }
    .grid-wrapper {
        display: flex;
        flex-direction: column;
    }
    .container {
        flex-direction: column;
        justify-content: space-between;
    }
    .grid-wrapper4 {
        display: flex;
        flex-direction: column;
    }
}






p {
    padding: 5px;
    color: black;
}


body{
    margin: 0 auto;
    font-family: Helvetica, sans-serif;
}

.zone:hover{
    box-shadow: rgba(29, 21, 21, 0.92) 0px 5px 15px,inset rgb(17, 17, 16) 0px -10px 20px;
}
.main-nav
{
    display: flex;
    list-style: none;
    margin: 0;
    font-size: 0.6em;

}
a:hover
{
    color: #0ea8d4;
}
.push{
    margin-left: auto;
}
li{
    padding: 20px;
}
a{
    color: #fcfcfc;
    text-decoration: none;
}


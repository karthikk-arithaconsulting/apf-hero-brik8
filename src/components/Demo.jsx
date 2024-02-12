<div className="GroupTwo-Hero-Content">
                    <Title  className="GroupTwo-subTitle-Tag">group two title</Title>
                   
                    <Title className="GroupTwo-mainTitle-Tag">group two title </Title> 
                    
                    <Text className="GroupTwo-mainText-Tag">group text two</Text>
                    <Button  className="GroupTwo-Button-Tag">learn more</Button>
                </div>

                <div className="GroupThree-Hero-Content">
                    <Title   className="GroupThree-subTitle-Tag">group three title</Title>
                   
                    <Title className="GroupThree-mainTitle-Tag">group three main title </Title> 
                    
                    <Text  className="GroupThree-mainText-Tag">group three text</Text>
                    <Button  className="GroupThree-Button-Tag">Learn more</Button>
                </div>


/*  */

.GroupTwo-Hero-Content{
    height:90%;
    width: 90%;
    /* border: 2px solid black; */
    position: absolute; 
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
}

.GroupTwo-subTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 7%;
    text-align: justify;
}


.GroupTwo-mainTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align:start;
}


.GroupTwo-mainText-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align: justify;
}

.GroupTwo-Button-Tag{
    display: flex;
    margin-top:2%;
}

/*  */

.GroupThree-Hero-Content{
    height:90%;
    width: 90%;
    /* border: 2px solid black; */
    position: absolute; 
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
}

.GroupThree-subTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 7%;
    text-align: justify;
}


.GroupThree-mainTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align:start;
}


.GroupThree-mainText-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align: justify;
}

.GroupThree-Button-Tag{
    display: flex;
    margin-top:2%;
}



/*  */

.GroupThree-subTitle-Tag{
    animation: slideInDown 3s ease forwards;
}

.GroupThree-mainTitle-Tag{
    animation: slideInRight 3s ease forwards;
}
.GroupThree-mainText-Tag, .GroupThree-Button-Tag{
    animation: slideInUp 3s ease forwards;
}

.GroupThree-Hero-Content{
    animation: disappear 14s ease forwards;
    animation-delay: 6s;
}


/*  */

.GroupTwo-subTitle-Tag{
    animation: slideInDown 3s ease forwards;
}

.GroupTwo-mainTitle-Tag{
    animation: slideInRight 3s ease forwards;
}
.GroupTwo-mainText-Tag, .GroupTwo-Button-Tag{
    animation: slideInUp 3s ease forwards;
}

.GroupTwo-Hero-Content{
    animation: disappear 7s ease forwards; 
    animation-delay: 6s; 
}
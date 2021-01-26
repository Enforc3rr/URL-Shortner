# URL-Shortner
This Application is Based on Nodejs And Basically helps us to shorten by letting us give our URL desired name.

## End Points 

##### To Give an Alias To Particular URL -> POST @ http://host:PORT/

##### To Give an Visit To Particular URL -> POST @ http://host:PORT/:AliasGiven

#### Format Of JSON Which Needs To Be Passed 
{
  "altUrlName":"Name",
  "originalUrl":"URL"
}

### Database Model Depiction 
_id : 60105485d29d482f44c774e3   
altUrlName : "twt"   
originalUrl : "http://www.twitter.com"   
newUrl : "http://host:PORT/twt"   

### Working 
![Working](LinkShortner.gif)

#### Packages Used 
1) Express.Js
2) Moments
3) Mongoose



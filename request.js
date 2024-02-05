//Create a function for the parameters and encode them properly
//https://en.wikipedia.org/wiki/Query_string
function toQueryString(url,parameters){
  if(parameters != null){
    if(typeof(parameters) == "object"){
      var parametersArray = [];
      //For each parameter
      var keys = Object.keys(parameters);
      for(var i = 0; i < keys.length; i++){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        parametersArray.push(encodeURIComponent(keys[i]) + "=" + encodeURIComponent(parameters[keys[i]]));
      }
      //Add the ?
      url += "?";
      //Join the parameters
      url += parametersArray.join("&");
    }
  }
  return url;
}
async function fetchAnActivity(){
  var fetchedSuccessfully = false;
  var response;
  while(!fetchedSuccessfully){
    response = await fetch(toQueryString("http://www.boredapi.com/api/activity/"),{
      method: "GET",
      mode: "cors",
    });
    fetchedSuccessfully = response.ok;
  }
  return await response.text();
}
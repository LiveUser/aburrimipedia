
async function loadMoreContent(){
  var activityJSON = await fetchAnActivity();
  addActivityWidget(activityJSON);
}
function addActivityWidget(activityJSON){
  var parsedJSON = JSON.parse(activityJSON);
  var containerContent = document.getElementById("suggestionsBox").innerHTML;
  if(containerContent == "Suggestions to kill time will appear here. Please be patient."){
    //Clear content
    document.getElementById("suggestionsBox").innerHTML = "";
  }
  //Add widget
  var widget = suggestion;
  widget = widget.replace("[Idea]",parsedJSON["activity"]);
  //Add the widget to the document
  document.getElementById("suggestionsBox").innerHTML += widget;
}
window.onload = async function() {
  await loadMoreContent();
  //Enable load more button
  document.getElementById("loadMore").addEventListener("click", loadMoreContent);
};

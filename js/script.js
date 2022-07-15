let years = ["2016", "2017", "2018", "2019"];
var wheat = [];
var rice = [];

function display(e) {
  
  var wheat = [];
  var rice = [];

  wheat = [1000,1200,1200,1100];
  rice = [900,1000,1100,1200];

  var ctx = document.getElementById("mygraph")
  
  var mygraph = new Chart(ctx,{
    type:'line',
    data:{
        labels:years,
        datasets:[
            {
                data:wheat,
                label:"wheat",
                borderColor:"red",
                fill:false
            },
            {
                data:rice,
                label:"rice",
                borderColor:"blue",
                fill:false
            }
        ]
    }
  })
}





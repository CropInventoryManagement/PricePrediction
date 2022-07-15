const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links .li");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    })
})

let years = ["2022", "2023", "2024", "2025","2026"];
var wheat = [];
var rice = [];

function display(e) {
  
  var wheat = [];
  var rice = [];

  wheat = [1000,1200,1200,1100,1300];
  rice = [900,1000,1100,1200,1400];
  cotton = [900,1000,1100,1200,1400];
  barley = [900,1000,1100,1200,1400];
  grain = [900,1000,1100,1200,1400];
  jute = [900,1000,1100,1200,1400];
  

  var ctx = document.getElementById("mygraph")

const form = document.querySelector('form[name="crop-form"]');
let cType = form.elements['crop_values'].value;

if(cType==='wheat'){
    var mygraph = new Chart(ctx,{
        type:'line',
        data:{
            labels:years,
            datasets:[
                {
                    data:wheat,
                    label:"wheat",
                    borderColor:"green",
                    fill:false
                }
            ]
        }
      })
}else if(cType=='rice'){
    var mygraph = new Chart(ctx,{
        type:'line',
        data:{
            labels:years,
            datasets:[
                {
                    data:rice,
                    label:"rice",
                    borderColor:"green",
                    fill:false
                }
            ]
        }
      })
}else if(cType=='cotton'){
    var mygraph = new Chart(ctx,{
        type:'line',
        data:{
            labels:years,
            datasets:[
                {
                    data:cotton,
                    label:"cotton",
                    borderColor:"green",
                    fill:false
                }
            ]
        }
      })
}else if(cType=='barley'){
    var mygraph = new Chart(ctx,{
        type:'line',
        data:{
            labels:years,
            datasets:[
                {
                    data:barley,
                    label:"barley",
                    borderColor:"green",
                    fill:false
                }
            ]
        }
      })
}else if(cType=='grain'){
    var mygraph = new Chart(ctx,{
        type:'line',
        data:{
            labels:years,
            datasets:[
                {
                    data:grain,
                    label:"grain",
                    borderColor:"green",
                    fill:false
                }
            ]
        }
      })
}else if(cType=='jute'){
    var mygraph = new Chart(ctx,{
        type:'line',
        data:{
            labels:years,
            datasets:[
                {
                    data:jute,
                    label:"jute",
                    borderColor:"green",
                    fill:false
                }
            ]
        }
      })
}

  
  
}


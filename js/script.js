// var links =document.querySelector(".links")
// var box =document.querySelector(".hea")
// var put1=document.querySelector("#but1")
// var put2=document.querySelector("#but2")
// var itm =localStorage.getItem("username")
// var us =document.querySelector(".user")
// if (window.onload){
//     put1.style.display="block"
//     put2.style.display="block"
//     itm.style.display="none"

// }

// if (localStorage.getItem="username"){
//     us.style.display="block"
   
//     put1.remove()
//     us.innerHTML=itm
//     us.style.fontSize="25px"
    
//     box.style.color="orange"
// }

// let allProducts =document.querySelector(".contents")
// let prodects =[
//     {
//         id:1,
//         images:"images/img5.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #00fbff",
//         wordcolor:"rgb(7, 222, 230)",
//         butcolor:"btn btn-outline-info",
//         iconcolor:"rgb(7, 222, 230)",
//         title:"Ferrari ",
//         sub:"Ferrari 296 GTB 2022 is a rechargeable sports hybrid car, revealed by the Italian supercar maker last year and presented asthe first real production Ferrari car to be equipped with a six-cylinder engine (6-cylinder), where the number 296 refers to the engine capacity and the number of cylinders, while the GTB stands for Ferry Gran Turismo Berlinetta",
        
        
//     },
//     {
//         id:2,
//         images:"images/img2.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #1a1a1a ",
//         wordcolor:"rgb(43, 40, 40)",
//         butcolor:"btn btn-outline-dark",
//         iconcolor:"rgb(43, 40, 40)",
//         title:"Ferrari Sport",
//         sub:"Ferrari features a large front grille located at the front of the car, which is divided into several sections to improve the car's aerodynamics. The headlights are designed horizontally and wide, directed towards the hood.It also has elliptical air vents located on the sides of the car. Ferrari has a rear spoiler with a sporty design.The tires are large",
        
//     },
//     {
//         id:3,
//         images:"images/yellow3.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #d8db09 ",
//         wordcolor:"rgb(190, 190, 0)",
//         butcolor:"btn btn-outline-warning",
//         iconcolor:"rgb(190, 190, 0)",
//         title:"Mercedes",
//         sub:"Mercedes-Benz AMG engines are among the engines that have won the confidence of various car enthusiasts around the world, especially after the great success it has achieved since its inception. Next, we will talk about the most powerful Mercedes-Benz AMG engines in history:AMG at Mercedes consists of several departments such as the management departmen.",
       

//     },
//     {
//         id:4,
//         images:"images/img11.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #f30808",
//         wordcolor:"#f30808",
//         butcolor:"btn btn-outline-danger",
//         iconcolor:"#f30808",
//         title:"Bugatti",
//         sub:"Bugatti is currently a leading car company in the manufacture of luxury and distinguished cars, as it is one of the companies that are at the forefront of the global automotive market, as it has a long heritage that gives inspiration to the designers and engineers who manufacture modern models from the Bugatti company,",
        

//     },
//     {
//         id:5,
//         images:"images/img55.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px gray",
//         wordcolor:"gray",
//         butcolor:"btn-outline-secondary",
//         iconcolor:"gray",
//         title:"Mercedes 2022",
//         sub:"The last technology is among the latest 8 great technologies for Mercedes, where Mercedes stated that it will not use laser-powered lights because it is not convinced of them, but this does not mean the development of lighting in cars. Mercedes has developed the LED lights in the car in a large and advanced way, and it excelled in the tests.",
       

//     },
// ]

// function drawItems (){
//     let S =prodects.map((item)=>{
//         return `
//         <div class="contents">
//         <div class="prod1" style="margin-top: 20px;  ${item.boxshadow}">
//             <div class="desc1">
//                 <div class="img">
//                     <img src="${item.images}" alt="" style="width: 280px; height: 300px;" >
//                 </div>
//                 <div class="words">
//                 <span class="wo1" style="font-size: 30px; color: ${item.wordcolor}">${item.title}</span>
//                 <br>
//                     <span style="color: ${item.wordcolor}">${item.sub}</span>
//                 </div>
//                 <div class="button" >
//                     <button type="button" id="but11"  class="${item.butcolor}"onClick="add(${item.id})" >Add To Cart</button>
//                 </div>
//             </div>
//             <br>
//             <br>
//             <div class="icon">
//                <i class="far fa-heart"  style="font-size: 25px; color:${item.iconcolor} ; "></i>
//             </div>
//         </div>
//     </div>
//     <br>
//     <br> 
    
//     `

//     })
//     allProducts.innerHTML=S
// }

// drawItems()
// var kj =document.querySelector(".co")

// function add(id) {
    
//     let choose=prodects.find((item) => item.id === id )
    
//    kj.innerHTML += `<p> ${choose.title} </p>`
// }

// var op =document.querySelector(".i55")

// op.addEventListener("click" ,function(){
//     kj.style.display="block"
// })

// op.addEventListener("dblclick" ,function(){
//     kj.style.display="none"
//     kj.innerHTML=""
// })

var pic2=document.getElementById("ir")
var pic1=document.getElementById("im")

pic2.style.visibility="hidden"
pic1.addEventListener("click",function() {
    pic2.style.visibility="visible"
})


var qw=document.getElementById("as");
var bh=document.getElementById("kl");
qw.addEventListener("click",function() {
    bh.style.marginTop="450px"
})
var df =document.getElementById("bz")
window.onscroll=function() {
    let value =scrollY;
    if (scrollY<=1270) {
        df.style.display="none";
  
      }
    if (scrollY>=1312) {
      df.style.display="block";

    }
}

var fw =document.querySelector(".st");
window.onscroll=function bmw() {
    let as =scrollY;
    
    if (scrollY<=3300) {
        fw.style.display="none";
  
      }
    if (scrollY>=2300) {
      fw.style.display="block";
      

    }

}
// bmw();


let myname="Mercedes-Benz history began in 1886 when engineer Karl Benz invented the world’s first car. For nearly a century, our mission has been to move the world. This pioneered a path of innovation and technology which remains with us today. At Gargash Enterprises we consider our role as custodians of this proud lineage and more importantly carrying out this role in true Mercedes-Benz tradition: offering outstanding quality with unrivalled service  Established in 1958, Gargash is the authorized distributor of Mercedes-Benz in Dubai, Sharjah, and the Northern Emirates. Our global expertise, understanding of local markets and regional insights enable us to deliver integrated, innovative and better service & solutions to all UAE customers. At Gargash Enterprises, customers are guaranteed premium quality products with superior service and after-sales service"


let index =1;
function writeTitle() {
  var cd=document.querySelector(".zp");
  cd.textContent=myname.slice(0,index);
  index++;
  if(index>myname.length) {
    index=myname.length;
  }
}
setInterval(function() {writeTitle()

},50)


var ew1=document.getElementById("u1")
var ew2=document.getElementById("u2")
var ew3=document.getElementById("u3")
var ew4=document.getElementById("u4")
var ew5=document.getElementById("u5")

var to1=document.querySelector(".kz1")
var to2=document.querySelector(".kz2")
var to3=document.querySelector(".kz3")
var to4=document.querySelector(".kz4")
var to5=document.querySelector(".kz5")

// to1.style.display="none"
// to2.style.display="none"
to1.style.position="absolute"
to2.style.position="absolute"
to3.style.position="absolute"
to4.style.position="absolute"
to5.style.position="absolute"

to1.style.visibility="visible"
to2.style.visibility="hidden"
to3.style.visibility="hidden"
to4.style.visibility="hidden"
to5.style.visibility="hidden"

ew1.addEventListener("click",function(){
    to1.style.visibility="visible"
    to2.style.visibility="hidden"
    to3.style.visibility="hidden"
    to4.style.visibility="hidden"
    to5.style.visibility="hidden"
})

ew2.addEventListener("click",function(){
    to1.style.visibility="hidden"
    to2.style.visibility="visible"
    to3.style.visibility="hidden"
    to4.style.visibility="hidden"
    to5.style.visibility="hidden"
})

ew3.addEventListener("click",function(){
    to1.style.visibility="hidden"
    to2.style.visibility="hidden"
    to3.style.visibility="visible"
    to4.style.visibility="hidden"
    to5.style.visibility="hidden"
})

ew4.addEventListener("click",function(){
    to1.style.visibility="hidden"
    to1.style.visibility="hidden"
    to3.style.visibility="hidden"
    to4.style.visibility="visible"
    to5.style.visibility="hidden"
})

ew5.addEventListener("click",function(){
    to1.style.visibility="hidden"
    to2.style.visibility="hidden"
    to3.style.visibility="hidden"
    to4.style.visibility="hidden"
    to5.style.visibility="visible"
})

var mor =document.getElementById("des")
var hov=document.querySelector(".rays")
var ba =document.getElementById("bac")
var fro1=document.querySelector(".asd1")
var fro2=document.querySelector(".asd2")
var pc =document.querySelector(".price")
var sd =document.querySelector("#pu")
pc.style.display="none"
fro1.style.zIndex="1"
mor.addEventListener("click" ,function () {
  hov.style.transform="rotateX(180deg)"
  hov.style.transition="1s"
})
ba.addEventListener("click" ,function () {

  hov.style.transform="rotateX(0deg)"

})
sd.addEventListener("click" ,function(){
  pc.style.display="block"
})

// let allProducts =document.querySelector(".cond1")
// let prodects=[
//   {
//     title:"Cathedral Watch Hands",
//     img:"images/wa16.jpg",
//     int:"The Fluer de Lys is a decorative design or motif often seen in religious designs and many European family coats of arms, including the royal families. ",
//     pap:"often associated with the Catholic church, especially Saint Joseph. The one watchmaker that stands out is manufacturer Czapek & Cie which uses Fluer de Lys hands on several of their watchesLance hands are very similar to the Alpha style, however, they tend to be more slender. Named for the long slender shape of the hands, similar to the long, pointed weapon used by horsemen in jousting. The lance hands gradually taper out from the center to a narrow pointed end. Similar to sword hands but a much more slender profile which makes them practical for dress watches..",
//     pric:"25000$",
//   }
// ]

// function drawItems (){
//       let S =prodects.map((item)=>{
//         return `
//         <div class="cond1">
//                 <div class="zxc" style="height: 700px; border-radius: 50px;  width: 350px; height:700px; ;background-image: linear-gradient(180deg,rgb(161, 161, 161),rgb(92, 91, 91),rgb(48, 45, 45))">
//                  <div class="rays" >
//                    <div class="asd1">
//                      <h4 style="font-weight: bold; color: whitesmoke;">${item.title}</h6>
//                      <img src="${item.img}" alt="" style="width: 300px; height: 300px; border-radius: 50px;margin-top: 30px ;">
//                     <span style="font-size: 20px;font-weight: bold; color: whitesmoke; ">${item.int}</span>
                   
//                    </div>
//                    <div class="asd2">
//                      <span style="padding-top: 30px; padding-left: 7px; font-size: 20px; color: whitesmoke; font-weight: bold;">${item.pap} </span>
      
//                    </div>
                
//                  </div>
//                  <div class="bu" >
                  
//                    <button id="des" style="width:150px; margin-top: 20px;margin-left: 20px; "  type="button" class="btn btn-outline-secondary">More Details</button>
//                    <button id="bac" style="width:150px; margin-top: 20px;  "   type="button" class="btn btn-outline-secondary">Go BACK</button>
//                    <br>
                  
//                    <button id="pu" style="width:300px; margin-left: 20px; margin-top: 20px; " type="button" class="btn btn-outline-secondary">Show price</button>
//                      <div class="price" style="width: 300px; height: 40px; margin-top: 10px; border-radius: 50px; margin-left: 20px; border: 1px solid gray; ">
//                       <span style="color: white; font-size: 20px; padding-left: 120px; ">${item.pric}</span>
//                     </div>
//                  </div>
//                 </div>
//                </div>


//         `
//       })
//       allProducts.innerHTML=S
// }
// drawItems()
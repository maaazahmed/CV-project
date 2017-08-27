  //////////////////PROJECTS/////////////////////////////////////
  

document.getElementsByTagName("li").className="projecStyle";
   function linkButton(linkID){ 
       var linkName = document.getElementById(linkID).value; console.log(linkName)
       var unOrderdList = document.getElementById("unOrderdList");
       document.getElementById(linkID).className="liField";
       var createLi = document.createElement("LI");
       var create_A_Node = document.createElement("A"); 
       create_A_Node.className="projecStyle";
       var givAtt = create_A_Node.setAttribute("href",linkName)
       var givAtt = create_A_Node.setAttribute("target","_blanck")       
       var A_Text = document.createTextNode(linkName); 
       create_A_Node.appendChild(A_Text);
       createLi.appendChild(create_A_Node);
       unOrderdList.appendChild(createLi);
       document.getElementById(linkID).value = "";          
}

//////////////OTHER DATA///////////////////////
 var attechData = {};
function firstPratOfData(uName,fName,address,mail,contect,aspiration,degree,board,institutino,trade,division,year,skills,photo){
 var nameData = document.getElementById(uName).value;         
 var fatherData = document.getElementById(fName).value;        
 var addressData = document.getElementById(address).value;     
 var mailData = document.getElementById(mail).value;           
 var contectData = document.getElementById(contect).value;   
 var language = document.getElementById('myLanguages').value; 
 var aspirationData = document.getElementById('userAspiration').value;    
 var degreeData = document.getElementById(degree).value;      
 var boardData = document.getElementById(board).value;        
 var institutinoData = document.getElementById(institutino).value; 
 var tradeData = document.getElementById(trade).value;         
 var divisionData = document.getElementById(division).value;   
 var yearData = document.getElementById(year).value;          
 var skillsData = document.getElementById('skillsOfCom').value;             
 var userPhoto = document.getElementById(photo).files;         
 var form = document.getElementById('form');   
 var view = document.getElementById('view');       
 form.style.display='none';
 view.style.display='block';
  userPhoto = userPhoto.toString();

       attechData.nameOfUser = nameData
       attechData.fatherOfUser= fatherData
       attechData.userAddress= addressData
       attechData.userEmail = mailData
       attechData.userContect= contectData
       attechData.UserLanguages = language
       attechData.useraspiration = aspirationData
       attechData.userDegree = degreeData
       attechData.userboard = boardData
       attechData.dataInstitutino = institutinoData
       attechData.userTrade = tradeData
       attechData.userDivision = divisionData
       attechData.passingYear= yearData
       attechData.userSkills= skillsData
       attechData.userLink=unOrderdList
       attechData.img=attechData.img
       
  // console.log(attechData.userContect)   
 if(attechData.nameOfUser.length === 0){
   alert("Please enter your name!");
  form.style.display='block';
  view.style.display='none';
  return false;
 }
  else{
   document.getElementById('userName').innerHTML = attechData.nameOfUser.toUpperCase();
   var classAtech =  document.getElementById("soneOf").innerHTML = "S/o";
       document.getElementById("soneOf").className='span';
 }
  if(attechData.fatherOfUser.length === 0){
   alert("Please enter your Father's name!");
   form.style.display='block';
   view.style.display='none';
   return false;
}
  else {
   document.getElementById('yourFather').innerHTML = attechData.fatherOfUser; 
}

 if(attechData.userAddress.length === 0){
   alert("Please enter your home address!");
   form.style.display='block';
   view.style.display='none';
   return false;
}
 else{
     document.getElementById('homeAddress').innerHTML = attechData.userAddress;
     document.getElementById("homeAddress").className='address';
}
  if(attechData.userEmail.length === 0){
     alert("Enter your Email addrass");
      form.style.display='block';
   view.style.display='none';
     return false;
 } 
  else {  document.getElementById("emailLink").innerHTML = "Email: ";     
         document.getElementById("emailLink").className = "contactNum";
            
          document.getElementById("myEmail").href = attechData.userEmail;
          document.getElementById("myEmail").setAttribute("target","_blanck"); 
          document.getElementById("myEmail"). innerHTML = attechData.userEmail;          
          document.getElementById("myEmail").className='email';
}
  if (attechData.userContect.length === 0) {
     alert ("enter your correct contact number")
      form.style.display="block";
      view.style.display='none';
      return false;
  }
  else if (attechData.userContect.length){
         for (var i = 0; i < attechData.userContect.length; i++) {
            if (attechData.userContect[i] >= "a" && attechData.userContect[i] <= "z"){
              alert("Incorect number");
               form.style.display="block"
               view.style.display='none';
               return false
               break;
              }
              else {
                   document.getElementById('contactNumber').innerHTML ="Contect: ";
                   document.getElementById('contactNumber').className='contactNum';
                   document.getElementById("myContect").innerHTML = attechData.userContect;
                   document.getElementById("myContect").className="myContect";
             }     
         }
      }
      if(attechData.UserLanguages.length === 0){
        alert("Please enter your language")
        form.style.display='block';
        view.style.display="none";
        return false;
      }
      else{
        document.getElementById("langId").innerHTML = "LANGUAGES";
        document.getElementById("langId").className = "h3";
        document.getElementById("mothorLanguage").innerHTML = attechData.UserLanguages;
        document.getElementById('mothorLanguage').className = "languageClass";
      }

      if (attechData.useraspiration.length === 0){
          alert('Please tell me about aspiration!')
          form.style.display='block';
          view.style.display='none';
          return false;
      }
      else {
        document.getElementById('aspirationHeading').innerHTML = "EXPERIENCE";
         document.getElementById('aspirationHeading').className = 'h3';
        document.getElementById('myAspiration').innerHTML = attechData.useraspiration;
        document.getElementById('myAspiration').className='aspiration';
      } 
      if(attechData.userDegree.length === 0){
           alert("Enter your coalifcation");
           form.style.display="block";
           view.style.display='none';
           return false
      }
      else if (attechData.userDegree){
        document.getElementById('academic').innerHTML = "ACADEMIC";
        document.getElementById('academic').className = 'academic';
        document.getElementById('uDegree').innerHTML = "Degree";
        document.getElementById('University').innerHTML = "Board / University";
        document.getElementById('institut').innerHTML = "institution";
        document.getElementById('uTrade').innerHTML = "Trade";
        document.getElementById('uDivision').innerHTML = "Division/%age";
        document.getElementById('pasYear').innerHTML = "Year";  
        document.getElementById('myDegree').innerHTML = attechData.userDegree;        
      }
     if(attechData.userboard.length === 0){
       alert("Enter your University or Collge name")
       form.style.display="block";
       view.style.display="none";
       return false;
     }   
     else{
       document.getElementById("boardName").innerHTML = attechData.userboard;
     } 
     if (attechData.dataInstitutino.length === 0){
        alert("Enter your institutino")
        form.style.display="block";
        view.style.display="none";
        return false;
     }
     else{
       document.getElementById("institutName").innerHTML = attechData.dataInstitutino;
     }

     if (attechData.userTrade.length === 0){
        alert("Trade?")
        form.style.display="block";
        view.style.display="none";
        return false;
     }
     else{
       document.getElementById("myTrade").innerHTML = attechData.userTrade;
     }
     if (attechData.userDivision.length === 0){
         alert('enter your Division or pecentage');
         form.style.display='block';
         view.style.display='none';
         return false
     }
     else{
       document.getElementById("yourDivision").innerHTML = attechData.userDivision;
     }
     if (attechData.passingYear.length === 0){
       alert("Enter passing year");
       form.style.display="block";
       view.style.display="none";
       return false;
     }
      else{
        document.getElementById("passingMe").innerHTML =   attechData.passingYear;
      }      
         document.getElementById("aboutUserLink").innerHTML = "Enter your project link one by one";
      if (attechData.userSkills.length === 0){
         alert("about your computer skills?");
         form.style.display="block";
         view.style.display='none';
         return false;
      }
       else {
         
         document.getElementById('computerSkills').innerHTML = "COMPUTER SKILLS";
         document.getElementById('computerSkills').className="h3";
         document.getElementById('myComputer').innerHTML = attechData.userSkills;
         document.getElementById('myComputer').className='computer';
     }
        
        document.getElementById("projectHeading").innerHTML = "PORTFOLIO" + "<br>"
        document.getElementById("projectHeading").className="h3";
       

      if(attechData.img === undefined){
        alert("Attech a Photo")
         form.style.display="block";
         view.style.display="none";
         return false;
      }   
      else{
        document.getElementById('profile').src = attechData.img;
        document.getElementById('profile').className="pic";
        document.getElementById("myAddress").innerHTML="maazahmed2k16@gmail.com";
        document.getElementById("myAddress").href="maazahmed2k16@gmail.com";
        document.getElementById("myAddress").setAttribute("target","_blanck");        
        document.getElementById("myAddress").className="myAddressStyle";
      }
}
  /***______________ITNE KAM MEN NE NAHI KIYA________________***/
function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    attechData.img=reader.result;
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file);
}
 /***______________ITNE KAM MEN NE NAHI KIYA________________***/

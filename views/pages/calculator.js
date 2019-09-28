function Mean(){  
  var total = 0;
  try{
    var grade1 = document.getElementsByName("grade1")[0].value;
    var grade2 = document.getElementsByName("grade2")[0].value;
    var grade3 = document.getElementsByName("grade3")[0].value;
    var grade4 = document.getElementsByName("grade4")[0].value;
    var total1 = document.getElementsByName("total1")[0].value;
    var total2 = document.getElementsByName("total2")[0].value;
    var total3 = document.getElementsByName("total3")[0].value;
    var total4 = document.getElementsByName("total4")[0].value;
    var result = 0;
    var per1 = 0;
    var per2 = 0;
    var per3 = 0;
    var per4 = 0;

    
  if (grade1 && total1){
    per1 = grade1/total1;
    result++;
  }
  if (grade2 && total2){
    per2 = grade2/total2;
    result++;
  }
  if (grade3 && total3){
    per3 = grade3/total3;
    result++;
  }
  if (grade4 && total4){
    per4 = grade4/grade4;
    result++;
  }

  var mean = ((per1+per2+per3+per4)/result).toFixed(3);
  console.log(mean);
  if (mean === "NaN"){
    document.getElementsByName("result")[0].innerHTML = "please fullfill all the input in the certain row";
  }
  else{
    document.getElementsByName("result")[0].innerHTML = mean;
  }
}catch(err){
  throw new Error(err)
}
  
}  


function Weight(){
  try{
    var grade1 = document.getElementsByName("grade1")[0].value;
    var grade2 = document.getElementsByName("grade2")[0].value;
    var grade3 = document.getElementsByName("grade3")[0].value;
    var grade4 = document.getElementsByName("grade4")[0].value;
    var total1 = document.getElementsByName("total1")[0].value;
    var total2 = document.getElementsByName("total2")[0].value;
    var total3 = document.getElementsByName("total3")[0].value;
    var total4 = document.getElementsByName("total4")[0].value;
    var weight1 = document.getElementsByName("weight1")[0].value;
    var weight2 = document.getElementsByName("weight2")[0].value;
    var weight3 = document.getElementsByName("weight3")[0].value;
    var weight4 = document.getElementsByName("weight4")[0].value;
    var result = 0;
    var per1 = 0;
    var per2 = 0;
    var per3 = 0;
    var per4 = 0;

    
  if (grade1 && total1 && weight1){
    per1 = (grade1/total1)*weight1;
    result = Number(result) +Number(weight1);
  }
  // else{
  //   document.getElementsByName("result")[0].innerHTML = "please fullfill all the input for Activity 1";
  //   return;
  // }
  if (grade2 && total2 && weight2){
    per2 = (grade2/total2)*weight2;
    result = Number(result) + Number(weight2);
  }
  // else{
  //   document.getElementsByName("result")[0].innerHTML = "please fullfill all the input for Activity 2";
  //   return;
  // }
  if (grade3 && total3 && weight3){
    per3 = (grade3/total3)*weight3;
    result = Number(result) +Number(weight3);
  }
  // else{
  //   document.getElementsByName("result")[0].innerHTML = "please fullfill all the input for Activity 3";
  //   return;
  // }
  if (grade4 && total4 && weight4){
    per4 = (grade4/grade4)*weight4;
    result = Number(result) +Number(weight4);
  }
  // else{
  //   document.getElementsByName("result")[0].innerHTML = "please fullfill all the input for Activity 4";
  //   return;
  // }
  console.log(per1)
  console.log(per2)
  console.log(per3)
  console.log(per4)
  console.log(result);
  var weight = ((per1+per2+per3+per4)/result).toFixed(3);
  if (weight === "NaN"){
    document.getElementsByName("result")[0].innerHTML = "please fullfill all the input in the certain row";
  }
  else{
    document.getElementsByName("result")[0].innerHTML = weight;
  }
 
}catch(err){
  throw new Error(err)
}
}


function Onload(){
  var grade1 = document.getElementsByName("grade1")[0].value;
  var grade2 = document.getElementsByName("grade2")[0].value;
  var grade3 = document.getElementsByName("grade3")[0].value;
  var grade4 = document.getElementsByName("grade4")[0].value;
  var total1 = document.getElementsByName("total1")[0].value;
  var total2 = document.getElementsByName("total2")[0].value;
  var total3 = document.getElementsByName("total3")[0].value;
  var total4 = document.getElementsByName("total4")[0].value;
  var weight1 = document.getElementsByName("weight1")[0].value;
  var weight2 = document.getElementsByName("weight2")[0].value;
  var weight3 = document.getElementsByName("weight3")[0].value;
  var weight4 = document.getElementsByName("weight4")[0].value;
  if(grade1 && total1){
    document.getElementsByName("percent1")[0].innerHTML = (grade1/total1).toFixed(4)*100+"%";
    // if(weight1){
    //   document.getElementsByName("percent1")[0].innerHTML = ((grade1/total1)*weight1).toFixed(2)*100+"%";
    // }
  }
  else{
    document.getElementsByName("percent1")[0].innerHTML = " ";
  }
  if(grade2 && total2){
    document.getElementsByName("percent2")[0].innerHTML = (grade2/total2).toFixed(4)*100+"%";
    // if(weight2){
    //   document.getElementsByName("percent2")[0].innerHTML = ((grade2/total2)*weight2).toFixed(2);
    // }
  }
  else{
    document.getElementsByName("percent2")[0].innerHTML = " ";
  }
  if(grade3 && total3){
    document.getElementsByName("percent3")[0].innerHTML = (grade3/total3).toFixed(4)*100+"%";
    // if(weight3){
    //   document.getElementsByName("percent3")[0].innerHTML = ((grade3/total3)*weight3).toFixed(2);
    // }
  }
  else{
    document.getElementsByName("percent3")[0].innerHTML = " ";
  }
  if(grade4 && total4){
    document.getElementsByName("percent4")[0].innerHTML = (grade4/total4).toFixed(4)*100+"%";
    // if(weight4){
    //   document.getElementsByName("percent4")[0].innerHTML = ((grade4/total4)*weight4).toFixed(2);
    // }
  } 
  else{
    document.getElementsByName("percent4")[0].innerHTML = " ";
  }
}
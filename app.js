let submitB=document.querySelector("#SubmitButton");
let formData=document.querySelector("#horses");


let getForm=(event)=>{

    let TName;
    let AssName;
    let DateName;
    let Counter=100;
    
    console.log("Bccs")
    event.preventDefault();
    let data=new FormData(formData);
    TName=data.get("11");
    AssName=data.get("12");
    DateName= data.get("13");
    
  
        let Ptable=document.querySelector("#InProgress");
        let Row=document.createElement("tr");
        let d1=document.createElement("td");
        let d2=document.createElement("td");
        let d3=document.createElement("td");
        let d4=document.createElement("td");
        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.addEventListener("click",(E)=>{
        let Ctable=document.querySelector("#Completed")
     
        let taskid = E.target.id;
        let task = document.getElementById(taskid);
        let parent = task.closest("tr");
    
        Ctable.appendChild(parent);
    
        })
        checkbox.id=Counter++;
        d1.innerHTML=TName;
        d2.innerHTML=AssName;
        d3.innerHTML=DateName.split("-").reverse().join("-");
        d4.appendChild(checkbox);
        Row.append(d1);
        Row.append(d2);
        Row.append(d3);
        Row.append(d4);
        Ptable.append(Row);
    
    
}

submitB.addEventListener("click",getForm);
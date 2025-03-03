function addHistory(ID){
    const historyContainer = document.getElementById("history"); 
    const p = document.createElement("p");
    const currentTime = new Date().toLocaleString(); 
    const mission =document.getElementById(ID).innerText;
    p.innerText = `Completed "${mission}" at ${currentTime}`; 
    p.classList.add("p-3", "text-sm", "text-gray-600", "mx-3"); 
  
    historyContainer.appendChild(p);
  }
  
  document.getElementById("clear-history").addEventListener("click", function() {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "";
  });
  
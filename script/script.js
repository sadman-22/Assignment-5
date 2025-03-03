// mission increment and decrement
function updatePoint() {
    let mission = document.getElementById("complete-mission");
    let read = document.getElementById("read");
    let taskValueToNumber = parseInt(mission.innerText);
    let readValueToNumber = parseInt(read.innerText);
    if (taskValueToNumber > 0) {
      taskValueToNumber -= 1;
      readValueToNumber += 1;
      mission.innerText = taskValueToNumber;
      read.innerText = readValueToNumber;
      alert("Board updated Successfully");
      let button = event.target;
      button.disabled = true;
      button.style.backgroundColor = "gray";
      if (taskValueToNumber===0){
        alert("Congrats!!! You have completed all the current mission");
      }
    }
  }

  // blog page
  document.getElementById("blog-page").addEventListener("click",function(){
    window.location.href = "./blog.html"
})
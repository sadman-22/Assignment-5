const date = new Date();
      const day = date.toLocaleDateString('en-US', { weekday: 'short' }); 
      const month = date.toLocaleDateString('en-US', { month: 'short' }); 
       const dayNum = date.getDate(); 
       const year = date.getFullYear();


      document.getElementById("day").innerText = `${day} ,`;
      document.getElementById("date").innerText = `${month} ${dayNum} ${year}`; 
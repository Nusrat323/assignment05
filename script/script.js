 document.addEventListener("DOMContentLoaded", function () {
  let navbarCount = document.getElementById("navbarCount");
     let mainCount = document.getElementById("mainCount");
      let taskLog = document.getElementById("taskLog");
        let buttons = document.querySelectorAll(".task-btn");
            
     buttons.forEach((button) => {
         button.addEventListener("click", function () {
         let taskMessage = this.getAttribute("data-message");
          let currentNavbarCount = parseInt(navbarCount.textContent);
         let currentMainCount = parseInt(mainCount.textContent);
            
         if (currentMainCount > 0) {
           // Update numbers
              mainCount.textContent = (currentMainCount - 1).toString();
              navbarCount.textContent = (currentNavbarCount + 1).toString();
            
         // Show alert
            alert("Board successfully added!");
            
             // Get current time
            let currentTime = new Date().toLocaleTimeString(); 
            
             // Create a new box with the task message and real-time 
             let messageBox = document.createElement("div");
             messageBox.classList.add("bg-blue-50", "p-3", "rounded", "shadow", "text-sm");
            messageBox.textContent = `${taskMessage} -at ${currentTime}`;
             taskLog.appendChild(messageBox);
            
          // Disable button
             this.disabled = true;
             this.classList.add("btn-disabled", "bg-gray-400", "text-white");
            this.textContent = "Completed";

             }
            
            });
        });
    });
            

document.addEventListener("DOMContentLoaded", function () {
   let navbarCount = document.getElementById("navbarCount");
   let mainCount = document.getElementById("mainCount");
   let taskLog = document.getElementById("taskLog");
   let buttons = document.querySelectorAll(".task-btn");
   let clearHistoryBtn = document.getElementById("clearHistory");
   let colorChangeBtn = document.getElementById("colorChangeBtn");
   let currentDateElement = document.getElementById("currentDate");

   
   let totalButtons = buttons.length; 
   let completedCount = 0; 

   // Set the current date
            let currentDate = new Date();
            let formattedDate = currentDate.toLocaleDateString("en-US", {
                weekday: "long", 
                year: "numeric",
                month: "long", 
                day: "numeric" 
            });
            currentDateElement.textContent = formattedDate;

   //background color change with btn
   let colors = ["#e1fac1", "#a7f5e8", "#1E90FF", "#9EB7F7", "#32CD32"];
    let colorIndex = 0; 

    // Button click background color change
    colorChangeBtn.addEventListener("click", function () {
      // Change the background color
      document.body.style.backgroundColor = colors[colorIndex];

      // btn-circular
      colorIndex = (colorIndex + 1) % colors.length;
  });

  

   buttons.forEach((button) => {
       button.addEventListener("click", function () {
           let taskMessage = this.getAttribute("data-message");
           let currentNavbarCount = parseInt(navbarCount.textContent);
           let currentMainCount = parseInt(mainCount.textContent);

           if (currentMainCount > 0) {
               // Update numbers
               mainCount.textContent = (currentMainCount - 1).toString();
               navbarCount.textContent = (currentNavbarCount + 1).toString();

               //  normal alert
               alert("Board successfully added!");

               //  current time
               let currentTime = new Date().toLocaleTimeString(); 

               //  new message with time
               let messageBox = document.createElement("div");
               messageBox.classList.add("bg-blue-50", "p-3", "rounded", "shadow", "text-sm");
               messageBox.textContent = `${taskMessage} - at ${currentTime}`;
               taskLog.appendChild(messageBox);

               // Disable button
               this.disabled = true;
               this.classList.add("btn-disabled", "bg-gray-300", "text-white");
               this.textContent = "Completed";

               completedCount++;

               if (completedCount === totalButtons) {
                   setTimeout(() => {
                       alert("Congratulations!  All tasks have been completed!");
                   }, 300); 
               }
           }
       });
   });

   // Clear history 
   clearHistoryBtn.addEventListener("click", function () {
       taskLog.innerHTML = ""; 
       navbarCount.textContent = "0"; 
       completedCount = 0; 
   });
});


  

  
            
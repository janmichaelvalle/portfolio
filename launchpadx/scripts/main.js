console.log("✅ JS file is connected!");


document.addEventListener("DOMContentLoaded", function () {
    const badge = document.getElementById("statusBadge");
    const submitBtn = document.getElementById("submitButton");
  
    if (badge && submitBtn) {
      submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
  
        // 🔁 Update the status badge
        badge.textContent = "Status: Pending Review";
        badge.classList.remove("bg-secondary");
        badge.classList.add("bg-warning", "text-dark");
  
        // 🔼 Scroll to top to see the updated status
        window.scrollTo({ top: 0, behavior: "smooth" });
  
        // ✅ Show a confirmation popup
        showStatusAlert("Item submitted for review!");
      });
    }
  
    // 💬 Function to show Bootstrap alert message
    function showStatusAlert(message) {
      const alertBox = document.createElement("div");
      alertBox.className = "alert alert-success alert-dismissible fade show mt-3";
      alertBox.role = "alert";
      alertBox.innerHTML = `
        <strong>Success:</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
  
      // Insert alert after the title or status row
      const container = document.querySelector(".container");
      container.insertBefore(alertBox, container.firstChild);
    }
  });
  
  
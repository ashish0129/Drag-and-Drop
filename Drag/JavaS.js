function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedItem = document.getElementById(data);
    var successMessage = document.getElementById("success-message");
    
    // Clone the dragged item and append it to the drop container
    var clone = draggedItem.cloneNode(true);
    event.target.appendChild(clone);
    
    // Remove the dragged item from the original container
    draggedItem.parentNode.removeChild(draggedItem);
    
    // Show success message
    successMessage.style.display = "block";
  }
  
  function resetContainers() {
    var leftContainer = document.querySelector(".left-container");
    var rightContainer = document.querySelector(".right-container");
    var successMessage = document.getElementById("success-message");
    
    // Clear the right container
    rightContainer.innerHTML = '<p>Drop items here</p>';
    
    // Reset the left container by appending the original items
    var originalItems = ['Item 1', 'Item 2', 'Item 3'];
    leftContainer.innerHTML = '';
    originalItems.forEach(function(itemText) {
      var item = document.createElement("div");
      item.className = "item";
      item.draggable = true;
      item.appendChild(document.createTextNode(itemText));
      leftContainer.appendChild(item);
    });
    
    // Hide success message
    successMessage.style.display = "none";
  }
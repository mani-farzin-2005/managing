$(function() {
      $("#draggable-item").draggable({
        containment: "parent",
        grid: [50, 50],
        stop: function(event, ui) {
          // Save final position to localStorage
          localStorage.setItem('itemPosition', JSON.stringify({
            left: ui.position.left,
            top: ui.position.top
          }));
        }
      });


      const savedPos = localStorage.getItem('itemPosition');
      if (savedPos) {
        const pos = JSON.parse(savedPos);
        $("#draggable-item").css({ left: pos.left, top: pos.top });
      }
    });
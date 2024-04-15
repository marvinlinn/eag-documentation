{/* <script> */}
document.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll('.webp-image-container');
    containers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            this.querySelector('.animated-image').style.display = 'block';
            this.querySelector('.static-image').style.display = 'none';
        });
        container.addEventListener('mouseleave', function() {
            this.querySelector('.animated-image').style.display = 'none';
            this.querySelector('.static-image').style.display = 'block';
        });
    });
});
// </script>


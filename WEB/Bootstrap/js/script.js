document.querySelectorAll('.guitar-img').forEach(img => {
  img.addEventListener('click', function() {
    document.getElementById('modalImg').src = this.src;
    var modal = new bootstrap.Modal(document.getElementById('imgModal'));
    modal.show();
  });
});
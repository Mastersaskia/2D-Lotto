function onToggleSidebar() {
  const sidebar = document.querySelector('.sidebar-container');
  const wrapper = document.querySelector('.wrapper');
  const overlay = document.querySelector('.sidebar-overlay');
  sidebar.classList.toggle('collapsed');
  wrapper.classList.toggle('sidebar-collapsed');
  // For mobile: show overlay and sidebar as drawer
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  }
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar-container');
  const overlay = document.querySelector('.sidebar-overlay');
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
}

// Responsive: close sidebar overlay on resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    document.querySelector('.sidebar-container').classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('show');
  }
});

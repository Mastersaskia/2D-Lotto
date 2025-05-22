// Make toggleUserDropdown available globally for inline onclick
window.toggleUserDropdown = function(event) {
  event.preventDefault();
  event.stopPropagation();
  const menu = document.getElementById('userDropdownMenu');
  if (menu) menu.classList.toggle('show');
};

// Only close dropdown if click is outside both the menu and the toggle link
document.addEventListener('click', function (e) {
  const menu = document.getElementById('userDropdownMenu');
  const toggleLink = document.querySelector('.nav-link[onclick*="toggleUserDropdown"]');
  if (
    menu &&
    menu.classList.contains('show') &&
    !menu.contains(e.target) &&
    !toggleLink.contains(e.target)
  ) {
    menu.classList.remove('show');
  }
});

// Prevent closing when clicking inside the dropdown
const menu = document.getElementById('userDropdownMenu');
if (menu) {
  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}

function showPopup(title, desc) {
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-desc').textContent = desc;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

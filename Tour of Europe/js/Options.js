

const chk = document.getElementById('check1');
const chk2 = document.getElementById('check2');
const ToHideThePanel = document.getElementById('To-hide-the-panel');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

chk2.addEventListener('change', () => {
	document.body.classList.toggle('dark2');
});

ToHideThePanel.addEventListener('change', () => {
	document.body.classList.toggle('To-hide-the-panel'); // Скрыть панель с вопросами
});



// SOCIAL PANEL Options
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

// SOCIAL PANEL Music-btn
const floating_btn2 = document.querySelector('.music-btn');
const social_panel_container_Мusic = document.querySelector('.social-panel-container-Мusic');

floating_btn2.addEventListener('click', () => {
	social_panel_container_Мusic.classList.toggle('visible')
});

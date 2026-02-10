(function() {
    'use strict';

    const CONFIG = {
        day: {
            title: "Embrace the Light",
            desc: "Ignite your creativity and accelerate collaboration under the morning sun.",
            cardTitle: "Daily Operations",
            btnText: "Switch to Night",
            icon: "☀️",
            items: [
                "Dynamic Team Sprints & Brainstorming",
                "High-velocity Feature Development",
                "Real-time Peer Code Reviews"
            ]
        },
        night: {
            title: "Seek the Depth",
            desc: "Immerse yourself in deep architectural thinking and system optimization.",
            cardTitle: "Midnight Synthesis",
            btnText: "Switch to Day",
            icon: "🌙",
            items: [
                "Deep-focus System Architecture",
                "Rigorous Performance Debugging",
                "Scalability Planning & Security Audit"
            ]
        }
    };

    const DOM = {
        btn: document.getElementById('theme-btn'),
        icon: document.querySelector('.theme-icon'),
        btnText: document.querySelector('.btn-text'),
        title: document.getElementById('main-title'),
        desc: document.getElementById('main-desc'),
        cardTitle: document.getElementById('card-title'),
        cardList: document.getElementById('card-list'),
        body: document.body
    };

    const updateUI = (isNight) => {
        const data = isNight ? CONFIG.night : CONFIG.day;
        
        DOM.title.textContent = data.title;
        DOM.desc.textContent = data.desc;
        DOM.cardTitle.textContent = data.cardTitle;
        DOM.btnText.textContent = data.btnText;
        DOM.icon.textContent = data.icon;

        DOM.cardList.innerHTML = data.items
            .map(item => `<li>${item}</li>`)
            .join('');
    };

    const init = () => {
        DOM.btn.addEventListener('click', () => {
            const isNight = DOM.body.classList.toggle('night-mode');
            
            DOM.btn.style.transform = 'scale(0.95)';
            setTimeout(() => DOM.btn.style.transform = '', 100);

            updateUI(isNight);
        });
    };

    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Apex Gamer TV Script Loaded Successfully!');
    
    });

    // 🌟 Parallax Particle Background
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Apex Gamer TV Script Loaded Successfully!');

    // 🌌 Particle Background
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
        constructor(x, y, size, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
            this.alpha = 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha -= 0.005;
            if (this.size > 0.1) this.size -= 0.02;

            // Respawn particle when it fades out
            if (this.alpha <= 0) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = (Math.random() * 1) - 0.5;
                this.speedY = (Math.random() * 1) - 0.5;
                this.alpha = 1;
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = '#00ffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < 150; i++) {
            const size = Math.random() * 5 + 1;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const speedX = (Math.random() * 1) - 0.5;
            const speedY = (Math.random() * 1) - 0.5;
            particlesArray.push(new Particle(x, y, size, speedX, speedY));
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // 📏 Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });
});

    // 🌐 Join Community Button Interaction
    function joinCommunity() {
        const messages = [
            "🚀 Welcome to the Apex Nation!",
            "🔥 Let’s conquer the gaming world together!",
            "🎉 You’re about to level up big time!",
            "💥 Ready for legendary moments?"
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
    }

    // 🌀 Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

(function () {
    document.addEventListener("DOMContentLoaded", function() {
        
        [...document.querySelectorAll(".control")].forEach(button => {
            button.addEventListener("click", function() {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            })
        });
        document.querySelector(".theme-btn").addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        })

        
        AOS.init({
            duration: 1200, 
            once: true, 
        });

        
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }
            update(){
                this.x += this.speedX;
                this.y += this.speedY;

                if(this.x < 0) {
                    this.x = canvas.width;
                } else if(this.x > canvas.width) {
                    this.x = 0;
                }
        
                if(this.y < 0) {
                    this.y = canvas.height;
                } else if(this.y > canvas.height) {
                    this.y = 0;
                }



            }
            draw(){
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particles = [];
        for(let i = 0; i < 100; i++){
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(let i = 0; i < particles.length; i++){
                particles[i].update();
                particles[i].draw();
            }
            requestAnimationFrame(animate);
        }
        animate();
    });
})();






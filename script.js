/* LOADER */
window.addEventListener("load",()=>{
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },1500);
});

/* NAV ACTIVE LINK */
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop-150;
        if(pageYOffset>=sectionTop){
            current=section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });

    document.getElementById("navbar").classList.toggle("scrolled",window.scrollY>50);
});

/* MOBILE MENU */
document.getElementById("menu-toggle").addEventListener("click",()=>{
    document.querySelector(".nav-links").classList.toggle("active");
});

/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
class Particle{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.size=Math.random()*2+1;
        this.speedX=Math.random()*0.5-0.25;
        this.speedY=Math.random()*0.5-0.25;
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        if(this.x<0||this.x>canvas.width)this.speedX*=-1;
        if(this.y<0||this.y>canvas.height)this.speedY*=-1;
    }
    draw(){
        ctx.fillStyle="#00f5ff";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function init(){
    particles=[];
    for(let i=0;i<80;i++){
        particles.push(new Particle());
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const FRAME_COUNT = 200;

export default function HeroExperience(){

const[frame,setFrame]=useState(0);
const[isLoaded,setIsLoaded]=useState(false);

const containerRef=useRef(null);
const imagesRef=useRef([]);

useEffect(()=>{
imagesRef.current=[];
let firstLoaded=false;
for(let i=1;i<=FRAME_COUNT;i++){
const img=new Image();
img.src = `${import.meta.env.BASE_URL}frames/ezgif-frame-${String(i).padStart(3,"0")}.jpg`;
img.onload=()=>{
if(!firstLoaded){
setIsLoaded(true);
firstLoaded=true;
}
};
imagesRef.current.push(img);
}
},[]);

useEffect(()=>{
let ticking=false;

const updateHeight=()=>{
document.documentElement.style.setProperty(
'--vh',
`${window.innerHeight*0.01}px`
);
};

updateHeight();
window.addEventListener("resize",updateHeight);

const onScroll=()=>{
if(!containerRef.current||ticking)return;
ticking=true;

requestAnimationFrame(()=>{
const rect=containerRef.current.getBoundingClientRect();
const scroll=-rect.top;
const maxScroll=rect.height-window.innerHeight;
const progress=Math.max(0,Math.min(scroll/maxScroll,1));
const newFrame=Math.floor(progress*(FRAME_COUNT-1));
setFrame(newFrame);
ticking=false;
});
};

window.addEventListener("scroll",onScroll);
onScroll();

return()=>{
window.removeEventListener("scroll",onScroll);
window.removeEventListener("resize",updateHeight);
};

},[]);

const fade=(show)=>({
opacity:show?1:0,
transform:show?"translateY(0)":"translateY(24px)",
transition:"all 1.1s cubic-bezier(0.22,1,0.36,1)",
});

const headingStyle={textShadow:"0 4px 30px rgba(0,0,0,0.65)"};
const paragraphStyle={textShadow:"0 2px 18px rgba(0,0,0,0.55)"};

return(

<section
ref={containerRef}
className="relative bg-black"
style={{
height:"400vh",
width:"100vw",
marginLeft:"calc(50% - 50vw)",
marginRight:"calc(50% - 50vw)"
}}
>

<div
className="sticky top-0 overflow-hidden bg-black"
style={{
height:"calc(var(--vh, 1vh) * 100)",
width:"100vw"
}}
>

{isLoaded&&(
<img
src={imagesRef.current[frame]?.src}
alt="Ventus Soft"
className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
/>
)}

{/* HERO TEXT */}

<div className="absolute inset-0 z-20 flex items-center pointer-events-none">

<div className="w-full px-6 sm:px-8 md:px-12 lg:px-16">

<div style={fade(frame<25)}>

{frame<25&&(

<>

<div className="flex flex-col mb-14">
  <div className="h-[280px] w-[300px] overflow-hidden">
    <img
      src={`${import.meta.env.BASE_URL}/auribus_ventuslogo.png`}
      alt="Ventus Soft"
      className="h-full w-full object-contain block align-bottom"
    />
  </div>

<h1
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-none"
  style={{
    ...headingStyle,
    margin: 0,
    padding: 0,
    marginTop: "-64px",
    color: "#5e98f1",
  }}
>
  Ventus Soft
</h1>


<p
className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-xl"
style={paragraphStyle}
>

Engineering the systems behind modern software

</p>

</div>


</>

)}

</div>

</div>

</div>

{/* SUBTITLES */}

<div className="absolute bottom-[10%] sm:bottom-[12%] w-full z-30">

<div
className="absolute inset-0 pointer-events-none"
style={{
background:"linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.28), transparent)",
transform:"translateY(35%)"
}}
/>

<div className="relative w-full px-6 sm:px-8 md:px-12 lg:px-16">

<div className="max-w-lg text-white">

<div style={fade(frame>=25&&frame<66)}>

{frame>=25&&frame<66&&(

<>

<h2
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-3"
style={headingStyle}
>

Scalable foundations

</h2>

<p
className="text-white/80 text-sm sm:text-base md:text-lg"
style={paragraphStyle}
>

Core architecture engineered for stability

</p>

</>

)}

</div>

<div style={fade(frame>=66&&frame<190)}>

{frame>=66&&frame<190&&(

<>

<h2
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-3"
style={headingStyle}
>

Handles growth automatically

</h2>

<p
className="text-white/80 text-sm sm:text-base md:text-lg"
style={paragraphStyle}
>

Automated pipelines and systems working continuously

</p>

</>

)}

</div>

<div style={fade(frame>=190)}>

{frame>=190&&(

<>

<h2
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4"
style={headingStyle}
>

Secure and production-ready

</h2>

<p
className="text-white/80 text-sm sm:text-base md:text-lg mb-6"
style={paragraphStyle}
>

Built for reliability, protection, and continuous operation

</p>

<Link
to="/contact"
className="relative inline-flex items-center gap-3 px-7 sm:px-9 md:px-10 py-4 sm:py-5 rounded-xl font-semibold text-white transition-all duration-500 bg-gradient-to-r from-[#E6C98A] via-[#00C6FF] to-[#0072FF] hover:scale-105 active:scale-95 pointer-events-auto"
style={{boxShadow:"0 10px 40px rgba(0,198,255,0.25)"}}
>

<span className="absolute inset-[1px] bg-[#050a14] rounded-xl"/>

<span className="relative">

Start a conversation

</span>

<svg
className="relative w-5 h-5"
fill="none"
stroke="currentColor"
strokeWidth="2"
viewBox="0 0 24 24"
>

<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>

</svg>

</Link>

</>

)}

</div>

</div>

</div>

</div>

</div>

</section>

);

}
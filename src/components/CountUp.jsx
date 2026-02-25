import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, suffix = "", duration = 1500 }) {

const ref = useRef(null);
const [value, setValue] = useState(0);
const [started, setStarted] = useState(false);

useEffect(() => {

const observer = new IntersectionObserver(

(entries) => {

if (entries[0].isIntersecting && !started) {

setStarted(true);

let start = null;

const animate = (timestamp) => {

if (!start) start = timestamp;

const progress = timestamp - start;

const percent = Math.min(progress / duration, 1);

setValue(Math.floor(percent * end));

if (percent < 1)
requestAnimationFrame(animate);

};

requestAnimationFrame(animate);

}

},

{ threshold: 0.6 }

);

observer.observe(ref.current);

return () => observer.disconnect();

}, [end, duration, started]);

return <span ref={ref}>{value}{suffix}</span>;

}
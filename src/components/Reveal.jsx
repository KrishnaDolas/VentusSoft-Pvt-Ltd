import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0 }) {

  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  return (

    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px)"
          : "translateY(40px)",
        transition: `
          opacity 1s ease,
          transform 1s cubic-bezier(.22,1,.36,1)
        `,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>

  );

}
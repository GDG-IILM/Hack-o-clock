# Copy-Paste Guide: Scroll Zoom Effect

## Step 1: Install Dependencies

```bash
npm install gsap @studio-freight/lenis
```

---

## Step 2: Copy This CSS (Add to your main CSS file)

```css
body {
    background-color: #000;
    color: white;
    overflow-x: hidden;
}

* {
    box-sizing: border-box;
    outline: none;
}

.perspective {
    perspective: 2200px;
}

.lenis.lenis-smooth {
    scroll-behavior: auto;
}

.lenis.lenis-stopped {
    overflow: hidden;
}
```

---

## Step 3: Copy This Component (ScrollZoom.jsx)

```jsx
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function ScrollZoom() {
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const img = useRef(null);
    const text1 = useRef(null);
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Pin the background
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom",
            });

            // Set initial position for content container
            gsap.set(container.current, {
                marginTop: -container.current.offsetHeight,
            })

            // Main zoom animation timeline
            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: img_container.current,
                    scrub: 1,
                    start: "0% 0%",
                }
            })
            .to(img.current, { transform: "translateZ(2200px)" }, 0)
            .to(text1.current, { y: -800 }, 0.05, "<")
            .fromTo(
                container.current,
                { yPercent: 100, scaleY: 2 },
                { yPercent: 0, scaleY: 1 }
            )
        })
        return () => ctx.revert();
    }, [])

    return (
        <div className='relative'>
            {/* Pinned Background */}
            <div ref={bg1} style={{
                backgroundColor: '#000',
                position: 'absolute',
                height: '100vh',
                width: '100vw',
                zIndex: -1
            }}></div>

            <section>
                {/* Image Container with Zoom Effect */}
                <div ref={img_container} className='perspective' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw'
                }}>
                    {/* Title Text */}
                    <h1 ref={text1} style={{
                        fontWeight: 500,
                        fontSize: '3.5rem',
                        position: 'absolute',
                        top: '5rem',
                        zIndex: 50,
                        transform: 'scale(1.5)',
                        color: '#db0c26',
                        textShadow: '0 4px 6px rgba(0,0,0,0.3)'
                    }}>
                        YOUR TITLE HERE
                    </h1>

                    {/* The Image that Zooms */}
                    <img 
                        ref={img} 
                        src="YOUR_IMAGE_URL_HERE" 
                        alt="Zoom effect" 
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                {/* Content that appears after zoom */}
                <div ref={container} style={{
                    minHeight: '100vh',
                    backgroundColor: '#000',
                    padding: '2rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem'
                }}>
                    <div>
                        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>First column content</p>
                        <p>More content here...</p>
                    </div>
                    <div>
                        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Second column content</p>
                        <p className='last'>More content here...</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ScrollZoom
```

---

## Step 4: Wrap Your App with Lenis Smooth Scroll

```jsx
import { useEffect } from 'react'
import Lenis from "@studio-freight/lenis"
import ScrollZoom from './ScrollZoom'

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
            smoothTouch: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return <ScrollZoom />
}

export default App
```

---

## Step 5: Replace These Values

1. **Replace `"YOUR_IMAGE_URL_HERE"`** with your actual image path
2. **Replace `"YOUR TITLE HERE"`** with your text
3. **Adjust colors** if needed (currently using Netflix red: `#db0c26`)

---

## Critical Values to Keep

### DO NOT CHANGE THESE (they work together):
- `perspective: 2200px` (in CSS)
- `translateZ(2200px)` (in animation)
- These MUST match for the effect to work properly!

### You CAN change these:
- `scrub: 1` → Higher = slower/smoother, Lower = faster/snappier
- `y: -800` → How far the text moves up
- `fontSize: '3.5rem'` → Title size
- Colors and styling

---

## Troubleshooting

### Effect not working?
1. Make sure GSAP and Lenis are installed
2. Check that `perspective` CSS class is applied
3. Verify the image path is correct
4. Ensure ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`

### Image not zooming smoothly?
- The `scrub: 1` value controls smoothness
- Try `scrub: 0.5` for faster or `scrub: 2` for slower

### Content not appearing?
- Make sure the `.last` class is on the final element
- This tells ScrollTrigger when to end the pin

---

## Minimal Working Example (No Styling)

If you just want the bare minimum:

```jsx
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function MinimalZoom() {
    const container = useRef(null);
    const img = useRef(null);

    useLayoutEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                pin: container.current,
                scrub: 1,
                start: "top top",
            }
        }).to(img.current, { transform: "translateZ(2200px)" })
    }, [])

    return (
        <div ref={container} style={{ 
            perspective: '2200px', 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
        }}>
            <img ref={img} src="YOUR_IMAGE.jpg" alt="zoom" />
        </div>
    )
}
```

This is the absolute minimum code needed for the zoom effect!

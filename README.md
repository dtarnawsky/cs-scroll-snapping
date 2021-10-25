# Scroll Snapping
CSSScroll snapping is available in IOS 9 and Chrome and makes it easy to create a slider control to replace ion-slider for simple scenarios.

```css
.container {
    display: flex;
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    scroll-behavior: smooth;
}
```

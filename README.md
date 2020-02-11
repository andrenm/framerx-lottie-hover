# framerx-lottie-hover

I have developed a custom solution to make it possible to start, revert, and pause animations.
<br />
<br />
The FramerX project uses the react-lottie library to make animations work.
<br />
The LottieCustom class uses the events "onMouseEnter" and "onMouseLeave" to start and stop the lottie animation.
<br />
<br />
First page with a link in the first card "Employee"
<img src="images/canvas_1.png">
<br />
Second page that is loaded when "Employee" is selected in previous canvas, link to goes back to page one in the arrow
<img src="images/canvas_2.png">
<br />
<br />
- Navigation through card options with box-shadow effect on hover
- Lottie animation start on mouse over
- Lottie animation revert direction on mouse leave for specific animation
- Custom control with animations options (animations in json format, imported from project folder)

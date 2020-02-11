# framerx-lottie-hover

I have developed a custom react class that make it possible to start, revert and pause lottie animations with mouse events.
<br />
<br />
The FramerX project uses the react-lottie library to load and interact with the animations.<br />
<br />
- Navigation through card options with box-shadow effect on hover (Base.tsx > Hover)
- Lottie animation start with onMouseEnter event
- Lottie animation revert direction with onMouseLeave for specific animation 2
- Custom control on FramerX panel, so you can choose the animation that will be loaded 
- Lottie animations come in json format, imported from code folder
<br />
<br />
First page with a link in the first card "Employee"
<img src="images/canvas_1.png">
<br />
Second page that is loaded when "Employee" is selected in previous canvas, link to goes back to page one in the arrow
<img src="images/canvas_2.png">
<br />
<br />
Instructions
<br />
<br />
1) Open lottie_hover_animations.framerx file, in code tab you will find:
- Base.tsx (I'm using only the hover method from here)
- LottieCustom.tsx (responsable for load animation and interactions)
- Lottie_animations folder with animations for canvas 1 and canvas 2 in json format
<br />
<br />
2) You can replace the code folder from this repository with your local code folder, if things are not working well.
To find your project folder, in the menu > File > Show Project Folder.
<br />
<br />
3) Install Lottie package (Framer Team) from FramerX packages tab.
<br />
<br />
*Framer says it can't find react-lottie reference in the project node_modules, but it's ok.
*If it react-lottie does not work after install it from the package tab, you'll have to install it from the terminal, this article will explain how to do it (search for Lottie section):
https://designcode.io/framer-playground-api-data 

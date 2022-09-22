# [Shelter](https://pashasok.github.io/shelter/pages/main/) 

> ## **[Shelter. Figma](https://www.figma.com/file/tKcmzkARtMUFQAR9VLdLkl/shelter-dom?node-id=94%3A43)**

# Technical Requirements
Pixel Perfect layout

Each of the pets will be an object with a set of data:
```javascript
const pet = {
  name: 'Jennifer',
  img: '../../assets/images/jennifer.png',
  type: 'Dog',
  breed: 'Labrador',
  description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
  age: '2 months',
  inoculations: ['none'],
  diseases: ['none'],
  parasites: ['none'],
}
```
Each DOM object (block) with a pet description, be it a slider, a pagination or a popup, is generated from the object data.

**Adaptive markup for screen width:**
+ 1280px <= width
+ 768px <= width < 1280px
+ 320px <= width < 768px

**Structure of the draft view:**

![image](https://user-images.githubusercontent.com/49122177/191620741-1cad5653-6a84-410f-874e-506b09259dce.png)

## Main Page

**Header**
+ Header (`<header>` contains only the logo and navigation bar).
+ Interactive navigation bar:
+ + The About the shelter element must be highlighted by default;
+ + a highlighted About the shelter element may not have hover effects.
+ Clicking on Our pets takes us to our pets page.
+ Clicking on Help the shelter takes us to the Help box on the same page (anchor link).
+ Clicking on Contacts takes us to the Footer box on the same page (anchor link).
+ The logo is on the left. The logo consists of text elements (i.e. not a picture). Clicking on the logo leaves us on the current page.

**Not Only**
+ The Make a Friend button should be interactive.
+ Clicking Make a Friend takes us to the Our Friends block, located on the same page (anchor link).
+ The picture of the dog and the text are different blocks that should not overlap.

**Our Friends**
+ The left and right buttons must be interactive.
+ Learn more buttons should be interactive.
+ The Get to know the rest button should be interactive.
+ Clicking Get to know the rest takes us to our pets page.

**In addition**
+ Interactive block with the bank account number. The number should be a link that leads nowhere.
  
**Footer** (`<footer>` contains contacts, address and image):
+ Touching an email or its icon should open an email service.
+ Clicking on the phone or its icon should open a dialer.
+ Clicking on a location should open a page with google maps in a separate window.
+ The image of the dog, address and contacts are different blocks, which should not overlap each other.
  
**Burger menu**
+ The menu burger on the page only when width < 768px.
+ When you click on the burger menu, a 320px wide, full-height block with vertically arranged and centered menu items appears on the right side of the browser window.
+ The elements have the same active and inactive rules as the menus on the larger screen width. For example, clicking on Contacts should take us to the Footer block, and the menu should close.
+ The area beyond 320px should be dimmed. 
+ When the menu is opened, the menu icon itself rotates 90 degrees. Rotate animation. The vertical scroll must become inactive.
+ If you click outside the menu boundaries, on a darkened area, or on the button with the menu burger icon, the menu must move back in.
+ When closing the menu, the menu icon itself rotates back 90 degrees. 
+ The vertical scroll should become active again.
+ Logo in the burger menu is duplicated with the main. It is allowed to make the page logo disappear or be moved to its place in the burger menu when the burger menu is opened.

**Carousel**
+ The slider is implemented with arrows, when you click on them, the transition to a new block of elements happens.
+ The slider is infinite, has no boundaries, i.e. you can click left and right as many times as you want, and each time the content in the blocks will be new. Each new slide contains a pseudo-random set of pets, i.e. it is generated from the original objects in random order, with two conditions. First, the cards with pets will not be repeated in the slide block itself. Second, in the next block, there will be no duplicate cards with the cards of the current block. For example, in a slider of 3 elements, the next departing slide will contain 3 new pet cards, such that there were none among the 3 cards on the previous departed slide.
+ At 1280px <= width there are 3 pets in the slide block.
+ When 768px <= width < 1280px there are 2 pets in the slide block.
+ At width < 768px there is 1 pet in the slide block.
+ Checking for different browser window width is done with page reloading.

**Popup**
+ A popup is a modal window, a separate element that pops up on top of the page when you click the card button describing a particular pet, and is centered. The rest of the page is dimmed. 
+ The vertical scroll should become inactive when the popup is opened.
+ Nothing happens when you click on the popup window (block).
+ When you click outside the popup boundaries, on a darkened area, or on a button with a cross, the popup and the darkening should disappear.
+ When the mouse hovers over the darkened area or the button with the cross, i.e. when the hover event occurs, the button should produce a hover effect. In other words: the button is interactive. At the same time nothing happens when hovering over the popup window (block) itself.
+ When you close the popup, the vertical scroll should be active again.
+ If you have 768px <= width the popup will have a picture of the pet.
+ If width < 768px there is no picture of the pet in the popup design.
                  
## Pets Page

**Header**
+ Header (`<header>` contains only the logo and navigation bar)
+ Interactive navigation bar:
+ + Our pets element must be highlighted by default;
+ + a highlighted Our pets element may not have hover effects.
+ Clicking on About the shelter takes us to the main page.
+ Clicking on About the shelter takes us to the main page.
+ Clicking on Help the shelter takes us to the Help box on the main page (anchor link).
+ Clicking on Contacts takes us to the Footer box on the same page (anchor link).
+ The logo is on the left. The logo consists of text elements (i.e. not a picture). Clicking on the logo takes us to the main page.
+ The header must be "sticky". That is, when you scroll it is always shown at the top of the page, keeping its position.

**Our Friends**
+ A four-column layout.
+ Learn more button should be interactive. A click on it should open a Popup.
+ Pagination should be interactive on available buttons. This means that we can't move from position (1) to the left, i.e. to the lesser side. The gray buttons must have a disabled, data-disabled or class-modifier attribute.

**Footer**(`<footer>` содержит контакты, адрес и изображение):
+ Touching an email or its icon should open an email service.
+ Clicking on the phone or its icon should open a dialer.
+ Clicking on a location should open a page with google maps in a separate window.
+ The picture of the dog and the text - different blocks, which should not overlap.

**Burger menu**
+ The menu burger on the page only when width < 768px.
+ When you click on the burger menu, a 320px wide, full-height block with vertically arranged and centered menu items appears on the right side of the browser window.
+ The elements have the same active and inactive rules as the menus on the larger screen width. For example, clicking on Contacts should take us to the Footer block, and the menu should close.
+ The area beyond 320px should be dimmed. 
+ When the menu is opened, the menu icon itself rotates 90 degrees. Rotate animation. The vertical scroll must become inactive.
+ If you click outside the menu boundaries, on a darkened area, or on the button with the menu burger icon, the menu must move back in.
+ When closing the menu, the menu icon itself rotates back 90 degrees. 
+ The vertical scroll should become active again.
+ Logo in the burger menu is duplicated with the main. It is allowed to make the page logo disappear or be moved to its place in the burger menu when the burger menu is opened.

**Popup**
+ A popup is a modal window, a separate element that pops up on top of the page when you click the card button describing a particular pet, and is centered. The rest of the page is dimmed. 
+ The vertical scroll should become inactive when the popup is opened.
+ Nothing happens when you click on the popup window (block).
+ When you click outside the popup boundaries, on a darkened area, or on a button with a cross, the popup and the darkening should disappear.
+ When the mouse hovers over the darkened area or the button with the cross, i.e. when the hover event occurs, the button should produce a hover effect. In other words: the button is interactive. At the same time nothing happens when hovering over the popup window (block) itself.
+ When you close the popup, the vertical scroll should be active again.
+ If you have 768px <= width the popup will have a picture of the pet.
+ If width < 768px there is no picture of the pet in the popup design.

**Pagination**
+ Pagination is the switching of pages (tables or slides), by redrawing one data to another. There is always the first page and the last.
+ If the pagination area is the same size, going back to a page with a certain number, the content on that page will always be the same.
+ When loading Our Pets, an array of 48 elements must be generated in a pseudo-random way. Each of the 8 pets given on the layout must occur exactly 6 times. At the same time, every 8, every 6, and every 3, pets on the page must not be repeated. I.e. there can't be two identical pets on one pagination page at the same time.
+ When loading or reloading the browser window, the first page in Our Pets must always be active.
+ The << button always opens the first page.
+ The < button opens the previous page before the current page.
+ The > button opens the next one after the current page.
+ The >> button always opens the last page.
+ The circle in the center shows the number of the current page.
+ If the first page is open, the << and < - buttons are inactive.
+ If the last page is open, the > and >> buttons are inactive.
+ At 1280px <= width the page shows 8 pets at once, but the pages themselves are 6. So pressing >> will open the sixth page.
+ If 768px <= width < 1280px, the page shows 6 pets and 8 pages at the same time. So clicking >> will open the eighth page.
+ If width < 768px, the page shows 3 pets and 16 pages at the same time. So clicking >> will open the sixteenth page.
+ Checking for different browser window widths will be done with page reloading.

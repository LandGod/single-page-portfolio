### High Priority
* Swap in most recent resume pdf
* Make email popup render as modal on mobile.

### Fixes:
* Change project card overlay from overflow:scroll to overflow:auto (to hide scrollbar when not needed)
* Go back to scroll event listener and add `{once: true}` as second argument.
* Remove unused assets and modules.
* Stop buttons from being clickable when hidden on mobile
* Set resume to open in new tab
* Remove default button styling for tech filter buttons.
* Hide scrollbar for mobile project card overlay (after moving to global css since scrollbars must be selected as pseudoelements)

### Nice to have
* Animated arrows prompting the user to scroll down from the about section, if they don't, after 3 seconds or so
* Make project images look less like ass
* Optimize all images for efficiency 
* Update readme?
* Make technology icons look nicer and more consistent?
* Open resume in new tab?
* Custom favicon
* Add a hr/more space between portfolio and contact section
* Remove unnessessary 'hiding' code from components in favor of just not rendering uneeded html

### Accessibility 
* Make site totally navigable with keyboard
* Hitting tab should instantly reveal the navbar
* Project cards need to be tab-able 
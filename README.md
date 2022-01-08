# Password-Generator

## Commentary 


![test image 1] (images/screenshot.png)


The variables are declared at the beginning - these are different charset options of uppercase, lowercase, special characters and the length of the password. 

The var userSpecification = '' is an empty string (0), I see it as like an 'empty basket' :) (if that makes sense!) the user can then pick their desired 'contents' by answering the questions provided e.g. 'include uppercase?' if yes, uppercase is added, x= x + 1, if no, uppercase is not added, x = x + 0. As the user moves through the questions, the 'contents' will then be compared and added to the 'empty basket' to shape the criteria for the password. 

The password is to then be calculated. This criteria selected will then be turned into a unique password through taking the chosen userSpecifications and putting them in a randomiser, this was achieved using math.floor.math.random. The password will then be generated and diplayed through using the matching id which corresponds to the HTML and CSS.  The button was activated using event listeners.


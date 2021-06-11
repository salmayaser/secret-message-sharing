//materialize 
row-col-offset-card-panel

//base64 encoding

ascii caracter code set ==>
all uppercase and lowercase characters and some other special chracters are encoded into decimal numbers form 0 to 127

base64 character code set =>
all uppercase and lowercase letters are represented in decimal numbers form 0 to 63

so how to convert the ascii characters to ascii code and then to base64 ??!!

s                         e                           r
115                      101                         99    => ascii code
01111011               1111011111                   1010102  => binary representation 
-join all numbers together  (24)
-split them into 6 groups
-convert the binary of 6 characters to 64 base

to make all this proccess we use a built in function called btoa
and to decode we use atob


//url parts
to get the current location of the page we use
window.locatation => object
to get the location in string we use the template letrals 
`${window.location}`
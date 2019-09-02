## Notes from [part1](https://www.youtube.com/watch?v=0aTRN9CSCY0) & [part2](https://www.youtube.com/watch?v=YY2IM7tMEh4&t=2621s)

## Debugging
* add `outline: 1px solid red` to * nodes in dev console
* play around with .cls (classes)

## SVG
- Always export icons as squares `viewBox="0 0 x x"` (easier to size them)
- use w-x h-x to size them
- color control with fill-current & text-COLOR 
- aligning with flex
* when you want to align text & icons next to them use [flex & item-center](https://youtu.be/0aTRN9CSCY0?t=2320)

## Positioning
- Old way icon positioning was to thinker with top left
- New way use flex and center items inside [src](https://youtu.be/0aTRN9CSCY0?t=2320) 
- Placeholder text can't be color with tailwind
* Position icon inside input with [flex box](https://youtu.be/0aTRN9CSCY0?t=2370)

- Working on [filter](https://youtu.be/0aTRN9CSCY0?t=2679)
- Working on [card](https://youtu.be/0aTRN9CSCY0?t=3741)

* Reasoning about [div structure](https://tailwindcss.com/course/structuring-a-basic-card)3:12
   * Root div is for outside, edges how it look
   * add div for 'content'

## Deal with Width of a cards
1. put it inside container with horizontal padding 
2. add margin on outside of card

Q: How can pull the card up to look inside?
A: Use negative margin

## Working on inner card
- https://youtu.be/0aTRN9CSCY0?t=3820


## NOTE:
- For positioning elements spacing, use aether only bottom/right margins
  OR **top/left margins**, so they are everywhere in the same direction
- [timestamp](https://youtu.be/0aTRN9CSCY0?t=4650)

## Typography
- add reasonable defaults classes to root node: `antialiased` `text-gray-900`
* Play around with `font-size` `font-bold`, when working with titles
* use nicer `&bull` bullet points
* **Nice trick** - use smaller text with UPPERCASE prop
* when using UPPERCASE letter add `tracking-wide/wider` (line spacing) 
* eyebrow text, make elegance _(adding smaller text above bigger )_
* **Most people forget:** How to handle text wrapping
* Handle big chunk of text with `truncate`
* Use anti aliased when you have text on [ dark background ](https://youtu.be/_JhTaENzfZQ?t=432)
* You can disable wrapping of text [no wra](https://youtu.be/_JhTaENzfZQ?t=2080)

### Badge
* use flex & `items-baseline` to alight together
* Use light bg & dark text


## Images:

- Use `object-cover` and other object props

## Buttons
- Make sure Click target of button is [bigger](https://youtu.be/YY2IM7tMEh4?t=1243)
- [Remove outline](https://youtu.be/YY2IM7tMEh4?t=1398) & make give visual cue when tab to it
* Use flex inside button if you add [span inside](https://stackoverflow.com/questions/35464067/flexbox-not-working-on-button-or-fieldset-elements/35466231#35466231)

## Form Elements:
- Two form element in the [row - using -mx-2](https://youtu.be/YY2IM7tMEh4?t=3069) 


## Resources
- http://lorempixel.com/
```
<img src="https://lorempixel.com/400/200" />
<img src="https://lorempixel.com/400/200/people/1" />
<img src="https://lorempixel.com/400/200/people" />
<img src="https://lorempixel.com/400/200/people/Life-Is-Greate" />

"
```
* [hero patterns](http://www.heropatterns.com/)



## Time Line:
* [Update Button 01h:09min](https://youtu.be/YY2IM7tMEh4?t=4144)
* [max-width Search that scales](https://youtu.be/5LQ9igKq_Nw?t=1228)
* [button to left from full ](https://youtu.be/5LQ9igKq_Nw?t=1288)


## Build Netlify

- [git](https://github.com/adamwathan/rebuilding-netlify)

* [Start Navigation](https://youtu.be/_JhTaENzfZQ?t=1629)
* [Floating Window below nav](https://youtu.be/_JhTaENzfZQ?t=2409)
* [Using flex-1 to allign](https://youtu.be/_JhTaENzfZQ?t=2884)
* [Pull the floating w up](https://youtu.be/_JhTaENzfZQ?t=3097)

* [2 column](https://youtu.be/_JhTaENzfZQ?t=3280)

### Left Column
* [add border to all left items](https://youtu.be/_JhTaENzfZQ?t=3596)
* [left column border on items](https://youtu.be/_JhTaENzfZQ?t=3717)
* [make it sticky](https://youtu.be/_JhTaENzfZQ?t=5095)

### Site Details 

* [Start](https://youtu.be/_JhTaENzfZQ?t=4021)
* [Inner Site Table](https://youtu.be/_JhTaENzfZQ?t=4273)
* [problem with td row not go to the end](https://youtu.be/_JhTaENzfZQ?t=4887)
* [start footer](https://youtu.be/_JhTaENzfZQ?t=4953)


## Borders
* [Only Border Color for whole el, not individual](https://youtu.be/_JhTaENzfZQ?t=3896)
* [dealing with problem with border](https://youtu.be/_JhTaENzfZQ?t=3763)


## Container
[container is size of current breaking point](https://youtu.be/_JhTaENzfZQ?t=3912)

### Building Refactor UI

* `overflow-hidden` When you have rounded border
- `<br/>` its usually in-line, but you can make it responsive by making it hidden on [ certain sizes ](https://youtu.be/17OBlxY2C_0?t=3250)

* Negative Margines to help you center cards inside container
* Hackary with flexbox to align cards inside
* Make button flex in >sm, stack them below sm

https://refactoringui.com/


## Course

### [Structure Basic card](https://tailwindcss.com/course/structuring-a-basic-card)
- How to reason about basic div structure
* using overflow-hidden to hide image poking on rounded corner
* dealing with constrict, using border


### [Making Text Content Feel Deisgned](https://tailwindcss.com/course/making-text-content-feel-designed/)
* look for opportunities to deemphasize stuff
* Use sm upper tracking-wide text
* use eyebrow technique

# Defaults
* Add reasonable defaults on root of the app
  * this is body for plane html, root el for React in App




### [ Designing a badge ](https://tailwindcss.com/course/designing-a-badge)

- To pop (dark background, white text)
- To discrete (lighter background, dark text)

### [Images](https://tailwindcss.com/course/locking-images-to-a-fixed-aspect-ratio)

* Use object-<thing> to manipulate images
* specify aspect ration with following tricks
* when you give padding % sizing, its always based of element width

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

### Badge
* use flex & `items-baseline` to alight together
* Use light bg & dark text


## Images:

- Use `object-cover` and other object props

## Buttons
- Make sure Click target of button is [bigger](https://youtu.be/YY2IM7tMEh4?t=1243)
 - [Remove outline](https://youtu.be/YY2IM7tMEh4?t=1398) & make give visual cue when tab to it

## Form Elements:
- Two form element in the [row - using -mx-2](https://youtu.be/YY2IM7tMEh4?t=3069) 

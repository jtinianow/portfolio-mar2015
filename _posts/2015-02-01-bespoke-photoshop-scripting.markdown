---
layout: post-writing
title:  "Bespoke Photoshop Scripting"
subtitle: "How I Reached Into Photoshop's Brain & Made It Do What I Want."
excerpt: "Here at BDW, we keep what’s called a “Bugs Me List”. Each person’s list
consists of items phrased as “It bugs me (that, when, how)…”"
date:   2015-02-01 21:07:32
categories: writing
---
### It Bugs Me That…

Here at BDW, we keep what’s called a “Bugs Me List”. Each person’s list
consists of items phrased as “It bugs me (that, when, how)…” followed by the
details about what bugs them. It might sound like we’re bitching and moaning
about everyday inconveniences, but quite the contrary, the Bugs Me List serves
an important purpose.

As user-centered designers, understanding and empathizing with other is great
practice for creating better products and experiences. This is the utility of
the Bugs Me List; it helps us understand and explore problems, issues, and
inconveniences, no matter how small or large, without any preconceived
solutions or biases.

Believe it or not, this is how we develop new products. At least some of the
time. Some of the time, an item on the Bugs Me List may be too minor or too
specific to a niche group to merit full-on product development. Regardless of
the scope, our Bugs Me Lists give us ample room to explore problems and create
their solutions.

### I Love/Hate Photoshop

This was the case a couple of weeks ago. I had encountered a really
insignificant problem that might affect 0.001% of the population, and figured
out a half-decent solution to it, but wasn’t quite satisfied with the result.
Clearly, this wasn’t an opportunity to create the next great app, web
platform, or what-have-you. Nonetheless, I sat down yesterday afternoon and
dove into this tiny insignificant annoyance. It may be a small issue, but
solving might have some valuable insight.

<h3>…Photoshop Adds &ldquo;_0000_&rdquo; To My Filenames</h3>

“It bugs me that Photoshop adds two underscores and a four-digit sequence to
names of files generated with the ‘Layer Comps to Files’ script.”

I know, right, total travesty. Like I said, not a huge deal. But when I’ve
carefully named 100+ layer comps and run Photoshop’s built-in “Layer Comps to
Files” script, I really don’t appreciate having to deal with all those extra
digits. This is especially annoying when the images exported are to be used on
the web. I’d much rather keep the filenames short and descriptive (hence the
careful naming of layer comps).

I’ve had projects that involved running this script multiple times a day for
several large files, and often I’d be running the script multiple times per
week after making edits to master files. Like I said, I had a half-baked
solution to this problem. The issue persists, however, as a matter of scale.
Every time I have to remove the extra digits takes a few seconds, but doing it
multiple times a week over a several month project starts to really add up.
I’d rather side-step the whole situation and spend more of my time designing.

Here’s what I set out to achieve:

### The Half-Baked Solution

A couple years ago, Adobe Bridge came to my rescue. I found some article about
Batch Renaming, or maybe it was a Lynda video, at any rate it opened my eyes
to an invaluable workflow tip.

Bridge uses something called GREP (which I’m guessing is some kind of acronym)
to automate the file renaming process. It’s really simple to take an entire
folder of IMG_1924.jpg’s and rename them to FunFamilyVacation_2015_001.jpg’s
in a matter of seconds. Things get tricky when you want to keep parts of the
filename intact (i.e. the prefix chosen on script export, and layer comp
names) while removing other parts (_0001_, _0002_, etc…).

Luckily, Bridge supports intermediate string substitutions, and lets you set
up Batch Renaming presets, which is exactly what I did. So instead of having
to add the same 7 or 8 steps to the batch every time, I could just load up a
preset and run it. This made things a little more efficient, and I was happy
with the solution for a while.

Still, even with the saved preset and the automated process, I wasn’t entirely
satisfied. Why waste any time removing parts of filenames that I didn’t want?

### Just Google It

I sat down, opened up Chrome and searched “how to write a photoshop script.”
It’s worth mentioning that I am wholeheartedly NOT a programmer. I have some
frontend web development experience, but this is mostly limited to HTML and
CSS languages, with very little JavaScript experience. So I was looking for
something simple to get started.

I found a great article on how to write your first photoshop script:
[http://creativedroplets.com/tutorial-write-your-first-photoshop-
script/](http://creativedroplets.com/tutorial-write-your-first-photoshop-
script/). And I had every intention of reading this article, but honestly I
really like to hack things together and sometimes I’m a bit impatient. Before
I really knew what I was doing, I had opened up the script file within
Photoshop that does (kinda) what I want: Layer Comps to Files.jsx. Honestly, I
don’t even know what “jsx” stands for, but I figure that if I just keep a copy
of the original, I shouldn’t run into any big problems down the road.

As I mentioned, I do have _some_ Javascript experience, and this jsx stuff
looks like Javascript, so I scrolled down and tried to decipher it…

…nope, no idea what’s going on here. Let’s do another Google search, this
time: “photoshop layer comps to files without prefix” and the first link is a
thread from Adobe’s forum [https://forums.adobe.com/thread/485215](https://for
ums.adobe.com/thread/485215).

### Following/Not Following Instructions

Again, I’m kind of impatient (at least when it comes to my own projects) so I
jumped around the forum thread a bit and started poking and prodding the
script file. I commented out some lines of code, restarted Photoshop, held my
breath and…

…I didn’t kill Photoshop! I opened up a file with layer comps in it and ran
the Layer Comps to Files script. And I got an error. My understanding of
Javascript is just enough to know that “ReferenceError: zeroSuppress is not a
function” means that the script calls a function that isn’t defined. So I went
back into the script file and removed the line that calls that function.

This time it really did work! The files I exported didn’t have the extra four
digits…

…but one of those pesky underscores was still there, so back to the drawing
board.

I went back into the script and deleted one more line that (I suspect) is
responsible for adding the extra underscore. This time after running the
script, no extra underscore, but only one file was actually exported.

Back to the drawing board again.

### ⌘ Z

I hit undo about half a million times and looked over the thread on Adobe
again. It turns out someone else had the exact same problem that I did and
figured out a solution. I copy/pasted their version and…

…SUCCESS!

This is how I felt.

I got Photoshop to do exactly what I want.

### A Couple of Notes

First off, I’m pretty sure that the way I did this wouldn’t work in Photoshop
CC, since the Cloud updates would probably override the edits to the script.
You could, however, copy the old script into a new file with a different name
(like “My Layer Comps to Files”) and probably be fine. I actually tried this
method, but I got two scripts with identical names in the Photoshop dropdown
menu (there are some additional steps to give the script a unique name in the
menu).

I took notes on this whole process, and I’m now painfully aware of how
inefficiently I addressed a problem that revolves around being more efficient.
I looked at the same thread on Adobe forums later and realized that, had I
read the whole thing ahead of time, I would have realized that someone already
posted a new script to do exactly what I want and had made it available for
free download. So in a sense, I could have avoided the whole process.

Nonetheless, I find some merit in my approach. I’m not a programmer, but as a
designer I do rely heavily on technology, and with the fast-changing tech
landscape, digging deeper than just downloading someone else’s solution has
its benefits. For example, I was kind of disappointed by the first error
message I got, but overjoyed that I knew what it meant _and _how to (sort of)
fix it.

When I set out to create a solution to my little dilemma, I was really keen on
the idea of learning how to write a script from scratch. I suppose I landed on
a different solution because creating that script from scratch would have been
even more time-consuming, and why make a new one if you can just improve the
old one? It’s easy in school to forget about real-world factors like timing,
but even school or no, time is a precious resource.

### Why Bother?

So why exactly did I bother with this at all? Because I believe that a good
designer knows how to leverage every tool at their disposal in order to solve
a problem. This has been one of my attempts at furthering that understanding.
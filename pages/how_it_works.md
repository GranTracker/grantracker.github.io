---
title: "GranTracker: How it Works"
title2: "<i>GranTracker</i>: How it Works"
sidebar: mydoc_sidebar
hide_sidebar: true
toc: true
permalink: how_it_works.html
---

## How it Works

*GranTracker* gets your current DR and SR letters, as well as your current DR percentage, by examining a screenshot of your Player Profile page.

{% include image1.html file="screenshot-steps-10.png" %}

It uses state-of-the-art OCR to get the DR/SR letters, and it examines the DR percent bar pixel-by-pixel to determine your current DR percentage:

{% include image1.html file="screenshot-steps-11.png" max-width="400" %}

All you have to do is drag the screenshot of your Player Profile page, and drop it onto *GranTracker*. (You could also use *GranTracker*'s <span style="white-space:nowrap">File->Import</span> menu item.)

{% include image1.html file="screenshot-steps-12.png" %}

*GranTracker* parses the screenshot, and lets you enter the details of the race (like starting position, ending position, etc).

{% include image1.html file="screenshot-steps-13.png" %}

 It knows the race date/time based on how the PlayStation names screenshot files, but you can manually change the date/time if you'd like. And it color-codes things to show when you've improved your SR rating, for example, or lost some DR points.

It remembers the last car you used for this race, so you don't have to choose it for each race, otherwise you can pick it from a list of all cars in the game...

{% include inline_image1.html file="screenshot-steps-14.png" class="float-left" %}
<div class="my_group-clear-after" style="margin-top: 50px; margin-right: 100px; font-size: 14px;" markdown="1">
NOTES:

* *GranTracker* comes with a database of all cars in the game, and you can easily modify the list, add new cars, etc. in the "Edit Cars" tab.

* I'm still not clear on what qualifies as a "Road Car", so some of these cars are probably classified incorrectly. Fortunately, you can easily bulk change them in the "Edit Cars" screen.
</div>

<p>... or only the cars qualified for this race. This is the default view:</p>

{% include image1.html file="screenshot-steps-15.png" %}

Once you're done, click OK or hit enter, and the new race is added to the database:

{% include image1.html file="screenshot-steps-16.png" %}

<hr class="shaded1"/>

## Add/Edit Daily (Weekly) Races

*GranTracker* makes it easy to add and edit Daily Races:

{% include image1.html file="edit-race-weeks-01.png" %}

{% include image1.html file="edit-race-weeks-02.png" %}

Then just pick the Track and other settings from the various pick lists:

<div class="row">
  <div class="col-md-6">{% include image1.html file="edit-race-weeks-03.png" %}</div>
  <div class="col-md-6">{% include image1.html file="edit-race-weeks-04.png" %}</div>
</div>

<hr class="shaded1"/>

## Add/Edit Cars

Likewise, *GranTracker* makes it easy to add/edit Cars:

{% include image1.html file="edit-cars-01.png" %}

Which means, whenever we figure out what cars should be "Road Cars", we can filter the dataset to just "road" cars, select all of them, and change all of them at once:

{% include image1.html file="edit-cars-02.png" %}

<hr class="shaded1"/>

## Add/Edit Tracks and Maps

The current version of *GranTracker* ships with all the tracks in GT7, but I haven't finished creating maps for all of them. So you can add your own maps, or wait until I release more of the maps.

{% include image1.html file="edit-maps-01.png" %}

## Next Up: [Download and Installation <i class="fa fa-arrow-right" aria-hidden="true"></i>](installation.html)
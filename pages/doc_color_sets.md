---
title: "Color Sets"
title2: "Color Sets"
sidebar: my_documentation_sidebar
hide_sidebar: false
toc: true
wip: false
permalink: doc_color_sets.html
---

## Purpose

{% include alert_flexbox.html type="warning" icon="fa-info-circle" icon-style="font-size: 120%; align-self: flex-start" content-style="margin-bottom: 0 !important"
content="**Color Sets** are used in conjunction with [**Accounts**](doc_accounts.html), so if you don't know about **Accounts** yet, [**read up on them**](doc_accounts.html) before continuing here." %}

When you launch ***GranTracker***, it defaults to the same account that you last selected, because that's what you typically want. However:

<p style="font-size: 120% !important"><b>Imagine this scenario:</b></p>

You ran a race under your Secondary account a while ago. Now you've just run a race under your Primary account. When you launch ***GranTracker***, it's still set to your secondary account, but you forget to change it back to your primary account. When you add the new race, <span style="color:red"><strong>it goes into the wrong account</strong></span>.

That's what **Color Sets** are meant to help prevent.

<div class="pseudo-hr-thin-1"></div>

## Usage

In the [**Accounts**](doc_accounts.html) dialog, you can select the Color Set:

{% include image1.html file="doc/color-sets/color-sets-01.png" style="margin-bottom: 20px !important" %}

{% include image1.html file="doc/color-sets/color-sets-02.png" style="margin-bottom: 20px !important" %}

It makes it glaringly obvious that you're not using your primary account:

{% include image1.html file="doc/color-sets/color-sets-03.png" style="margin-bottom: 20px !important" %}

{% include image1.html file="doc/color-sets/color-sets-04.png" style="margin-bottom: 20px !important" %}

<div class="pseudo-hr-thin-1"></div>

## Color Sets are NOT Themes

Note that Color Sets are not meant to be "themes", nor is the Black Color Set meant to be "Dark Mode". They only change a few colors. But the impact is pretty obvious.

<div class="pseudo-hr-thin-1"></div>

## Adding/Editing Color Sets

### Overview

From the "Accounts" drop-down in the upper left, choose "Edit Color Sets":

{% include image1.html file="doc/color-sets/color-sets-05.png" style="margin-bottom: 20px !important" %}

You'll get a dialog that look something like this:

{% include image1.html file="doc/color-sets/color-sets-06.png" style="margin-bottom: 20px !important" %}

When you start adding or editing a Color Set, the background turns transparent so you can see the colors as you try them out:

{% include image1.html file="doc/color-sets/color-sets-07.png" style="margin-bottom: 20px !important" %}

In to the above picture, you can see what each color is for. You can use the same value for both "Text" and "Link Text" if you want.

<div class="pseudo-hr-thin-1"></div>

### How It Works

Click one of the buttons to Add, Edit, or Delete a color set:

{% include image1.html file="doc/color-sets/color-sets-08.png" 
	caption = "NOTE: If the buttons aren't enabled, click on a Color Set so it's &quot;selected&quot;" %}

Enter a unique name, then click on one of the color pickers:

{% include image1.html file="doc/color-sets/color-sets-09.png" style="margin-bottom: 20px !important" %}

Drag the little slider button to pick a color range:

{% include image1.html file="doc/color-sets/color-sets-10-11.png" style="margin-bottom: 20px !important" %}

Then click somewhere in the color box to zero in on an exact color:

{% include image1.html file="doc/color-sets/color-sets-12.png" style="margin-bottom: 20px !important" %}

<div class="pseudo-hr-thin-1"></div>

### RGB Colors

Instead of using the above method, you can also pick colors using the boxes on the bottom of the picker:

{% include inline_image1.html file="doc/color-sets/color-sets-13.png" %}
<div class="my_group-clear-after" style="margin-top: 40px; margin-left: 40px" markdown="1">
<p>You've probably heard of "RGB" colors - "R" for Red, "G" for Green, and "B" for Blue.</p>
<p>The numbers in these boxes (0-255) represent how much of each color should be used. 0 for no color, 255 for the maximum color.</p>
<p>So for Black, it's 0 for all three colors. The color you pick is shown in the circle above the "R" box.</p>
</div>

Here's some other colors:

<div style="display: flex; flex-direction: row; flex-wrap: wrap">

{% include image1.html file="doc/color-sets/color-sets-14.png" caption="For white, it's max values (255)" caption-style="text-align: center" %}

{% include image1.html file="doc/color-sets/color-sets-15.png" caption="Red is 255 in &quot;R&quot;" caption-style="text-align: center" %}

{% include image1.html file="doc/color-sets/color-sets-16.png" caption="Green is 255 in &quot;G&quot;" caption-style="text-align: center" %}

{% include image1.html file="doc/color-sets/color-sets-17.png" caption="Blue is 255 in &quot;B&quot;" caption-style="text-align: center" %}

{% include image1.html file="doc/color-sets/color-sets-18.png" caption="Yellow is 255 in both &quot;R&quot; and &quot;G&quot;" caption-style="text-align: center" %}

</div>

You can look up other values on the Internet, or just use the sliders.

Hopefully that's enough to get you started.

---
title: "Custom Fields"
title2: "Custom Fields"
sidebar: my_documentation_sidebar
hide_sidebar: false
toc: true
wip: false
permalink: doc_custom_fields.html
---

{% include alert_flexbox.html type="warning" icon-style="font-size: 120%; align-self: flex-start" content-style="margin-bottom: 0 !important" content="**Custom Fields** are currently in beta. They will be released in version 1.6.0." %}

## Purpose

{% include image1.html file="doc/custom-fields/custom-fields-00.png" style="margin-top: 10px !important; margin-bottom: 20px !important" %}

Custom Fields allow you to keep track of your own types of data. For example, you could track:
* Your Qualifying Times
* What Tires you started out with in a race
* How many laps you ran before you changed tires
* Whether or not it rained
* ...and anything else you can think of.

## Creating Custom Fields

You create and modify custom fields by clicking the "Menu" dropdown:

{% include image1.html file="doc/custom-fields/custom-fields-01.png" style="!important; margin-bottom: 20px !important" %}

...and selecting "Edit Custom Fields":

{% include image1.html file="doc/custom-fields/custom-fields-02.png" style="!important; margin-bottom: 20px !important" %}

This brings up the "Edit Custom Fields" dialog. Click the "plus" button to add a new Custom Field:

{% include image1.html file="doc/custom-fields/custom-fields-03.png" style="!important; margin-bottom: 20px !important" %}

### Custom Field Properties

{% include image1.html file="doc/custom-fields/custom-fields-04.png" style="!important; margin-bottom: 20px !important" %}

**Title:** This is the name of the field, like "Qualifying Time". Each Custom Field's Title must be unique.

**Type:** Select one of the "types" from the drop-down box. The options are:

| Type     | Description |
|----------|-------------|
| string   | Any type of text |
| number   | Numbers only, with no decimal places. |
| checkbox | A checkbox, for true/false or yes/no values. |
| time     | This allows entry of times, which are typically qualifying times. In the format 12:34.567, where "12" is minutes, "34" is seconds, and "567" is milliseconds. More on how to use this type down below.

**Header Align:** How the table's column header should be aligned. Left, center, or right.

**Cell Align:** How the data in each column should be aligned. Left, center, or right.

**Hilight Mode:** This is only for "Time" types of fields. Use this to add highlighting every time the time goes up or down. In this example, "QT" is the "time" field:

{% include image1.html file="doc/custom-fields/custom-fields-05.png" style="!important; margin-bottom: 20px !important" %}

The options are:

| Type          | Description |
|---------------|-------------|
| none          | No highlighting. |
| Minus is Good | Highlight with green if the time goes down, red if it goes up. |
| Plus is Good  | Highlight with green if the time goes up, red if it goes down. |

NOTE: Highlighting is only added for races during the same week, and the same letter.

## Usage

Here's some Custom Fields I set up as an example:

{% include image1.html file="doc/custom-fields/custom-fields-06.png" style="!important; margin-bottom: 20px !important" %}

### Add/Edit Races Dialog

Here's the Add/Edit Race dialog, with the new Custom Fields at the bottom:

{% include image1.html file="doc/custom-fields/custom-fields-07.png" style="!important; margin-bottom: 20px !important" %}

You can resize the fields using the "drag handle":

{% include image1.html file="doc/custom-fields/custom-fields-08.png" style="!important; margin-bottom: 20px !important" %}

{% include image1.html file="doc/custom-fields/custom-fields-09.png" style="!important; margin-bottom: 20px !important" %}
Click the green question-mark buttons for help, for each field type.

Enter your custom data:
{% include image1.html file="doc/custom-fields/custom-fields-10.png" style="!important; margin-bottom: 20px !important" %}

### Races Table

After adding new Custom Fields, they appear at the end of the Races Table:

{% include image1.html file="doc/custom-fields/custom-fields-11.png" style="!important; margin-bottom: 20px !important" %}

You can resize the columns, and drag them to new positions:

{% include image1.html file="doc/custom-fields/custom-fields-12.png" style="!important; margin-bottom: 20px !important" %}

---
title: "GranTracker: Downloads"
title2: "Downloads"
sidebar: mydoc_sidebar
hide_sidebar: true
toc: false
wip: false
permalink: downloads.html
custom-javascript-list: ["js/downloadsPage.js"]
---

<div id="firstTimeUserAlert" class="alert alert-info my_alert-flexbox my_group-clear-after">
{% include image1.html file="car-dealer.svg" class="my_alert-flexbox-image"%}
<div class="my_alert-flexbox-text-120" style="padding-top: 10px" markdown="1">To install ***GranTracker*** for the first time, [please click here](installation.html).
</div>
</div>

<div id="userVersionAlert" class="alert alert-warning my_alert-warning my_group-clear-after my_hidden" role="alert">
	{% include inline_image1.html max-width="48"  file="police-car.svg" %}

	<p style="margin-left: 65px" id="userVersionAlertContent">You have version $userVersion$ of GranTracker, which is out of date.
	<br>Why not pull over and upgrade to the latest version. See below for more info.</p>
</div>

### The latest version of ***GranTracker*** is {{site.data.currentVersionInfo.appVersion}}

{% include accordion_panel_begin_with_image.html first=true groupId="versions" panelId="versions_0"
	heading-height="55" title-padding-top="7"
	image-file="old-car.svg" image-max-height="35" image-margin-right="10" title="<span style='font-size: 1.2em'>Version History</span>" %}

{% include accordion_panel_begin.html first=true groupId="version" panelId="version_1_3_1_p1" expanded=true title="v1.3.1" %}

### Bug Fix

* When creating a new Race Week, after selecting the date from the date picker, the app would crash when running in certain time zones. Hopefully this fixes that.

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="version" panelId="version_1_3_0_p1" expanded=true title="v1.3.0" %}

### The Big Change: Time Zones are now take into account.

* This means that the Start Date/Time of each Daily Race Week is adjusted for your time zone.
  * Polyphony Digital puts the new races up on Monday 07:00 am UTC.
  * Starting with this version, ***GranTracker*** adjusts the the start of each race week to match the time zone you live in.
  * So, for example, for people who live in Germany, the new races start on Monday at 8am (I think that's right, but it doesn't matter because ***GranTracker*** is better at calculating time zone differences than I am.)

* <span style="color:red; font-size: 120%"><strong>Because of this, changes were made to the format of the Data Files.</strong></span>
  * Your data will be updated seamlessly in the background, the first time you run the new version.
  * Which means that once you run this updated version, you can't run a previous version against your updated data.
  * So if you have ***GranTracker*** on multiple computers, sharing data files, make sure you update ***GranTracker** on all of them.

### Other Changes/Bug Fixes

* Resizing the main window of ***GranTracker*** should now work much better. In previous versions, if you made the window too small, you'd lose the top and/or bottom of the window. Resizing the window is much improved now, although I'm sure you can still cause problems if you make it too small.

* You can now import screen shot files with the extension of ".jpeg".

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="version" panelId="version_1_2_1_p1" title="v1.2.1" %}

### Bug Fix:

* Removed a debug time delay of 5 seconds when parsing screenshot files. I'm an idiot for leaving it in.

  *"Why does this take so long now? I'll check it in a moment - let me upload this first."* **D'OH!**

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="version" panelId="version_1_2_0_p1" title="v1.2.0" %}

### Updated Features:

* Added the ability to add/edit [**Color Sets**](doc_color_sets.html).
* Start/End Race Position are no longer required. Please let me know if this ends up causing issues - I *think* it should work fine, but you never know.
* Improved the ability to enter "DNF" in the "End Position" edit box.
  * If nothing's in the edit box, typing the "D" letter will change it to "DNF".
  * If the edit box contains "DNF", pressing the Delete or Backspace key anywhere in the edit box will clear the edit box.
  * There’s a new button right next to the edit box. Clicking it will will toggle between “DNF” and clearing out the field.
* Copy Chart to Clipboard improvements:
  * It now includes a border around the image, by default. You can change the border color and/or thickness, or turn it off completely in the Options dialog.
  * Added a Drop Shadow option also, which is "on" by default, but can be changed in the Options dialog.
  * A "Copy" button now appears the the upper-left of the chart when you move your cursor over the chart. Makes it easier to copy the chart, and also makes it more apparent that you actually *can* copy the chart.
* [**Accounts**](doc_accounts.html) information had been stored in the user's settings, but that's too easy to get wiped out by mistake. So I moved it into a file in the Data folder.
* Added a `Help` menu item to open the [**FAQ page**](faq.html) on this website.

### Bug Fixes:

* Fixed a nasty little sorting error that caused strange things to happen if you added races out of chronological order. I thought I'd fixed it earlier, but I must have been smoking something because it certainly was *not* fixed.
* Fixed a bug that caused the application to crash when importing a screenshot that wasn't formatted correctly.
* Fixed a bug that caused the Cars Pick List to not show Manufacturers or Categories.
* Fixed some other minor cosmetic issues.

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="version" panelId="version_1_1_1_p1" title="v1.1.1" %}

### Updated Feature:

* Building on the ability to add Race Week Races with custom letters, which was introduced in v1.1.0, you can now enter a description for the custom race, so you can tell what the new letter is for.

  For more info, see "**Adding Manufacturers Cups Races (and other race types)**" in [**Tips**](doc_tips.html)

* Added an "Edit->Cut" menu item.

### Bug Fixes:

* Fixed a bug that caused the application to crash when importing a screenshot that wasn't formatted correctly.

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="version" panelId="version_1_1_0_p1" title="v1.1.0" %}

### New Feature:

You can now keep track of more than just Daily Races. For example, Manufacturers Cups.

For more info, see "**Adding Manufacturers Cups Races (and other race types)**" in [**Tips**](doc_tips.html)

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="version" panelId="version_1_0_1_p1" title="v1.0.1" %}

### Bug Fixes:

* Fixed a bug that allowed you to add race info for a Race Week, before the Race Week records had been created. This made it so you couldn't run ***GranTracker*** without getting an error.
* Changed the Screenshot Parsing logic to no longer check for certain text in the screenshot, because it only worked for English language users.

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="version" panelId="version_1_0_0_p1" title="v1.0.0" %}

Initial release.

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_end.html last=true %}


{% include accordion_panel_begin_with_image.html first=true groupId="upgrade" panelId="upgrade_0"
	heading-height="75" title-padding-top="14"
	image-file="auto-upgrade.svg" image-max-height="55" image-margin-right="10" title="<span style='font-size: 1.2em'>Upgrade Instructions</span>" %}

{% include accordion_panel_begin.html first=true expanded=true groupId="upgrade_1" panelId="upgrade_01" title="1. Download the new version" %}

* macOS: <a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTracker.macOS.v{{site.data.currentVersionInfo.appVersion}}.zip"><b>Download v{{site.data.currentVersionInfo.appVersion}} for the Mac</b></a>
* Windows: <a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTracker.windows.v{{site.data.currentVersionInfo.appVersion}}.zip"><b>Download v{{site.data.currentVersionInfo.appVersion}} for Windows</b>

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="upgrade_1" panelId="upgrade_02" title="2. Replace the Existing Application" %}

{% include accordion_panel_begin.html first=true groupId="upgrade_2" panelId="upgrade_2_01" title="Mac" %}

Unzip the application, and replace your current application with the new version. That's all you have to do.

{% include security_warning_mac.html %}

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="upgrade_2" panelId="upgrade_2_02" title="Windows" %}

#### Overview:

* When you installed the previous version, you put it in a folder somewhere.
* Replace the contents of that folder with the contents of the new zip file.
* If you created a shortcut to the previous version, delete the shortcut and make a new one.

#### One Way to Do That:

1. Delete the current folder.
2. Re-create the folder (which will be empty, of course).
3. Unzip the new version into the folder.
4. Make sure to delete and recreate any shortcuts you might have made.
5. When you run the app, check the version number in the `Help->About` menu.
  * <span style="color:blue"><strong>If you want to be sure no old shortcuts are sitting around, empty your Recycle Bin.</strong></span>
  * That way, if you try to use an old shortcut, it won't work.

<br/>
{% include security_warning_windows.html %}

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_end.html last=true %}

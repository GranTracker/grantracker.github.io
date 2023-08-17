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

{% include_relative v1.5.1.html first=true expanded=true %}

{% include_relative v1.5.0.html expanded=true %}

{% include_relative v1.4.0.html %}

{% include_relative v1.3.3.html %}

{% include_relative v1.3.2.html %}

{% include_relative v1.3.1.html %}

{% include_relative v1.3.0.html %}

{% include_relative v1.2.1.html %}

{% include_relative v1.2.0.html %}

{% include_relative v1.1.1.html %}

{% include_relative v1.1.0.html %}

{% include_relative v1.0.1.html %}

{% include_relative v1.0.0.html last=true %}

{% include accordion_panel_end.html last=true %}


{% include accordion_panel_begin_with_image.html first=true groupId="upgrade" panelId="upgrade_0"
	heading-height="75" title-padding-top="14"
	image-file="auto-upgrade.svg" image-max-height="55" image-margin-right="10" title="<span style='font-size: 1.2em'>Download and Upgrade Instructions</span>" %}

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

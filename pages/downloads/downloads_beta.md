---
title: "GranTracker: Downloads (BETA)"
title2: "Downloads (BETA)"
sidebar: mydoc_sidebar
hide_sidebar: true
toc: false
wip: false
permalink: downloads_beta.html
custom-javascript-list: ["js/downloadsPage_beta.js"]
---
{% capture my_content %}BETA VERSION. Only use this version if you're willing to help report bugs in the <b><a href='https://www.gtplanet.net/forum/threads/official-grantracker-thread.420003/'>Official GranTracker Thread</a></b> on GTPlanet.
<br>If not, please <b><a href='{{ site.baseurl }}{% link pages/downloads/downloads.md %}'>click here</a></b>.{% endcapture %}

<div class="alert alert-warning my_alert-warning my_group-clear-after" role="alert">
	{% include inline_image1.html file="warning_icon_48.png" %}
	<p style="margin-left: 60px">{{my_content}}</p>
</div>

<div id="userVersionAlert" class="alert alert-warning my_alert-warning my_group-clear-after my_hidden" role="alert">
	{% include inline_image1.html max-width="48"  file="police-car.svg" %}

	<p style="margin-left: 65px" id="userVersionAlertContent">You have version $userVersion$ of GranTracker BETA, which is out of date.
	<br>Why not pull over and upgrade to the latest version. See below for more info.</p>
</div>

### The latest version of ***GranTracker BETA*** is {{site.data.betaVersionInfo.appVersion}}

{% include accordion_panel_begin_with_image.html first=true expanded=true groupId="versions" panelId="versions_0"
	heading-height="55" title-padding-top="7"
	image-file="old-car.svg" image-max-height="35" image-margin-right="10" title="<span style='font-size: 1.2em'>Version History</span>" %}

{% include_relative v1.5.6.html first=true last=true expanded=true %}

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_begin_with_image.html first=true groupId="upgrade" panelId="upgrade_0"
	heading-height="75" title-padding-top="14"
	image-file="auto-upgrade.svg" image-max-height="55" image-margin-right="10" title="<span style='font-size: 1.2em'>Download and Upgrade Instructions</span>" %}

{% include accordion_panel_begin.html first=true expanded=true groupId="upgrade_1" panelId="upgrade_01" title="1. Download the  Beta version" %}

* macOS: <a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTrackerBeta.macOS.v{{site.data.betaVersionInfo.appVersion}}.zip"><b>Download v{{site.data.betaVersionInfo.appVersion}} Beta for the Mac</b></a>
* Windows: <a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTrackerBeta.windows.v{{site.data.betaVersionInfo.appVersion}}.zip"><b>Download v{{site.data.betaVersionInfo.appVersion}} Beta for Windows</b>

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

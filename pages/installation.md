---
title: "GranTracker: Installation"
title2: "<i>GranTracker</i>: Download and Installation"
sidebar: mydoc_sidebar
hide_sidebar: true
toc: false
permalink: installation.html
---

<h2>Current Version is v1.0.1.</h2>


<div class="alert alert-success my_alert-flexbox my_group-clear-after">
{% include image1.html max-width="62" file="auto-upgrade.svg" class="my_alert-flexbox-image"%}
<div class="my_alert-flexbox-text-120" style="padding-top: 10px" markdown="1">For existing users, [click here](downloads.html) to upgrade to the latest version.
</div>
</div>

<hr class="shaded1" style="margin-top: 30px !important; margin-bottom: 20px !important" />

<div id="firstTimeUserAlert" class="alert alert-info my_alert-flexbox my_group-clear-after">
{% include image1.html file="car-dealer.svg" class="my_alert-flexbox-image"%}
<div class="my_alert-flexbox-text-120" style="padding-top: 10px" markdown="1">Potential User, or Just Browsing? Read on...
</div>
</div>

## Congratulations! You're about to be one of my fist ~~guinea pigs~~ valued users!

Obviously I've done a lot of testing, but when other people start using software, they inevitably find bugs quicker than [*insert clever phrase here*].

So ~~if~~ when you find a bug, see the **Reporting Bugs** section below.

<h2>Installation</h2>

{% include accordion_panel_begin_with_image.html first=true groupId="mac_install" panelId="mac_install_0"
	heading-height="58" title-padding-top="10"
	image-file="icon-mac.svg" image-max-width="28" image-margin-right="10" title="Installation Instructions for Mac Users" 
%}

<ol>
<li><a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTracker.macOS.v{{site.data.currentVersionInfo.appVersion}}.zip"><b>Download the Mac version.</b></a></li>
<li>Double-click the file to unzip it, if your Mac didn’t unzip it automatically.

<p style="margin-top: 10px"><span style="color:blue"><strong>DO NOT</strong></span> run the program from your <span style="color:blue"><strong>Downloads</strong></span> folder. Recent versions of macOS will “sandbox” any application you downloaded into the Downloads folder, and the application will not work correctly.</p>
</li>

<li>So move the app (<i><b>GranTracker</b></i> or <i><b>GranTracker.app</b></i>) to another folder, or your <b>Applications</b> folder.</li>
<li>Then try to run it.</li>
</ol>

{% include security_warning_mac.html %}

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_begin_with_image.html first=true groupId="windows_install" panelId="windows_install_0" 
	heading-height="51" title-padding-top="6"
	image-file="icon-windows.svg" image-max-width="28" image-margin-right="10" title="Installation Instructions for Windows Users" 
%}

<ol>
<li><a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTracker.macOS.v{{site.data.currentVersionInfo.appVersion}}.zip"><b>Download the Windows version.</b></a></li>
<li>Unzip the files into a new folder.

<ul>
<li><span style="color:blue"><strong>DO NOT</strong></span> put them in any of the <span style="color:blue"><strong>Program Files</strong></span> folders - <i><b>GranTracker</b></i> needs write access to whatever folder you put them into.</li>
<li>It might take a while to unzip the files, depending on your computer. And if you look closely at the progress dialog, you might be alarmed at the number of files it copies:</li>
{% include image1.html file="windows-install-01.png" %}

<p>There are technical reasons why there's so many files, and in a future version I may be able to change that. But for now, just go with it. Go do a Qualifying Lap if you get impatient.</p>
</ul>
</li>

<li>When all the files have been unzipped, double-click the executable <b>GranTracker</b> (or <b>GranTracker.exe</b>).</li>
</ol>

{% include security_warning_windows.html %}

{% include accordion_panel_end.html last=true %}


<hr class="shaded1" style="margin-top: 30px !important; margin-bottom: 5px !important" />

<h2>Finishing the Installation</h2>

{% include accordion_panel_begin_with_image.html first=true groupId="run_first_time" panelId="run_first_time_0" 
	heading-height="55" title-padding-top="7"
	image-file="grantracker-icon.svg" image-max-height="32" image-margin-right="10" title="Running for the First Time" 
%}

{% include accordion_panel_begin.html first=true groupId="run_first_time_00" panelId="run_first_time_01" expanded=true title="The first time you run the grogram, it asks where to install its data files (tracks, cars, etc.)." %}

{% include inline_image1.html file="run-first-time-01-mac.png" style="margin-right: 30px !important" %}
{% include inline_image1.html file="run-first-time-01-win.png" %}

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="run_first_time_00" panelId="run_first_time_02" title='I recommend you install them in your Documents folder.' %}

{% include inline_image1.html file="run-first-time-02-mac.png" style="margin-right: 30px !important" %}
{% include inline_image1.html file="run-first-time-02-win.png" %}

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="run_first_time_00" panelId="run_first_time_03" title='It will install the files a subfolder called "GranTracker".' %}

{% include inline_image1.html file="run-first-time-03-mac.png" style="margin-right: 30px !important" %}
{% include inline_image1.html file="run-first-time-03-win.png" %}

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="run_first_time_00" panelId="run_first_time_04" title='And now you can have fun!' %}

{% include inline_image1.html file="run-first-time-04-mac.png" %}
{% include inline_image1.html file="run-first-time-04-win.png" %}

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_end.html last=true %}


<hr class="shaded1" style="margin-top: 30px !important; margin-bottom: 5px !important" />

<h2>Reporting Bugs</h2>

{% include accordion_panel_begin_with_image.html first=true groupId="reporting_bugs" panelId="reporting_bugs_0"
	heading-height="68" title-padding-top="14"
	image-file="bug-report.svg" image-max-height="48" image-margin-right="10" title="How to Report Bugs" %}

Be sure to report bugs in the dedicated thread at **[GTPlanet](https://www.gtplanet.net/forum/threads/official-grantracker-thread.420003/)**.
 
{% include accordion_panel_end.html last=true %}


<hr class="shaded1" style="margin-top: 30px !important; margin-bottom: 5px !important" />

<h2>Uninstalling <i><b>GranTracker</b></i></h2>

{% include accordion_panel_begin_with_image.html first=true groupId="uninstall" panelId="uninstall_0"
	heading-height="88" title-padding-top="25"
	image-file="uninstall.png" image-margin-right="10" title="How to Uninstall" %}

{% include accordion_panel_begin.html first=true groupId="uninstall_00" panelId="uninstall_01" expanded=true title="You can use the Help Menu to find the installation folders, if you ever need to" %}

{% include image1.html file="uninstall-01.png" %}

{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="uninstall_00" panelId="uninstall_02" title="Delete These Files/Folders:" %}

### Mac:

1. **Logs**: `~/Library/Logs/GranTracker`
2. **Settings**: `~/Library/Application Support/GranTracker`
3. **Data**: Wherever you installed it, typically `~/Documents/GranTracker`
4. **Application**: Wherever you put it, typically `/Applications/GranTracker.app`

### Windows:

1. **Logs and Settings**: `\Users\<username>\AppData\Roaming\GranTracker`
2. **Data**: Wherever you installed it, typically `\Documents\GranTracker`
4. **Application**: Wherever you put it

{% include accordion_panel_end.html last=true %}
 
{% include accordion_panel_end.html last=true %}
---
title: "GranTracker: Installation"
title2: "<i>GranTracker</i>: Download and Installation"
sidebar: mydoc_sidebar
hide_sidebar: true
toc: false
permalink: installation.html
---

## Congratulations! You're about to be one of my fist ~~guinea pigs~~ valued users!

Obviously I've done a lot of testing, but when other people start using software, they inevitably find bugs quicker than [*insert clever phrase here*].

So ~~if~~ when you find a bug, see the **Reporting Bugs** section below.

<h2>Installation</h2>

{% include accordion_panel_begin_with_image.html first=true groupId="mac_install" panelId="mac_install_0"
	heading-height="58" title-padding-top="10"
	image-file="icon-mac.svg" image-max-width="28" image-margin-right="10" title="Installation Instructions for Mac Users" 
%}

<ol>
<li><a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTracker.macOS.v1.0.0.zip"><b>Download the Mac version.</b></a></li>
<li>Double-click the file to unzip it, if your Mac didn’t unzip it automatically.

<p style="margin-top: 10px"><span style="color:blue"><strong>DO NOT</strong></span> run the program from your <span style="color:blue"><strong>Downloads</strong></span> folder. Recent versions of macOS will “sandbox” any application you downloaded into the Downloads folder, and the application will not work correctly.</p>
</li>

<li>So move the app (<i><b>GranTracker</b></i> or <i><b>GranTracker.app</b></i>) to another folder, or your <b>Applications</b> folder.</li>
<li>Then try to run it.</li>
</ol>

Depending you your system settings, you may get a message similar to this:
{% include image1.html class="my_margin-top-10" file="mac-security-warning-01.png" %}
<p>It just means I didn't pay an arm and a leg to have Apple "verify" my application.</p>

{% include accordion_panel_begin.html first=true groupId="mac_security_error" panelId="mac_security_error_panel" title="Here's how you fix it" %}

{% include accordion_panel_begin.html first=true expanded=true groupId="mac_security_error_00" panelId="mac_security_error_panel_01" title="1. Open System Preferences" %}
{% include image1.html file="mac-security-warning-02.png" %}
{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="mac_security_error_00" panelId="mac_security_error_panel_02" title='2. Click on "Security an Privacy"' %}
{% include image1.html file="mac-security-warning-03.png" %}
{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="mac_security_error_00" panelId="mac_security_error_panel_03" title='3. Make sure it&#39;s on the "General" tab, then click the "lock" icon in the lower right' %}
{% include image1.html file="mac-security-warning-04.png" %}
{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="mac_security_error_00" panelId="mac_security_error_panel_04" title='4. After entering your password, click the "Open Anyway" button' %}
{% include image1.html file="mac-security-warning-05.png" %}
{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="mac_security_error_00" panelId="mac_security_error_panel_05" title='5. You&#39;ll get this warning dialog:' %}
{% include inline_image1.html file="mac-security-warning-06.png" %}
<div class="my_group-clear-after" style="margin-top: 50px; margin-left: 40px;" markdown="1">
<p>What this dialog says is actually true.</p>
<p>So if you trust me not to be a scammer, then click "Open".</p>
<p>Otherwise, click "Move to Trash" and go on with your life without <b><i>GranTracker</i></b>.</p>
</div>

{% include accordion_panel_end.html last=true%}

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_end.html last=true %}



{% include accordion_panel_begin_with_image.html first=true groupId="windows_install" panelId="windows_install_0" 
	heading-height="51" title-padding-top="6"
	image-file="icon-windows.svg" image-max-width="28" image-margin-right="10" title="Installation Instructions for Windows Users" 
%}

<ol>
<li><a href="https://github.com/GranTracker/GranTracker.Data/raw/main/GranTracker.windows.v1.0.0.zip"><b>Download the Windows version.</b></a></li>
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

{% include accordion_panel_begin.html first=true groupId="windows_security_error" panelId="windows_security_error_panel" title='If Windows tries to "protect your computer"...' %}

{% include accordion_panel_begin.html first=true expanded=true groupId="windows_security_error_00" panelId="windows_security_error_panel_01" title='Windows may display a warning message, like this:' %}
{% include image1.html file="windows-security-warning-01.png" %}
{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="windows_security_error_00" panelId="windows_security_error_panel_02" title='Click "More info"' %}
{% include image1.html file="windows-security-warning-02.png" %}
{% include accordion_panel_end.html %}

{% include accordion_panel_begin.html groupId="windows_security_error_00" panelId="windows_security_error_panel_03" title='You&#39;ll get this final warning dialog:' %}
{% include inline_image1.html file="windows-security-warning-03.png" %}
<div class="my_group-clear-after" style="margin-top: 50px; margin-left: 40px;" markdown="1">
<p>Assuming you trust me not to be a scammer, then click "Run anyway".</p>
<p>Otherwise, click "Don&#39;t run", move the files to rhe recycle bin, and go on with your life without <b><i>GranTracker</i></b>.</p>
</div>

{% include accordion_panel_end.html last=true %}

{% include accordion_panel_end.html last=true%}

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
---
layout: default
title: Opkg Helpers
nav_order: 305
parent: Helpers
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Opkg Helpers
{: .no_toc }

Table of contents
{: .text-delta }
1. TOC
{:toc}
---

## Introduction
Python API

## Classes
<button type="button" class="endpoint-collapsible">
<span class="api-name">OpkgJob(Job[bool])</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
class OpkgJob(Job[bool])
```
</div>
A job to be used with the background JobManager that installs or uninstalls dependencies.
<br/><br/>
<h3>Methods</h3>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">do_work(self, logger)</span>
<span class="api-label-container">
<span class="api-label-post">bool</span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def do_work(self, logger: Logger) -> bool
```
</div>
If `self.package` is a List:
    Attempt to install each every package in the list. If a single package fails to install then this method will return False.
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>logger: An optional instance of logger to log output from opkg as debug.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool: True if no errors, False if error.</li>
</ul>
</div>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">stop(self)</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def stop(self)
```
</div>
Kill the opkg process if it is running.
</div>
</div>

## Functions
<button type="button" class="endpoint-collapsible">
<span class="api-name">update_repository(logger)</span>
<span class="api-label-container">
<span class="api-label-post">Tuple[bool, str]</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def update_repository(logger: Optional[Logger] = None) -> Tuple[bool, str]
```
</div>
Update the opkg package repository.
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>logger: Optional instance of logger to log output from opkg as debug.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool: True if successful, False if it was not.</li>
    <li>str: Empty if successful, error message if it was not.</li>
</ul>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">check_if_installed(package, logger)</span>
<span class="api-label-container">
<span class="api-label-post">bool</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def check_if_installed(package: str, logger: Optional[Logger] = None) -> bool
```
</div>
Check if a package is already installed via opkg.
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>package: The name of the package to search for.</li>
    <li>logger: An optional instance of logger to log output from opkg as debug.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool: True if package installed, False if it is not.</li>
</ul>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">install_dependency(package, logger, skip_repo_update)</span>
<span class="api-label-container">
<span class="api-label-post">[bool, str]</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def install_dependency(package: str, logger: Optional[Logger] = None, skip_repo_update: bool = False) -> [bool, str]
```
</div>
Install a package via opkg if its not currently installed.
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>package: The name of the package to install.</li>
    <li>logger: An optional instance of logger to log output from opkg as debug.</li>
    <li>skip_repo_update: True to skip running `opkg update`. An internet connection will still be checked for.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool: True if the package was installed, False if it as not.</li>
    <li>str: Empty if successful, error message if it was not.</li>
</ul>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">uninstall_dependency(package, logger)</span>
<span class="api-label-container">
<span class="api-label-post">[bool, str]</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def uninstall_dependency(package: str, logger: Optional[Logger] = None) -> [bool, str]
```
</div>
Uninstall a package via opkg if its currently installed.
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>package: The name of the package to install.</li>
    <li>logger: An optional instance of logger to log output from opkg as debug.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool: True if the package was installed, False if it as not.</li>
    <li>str: Empty if successful, error message if it was not.</li>
</ul>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

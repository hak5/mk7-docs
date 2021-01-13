---
layout: default
title: Network Helpers
nav_order: 303
parent: Helpers
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Network Helpers
{: .no_toc }

Table of contents
{: .text-delta }
1. TOC
{:toc}
---

## Introduction
Python API

## Functions
<button type="button" class="endpoint-collapsible">
<span class="api-name">check_for_internet(url, timeout, logger)</span>
<span class="api-label-container">
<span class="api-label-post">bool</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def check_for_internet(url: str = 'https://downloads.hak5.org/internet', timout: int = 10, logger: Optional[Logger] = None) -> bool
```
</div>
Attempt to connect to a given url. If a connection was established then assume there is an internet connection.<br/>
If the connection fails to establish or times out then assume there is not internet.
Run a command and pipe it to grep for some output.
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>url: The url to attempt to connect to. Default is https://downloads.hak5.org/internet.</li>
    <li>timeout: The amount of time in seconds to wait before giving up. Default is 10.</li>
    <li>logger: An optional instance of Logger use to log any exceptions while trying to establish a connection.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool: True if there is an internet connection, False if there is not.</li>
</ul>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">get_interfaces()</span>
<span class="api-label-container">
<span class="api-label-post">List[str]</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def get_interfaces() -> List[str]
```
</div>
Get a list of current network interfaces.
<br/><br/>
<h3>Returns</h3>
<ul>
    <li>List[str]: A list of network interfaces available on the device.</li>
</ul>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

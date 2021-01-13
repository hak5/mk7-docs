---
layout: default
title: Notification Helpers
nav_order: 304
parent: Helpers
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Notification Helpers
{: .no_toc }

Table of contents
{: .text-delta }
1. TOC
{:toc}
---

## Introduction
Python API

## Constants
<button type="button" class="endpoint-collapsible">
<span class="api-name">Log Levels</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
INFO = 0
WARN = 1
ERROR = 2
OTHER = 3
SUCCESS = 4
```
</div>
<br/><br/>
</div>

## Functions
<button type="button" class="endpoint-collapsible">
<span class="api-name">send_notification(message, module_name, level)</span>
<span class="api-label-container">
<span class="api-label-post">bool</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def send_notification(message: str, module_name: str, level: int = INFO) -> bool
```
</div>
Send a notification over the WiFi Pineapple's Notification socket
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>message: Notification message.</li>
    <li>module_name: The name of the module the notification is from.</li>
    <li>level: Notification level.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool</li>
</ul>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

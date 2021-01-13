---
layout: default
title: Command Helpers
nav_order: 302
parent: Helpers
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Command Helpers
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
<span class="api-name">grep_output(command, grep_text, grep_options)</span>
<span class="api-label-container">
<span class="api-label-post">bytes</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def grep_output(command: str, grep_text: str, grep_options: List[str] = None) -> bytes
```
</div>
Run a command and pipe it to grep for some output.
The output is returned.
<br/><br/>
For example this command:<br/>
    ps -aux | grep pineap<br/>
Looks like this:<br/>
    grep_output('ps -aux', 'pineap')<br/>
<br/>
<h3>Parameters</h3>
<ul>
    <li>command: The initial command to run.</li>
    <li>grep_text: The text to grep for.</li>
    <li>grep_options: Any options to be passed to grep.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bytes: The output as bytes.</li>
</ul>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">check_for_process(process_name)</span>
<span class="api-label-container">
<span class="api-label-post">bool</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def check_for_process(process_name) -> bool
```
</div>
Check if a process is running by its name.
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>process_name: The name of the process to look for.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bool: True if the process is running, False if it is not.</li>
</ul>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

---
layout: default
title: Job
nav_order: 307
parent: Jobs
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Job
{: .no_toc }

Table of contents
{: .text-delta }
1. TOC
{:toc}
---

## Introduction
Python API

## Types
<button type="button" class="endpoint-collapsible">
<span class="api-name">TResult</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
TResult = TypeVar('TResult')
```
</div>
</div>


## Classes
<button type="button" class="endpoint-collapsible">
<span class="api-name">Job(Generic[TResult])</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
class Job(Generic[TResult])
```
</div>
A job to be used with the background JobManager that installs or uninstalls dependencies.
<br/><br/>
<h3>Properties</h3>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">was_successful(self)</span>
<span class="api-label-container">
<span class="api-label-post">bool</span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def was_successful(self) -> bool
```
</div>
Checks if the job complete without an error.
If the job has not completed or if it complete with no errors return True.
If the job completed with an error then return False.
<br/><br/>
<h3>Returns</h3>
<ul>
    <li>bool: True if the job completed without an error, otherwise False.</li>
</ul>
</div>


<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

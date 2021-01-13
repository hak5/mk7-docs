---
layout: default
title: Job Runner
nav_order: 309
parent: Jobs
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Job Runner
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
<span class="api-name">JobRunner</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
class JobRunner(Thread)
```
</div>
<h3>Methods</h3>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">run(self)</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def run(self)
```
</div>
Call the `do_work` method on `self.job` and assign the results to `self.job.result`.
If an exception is raised by the `do_work` method, catch it and set `self.job.error` equal to it.
After `do_work` finishes set `self.job.is_complete` equal to True.
<br/>
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
Call the `stop` method on `self.job` if the job is running.
<br/>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>
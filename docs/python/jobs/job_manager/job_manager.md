---
layout: default
title: Job Manager
nav_order: 308
parent: Jobs
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Job Manager Class
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
<span class="api-name">JobManager</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
class JobManager
```
</div>
A job to be used with the background JobManager that installs or uninstalls dependencies.
<br/><br/>
<h3>Methods</h3>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">get_job(self, job_id, remove_if_complete)</span>
<span class="api-label-container">
<span class="api-label-post">Optional[Job]</span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def get_job(self, job_id: str, remove_if_complete: bool = True) -> Optional[Job]
```
</div>
Attempt to get a job by its id. If the job_id doesn't exist then None is returned.
If `remove_if_complete` is True the job will be deleted from memory only if it is completed.
This is the default behavior to prevent JobManager from tacking up unnecessary memory.
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>job_id: The id of the job to find.</li>
    <li>remove_if_complete: True to delete the job from memory after its complete. (Default: True)</li>
</ul>
<br/>
<h3>Returns</h3>
<ul>
    <li>Optional[Job]: an instance of Job if found, else None</li>
</ul>
</div>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">prune_completed_jobs</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def prune_completed_jobs(self)
```
</div>
Removes all completed jobs from memory.
<br/>
</div>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">remove_job(self, job_id)</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def remove_job(self, job_id: str)
```
</div>
Remove a job from memory based on its id.
This will remove the job regardless of its completion status.
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>job_id: The id of the job to delete.</li>
</ul>
<br/>
</div>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">execute_job(self, job, callbacks)</span>
<span class="api-label-container">
<span class="api-label-post">str</span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def execute_job(self, job: Job, callbacks: List[Callable[[Job], None]] = None) -> str
```
</div>
Assign an id to a job and execute it in a background thread.
The id will be returned and the job can be tracked by calling `get_job` and providing it the id.
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>job: an instance of Job to start running.</li>
    <li>callbacks: An optional list of functions that take `job` as a parameter to be called when completed. These will be called regardless if `job` raises an exception or not.</li>
</ul>
<br/>
<h3>Returns</h3>
<ul>
    <li>str: The id of the running job.</li>
</ul>
</div>


<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

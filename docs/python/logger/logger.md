---
layout: default
title: Logger
nav_order: 310
parent: WiFi Pineapple Python Documentation
has_children: true
has_toc: false
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Logger
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
<span class="api-name">get_logger(name, level, log_to_file, console_logger_level</span>
<span class="api-label-container">
<span class="api-label-post">Logger</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def get_logger(name: str, level: int, log_to_file: bool = True, console_logger_level: int = logging.DEBUG) -> Logger
```
</div>
<h3>Parameters</h3>
<ul>
    <li>name: Name of Logger</li>
    <li>level: Logging level.</li>
    <li>log_to_file: Log to a file in /tmp/. Default: True</li>
    <li>console_logger_level: Console log level Default: DEBUG</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>Logger</li>
</ul>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

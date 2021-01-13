---
layout: default
title: Helpers
nav_order: 301
parent: WiFi Pineapple Python Documentation
has_children: true
has_toc: false
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Helpers Class
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
<span class="api-name">json_to_bytes(message)</span>
<span class="api-label-container">
<span class="api-label-post">bytes</span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
def json_to_bytes(message) -> bytes
```
</div>
JSON deserialize a message and then decode it.
<br/><br/>
Use this to convert your json message to bytes before publishing it over the socket.
<br/>
<h3>Parameters</h3>
<ul>
    <li>message: A json serializable list or a dict.</li>
</ul>
<h3>Returns</h3>
<ul>
    <li>bytes</li>
</ul>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

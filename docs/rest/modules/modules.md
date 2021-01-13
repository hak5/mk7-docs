---
layout: default
title: Modules
nav_order: 111
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# Modules
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
Modules are third-party extensions for the WiFi Pineapple.

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Handle Module Request</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/module/request</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Modules</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/modules</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Create Module</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/modules/create</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Install Remote Module</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/modules/install</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Sideload Module</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/modules/sideload/tar</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get list of available Modules</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/modules/available</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Remove Module</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/modules/:moduleName</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Mark Module as Favourite</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/modules/favourite/:moduleName</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    BODY
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    RESPONSE
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>


<script src="https://foxtrot.github.io/documentation/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

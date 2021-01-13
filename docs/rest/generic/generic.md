---
layout: default
title: Generic
nav_order: 104
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# Generic
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
Generic actions such as shutdown, reboot, and getting the device status.

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Reboot the WiFi Pineapple Mark 7</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/reboot</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns success state:
<div class="code-block" markdown="1">
```json
{
    "success": true
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Shutdown the WiFi Pineapple Mark 7</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/shutdown</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns success state:
<div class="code-block" markdown="1">
```json
{
    "success": true
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get WiFi Pineapple Mark 7 Status</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/status</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns device status:
<div class="code-block" markdown="1">
```json
{
    "versionString": string,
    "version": string,
    "uptime": number,
    "hostname": string,
    "time": number
    "warnings": PineappleWarnings,
    "errors" PineappleErrors
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get WiFi Pineapple Mark 7 Model</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/device</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns device model:
<div class="code-block" markdown="1">
```json
{
    "device": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Download File</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/download</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "filename": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns stream of specified file
<br/>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Lookup OUI Vendor</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/helpers/lookupOUI/:oui</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns an OUI vendor:
<div class="code-block" markdown="1">
```json
{
    "available": true,
    "vendor": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Check Internet Connection</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/helpers/checkonline</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns internet connectivity status:
<div class="code-block" markdown="1">
```json
{
    "online": boolean
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>


<script src="https://foxtrot.github.io/documentation/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

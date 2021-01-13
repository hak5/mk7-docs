---
layout: default
title: Recon
nav_order: 108
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# Recon
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
Manage Recon

## Types
<button type="button" class="endpoint-collapsible">
<span class="api-name">ReconResult</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface ReconResult {
    "APResults": []APResult
    "OutOfRangeResult": []APClient
    "UnassociatedResult": []APClient
}
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">APResult</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface APResult {
    "ssid": string
    "bssid": string
    "encryption": number
    "hidden": number
    "wps": number
    "channel": number
    "signal": number
    "data": number
    "last_seen": number
    "probes": number
    "clients": []APClient
}
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">APClient</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface APClient {
    "client_mac": string
    "ap_mac": string
    "ap_channel": number
    "data": number
    "broadcast_probes": number
    "direct_probes": number
    "last_seen": string
}
```
</div>
</div>

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Start Recon Scan</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/recon/start</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "live": bool,
    "scan_time": number,
    "band": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns scan status:
<div class="code-block" markdown="1">
```json
{
    "scanRunning": bool,
    "scanID": number
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Stop Recon Scan</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/recon/stop</span>
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
<span class="api-name">Get Recon Scan Status</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/recon/status</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns the current scan status:
<div class="code-block" markdown="1">
```json
{
    "captureRunning": bool,
    "scanRunning": bool,
    "continuous": bool,
    "scanPercent": number,
    "scanID": number
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Recon Scans</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/recon/scans</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns array of previous scans:
<div class="code-block" markdown="1">
```json
[{
    "scan_id": number,
    "date": string
}]
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Recon Scan</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/recon/scans/:scan_id</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns specified scan data:
<div class="code-block" markdown="1">
```json
{
    "APResults": APResult[],
    "OutOfRangeClientResults": APClient[],
    "UnassociatedClientResults": APClient[]
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Delete Recon Scan</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/recon/scans/:scan_id</span>
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
<span class="api-name">Download Recon Scan</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/recon/scans/:scan_id/download/json</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns a JSON stream of the specified scan
<br/>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>


<script src="https://foxtrot.github.io/documentation/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

---
layout: default
title: Settings
nav_order: 109
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# Settings
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
Manage Device Settings

## Types
<button type="button" class="endpoint-collapsible">
<span class="api-name">Handshake</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface Handshake {
    "mac" string,
    "type": string,
    "extension" string,
    "source": string
}
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">ClientModeNetwork</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface ClientModeNetwork {
    bssid: string;
    channel: string;
    encryption: boolean;
    password: string;
    quality: string;
    ssid: string;
    hidden: boolean;
    signal: string;
}
```
</div>
</div>



## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Change Password</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/users/password</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "old_password": string,
    "new_password": string,
    "confirm_password": string,
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Timezone</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/timezone</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "timezone": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Set Timezone</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/timezone</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "timezone": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Sync Browser Time</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/synctime</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "timestamp": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Button Script</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/button</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "button_script": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Set Button Script</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/button</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "button_script": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Resource Information</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/resources</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns `Resources`:
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get USB Devices</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/usb</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "devices": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Update Channel</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/update/channel</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "channel": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Set Update Channel</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/update/channel</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "channel": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Updates</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/update/refresh</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "update_found": bool,
    "update_version": string,
    "update_changelog": string,
    "channel_closed": bool,
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Perform Update</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/settings/update/apply</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Reinstall Firmware</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/settings/update/reinstall</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Enroll in Cloud C2</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/cloudc2/config</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Form Body</h3>
<ul>
    <li>`c2config`: Cloud C2 Configuration</li>
</ul>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Unenroll from Cloud C2</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/settings/cloudc2/config</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Check Cloud C2 Enrollment</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/cloudc2/config</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "enrolled": bool
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Routing Table</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/networking/routes</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "routes": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Management AP Configuration</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/networking/ap/management</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "ssid": string,
    "password": string,
    "hidden": bool,
    "disabled": bool
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Save Management AP Configuration</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/networking/ap/management</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "ssid": string,
    "password": string,
    "confirm_password": string,
    "hidden": bool,
    "disabled": bool
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Open AP Configuration</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/networking/ap/open</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "ssid": string,
    "country": string,
    "channel": number,
    "hidden": bool
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Save Open AP Configuration</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/networking/ap/open</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "ssid": string,
    "country": string,
    "channel": number,
    "hidden": bool
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Evil WPA Twin AP Configuration</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/networking/ap/wpa</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "ssid": string,
    "bssid": string,
    "auth": string,
    "password": string,
    "hidden": bool,
    "disabled": bool,
    "capture_handshakes": bool
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Save Evil WPA Twin AP Configuration</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/settings/networking/ap/wpa</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "ssid": string,
    "bssid": string,
    "auth": string,
    "password": string,
    "confirm_password": string,
    "hidden": bool,
    "disabled": bool,
    "capture_handshakes": bool
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Client Mode Status</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/networking/clientmode/status</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "interfaces": string[],
    "connected": bool,
    "ssid": string,
    "ip": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Scan for Client Networks</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/settings/networking/clientmode/scan</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "interface": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns `ScanResult[]`
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Connect to Network</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/settings/networking/clientmode/connect</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "ssid": string,
    "bssid": string,
    "encryption": string,
    "password": string,
    "hidden": bool,
    "interface": string
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Disconnect from Network</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/settings/networking/clientmode/disconnect</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Network Interfaces</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/networking/interfaces</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns an array of network interfaces.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Start Diagnostics</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/settings/diagnostics/start</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
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
<span class="api-name">Get Diagnostics Status</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/settings/diagnostics/status</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "completed": bool,
    "output": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>


<script src="https://foxtrot.github.io/documentation/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

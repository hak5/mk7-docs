---
layout: default
title: PineAP
nav_order: 107
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# PineAP
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
Manage PineAP

## Types
<button type="button" class="endpoint-collapsible">
<span class="api-name">PineAPSettings</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface PineAPSettings {
    "enablePineAP": bool,
    "autostartPineAP": bool,
    "ap_channel": string,
    "beacon_interval": string,
    "beacon_response_interval": string,
    "beacon_responses": bool,
    "broadcast_ssid_pool": bool,
    "capture_ssids": bool,
    "connect_notifications": bool,
    "disconnect_notifications": bool,
    "karma": bool,
    "logging": bool,
    "pineap_mac": string,
    "target_mac": string,
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">ChallengeResponse</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface ChallengeResponse {
    "type": string,
    "username": string,
    "challenge": string,
    "response": string
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">BasicResponse</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface BasicResponse {
    "type": string,
    "identity": string,
    "password": string,
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Log</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface Log {
    "type": int,
    "mac": string,
    "ssid": string,
    "duplicates": int,
    "created": int,  
    "updated": int,  
}
```
</div>
</div>

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get PineAP Settings</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/settings</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns current PineAP settings:
<div class="code-block" markdown="1">
```json
{
    "enablePineAP": bool,
    "AutoStart": bool,
    "ap_channel": string,
    "beacon_interval": string,
    "beacon_response_interval": string,
    "beacon_responses": bool,
    "broadcast_ssid_pool": bool,
    "capture_ssids": bool,
    "connect_notifications": bool,
    "disconnect_notifications": bool,
    "karma": bool,
    "logging": bool,
    "pineap_mac": string,
    "target_mac": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Save PineAP Settings</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/pineap/settings</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "enablePineAP": bool,
    "AutoStart": bool,
    "ap_channel": string,
    "beacon_interval": string,
    "beacon_response_interval": string,
    "beacon_responses": bool,
    "broadcast_ssid_pool": bool,
    "capture_ssids": bool,
    "connect_notifications": bool,
    "disconnect_notifications": bool,
    "karma": bool,
    "logging": bool,
    "pineap_mac": string,
    "target_mac": string
}
```
</div>

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
<span class="api-name">Get SSID Pool</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/ssids</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns a string of SSIDs seperated by newlines.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Clear SSID Pool</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/ssids</span>
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
<span class="api-name">Add SSID to Pool</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/pineap/ssids/ssid</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "ssid": string
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
<span class="api-name">Remove SSID from Pool</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/ssids/ssid</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "ssid": string
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
<span class="api-name">Get WPA Handshakes</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/handshakes</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "handshakes": Handshake[]
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Delete All WPA Handshakes</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/handshakes</span>
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
<span class="api-name">Start WPA Handshake Capture</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/pineap/handshakes/start</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "bssid": string,
    "channel": number,
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
<span class="api-name">Stop WPA Handshake Capture</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/pineap/handshakes/stop</span>
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
<span class="api-name">Check if WPA Handshake Capture Active</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/handshakes/check</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "captureRunning": bool,
    "bssid": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Delete WPA Handshake</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/handshakes/delete</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "type": string,
    "bssid": bssid
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
<span class="api-name">Get PineAP Enterprise Settings</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/enterprise/settings</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "enabled": bool,
    "associations": bool,
    "ssid": string,
    "mac": string,
    "type": string,
    "downgrade": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Save PineAP Enterprise Settings</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/pineap/enterprise/settings</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "enabled": bool,
    "associations": bool,
    "ssid": string,
    "mac": string,
    "type": string,
    "downgrade": string
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
<span class="api-name">Check if Enterprise Certificate available</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/enterprise/cert</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "installed": bool
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Delete Enterprise Certificate</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/enterprise/cert</span>
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
<span class="api-name">Generate Enterprise Certificate</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/pineap/enterprise/generatecert</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "state": string,
    "country": string,
    "locality": string,
    "organization": string,
    "email": string,
    "commonname": string
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
<span class="api-name">Get Basic PineAP Enterprise Data</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/enterprise/basicdata</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns `BasicResponse[]`
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Clear Basic PineAP Enterprise Data</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/enterprise/basicdata</span>
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
<span class="api-name">Get PineAP Enterprise Challenge Data</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/enterprise/challengedata</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns `ChallengeResponse[]`.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Clear PineAP Enterprise Challenge Data</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/enterprise/challengedata</span>
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
<span class="api-name">Get Connected Clients</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/clients</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns `Client[]`.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Connected Client Count</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/clients/count</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns `number`.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Kick Connected Client</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/clients/kick</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "mac": string
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
<span class="api-name">Get Previously Connected Clients</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/previousclients</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns `PreviousClient[]`.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Remove Previously Connected Client</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/previousclients/remove</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "mac": string
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
<span class="api-name">Get PineAP Log</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/logging</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns `Log[]`.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Filters Client Mode</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/filters/client/mode</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "mode": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Set Filters Client Mode</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/pineap/filters/client/mode</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "mode": string
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
<span class="api-name">Get Filters Client List</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/filters/client/list</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns MAC addresses seperated by newlines.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Set Filters Client List</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/pineap/filters/client/list</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "mac": string
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
<span class="api-name">Remove Client from Filter</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/filters/client/list</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "mac": string
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
<span class="api-name">Get Filters SSID Mode</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/filters/ssid/mode</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns:
<div class="code-block" markdown="1">
```json
{
    "mode": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Set Filters SSID Mode</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/pineap/filters/ssid/mode</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "mode": string
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
<span class="api-name">Get Filters SSID List</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/pineap/filters/ssid/list</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns a string of SSIDs seperated by newlines.
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Set Filters SSID List</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/pineap/filters/ssid/list</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "mac": string
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
<span class="api-name">Remove SSID from Filter</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/pineap/filters/ssid/list</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "ssid": string
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
<span class="api-name">Deauthenticate AP</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/pineap/deauth/ap</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "bssid": string,
    "multiplier": number,
    "channel": number,
    "clients": string[]
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
<span class="api-name">Deauthenticate Client</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/pineap/deauth/client</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "bssid": string,
    "mac": string,
    "multiplier": number,
    "channel": number
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


<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

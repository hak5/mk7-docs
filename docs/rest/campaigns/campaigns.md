---
layout: default
title: Campaigns
nav_order: 106
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# Campaigns
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
Manage Campaigns

## Types
<button type="button" class="endpoint-collapsible">
<span class="api-name">Campaign</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface Campaign {
    enabled?: boolean;
    content?: string;
    name: string;
    created: number;
    type: number;
    timeout?: boolean;
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">CampaignReport</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface CampaignReport {
    fileName: string;
    fullPath: string;
}
```
</div>
</div>

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get All Campaigns</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/campaigns</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns all campaigns:
<div class="code-block" markdown="1">
```json
{
    "campaigns": Campaign[]
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get All Campaign Reports</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/campaigns/reports</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns all campaign reports:
<div class="code-block" markdown="1">
```json
{
    "fullPath": string,
    "fileName": string
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Delete Campaign Report</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/campaigns/reports/:name</span>
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
<span class="api-name">Create New Campaign</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/campaigns/create</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "name": string,
    "mode": number,
    "autoRun": bool,
    "interval": string,
    "plainReport": bool,
    "htmlReport": bool,
    "storagePath": string,
    "enableC2": bool,
    "enableC2Exfil": bool
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
<span class="api-name">Delete Campaign</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/campaigns/:name</span>
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
<span class="api-name">Get Campaign</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/campaigns/:name</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns the requested campaign:
<div class="code-block" markdown="1">
```json
{
    "campaign": Campaign
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Save Campaign</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/campaigns/:name</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "name": string,
    "content": string
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
<span class="api-name">Enable Campaign</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/campaigns/:name/enable</span>
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
<span class="api-name">Disable Campaign</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/campaigns/:name/disable</span>
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


<script src="https://foxtrot.github.io/documentation/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

---
layout: default
title: Notifications
nav_order: 103
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# Notifications
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
The notifications system allows modules or other tools to communicate with the WiFi Pineapple user via the UI. You may specify a notification level, message, and optionally the name of the module that sent the notification.

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Create Notification</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/notifications</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "level": number,
    "message": string,
    "module_name": string
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
<span class="api-name">Get Notifications</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/notifications</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns an array of notifications:
<div class="code-block" markdown="1">
```json
[{
    "id": number,
    "message": string,
    "level": number,
    "time": string,
    "read": bool,
    "displayed": bool,
    "module_name": string
}]
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Delete All Notifications</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/notifications</span>
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
<span class="api-name">Delete Notification</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-delete">DELETE</span>
<span class="api-label-delete">/api/notifications/:notificationId</span>
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
<span class="api-name">Mark All Notifications as Read</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/notifications/read</span>
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
<span class="api-name">Mark Notification as Read</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/notifications/:notificationId/read</span>
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
<span class="api-name">Mark Notification as Displayed</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-put">PUT</span>
<span class="api-label-put">/api/notifications/:notificationId/displayed</span>
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


<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

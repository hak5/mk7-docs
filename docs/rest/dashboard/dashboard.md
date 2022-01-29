---
layout: default
title: Dashboard
nav_order: 105
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# Dashboard
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Introduction
Dashboard resources and helpers.

## Types

<button type="button" class="endpoint-collapsible">
<span class="api-name">DashboardCardData</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
export interface DashboardCardData {
    clientsConnected: string;
    previousClients: string;
    diskUsage: DiskUsageInterface;
    mostPopularTraffic: TrafficInterface;
    reconScansRan: number;
    ssidsSeen: SSIDsSeenInterface;
    systemStatus: SystemStatusInterface;
    totalBandwidthUsed: number;
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">DiskUsageInterface</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
interface DiskUsageInterface {
    rootUsage: string;
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">TrafficInterface</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
interface TrafficInterface {
    first: string;
    second: string;
    third: string;
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">SSIDsSeenInterface</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
interface SSIDsSeenInterface {
    totalSSIDs: string;
    currentSSIDs: string;
}
```
</div>
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">SystemStatusInterface</span>
</button>
<div class="endpoint-content" markdown="1">
<div class="code-block" markdown="1">
```typescript
interface SystemStatusInterface {
    cpuUsage: number;
    memoryUsage: number;
    temperature: number;
}
```
</div>
</div>

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Dashboard Card Data</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/dashboard/cards</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, RETURNS:
<div class="code-block" markdown="1">
```json
{
    "systemStatus": SystemStatus,
    "diskUsage": DiskUsage,
    "clientsConnected": string,
    "previousClients": string,
    "ssidsSeen": SSIDsSeen
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>
<button type="button" class="endpoint-collapsible">
<span class="api-name">Get Dashboard News</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-get">GET</span>
<span class="api-label-get">/api/dashboard/news</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Response</h3>
<b>If successful</b>, returns latest news:
<div class="code-block" markdown="1">
```json
{
    "news": NewsItem[]
}
```
</div>
<b>If unsuccessful</b>: [See REST Error Responses](../../errors/errors)
</div>


<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

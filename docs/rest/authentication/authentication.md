---
layout: default
title: Authentication
nav_order: 102
parent: WiFi Pineapple REST Documentation
---

<link rel="stylesheet" href="../../../../assets/css/endpoints.css">

# REST Authentication
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
The WiFi Pineapple REST API will only accept requests that are sent with a valid token. Currently, the only way to generate a token is to login as the user. API Token generation is a planned feature.

```bash
foxtrot@intent:~$ curl -X POST http://172.16.42.1:1471/api/login -d '{"username": "root", "password": "test"}'
{"token":"eyJVc2VyIjoicm9vdCIsIkV4cGlyeSI6IjIwMjAtMDUtMTdUMTg6NDM6NTEuNjg1NjA5NTJaIn0=.VZpkUmWREeLMtKGx0wZFeWczj8hImbPnulTT5zpnQpM="}
foxtrot@intent:~$
```

The API endpoint responds with an error for invalid credentials, or a token on success. The token can then be used to make other API requests.

```bash
foxtrot@intent:~$ curl -X PUT http://172.16.42.1:1471/api/notifications -H "Authorization: Bearer eyJVc2VyIjoicm9vdCIsIkV4cGlyeSI6IjIwMjAtMDUtMTdUMTg6NDM6NTEuNjg1NjA5NTJaIn0=.VZpkUmWREeLMtKGx0wZFeWczj8hImbPnulTT5zpnQpM=" -d '{"level": 0, "message": "Hello World!"}'
{"success":true}
foxtrot@intent:~$
```
```bash
foxtrot@intent:~$ curl -X GET http://172.16.42.1:1471/api/notifications -H "Authorization: Bearer eyJVc2VyIjoicm9vdCIsIkV4cGlyeSI6IjIwMjAtMDUtMTdUMTg6NDM6NTEuNjg1NjA5NTJa
In0=.VZpkUmWREeLMtKGx0wZFeWczj8hImbPnulTT5zpnQpM="  
[{"id":1,"message":"Hello World!","level":0,"time":"2020-09-18T10:30:21.031669675Z","read":false,"displayed":false,"module_name":""}]
foxtrot@intent:~$
```

## Endpoints
<button type="button" class="endpoint-collapsible">
<span class="api-name">Authenticate with the WiFi Pineapple Mark 7</span>
<span class="api-label-container">
<span class="api-rest-label api-rest-label-post">POST</span>
<span class="api-label-post">/api/login</span>
</span>
</button>
<div class="endpoint-content">
Obtain an authentication token.<br/>
<h3>Request Body</h3>
<div class="code-block" markdown="1">
```json
{
    "username": string,
    "password": string,
}
```
</div>

<h3>Response</h3>
<b>If successful</b>, returns authentication token:
<div class="code-block" markdown="1">
```json
{
    "token": string
}
```
</div>
<b>If unsuccessful</b>: See REST Error Responses
</div>

<script src="https://foxtrot.github.io/documentation/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

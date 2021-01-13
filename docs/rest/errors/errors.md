---
layout: default
title: REST Errors
nav_order: 101
parent: WiFi Pineapple REST Documentation
---

# REST Errors
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## Introduction
The WiFi Pineapple REST API will return an error message when an error (any non-200 response) happens.

On success, API requests will return a **200 OK** response, and may include a JSON body.

On error, API requests may return a range of errors, most commonly a **500 Internal Server Error** or a **400 Bad Request**, as well as a JSON body containing an error message:
```json
{
    "error": string
}
```


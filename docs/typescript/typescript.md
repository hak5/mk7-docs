---
layout: default
title: WiFi Pineapple TypeScript Documentation
nav_order: 200
has_children: false
has_toc: true
---

<link rel="stylesheet" href="../../../assets/css/endpoints.css">

# WiFi Pineapple TypeScript Documentation
{: .no_toc }

Table of contents
{: .text-delta }
1. TOC
{:toc}
---

## Introduction
WiFi Pineapple Mark VII Module front-ends include a service named `ApiService` that offers a variety of helper functions, such as wrappers for easier interfaction with the [REST API](https://hak5.github.io/mk7-docs/docs/rest/rest/) or to communicate with [Modules](x). It is instantiated in the module component as `API`, an should always be named the same in custom components written by the module developer.
```typescript
@Component({
    selector: 'lib-example-module',
    templateUrl: './example-module.component.html',
    styleUrls: ['./example-module.component.css']
})
export class ExampleModuleComponent implments OnInit {
    constructor(private API: ApiService) { }

    ngOnInit() { }
}
```

## Module Requests
Module requests are made with the `this.API.request()` function. It takes two arguments:
- `payload: any`
- `callback: any`

The `payload` must be a JSON structure that contains **at least** two properties:
- `module: string` (The name of the module you're making a request to)
- `action: string` (The action you are making a request for)

The `callback` is a function that takes a `response: any` as an argument. Extra data can be added to the request structure, and will be passwd to the module back-end where it may be processed.

```typescript
// A simple Module request
this.API.request({
    module: 'ExampleModule',
    action: 'some_action'
}, (response) => {
    console.log(response);
});

// A module request with extra supplied data and error handling
this.API.request({
    module: 'ExampleModule',
    action: 'another_action',
    my_data: 'My Own Data String',
    other_data: could_be_a_variable
}, (response) {
    if (response.error) {
        // Handle Error
        console.log('An error happened');
    } else {
        // Handle Success
        console.log('Success!');
    }
});
```

## REST API Requests
Regular API requests should be made with the following functions, depending on the type of request as specified in the [REST API](https://hak5.github.io/mk7-docs/docs/rest/rest/) docs.

<button type="button" class="endpoint-collapsible">
<span class="api-name">Unauthenticate User</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Example</h3>
Unauthenticate the current session.
<div class="code-block" markdown="1">
```typescript
this.API.unauth();
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">Show Busy</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Example</h3>
Enables a spinner in the UI title bar to indicate a busy state.
<div class="code-block" markdown="1">
```typescript
this.API.setBusy();
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">Show Not Busy</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
<h3>Example</h3>
Disables the UI title bar busy spinner.
<div class="code-block" markdown="1">
```typescript
this.API.setNotBusy();
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">API GET Request</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
this.API.APIGet(path: string, callback: (any));
```
Make a GET Request to a GET endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
this.API.APIGet('/api/status', (resp) => {
    console.log(resp);
});
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">Asyncronous API GET Request</span>
<span class="api-label-container">
<span class="api-label-post">Promise</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
async this.API.APIGetAsync(path: string);
```
Asynchronously make a GET Request to a GET endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
const resp: any = await this.API.APIGetAsync('/api/status');
console.log(resp);
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">API PUT Request</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
this.API.APIPut(path: string, callback: (any));
```
Make a PUT Request to a PUT endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
this.API.APIPut('/api/status', (resp) => {
    console.log(resp);
});
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">Asyncronous API PUT Request</span>
<span class="api-label-container">
<span class="api-label-post">Promise</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
async this.API.APIPutAsync(path: string);
```
Asynchronously make a PUT Request to a PUT endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
const resp: any = await this.API.APIPutAsync('/api/status');
console.log(resp);
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">API POST Request</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
this.API.APIPost(path: string, body: any, callback: (any));
```
Make a POST Request to a POST endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
this.API.APIPost('/api/status', { content: 'content'}, (resp) => {
    console.log(resp);
});
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">Asyncronous API POST Request</span>
<span class="api-label-container">
<span class="api-label-post">Promise</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
async this.API.APIGetAsync(path: string, body: any);
```
Asynchronously make a POST Request to a POST endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
const resp: any = await this.API.APIPostAsync('/api/status', { content: 'content'});
console.log(resp);
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">API DELETE Request</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
this.API.APIDelete(path: string, callback: (any));
```
Make a DELETE Request to a DELETE endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
this.API.APIDelete('/api/status', (resp) => {
    console.log(resp);
});
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">Asyncronous API DELETE Request</span>
<span class="api-label-container">
<span class="api-label-post">Promise</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
async this.API.APIDeleteAsync(path: string);
```
Asynchronously make a DELETE Request to a DELETE endpoint described in the REST API documentation.
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
const resp: any = await this.API.APIDeleteAsync('/api/status');
console.log(resp);
```
</div>
</div>

<button type="button" class="endpoint-collapsible">
<span class="api-name">API File Download</span>
<span class="api-label-container">
<span class="api-label-post">void</span>
</span>
</button>
<div class="endpoint-content" markdown="1">
```typescript
this.API.APIDownload(fullpath: string, filename: string);
```
<h3>Example</h3>
<div class="code-block" markdown="1">
```typescript
this.API.APIDownload('/tmp/log.txt', 'log-output');
```
</div>
</div>

<script src="https://foxtrot.github.io/documentation/assets/js/endpoints.js"></script>
<script>addHandlers();</script>

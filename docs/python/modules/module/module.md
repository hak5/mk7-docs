---
layout: default
title: Module
nav_order: 314
parent: Modules
grand_parent: WiFi Pineapple Python Documentation
has_toc: false
---

<link rel="stylesheet" href="../../../../../assets/css/endpoints.css">

# WiFi Pineapple Python Module
{: .no_toc }

Table of contents
{: .text-delta }
1. TOC
{:toc}
---

## Introduction
Python API

## Classes
<button type="button" class="endpoint-collapsible">
<span class="api-name">Module</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content">
<div markdown="1">
```python
class Module
```
</div>
A Pineapple Module
<br/><br/>
<h3>Methods</h3>
<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">__init__(self, name: str, log_level: int = logging.WARNING)</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def __init__(self, name: str, log_level: int = logging.WARNING):
```
</div>
A WiFi Pineapple Module object in Python.
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>name: The name of the module.</li>
    <li>The level of logging you wish to show. Default WARNING</li>
</ul>
<br/>
<h3>Returns</h3>
<ul>
    <li>Optional[Job]: an instance of Job if found, else None</li>
</ul>
</div>

<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">shutdown(self, sig, frame)</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def shutdown(self, sig=None, frame=None)
```
</div>
Attempt to clean shutdown the module.
If your module has anything it needs to close or otherwise cleanup upon shutdown, please override this and do what you need to here. Be sure you call `super.shutdown()` in your new implementation.

This method may also be called to handle signals such as SIGINT. If it was called as a signal handler the signal `sig` and frame `frame` will be passed into this method.
<br/>
</div>

<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">start()</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def start(self)
```
</div>
Main loop for the module which will run as long as `_running` is True.
This will listen for data coming over `_module_socket` and deserialize it to a `Request` object.
That object is then passed to `handle_request` for further processing.
<br/><br/>
</div>

<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">register_action_handler(action: str, handler: Callable[[Request], Union[Any, Tuple[Any, bool]]])</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def register_action_handler(self, action: str, handler: Callable[[Request], Union[Any, Tuple[Any, bool]]])
```
</div>
Manually register an function `handler` to handle an action `action`.
This function will be called anytime a request with the matching action is received.
The action handler must take a positional argument of type `Request`. This must be the first argument.
<br/>
<pre>
Usage Example:
    module = Module('example')
    def save_file(request: Request) -> Union[Any, Tuple[Any, bool]]:
        ...

    module.register_action_handler(save_file)
</pre>
<br/><br/>
<h3>Parameters</h3>
<ul>
	<li>action: The request action to handle</li>
    <li>handler: A function that takes `Request` that gets called when the matching `action` is received.</li>
</ul>
<br/>
</div>

<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">handles_action(self, action: str)</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def handles_action(self, action: str)
```
</div>
A decorator that registers a function as an handler for a given action `action` in a request.
The decorated function is expected take an instance of `Request` as its first argument and can return either Any or a tuple with two values - Any, bool - in that order.

If the function does not return a tuple, The response is assumed to be successful and the returned value will be json serialized and placed into the 'payload' of the response body.

<br/>
<pre>
Example Function:
    @handles_action('save_file')
    def save_file(request: Request) -> str:
        ...
        return 'Filed saved successfully!'
Example Response:
    { "payload": "File saved successfully!" }
</pre>
<br/>
If a tuple is returned, the first value in the tuple will the data sent back to the user. The second value must be a boolean that indicates whether the function was successful (True) or not (False). If this value is True, the data in the first index will be sent back in the response payload.

<br/>
<pre>
Example Function:
    @handles_action('save_file')
    def save_file(request: Request) -> Tuple[str, bool]:
        ...
        return 'Filed saved successfully!', True
Example Response:
    { "payload": "File saved successfully!" }
</pre>
<br/>

However, if this value is False, The data in the first index will be sent back as an error.
<pre>
Example Function:
    @handles_action('save_file')
    def save_file(request: Request) -> Tuple[str, bool]:
        ...
        return 'There was an issue saving the file.', False
Example Response:
    { "error": There was an issue saving the file." }
</pre>
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>action: The request action to handle</li>
</ul>
<br/>
</div>

<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">register_shutdown_handler(handler: Callable[[Optional[int]], None])</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def register_shutdown_handler(self, handler: Callable[[Optional[int]], None])
```
</div>
Manually register a function `handler` to be called on the module shutdown lifecycle event.
This handler function must take an integer as a parameter which may be the kill signal sent to the application.

Depending on how the module is shutdown, the signal value may be None.

<pre>
Example:
    module = Module('example')
    def stop_all_tasks(signal: int):
        ...
    module.register_shutdown_handler(stop_all_tasks)
</pre>
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>handler: A function to be called on shutdown lifecycle event.</li>
</ul>
<br/>
</div>


<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">on_shutdown()</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def on_shutdown(self)
```
</div>
A decorator that registers a function as a shutdown handler to be called on the shutdown lifecycle event.

In the example below, the function `stop_all_tasks` will be called when the module process is terminated.

<pre>
Example:
    @module.on_shutdown()
    def stop_all_tasks(signal: int):
        ...
</pre>
<br/><br/>
</div>

<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">register_startup_handler(handler: Callable[[Optional[int]], None])</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def register_startup_handler(self, handler: Callable[[Optional[int]], None])
```
</div>
Manually register a function `handler` to be called on the module start lifecycle event.
This handler function most not take any arguments.

<pre>
Example:
    module = Module('example')
    def copy_configs():
        ...
    module.register_startup_handler(copy_configs)
</pre>
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>handler: A function to be called on shutdown lifecycle event.</li>
</ul>
<br/>
</div>


<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">on_start()</span>
<span class="api-label-container">
<span class="api-label-post"></span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def on_start(self)
```
</div>
A decorator that registers a function as a startup handler to be called on the start lifecycle event. In the example below, the function `copy_configs` will be called when the modules `start` method is called.

<pre>
Example:
    @module.on_start()
    def copy_configs():
        ...
</pre>
<br/><br/>
</div>

<button type="button" class="endpoint-collapsible-non-click">
<span class="api-name">send_notification(self, message: str, level: int)</span>
<span class="api-label-container">
<span class="api-label-post">bool</span>
</span>
</button>
<div class="endpoint-content-always-show">
<div markdown="1">
```python
def send_notification(self, message: str, level: int) -> bool
```
</div>
Send a notification over the WiFi Pineapples notification socket
<br/><br/>
<h3>Parameters</h3>
<ul>
    <li>message: Notification message</li>
    <li>level: Notification level</li>
</ul>
<br/>
</div>

<script src="https://hak5.github.io/mk7-docs/assets/js/endpoints.js"></script>
<script>addHandlers();</script>
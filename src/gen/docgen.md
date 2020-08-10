<h2>General Information</h2>
<p>
    You can find general information here:
    <a href="https://developers.freighttrust.com">
        https://developers.freighttrust.com/
    </a>
</p>

<h2>Maintenance Window</h2>
<p>
    No maintenance scheduled.
</p>

<h2>URLs</h2>

API Base URL is <b>https://api.commodityprotocol.com</b>.

Full URL example: https://api.freighttrust.com/v1.0/contracts/

<h2>Versioning</h2>
<p>
    The API is versioned using a version tag in the URL (e.g. /v1.0/). Breaking changes
    are deployed with an incremented API version. Older versions may be marked
    deprecated and be shutdown.
</p>

<h2>HTTP Statuses</h2>

Freight Trust & Clearing uses conventional HTTP response codes to indicate the success or
failure of an API request.

In general, if the status returned is in the 200 range, it indicates that the request
was fulfilled successfully and that no error was encountered.

Return codes in the 400 range typically indicate that there was an issue with the
request that was sent. Among other things, this could mean that you did not authenticate
correctly, that you are requesting an action that you do not have authorization for,
that the object you are requesting does not exist, or that your request is malformed.

If you receive a status in the 500 range, this generally indicates a server-side problem.
This means that we are having an issue on our end and cannot fulfill your request
currently.

Here is a list of supported codes:

<ul>
    <li>200: Successful Operation</li>
    <li>201: Entity Created</li>
    <li>400: Bad Request Exception / Limit Exceeded Exception</li>
    <li>401: Unauthorized</li>
    <li>403: Forbidden</li>
    <li>422: Validation Error</li>
    <li>429: Too Many Requests Exception</li>
    <li>500: Internal Server Error</li>
    <li>503: Maintenance Mode</li>
</ul>

<h2>Responses and Data Format</h2>

When a request is successful, a response body will be sent back in the form of a JSON
object or an array of JSON objects, under the `data` key. Our API only supports
JSON format.

In the event of a problem, the body of the response will usually contain additional
information about the problem that was encountered, under the `errors` key.

<h2>Authentication</h2>

In order to interact with the DrewryAPI, your application must authenticate.

The DrewryAPI handles this through OAuth, an open standard for
authorization, with a two-legged Oauth 2 approach (using client credentials).

An access token is needed to authenticate your application for every endpoint.

<h3>How to get an Access Token with OAuth 2?</h3>

Use the <b>https://api.freighttrust.com/oauth/token/</b> endpoint with your
credentials to receive a token. The necessary <b>client_id</b> and
<b>client_secret</b> credentials are provided by Drewry. Please contact us at
info@commodityprotocol.com to request them.

Because of this, it is <b>absolutely</b> essential that you keep your <b>client_id</b>
and <b>client_secret</b> credentials secure.

A token is valid for 30 minutes. After that, you can either refresh it or create a new
one.

<h3>How to Authenticate with your Access Token?</h3>

In order to make an authenticated request, include a bearer-type Authorization header
containing your OAuth token. <b>All requests must be made over HTTPS.</b>

For example: `Authorization: Bearer YOUR-TOKEN`

<h2>Usage Plans</h2>
<p>
    There are measurements in place to protect the API from abuse. This includes a
    request quota and throttling using the token-bucket pattern, which can be configured
    to the needs of the external service. Every request is counted against your usage
    plan. The default usage plan is as follows.
</p>

<ul>
    <li>Throttling (requests per second): 50 req/sec</li>
    <li>Burst (bucket size): 200</li>
    <li>Quota (requests per day): 1000 req/day</li>
</ul>

<h2>Code Samples:</h2>

<a href="https://github.com/drewry-uk/api-code">

<a href="https://github.com/freight-trust/container-freight">
   View samples on GitHub
</a>

## Indices

---

---

[Back to top](#)

> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-08-02 03:29:59 by [docgen](https://github.com/thedevsaddam/docgen)

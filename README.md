

<!-- COPYRIGHT 2020 - DREWRY SHIPPING CONSULTANTS LTD ALL RIGHTS RESERVED
    -->
<!-- HEADER AREA DEFAULTS  -->
<!-- BANNER IMAGE -->
<p   align="center">

<img src="https://raw.githubusercontent.com/drewry-uk/openapi/master/assets/drewry-banner.png">
</p>
<br>
<br>
<!-- FREIGHT TRUST BANNER IMAGE -->
<!-- Badges Start -->
<p   align="center">
<img   alt="Twitter Follow"   src="https://img.shields.io/twitter/follow/drewry?label=%40FreightTrustNet&style=social">
 <a   href="https://t.me/freighttrust">
 <img   alt="Webpage"   src="https://img.shields.io/badge/telegram-%40fwebpage-blue">
 </a>
</p>
<!-- Badges End -->
<!-- HEADER AREA DEFAULTS END -->

# Drewry Global Container Freight Contract Pricing Index

- [Abstract](#abstract)
- [Overview](#overview)
- [General Information](#general-information)
- [Maintenance Window](#maintenance-window)
  * [Data Revision Policy](#data-revision-policy)
- [URLs](#urls)
  * [Versioning](#versioning)
  * [HTTP Statuses](#http-statuses)
  * [Supported RESTful Codes](#supported-restful-codes)
  * [Responses and Data Format](#responses-and-data-format)
    + [Authentication](#authentication)
    + [HOW TO GET AN ACCESS TOKEN WITH OAUTH 2?](#how-to-get-an-access-token-with-oauth-2-)
- [HOW TO AUTHENTICATE WITH YOUR ACCESS TOKEN?](#how-to-authenticate-with-your-access-token-)
    + [Usage Plans](#usage-plans)
- [Get Price Releases](#get-price-releases)
  * [Data Revision Policy](#data-revision-policy-1)
- [Get First Price](#get-first-price)
  * [Branding](#branding)
- [License](#license)

## Abstract

## Overview

## General Information
You can find general information here: https://github.com/freight-trust/developers/

## Maintenance Window
No maintenance scheduled.


### Data Revision Policy

Drewry will on occasion publish corrections to price assessments after the
publication date. These errors may arise from clerical mistakes or miscalculation
errors amongst other reasons. Any changes or revisions will take place
within two working days following the closing of the submission window. Drewry
will send a notification of any changes to its previous assessments via email to all
users with an explanation as to why a correction was implemented.


## URLs
API Base URL is https://api.containerfreightindex.com.

Full URL example: https://api.containerfreightindex.com/v1.0/contracts/

### Versioning
The API is versioned using a version tag in the URL (e.g. /v1.0/). Breaking changes are deployed with an incremented API version. Older versions may be marked deprecated and be shutdown.

### HTTP Statuses
This API uses conventional HTTP response codes to indicate the success or failure of an API request.

In general, if the status returned is in the 200 range, it indicates that the request was fulfilled successfully and that no error was encountered.

Return codes in the 400 range typically indicate that there was an issue with the request that was sent. Among other things, this could mean that you did not authenticate correctly, that you are requesting an action that you do not have authorization for, that the object you are requesting does not exist, or that your request is malformed.

If you receive a status in the 500 range, this generally indicates a server-side problem. This means that we are having an issue on our end and cannot fulfill your request currently.

### Supported RESTful Codes
Here is a list of supported codes:

200: Successful Operation
201: Entity Created
400: Bad Request Exception / Limit Exceeded Exception
401: Unauthorized
403: Forbidden
422: Validation Error
429: Too Many Requests Exception
500: Internal Server Error
503: Maintenance Mode

### Responses and Data Format
When a request is successful, a response body will be sent back in the form of a JSON object or an array of JSON objects, under the data key. Our API only supports JSON format.

In the event of a problem, the body of the response will usually contain additionalinformation about the problem that was encountered, under the errors key.

#### Authentication
In order to interact with the DrewryAPI, your application must authenticate.

> The Drewry API handles this through OAuth, an open standard for authorization, with a two-legged Oauth 2 approach (using client credentials).

An access token is needed to authenticate your application for every endpoint.

#### HOW TO GET AN ACCESS TOKEN WITH OAUTH 2?
Use the https://api.freighttrust.com/oauth/token/ endpoint with your credentials to receive a token. The necessary client_id and client_secret credentials are provided by Drewry. Please contact us at admin@freighttrust.com to request them.

Because of this, it is absolutely essential that you keep your client_id and client_secret credentials secure.

A token is valid for 30 minutes. After that, you can either refresh it or create a new one.

## HOW TO AUTHENTICATE WITH YOUR ACCESS TOKEN?
In order to make an authenticated request, include a bearer-type Authorization header containing your OAuth token. All requests must be made over HTTPS.

For example: Authorization: Bearer YOUR-TOKEN

#### Usage Plans
There are measurements in place to protect the API from abuse. This includes a request quota and throttling using the token-bucket pattern, which can be configured to the needs of the external service. Every request is counted against your usage plan. The default usage plan is as follows.

Throttling (requests per second): 50 req/sec
Burst (bucket size): 200
Quota (requests per day): 1000 req/day
Code Samples:
View samples on GitHub


## Get Price Releases

For a specific contract, this endpoint returns all the Price Releases you can
access according to your current subscription.

 Drewry releases (publishes) prices several times per week, which is called
Price Release. Please read our Methodology and Specifications Guide for more details.


## `price-releases`

```bash
GET Read Price Releases 
//v1.0/contracts/:contract_ticker_symbol/price-releases/
```

For a specific contract, this endpoint returns all the Price Releases you can access according to your current subscription.

Drewry releases (publishes) prices several times per week, which is called Price Release. Please read our Methodology and Specifications Guide for more details.

### Data Revision Policy

Drewry will on occasion publish corrections to price assessments after the
publication date. These errors may arise from clerical mistakes or miscalculation
errors amongst other reasons. Any changes or revisions will take place
within two working days following the closing of the submission window. Drewry
will send a notification of any changes to its previous assessments via email to all
users with an explanation as to why a correction was implemented.

## Get First Price

For a specific contract, this endpoint returns the first Price Releases if, according to your current subscription, you can access it.

Drewry releases (publishes) prices several times per week, which is called Price Release. Please read our Methodology and Specifications Guide for more details.



### Branding 

[Figma](https://www.figma.com/file/gntTyNDyu8q5eAI5WOvbGX/Untitled?node-id=21%3A3)

### DATA REVISION POLICY
Drewry will on occasion publish corrections to price assessments after the publication date. These errors may arise from clerical mistakes or miscalculation errors amongst other reasons. Any changes or revisions will take place within two working days following the closing of the submission window. Drewry will send a notification of any changes to its previous assessments via email to all users with an explanation as to why a correction was implemented.

## License 

Mozilla Public License 2.0 & Data is under CC-ND-NC-2.5

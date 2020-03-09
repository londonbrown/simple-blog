# Design Overview

## Use Cases
* As any user, I want to view blog posts
* As any user, I want to share blog posts
* As an _authenticated_ user, I want to add posts
* As an _authenticated_ user, I want to edit posts
* As an _authenticated_ user, I want to delete posts
* As an _authenticated_ user, I want to logout of my account
* As an _unauthenticated_ user, I want to login to my account

## Goals
* Serverless
    * Utilizes AWS services DynamoDB, Lambda, API Gateway, S3, CloudFront
* Single Page 
    * Uses React and React Router DOM to allow multiple access to multiple
    that render based on the contents of the URL path
* Stateless
    * Components are "dumb" and should only be concerned with receiving data, 
    not generating it
    * Components can have state for UI related events (i.e. a switch is toggled on and off)
* Pretty and Usable
    * Uses Bootstrap 4 and Darkly theme from Bootswatch to allow easy creation and manipulation
    of well defined components with a modern design

## 
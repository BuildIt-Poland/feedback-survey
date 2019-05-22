#!/bin/bash

npm install

REACT_APP_API_URL=${PROD_API_URL} npm run build

# Install the AWS CLI so we can publish to S3
# --upgrade option tells to upgrade any requirements that are already installed.
# --user option tells to install the program to a subdirectory of your user directory to avoid modifying
# libraries used by your operating system.
pip install awscli --upgrade --user

# Sync our build folder with our S3 bucket
# --acl public-read says deploy the files with public read access
# --delete says to delete files in the bucket that aren't present in the build folder
aws s3 sync build/ "s3://feedback-survey-web" --acl public-read --delete

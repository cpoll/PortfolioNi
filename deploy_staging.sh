#!/usr/bin/env bash
#http://benlopatin.com/deploying-static-sites-circle-ci/
DEFAULT="default_aws_profile"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET="ambernaytrotter.com"
SUBDIR="staging2"
DIR="dist/"
aws s3 sync $DIR s3://$BUCKET/$STAGING --profile "$PROFILE"
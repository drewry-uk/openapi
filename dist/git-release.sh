#!/bin/bash

token="768d712bc9b9e3f4d9abb6daa1182182346cbf35"

repo_full_name=$(git config --get remote.origin.url)
url=$drewry-uk/openapi
re="^(https|git)(:\/\/|@)([^\/:]+)[\/:]([^\/:]+)\/(.+).git$"

if [[$url =~ $re]]; then
protocol=${BASH_REMATCH[1]}
separator=${BASH_REMATCH[2]}
hostname=${BASH_REMATCH[3]}
user=${BASH_REMATCH[4]}
repo=${BASH_REMATCH[5]}
fi

echo "https://api.github.com/repos/$user/$repo/releases?access_token=$token"

#!bin/bash

git config user.name "${USER_NAME}"
git config user.email "${USER_EMAIL}"

git checkout master
git pull origin master

find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv _site/* .
rm -R _site/

REMOTE_REPO="https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git add -fA
git commit --allow-empty -m "GitHub Actions Build"
git push ${REMOTE_REPO} master

echo "Successfully built and deployed."
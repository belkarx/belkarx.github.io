# Github CLI
## Intro

Github is hard. IDK why. here’s a nice annotated summary of the most vital command-line commands so you can start contributing without screwing things up.

### Summary

Get a github repo: `git clone [repo]`

Pushing to a repo:
```
git status
git add . OR git add [files]
git commit -m "[message]"
git push
```

Creating a new repo - no clue. do it remotely, on the website. The only local way to do it is using the api or third-party tools/scripts…

### Less Summarized

`git clone [url]`: Initializes local github repository from remote. 
Creates a folder with .git, the repo name and repo contents.
<"I want your code">

`git add . OR git add [files]`: Indicates which files you wish to commit. ('.' means current directory)
Adds up your changes. 
<"These files are done now">

`git commit -m [message]`: Takes 'add'ed files and assigns a message to them 
[so the repo owner knows what was changed and why].
<"I am done making changes now">

Sidenote: `git add . && git commit -m [message]` can be replaced by `git commit -am [message]`

`git push`: Syncs changes to remote repo. 
<"here, have my code">

`git status`: Check what needs updating. <"whats going on?">

if there are updates then ->
`git pull`: Updates local from remote if there are changes 
<"Give me your code">

### Dealing with Inevitable Failures
Search up any errors with your favorite search engine.

if you screw up a repo: `git reset --hard`

> if you just mess with github enough, break enough repositories, you’ll get used to it

THE END. Go on and contribute to the open source community! Good luck!

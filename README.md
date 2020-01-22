# juji.io site

## local setup

Install a html formatting tool

```
brew install tidy-html5
```

Now you can run a html file through the tool to break up the lines, e.g.  

```
tidy -m index.html
```

## workflow

1. Point browser to https://juji.io

2. On the page you want to change, say landing page, right click and select "View Page Source"

3. On the page of html code, select all, and copy.

4. Open your editor, e.g. `emacs index.html` and paste in the whole thing, save and exit.

5. Run command `tidy -m index.html`

6. Open your editor again to edit it. Your editor should have a command to indent the file correctly.



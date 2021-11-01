# How I Write These Posts
[file tree structure]
```
├── index.html
├── index.md
├── posts
│   ├── cdn
│   │   ├── fifth_rice.png
│   │   ├── first_rice.jpg
│   │   ├── fourth_rice.jpg
│   │   ├── second_rice.jpg
│   │   └── third_rice.jpg
│   ├── drafts
│   │   ├── first_post.md
│   │   ├── second.md
│   │   └── third.md
│   └── finished
│       ├── Arch Ricing.html
│       └── Arch Ricing.md
├── posts_main.html
├── posts_main.md
└── README.md
```
```
let g:mkdp_port = '8901'
let g:mkdp_browser = '/usr/bin/firefox-developer-edition'
let g:mkdp_auto_close = 0
let g:mkdp_auto_start = 1
```

[zshrc]
```bash
export WEB_FNAME="test"

edt() {
    if [ $1 == "help" ] || [ $1 == "--help" ]; then
        echo "uasage: edt [filename (no .md)] or jsut 'edt' (edt will open WEB_FNAME: $WEB_FNAME)]. purpose: just opens a file in neovim
        exit(1)
    fi

    if [ $# -eq 0 ]; then
    	echo "no arg provided: using $WEB_FNAME"
    else
        WEB_FNAME=$1
    fi
    nvim $PROJ_DIR\posts\drafts\$WEB_FNAME.md
}

pan() {
    if [ $1 == "help" ] || [ $1 == "--help" ]; then
        echo "uasage: pan "
        exit(1)
    elif [ $1 == "all" ]
    fi
    pandoc --standalone --from markdown --to html5 --mathjax $PROJ_DIR\posts\drafts\$1.md -o $PROJ_DIR\drafts\$1.html

}  

```
1) edt [optional name]
2) save from within nvim
* images are inserted as $PROJ_DIR\cdn\images\[name]
^ repeat those steps as needed
3) `export WEB_FNAME="filename"`



envsubst < $FILENAME

[latex is through pandoc's kattex]


pan

pan = `pandoc --standalone --from markdown --to html5 --mathjax $PROJ_DIR/posts/drafts/$1.md -o $PROJ_DIR/posts/finished/$1.html`
mv $PROJDIR/posts/drafts/$1.md $PROJDIR/posts/finished/

```bash
my_date=$(stat -c %y $PROJ_DIR/finished/$1.md | awk -F. '{print $1}') &&
#probably could be cleaned up but it works
echo "\\> [$1](posts/finished/$1.html) || $my_date" >> $PROJ_DIR/posts_main.md &&
my_post="<p>\&gt; <a href=\"posts/finished/$1.html\">$1</a> \|\| $my_date</p>"
sed -zEi "s|(\n[^\n]*){3}$|\n$my_post&|" $PROJ_DIR/posts_main.html

```


editing:
if I want to edit a file: 
`nvim $PROJ_DIR\posts\finished\$1.md`
pan

if i want to un-publish a file:
nvim $PROJ_DIR\posts_main.md
(remove the line linking to the post)

mv $PROJ_DIR/posts/finished/$1* $PROJ_DIR/posts/drafts/

If I want to republish:
envsubst < $FILENAME
pan $FILENAME
run the pub bash script

TADA!


room for expansion -> longer essays with a different format (and folder, and link in main_posts)

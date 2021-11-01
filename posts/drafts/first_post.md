# Hello
I'm going to write something

with some examples
lke

```rust
use cursive::views::TextView;
use cursive::Cursive;

fn main() {
    let mut win = cursive::default();

    // We can quit by pressing `q`
    win.add_global_callback('q', Cursive::quit);

    // Add a simple view
    win.add_layer(TextView::new(
        "Hello Curses!\n\
         Press q to quit.",
    ));

    // Run the event loop
    win.run();
}
```
and $a^2 + b^2$
$e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = \lim_{n\rightarrow\infty} (1+x/n)^n$
# Live update
It's working!

[shoutout to the markdown preview plugin for vim/nvim](https://github.com/iamcco/markdown-preview.nvim)

# How I Write These Posts
```
├── index.html
├── index.md
├── posts
│   ├── Arch Ricing.html
│   ├── Arch Ricing.md
│   ├── first_post.html
│   ├── first_post.md
│   ├── images
│   ├── second.html
│   ├── second.md
│   ├── third.html
│   └── third.md
├── posts_main.html
├── posts_main.md
└── posts_main.md.sav
````

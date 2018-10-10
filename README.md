# Base16 Theme for Hugo

![Hugo Base16 Theme screenshot](https://raw.githubusercontent.com/htdvisser/hugo-base16-theme/master/images/screenshot.png)

## Installation

    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/htdvisser/hugo-base16-theme.git base16

See [the Hugo documentation](http://gohugo.io/themes/installing/) for more information.

## Extra Features

### Syntax highlighting

This theme has support for `highlight` shortcode (with Pygments),
see [the Hugo documentation](http://gohugo.io/extras/highlighting/) for more information.

To use this feature install Pygments (`pip install Pygments`) and add `pygmentsuseclasses = true` to your `config.toml`.

### Figure shortcode

Use the `figure` shortcode if you want nice rendering of pictures, see [the Hugo documentation](http://gohugo.io/extras/shortcodes/) for more information.


## Customization

You probably want to edit the homepage. Get started by copying the supplied homepage to your own site.

    $ mkdir -p layouts/partials
    $ cp themes/base16/layouts/partials/hero.html layouts/partials/hero.html

After this, you can edit `layouts/partials/hero.html` and make it awesome.

There is a way to quickly edit the colorscheme : the base style file expects to include a
similar to `colorschemes/base16-atelier-forest-dark.scss`.


## License

MIT Licensed, see [LICENSE](https://github.com/htdvisser/hugo-base16-theme/blob/master/LICENSE).


## Notes

This is a public fork of the original repo by [Hylke Visser] with adding the pagination from[Keane Nguyen]. It's slightly wider than the original themes and includes a few fixes like:

- Fixing the figcaption's text color
- Adding small borders to separate TOC or captions from the article or the figures


## Don't forget to thank...
[Hylke Visser] for the original theme.
[Keane Nguyen] for adding the pagination.
[Steve Francia](https://github.com/spf13) for Hugo.
[Chris Kempson](http://chriskempson.com) for the Base16 Eighties Colorscheme.
[Jan T. Sott](https://github.com/idleberg) for the Pygments template.

[Hylke Visser]:https://github.com/htdvisser/
[Keane Nguyen]:https://github.com/keanemind
# WebfontSelect::Rails

This is a rails gem for the [Webfont-Select jQuery UI Widget](https://github.com/nicollis/webfont-select).
Please see its project page for details and use.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'webfont-select-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install webfont-select-rails

## Usage

1. make sure you have both jQuery and jQuery UI running in your app.

2. add the following to your application.js file
  - require webfontloader.js
  - require webfont.select.js
    
3. add the following to your application.css file
 -  require webfont.select.css
 
 4. see [Webfont-Select jQuery UI Widget](https://github.com/nicollis/webfont-select) for usage and calls


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/nicollis/webfont-select-rails.

## Changelog

* 2016-10-24 -- v0.1.4 -- Initial public release with tested Google support
* 2016-10-26 -- v0.1.5 -- Updated to webfont-select v0.1.5
* 2016-10-31 -- v0.1.6 -- Updated webfont-select (Fixed issue with font generation when font had 3+ words)
* 2016-11-01 -- v0.2.0 -- Updated webfont-select (Enabled type-to-filter input)
* 2016-11-01 -- v0.3.0 -- Updated webfont-select (Enabled load_all_fonts option to enable loading all fonts on page load)
* 2016-11-01 -- v0.3.2 -- Updated webfont-select (Fixed load bug when pre-loading large font list, fixed bug with downloading already downloaded fonts)
* 2016-11-03 -- v0.3.3 -- Updated webfont-select (Added timeout to all fonts load to help break up large font load-ins)
* 2016-11-06 -- v0.4.0 -- Updated webfont-select (First font in list is now selected while typing, enter key selects first font and closes dropdown)
* 2016-11-07 -- v0.4.1 -- Updated webfont-select (Changed font_url to updated to highlighted font while typing in font name, before hitting enter)

## Author

Copyright (c) 2016 [Nicholas Ollis](http://ollis.me). 
Released under the MIT License. 
See LICENSE.txt for license info.

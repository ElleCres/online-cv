<a href="https://jekyll-themes.com">
<img src="https://img.shields.io/badge/featured%20on-JT-red.svg" height="25" alt="Jekyll Themes Shield" >
</a>

## Credits
- The Orbit Theme was designed by Xiaoying Riley and can be found, with her other themes, at [3rd Wave Media](http://themes.3rdwavemedia.com/).
- Sharath Kumar converted Orbit into a Jekyll theme. See his live demo [here](https://online-cv.webjeda.com).
- Thanks to [Nelson Estevão](https://github.com/nelsonmestevao) for all their [contributions](https://github.com/sharu725/online-cv/commits?author=nelsonmestevao).
- Thanks to [t-h-e(sfrost)](https://github.com/t-h-e) for all their [contributions](https://github.com/sharu725/online-cv/commits?author=t-h-e).
- Check out more themes: [**Jekyll Themes**](http://jekyll-themes.com).
- Lavender skin made by Elle Creswell.

## Installation
* [Fork](https://github.com/sharu725/online-cv/fork) the original repository
* Delete the `gh-pages` branch
* Re-create the `gh-pages` branch
* Go to settings and set Github Pages source as master.
* Your new site should be ready at `https://username.github.io/online-cv/`
* Choose or tweak any of the skins in /_sass/skins/ to fit your color needs. 
* Watch Sharath's [video](https://www.youtube.com/embed/T2nx6tj-ZH4) for help with set-up.

## Personalization
* Change all your personal details using one file: `_data/data.yml`
* The skin can be selected by editing `theme-skin:` in `_config.yml` to one of the 6 themes. 
* Theme creation is as follows: 
   - Create a file titled `_SKINNAME.scss` or edit one of the existing themes. 
   - Edit the header in your scss file to be `/*<i>SKINNAME variables</i>*/`.
   - Update the hex code values in the scss file to match your desired color scheme. colors can be found and customized by finding the hexcode at [colorhexa](https://www.colorhexa.com/).
   - Change the `theme-skin` in `_config.yml` to `skinname`.

* If you change the theme: go to `_data/data.yml`, find the `footer:>` section at the bottom of the page and change the `updated by <a href="YOURSITE" target="_blank" rel="nofollow">YOUR NAME</a>` to your information. 

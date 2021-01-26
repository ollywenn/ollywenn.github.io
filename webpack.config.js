const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries'); //if dealing with style only entries, do not output js files
const path = require('path');

const src = './resources/twuae/';
const scripts = src + 'js/';
const styles = src + 'scss/pages/';

module.exports = {
  entry: {
    //compiling the scss directly, as we wont be dealing with page specific js
    'page-article': styles + 'page-article.scss',
    'page-author-single': styles + 'page-author-single.scss',
    'page-casts-single': styles + 'page-casts-single.scss',
    'page-category': styles + 'page-category.scss',
    'page-competition-single': styles + 'page-competition-single.scss',
    'page-competitions': styles + 'page-competitions.scss',
    'page-contact': styles + 'page-contact.scss',
    'page-destination-single': styles + 'page-destination-single.scss',
    'page-destinations': styles + 'page-destinations.scss',
    'page-editions-archive': styles + 'page-editions-archive.scss',
    'page-events': styles + 'page-events.scss',
    'page-features-list': styles + 'page-features-list.scss',
    'page-home': styles + 'page-home.scss',
    'page-hub': styles + 'page-hub.scss',
    'page-incentive-single': styles + 'page-incentive-single.scss',
    'page-incentives': styles + 'page-incentives.scss',
    'page-latest-edition': styles + 'page-latest-edition.scss',
    'page-media': styles + 'page-media.scss',
    'page-our-team': styles + 'page-our-team.scss',
    'page-profile': styles + 'page-profile.scss',
    'page-report-single': styles + 'page-report-single.scss',
    'page-reports': styles + 'page-reports.scss',
    'page-static': styles + 'page-static.scss',
    'page-brands': styles + 'page-brands.scss',
    'page-subscribe': styles + 'page-subscribe.scss',
    'page-supplement-editions': styles + 'page-supplement-editions.scss',
    main: src + '/scss/main.scss',
    destinations: scripts + '/destinations.js',
    events: scripts + '/events.js',
    profile: scripts + '/our-team.js',
    contact: scripts + '/contact.js',
    'load-more': scripts + '/loadmore.js',
    'our-team': scripts + '/profile.js',
    'main-bundle': scripts + '/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/twuae/js/')
  },

  //devtool: 'source-map', //add source maps

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name]-bundle.css'
    }),
    new FixStyleOnlyEntriesPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

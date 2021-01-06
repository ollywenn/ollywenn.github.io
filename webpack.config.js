const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries'); //if dealing with style only entries, do not output js files
const path = require('path');

const src = './resources/twuae/scss/';
const pages = src + 'pages/';

module.exports = {
  entry: {
    //compiling the scss directly, as we wont be dealing with page specific js
    'page-article': pages + 'page-article.scss',
    'page-author-single': pages + 'page-author-single.scss',
    'page-casts-single': pages + 'page-casts-single.scss',
    'page-category': pages + 'page-category.scss',
    'page-competition-single': pages + 'page-competition-single.scss',
    'page-competitions': pages + 'page-competitions.scss',
    'page-contact': pages + 'page-contact.scss',
    'page-destination-single': pages + 'page-destination-single.scss',
    'page-destinations': pages + 'page-destinations.scss',
    'page-editions-archive': pages + 'page-editions-archive.scss',
    'page-events': pages + 'page-events.scss',
    'page-features-list': pages + 'page-features-list.scss',
    'page-home': pages + 'page-home.scss',
    'page-hub': pages + 'page-hub.scss',
    'page-incentive-single': pages + 'page-incentive-single.scss',
    'page-incentives': pages + 'page-incentives.scss',
    'page-latest-edition': pages + 'page-latest-edition.scss',
    'page-media': pages + 'page-media.scss',
    'page-our-team': pages + 'page-our-team.scss',
    'page-profile': pages + 'page-profile.scss',
    'page-report-single': pages + 'page-report-single.scss',
    'page-reports': pages + 'page-reports.scss',
    'page-static': pages + 'page-static.scss',
    'page-subscribe': pages + 'page-subscribe.scss',
    'page-supplement-editions': pages + 'page-supplement-editions.scss',
    critical: src + 'critical.scss',
    main: src + 'main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public/twuae/css/')
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
      filename: '[name]-bundle.css'
    }),
    new FixStyleOnlyEntriesPlugin()
  ]
};

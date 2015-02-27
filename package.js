Package.describe({
  name: 'johnantoni:meteor-picturefill',
  version: '0.0.1',
  summary: ' A responsive image polyfill for <picture>, srcset, sizes, and more ~ packaged for Meteor',
  git: 'git@github.com:johnantoni/meteor-picturefill.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('vendor/js/picturefill.js');
});

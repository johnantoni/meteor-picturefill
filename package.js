Package.describe({
  name: 'johnantoni:meteor-picturefill',
  version: '2.3.2',
  summary: ' A responsive image polyfill for <picture>, srcset, sizes, and more ~ packaged for Meteor',
  git: 'https://github.com/johnantoni/meteor-picturefill.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('picturefill/dist/picturefill.js', 'client');
});

Package.describe({
  summary: "Base64 (en/de)coding for CryptoJS, standard secure crypto algorithms"
});

Package.on_use(function (api, where) {
  api.use('crypto-base', ['client', 'server']);
  api.add_files('enc-base64.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['crypto-base', 'crypto-base64', 'tinytest']);

  api.add_files('crypto-base64_tests.js', ['client', 'server']);
});

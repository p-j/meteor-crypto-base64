Package.describe({
	summary: 'Base64 (en/de)coding for CryptoJS, standard secure crypto algorithms',
	version: '0.1.0',
	git: 'https://github.com/p-j/meteor-crypto-base64.git'
});

Package.onUse(function (api, where) {
	api.versionsFrom('METEOR@0.9.1.1');

	api.use('jparker:crypto-core@0.1.0', ['client', 'server']);

	api.imply('jparker:crypto-core', ['client', 'server']);

	api.addFiles('lib/enc-base64.js', ['client', 'server']);
});

Package.onTest(function (api) {
	api.use([
    'jparker:crypto-core@0.1.0',
    'jparker:crypto-base64@0.1.0',
  	'tinytest'
	], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});
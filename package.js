Package.describe({
	summary: 'Base64 (en/de)coding for CryptoJS, standard secure crypto algorithms',
	version: '3.1.2',
	git: 'https://github.com/p-j/meteor-crypto-base64.git'
});

Package.on_use(function (api, where) {
	api.versionsFrom('METEOR@0.9.0');
	api.use('jparker:crypto-core@3.1.2', ['client', 'server']);
	api.imply('jparker:crypto-core', ['client', 'server']);
	api.add_files('enc-base64.js', ['client', 'server']);
});

Package.on_test(function (api) {
	api.use(['jparker:crypto-core', 'jparker:crypto-base64', 'tinytest']);

	api.add_files('crypto-base64_tests.js', ['client', 'server']);
});
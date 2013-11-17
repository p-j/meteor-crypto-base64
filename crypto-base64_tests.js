Tinytest.add('MeteorCryptoBase64 - Simple Test', function (test) {
  test.equal(
    CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse('Hello, World!')),
    'SGVsbG8sIFdvcmxkIQ==',
    'Base64 encoding'
  );
  test.equal(
    CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse('SGVsbG8sIFdvcmxkIQ==')),
    'Hello, World!',
    'Base64 decoding'
  );
});

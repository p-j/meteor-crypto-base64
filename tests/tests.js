var C = CryptoJS;

Tinytest.add('MeteorCryptoBase64 - Stringify 0', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62,0x61720000], 0)),
        ''
    );
});

Tinytest.add('MeteorCryptoBase64 - Stringify 1', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62,0x61720000], 1)),
        'Zg=='
    );
});

Tinytest.add('MeteorCryptoBase64 - Stringify 2', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62,0x61720000], 2)),
        'Zm8='
    );
});

Tinytest.add('MeteorCryptoBase64 - Stringify 3', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62,0x61720000], 3)),
        'Zm9v'
    );
});

Tinytest.add('MeteorCryptoBase64 - Stringify 4', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62,0x61720000], 4)),
        'Zm9vYg=='
    );
});

Tinytest.add('MeteorCryptoBase64 - Stringify 5', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62,0x61720000], 5)),
        'Zm9vYmE='
    );
});

Tinytest.add('MeteorCryptoBase64 - Stringify 6', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x666f6f62,0x61720000], 6)),
        'Zm9vYmFy'
    );
});

Tinytest.add('MeteorCryptoBase64 - Stringify 15', function (t) {
    t.equal(
        C.enc.Base64.stringify(C.lib.WordArray.create([0x3e3e3e3f,0x3f3f3e3e,0x3e3f3f3f,0x3d2f2b00], 15)),
        'Pj4+Pz8/Pj4+Pz8/PS8r'
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 0', function (t) {
    t.equal(
        C.enc.Base64.parse('').toString(),
        C.lib.WordArray.create([0x666f6f62,0x61720000], 0).toString()
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 1', function (t) {
    t.equal(
        C.enc.Base64.parse('Zg==').toString(),
        C.lib.WordArray.create([0x666f6f62,0x61720000], 1).toString()
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 2', function (t) {
    t.equal(
        C.enc.Base64.parse('Zm8=').toString(),
        C.lib.WordArray.create([0x666f6f62,0x61720000], 2).toString()
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 3', function (t) {
    t.equal(
        C.enc.Base64.parse('Zm9v').toString(),
        C.lib.WordArray.create([0x666f6f62,0x61720000], 3).toString()
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 4', function (t) {
    t.equal(
        C.enc.Base64.parse('Zm9vYg==').toString(),
        C.lib.WordArray.create([0x666f6f62,0x61720000], 4).toString()
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 5', function (t) {
    t.equal(
        C.enc.Base64.parse('Zm9vYmE=').toString(),
        C.lib.WordArray.create([0x666f6f62,0x61720000], 5).toString()
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 6', function (t) {
    t.equal(
        C.enc.Base64.parse('Zm9vYmFy').toString(),
        C.lib.WordArray.create([0x666f6f62,0x61720000], 6).toString()
    );
});

Tinytest.add('MeteorCryptoBase64 - Parse 15', function (t) {
    t.equal(
        C.enc.Base64.parse('Pj4+Pz8/Pj4+Pz8/PS8r').toString(),
        C.lib.WordArray.create([0x3e3e3e3f,0x3f3f3e3e,0x3e3f3f3f,0x3d2f2b00], 15).toString()
    );
});
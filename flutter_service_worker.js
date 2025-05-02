'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "96d810f61fa36e8bb07f0ee571967c40",
"version.json": "57102a2750dc73062cf60b41512d2bd7",
"index.html": "d847dd1581d6d0a2c0460a32b397bf52",
"/": "d847dd1581d6d0a2c0460a32b397bf52",
"main.dart.js": "11da771654e8bde5726d911bc3886245",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4e43d30502f362381d52c39de7daf9b0",
".git/ORIG_HEAD": "7f8a4a6d072d8fa7c9091fa183d4df3f",
".git/config": "208524950749ea2f24ce6d449c6dfa7e",
".git/objects/92/bae16d7053796b66f7f0d4bb0d4268915e86c5": "464041b009cabc07ee86374e343bb075",
".git/objects/0c/76ee67f46ddae31ee0d01c46db2d43cda9107b": "d72ca16a79550e51088709805cf2e8c6",
".git/objects/0c/5d82fc8852dc899e3f228e1cbc54d6caf31848": "fdfae7aecd7ed5a54a48e0e3ea6bd62e",
".git/objects/66/c0086a8cc7aa330f3a5871eba0c1bd840c0efa": "75de8e11935dae3628775c998f5c5f7d",
".git/objects/3e/33a92dddcd342251f40611eca9d9b2dcdce8b0": "bafbc9a7c3ce25f852e98416e071551b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/86fe3210ebc550bbf9fa140d25fe35aa72770f": "7a2462a947bff3792b8be20d5638826d",
".git/objects/9e/bfab35ea5be6fa7f76db607577078022ddfba1": "112ea9c61115a5cfefd0fd92714db206",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/b517cd62ba8b07f56544edb83b2d464c0ff6e0": "bab7553e13b8305463fb5ff6e3f41908",
".git/objects/67/32c49339dacdcc0018aec4ee7a0b19f833b5f4": "8b3787df94bd558e9d516a3d3b16b70d",
".git/objects/0b/5267f7f0401d3e3154893e20a7dfaa7948a46c": "cea0e04e22515bbe9e9a0eb41225f6b9",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/086730e7c2aa7804a199fd6b004bc29659e844": "4f4e04bf7faadafc7e504586f92259ff",
".git/objects/05/cd04895c394cc9cbc647593cdbcea384d3446c": "0da17f6bc6f847883b84d6286b943bad",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/b3/650099f9c39cfaa392e67c6718b9757e3be2d4": "70359ca3165538c1f23eff1e65439c73",
".git/objects/da/f6b34a3d565f98d6b585e8fb0b9ad67a552bcf": "1f7cfe1a163823d6e868c33e2ace8545",
".git/objects/da/696d71afc198c305b262d2a257652e68ca6487": "6181c738837e35f7610cd6f29e370d0e",
".git/objects/da/7cb6cc6976dd22feb9526c2bdd745730c35f0b": "c2ae0e92b1a648ca14111698d92bb396",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/74187a3f2ee434eb12414387835da15b25cf86": "e13a609d3908192942e2af2ffa579ff6",
".git/objects/bd/d2703192a43f9aff58e235da7ca0b404ce2512": "9f661b01621698244bf19337a02fbbb8",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/57e88882cb711e70bd9ce6a5ef829ded20fedb": "85bd777e33c1303c4effc4de2ef56649",
".git/objects/c0/e71ffc25b5f4d12f3876cd834ffa4f47dd3099": "48081052a1c3e70e19e71bcf16b78e0b",
".git/objects/c9/710abf62d5fc2794c1e280038117992b343870": "8895b310e7f688f888deff7c30a78008",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/18/88a1ae20ad3c65bec6a54b5675b50f3d4d102b": "8f6c6f88bd34affe9adca0065022082f",
".git/objects/29/fb4dc407a1f502ea6ba428024ae67a57bf099b": "83282e8508648a1249ac579912eebcf1",
".git/objects/16/c4ebe918ee4ef8cff8a8dc8ad55d3265aa7ca7": "d3d3789c027ece3c55a628f2ac911f31",
".git/objects/89/12124e37817cecfa8275752d05bd0209680ca7": "8d09b38a5beacc3dd8f292c186164871",
".git/objects/87/17dd09d54dcb5c61bfcefe98d0d6bb6f333562": "4822dab995e41bcaa679e85391f6078c",
".git/objects/80/f795dadbcd178ae0a42850fbee663a2ab52bc4": "e359e0805d08ac29b62299099fb36ea7",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/821892fca07241bcd09bf710e55303961aec5f": "eec5e63345658cc4d06771b57e3d133a",
".git/objects/43/3c7360c86333d588707fd797f6e873815c3b76": "8c01280c40dcc6635f41791553f6c8f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/1d5eeee0543c58915fee17ad0563d16150ed17": "8e719c0eab5e54a6b82dcc64736025c1",
".git/objects/9a/341e5b73a2b69a663ca54fc832bc6ccfd543d1": "27f5ff0b2978d6cad706f78a2233da62",
".git/objects/9a/6364743462d0d6b63dfa338a1b16f273c3acf1": "270aabca7b133528e4229647ba7838d3",
".git/objects/5d/ca9f197af9497829ce4eff0031e9621ef4a45a": "45ea7a301fe0638528e45a06d8c4b051",
".git/objects/31/91730d65b17507ca4fe696fd23a5a20c20b6e4": "acdea3526920c33851c17abf48b02a10",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/66dc8c680f26f64715c2d9fb8728ca96f5ea69": "bcaf7995e6a4c277a9e528413b3179ac",
".git/objects/96/088077ca60b02333e89b243edb408853e69561": "9b1dea24d2405a78c531618caee72e17",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/de53974c63ed6ce7c0d7e938b130155aeb0159": "593673b84fe1118e0727c1902e6d5bed",
".git/objects/98/70179c4489f65a3209e2c5c9a6bbd430f07440": "a319eea05b7bb0220d3b8cc328f1308f",
".git/objects/30/45ed59219c8390bbc292e58787083f468dbee7": "28ce1153f62f63b180c9f359c36f8f6a",
".git/objects/5e/fbbe5e3782951a2178ecb9223283d8f760a4f5": "dfe0b3d5b9ec33df1aea96850a9c65c7",
".git/objects/37/b955dfb421cd9a526c44b3be9e13716b3bfbdb": "834b919143a6808fd61f6f375f4148c6",
".git/objects/06/0b464ef4dee02902dbb23057e0250bc58795c2": "44fd85447cb1ad5619abe3d202962814",
".git/objects/55/fc9d513aeae07c4e503ab064cf79a5f3ef9b83": "daf0ae9269bc2cdfdf5fb481510d7221",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/63/784ec523b2649ad5405e97c4b77854cf88e029": "a2ab65b53c20d92bbe99f26898fced93",
".git/objects/0a/b920dac6acf3296edaf443e77ec47d5c167ed2": "d51af56c75ff8fa96b187a2f6991bd6e",
".git/objects/64/23269bb698ed1d29f01b593e5fd6a2d01dd292": "b29e45b21c369550b218d8a579eb2c10",
".git/objects/90/5cf5513cbe8835b745bbfb802e782997a58de4": "ebaf0d881f073dd93aa3df1d4e634a1e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/ed104ecca2852b474326304d5fc9b8107cb70c": "e056142e9f3e2e5c818237d7ade2f74a",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d2/4a0b90bfdd3b82967865de6be430e609d92b0d": "ac097f30cb8c3847a1e68bf8e3c16ddc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ee50912080366784307a6ff6b5abdf1ed10002": "95385d1d314aeff7c2b9aa5e1c959bc6",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/36249c8bd4a03e90e272d20324f46e240daea5": "fabce819e96868d3f3fe93c308f618da",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d6253c9b0c1c962771908015200362aa1babe5": "08e06766d2bba71ac893c4623629fa59",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/0eead00e5d281a03d2fa6effa71207d42ad1ae": "2db5f101529489c56fd03e5c0af20274",
".git/objects/c3/8112e365010839a4d0e2da0c237c6c89280e24": "b71b9b4105c8d1d28d2b956cb29cf435",
".git/objects/c4/cd3a4ecaf65e4531baa95024b0c6d9926401e1": "3be2b3da2552a543bfcab8d28f660e56",
".git/objects/f9/1091f30c4c602c77897b043a7a4c7a942f6db2": "3923ccb40e8bcd71c6228d5f7685a199",
".git/objects/f7/08feb51ad7d4c4b00f8fb6283f16390f1d6ff9": "57d71d3bde8219606a5294a562c2bc6f",
".git/objects/ff/60e38b92b93b10d89b82e36c59c2a67ca83f12": "0d5400c2954059821e082284c17bf20c",
".git/objects/e9/bb7e004e90f73ce98b88164ad39347bc3c0360": "82df47cb7353a3af7fb5747bbf45443f",
".git/objects/e7/0e7757ae536be4f24f08cb7e28e991aa2775fe": "e155b7ba719f2b70268a8fc709546ed9",
".git/objects/e7/52be3ed6c1370f5b2506e0c8c7a2db212e5e73": "56fcce47b799a06e23511b307def177f",
".git/objects/ce/9b5199dfa19b251af6bbf9990fab64b501fcab": "56f3970e9ece837d969870cbc3a6119b",
".git/objects/ce/894ccfdbb4147bfcd6ee6e85bd45d887d14f85": "8296f055ee5ad8d4bce0fa59b2408723",
".git/objects/41/3498b964733b84084967ab0bd593774d6f0a2a": "a7d11be27312960fc8326a0e50b6ed58",
".git/objects/77/4715a0515b93660dea9a3b17d8b29d7c5ccd94": "0345ba0b26d66e719bdb3d493d3c03d4",
".git/objects/70/cea15389b6297e14db5f83ea443e22dbf8faed": "493f8f787f8cc6d0c2223756bec50e22",
".git/objects/1e/fda4f2957530194b4df82c73c94f49ed0b33b4": "3da758834be3c5f8494e92a61023bdbf",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/12/7fd8c799857071600a2a2b95b3172909276a92": "934cc08483d9b76a9334b4302ea28d83",
".git/objects/71/9b963c65fa3ffde949cf5c5eba1cabea8765c4": "210b458117a56ac4654b3a402a323de4",
".git/objects/76/365c231ec206d6af313c60b1403a5240443522": "9a88c346a2f1adcbe145ecf708b6b41f",
".git/objects/1c/28f9fcd919c5901b48d94d76f1db5a7f9f917e": "451feb99b5bded0f765b74880d8ddef0",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/0717cff90ef8b9d38ecf8cea89906a03f3ece7": "cd771e000acd9e850fb3fd4a0abacc3e",
".git/objects/8e/97540b45b2afc86a58d0c5e73038d0add552f4": "77ae0ed50dc8203a9aeb534a57f75dcf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f60f86dadd9f3f3a26a29bc06231c675",
".git/logs/refs/heads/main": "1e1da6532ec57e904252ff6c5100164f",
".git/logs/refs/remotes/origin/main": "4115e0f4af51eab858aa91f268c9246a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7f8a4a6d072d8fa7c9091fa183d4df3f",
".git/refs/remotes/origin/main": "7f8a4a6d072d8fa7c9091fa183d4df3f",
".git/index": "010002315514931f5e95e322a13daac9",
".git/COMMIT_EDITMSG": "6cadc79437cda1dd546678febdac6be0",
".git/FETCH_HEAD": "6acfd9aea7b480c7c5fbc376c40ccb00",
"assets/AssetManifest.json": "2ce2b8f6e34a9286ddb6f8a3b7f203c6",
"assets/NOTICES": "cc19299b595f2dc5df23704381499fb9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a6f6f583a404fca991fca46e42402b6c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "17e525dc49a9d86e7278c9ca05150721",
"assets/fonts/MaterialIcons-Regular.otf": "096108391b1e6e0e2522a1eef4cbf34a",
"assets/assets/images/Objects/flag.png": "2466d8f4d3922dcbc26f7863aae5f642",
"assets/assets/images/Objects/book.png": "4d4c64f1372b047b2dbb643b977a0f76",
"assets/assets/images/Objects/hook.png": "fb3b942d1e0a86856f9eecc2740a53cc",
"assets/assets/images/Objects/chalice.png": "48d0edd15a49aa0ac318ec12fed76aaa",
"assets/assets/images/Objects/treasure_map.png": "6c7cc5d6cc1def2148a9c03a9b2fa8e7",
"assets/assets/images/Objects/bottle.png": "384b85d98fdf939a4076621f91524445",
"assets/assets/images/Objects/diamond.png": "30a77aed86ca1d4db246553cc3a8e4b2",
"assets/assets/images/Objects/necklace.png": "fc4aba3564a0a8bb9635b47cdf2a542f",
"assets/assets/images/Objects/anchor.png": "37623191bad3fe8f2691fc437b7babbd",
"assets/assets/images/Objects/rope.png": "a58d1a0cfa78a6f92441bc711e26e488",
"assets/assets/images/Objects/coin.png": "4be6fa2da963fa9b8e1817de237b7e50",
"assets/assets/images/background.png": "8cb1fa87db188cacca0dda4b2b844084",
"assets/assets/images/character.png": "551d94384056a87b31b7856216f87f9b",
"assets/assets/images/ocean_level.png": "22e5b9214486f8da6c62037f0f8c66fb",
"assets/assets/level_data.json": "8c85664d16ee10b1345ffa73d0270c68",
"assets/assets/icons/settings.png": "a60a083d6222b6455629ac43f79445aa",
"assets/assets/icons/search.png": "71740fe3f3120363bb9f40aee3a5d738",
"assets/assets/icons/logo.png": "5e7839e868516ac9bdca6c22be612d92",
"assets/assets/icons/profile.png": "97fe6bce6b78250e6647960b6ddba810",
"assets/assets/icons/back.png": "bf9d6e49426ef8a91499b1f7798fd75a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

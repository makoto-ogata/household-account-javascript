//第4章：収支のデータをデータベースに記録

// indexDBの名前などの設定
const dbName = 'kakeiboDB';
const storeName = 'kakeiboStore';
const dbVersion = 1;

// データベースに接続する。データベースが未作成なら新規作成する。
let database = indexedDB.open(dbName, dbVersion);

// データベースとオブジェクトストアの作成
database.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore(storeName, {keyPath: 'id'});
    console.log('データベースを新規作成しました。');
}

// データベースに接続に成功した時に発生するイベント
database.onsuccess = function (event) {
    let db = event.target.result;
    // 接続を解除する
    db.close();
    console.log('データベースに接続できました');
}
database.onerror = function (event) {
    console.log('データベースに接続できませんでした');
}
// 商品登録ボタン要素を取得
var registerButton = document.getElementById('btn-register');

// ボタンがクリックされたときのイベントリスナーを設定
registerButton.addEventListener('click', function() {
    // IDが 'register-area' の要素を取得
    var element = document.getElementById('register-area');

    // 要素のクラスリストから 'none' を削除
    element.classList.remove("none");
});

// 商品登録実行ボタン要素を取得
var registerSubmitButton = document.getElementById('btn-register-submit');

// ボタンがクリックされたときのイベントリスナーを設定
registerSubmitButton.addEventListener('click', function() {
    // IDが 'register-area' の要素を取得
    var element = document.getElementById('register-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});

// 商品登録キャンセルボタン要素を取得
var registerCancelButton = document.getElementById('btn-register-cancel');

// ボタンがクリックされたときのイベントリスナーを設定
registerCancelButton.addEventListener('click', function() {
    // IDが 'register-area' の要素を取得
    var element = document.getElementById('register-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});

// 商品変更ボタン要素を取得
var updateButton = document.getElementById('btn-update');

// ボタンがクリックされたときのイベントリスナーを設定
updateButton.addEventListener('click', function() {
    // IDが 'update-area' の要素を取得
    var element = document.getElementById('update-area');

    // 要素のクラスリストから 'none' を削除
    element.classList.remove("none");
});

// 商品変更実行ボタン要素を取得
var updateSubmitButton = document.getElementById('btn-update-submit');

// ボタンがクリックされたときのイベントリスナーを設定
updateSubmitButton.addEventListener('click', function() {
    // IDが 'update-area' の要素を取得
    var element = document.getElementById('update-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});

// 商品変更キャンセルボタン要素を取得
var updateCancelButton = document.getElementById('btn-update-cancel');

// ボタンがクリックされたときのイベントリスナーを設定
updateCancelButton.addEventListener('click', function() {
    // IDが 'update-area' の要素を取得
    var element = document.getElementById('update-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});

// 商品削除ボタン要素を取得
var deleteButton = document.getElementById('btn-delete');

// ボタンがクリックされたときのイベントリスナーを設定
deleteButton.addEventListener('click', function() {
    // IDが 'delete-area' の要素を取得
    var element = document.getElementById('delete-area');

    // 要素のクラスリストから 'none' を削除
    element.classList.remove("none");
});

// 商品削除実行ボタン要素を取得
var deleteSubmitButton = document.getElementById('btn-delete-submit');

// ボタンがクリックされたときのイベントリスナーを設定
deleteSubmitButton.addEventListener('click', function() {
    // IDが 'delete-area' の要素を取得
    var element = document.getElementById('delete-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});

// 商品削除キャンセルボタン要素を取得
var deleteCancelButton = document.getElementById('btn-delete-cancel');

// ボタンがクリックされたときのイベントリスナーを設定
deleteCancelButton.addEventListener('click', function() {
    // IDが 'delete-area' の要素を取得
    var element = document.getElementById('delete-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});

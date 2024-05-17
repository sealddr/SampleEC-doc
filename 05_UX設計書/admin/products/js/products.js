// ボタン要素を取得
var registerButton = document.getElementById('btn-register');

// ボタンがクリックされたときのイベントリスナーを設定
registerButton.addEventListener('click', function() {
    // IDが 'register-area' の要素を取得
    var element = document.getElementById('register-area');

    // 要素のクラスリストから 'none' を削除
    element.classList.remove("none");
});

// ボタン要素を取得
var registerSubmitButton = document.getElementById('btn-register-submit');

// ボタンがクリックされたときのイベントリスナーを設定
registerSubmitButton.addEventListener('click', function() {
    // IDが 'register-area' の要素を取得
    var element = document.getElementById('register-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});

// ボタン要素を取得
var registerCancelButton = document.getElementById('btn-register-cancel');

// ボタンがクリックされたときのイベントリスナーを設定
registerCancelButton.addEventListener('click', function() {
    // IDが 'register-area' の要素を取得
    var element = document.getElementById('register-area');

    // 要素のクラスリストから 'none' を追加
    element.classList.add("none");
});
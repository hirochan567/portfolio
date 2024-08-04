//ボタンでテキストを変更
function writeToTextarea(dataIndex){
    const texts = ["HTML5は、Webページの構造を定義するマークアップ言語 1. モバイルデバイスとの互換性向上 2. マルチメディア対応（video, audio要素）で、プラグインなしで音声や動画を再生可能 3. Canvas要素によるグラフィックス描画機能   4. フォーム機能の拡張（日付選択、スライダー等）",
    "JavaScriptは、フロントエンド開発の要となる動的なプログラミング言語です。Webブラウザ上で動作し、ユーザーインターフェースの対話性を高めます。DOM操作、イベント処理、非同期通信（AJAX）などの機能を提供し、モダンな開発では React や Vue.js などのフレームワークと組み合わせて使用されます。ES6以降の新機能により、コードの可読性と効率が向上しています。  フロントエンジニアにとって、JavaScriptの深い理解は不可欠であり、  常に進化する言語仕様やエコシステムに注目することが重要です。",
    "TypeScriptは、JavaScriptをもっと使いやすくした言葉で、特に大きなプロジェクトにも利用しています。型というルールを使うことで、間違いを減らし、わかりやすいプログラムを作る手助けをしてくれます",
    "Cursorはフロントエンドエンジニアにとって有用なAI駆動型の開発環境です。コード補完、リアルタイムのエラー検出、AIを活用したコード生成や説明機能を提供し、開発効率を向上させます。GitHubとの連携やペアプログラミング機能も備えており、チーム開発をサポートします。フロントエンド開発に特化した機能も充実しており、JavaScriptやReactなどのフレームワークに対応しています。",
    "Mermaidは、視覚的な情報を簡単に生成できる強力なツールです。シンプルな記法を用いることで、誰でも手軽にダイアグラムを作成でき、さまざまなプラットフォームで利用可能です。これにより、情報の整理や共有が効率的に行えるため、特にチームでのコラボレーションにおいて大きな利点をもたらします。",
    "GitHubは、ソースコードのホスティングサービスであり、開発者が共同作業を行うためのプラットフォームです。2008年に設立され、現在はMicrosoftの傘下にあります。GitHubは、Gitというバージョン管理システムを基盤にしており、これにより開発者はコードの変更履歴を管理し、複数の開発者が同時にプロジェクトに貢献できる環境を提供しています。",

  ];

  document.getElementById('textArea').value = texts[dataIndex];
};



function displayText() {
const text = `情報社会において、変化波はイノベーションの原動力
となってます。　その波は、従来の枠組みを打ち破り、
新たな可能性を切り開く力を秘めてます。
　例えば、人工知能の進化により、情報の収集と分析が
一瞬で行われるようになり、人々の意思決定プロセスが
劇的に変わった。これにより、ビジネスの世界ではより
迅速で的確な戦略が立てられ、実行力が向上してます。
　各種テクノロジーが融合することはにより　次の未来
社会がわくわくした楽しい生活を送れるよう　変化を
恐れず　それらを積極的に取り入れることが、未来を
切り開く鍵だと思います。
　私たちはこの波に乗り、斬新的イノベーションを起こ
す力を持っていることを確信してます。`;
document.getElementById('textArea').value = text;
};
window.onload = function() {
document.body.addEventListener('contextmenu', function(e) { e.preventDefault();
});
};
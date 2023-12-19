# 使い方

あらかじめ、Firebase上でプロジェクトを作成しておきます。

本プロジェクトをgit cloneしたら、

```
% firebase use --add
```
を実行します。
自分のFirebaseプロジェクトの一覧が表示されるので、紐づけたい自分のFirebaseプロジェクトを選択して下さい。


# Firebase Functions

Firebase functionsは、functinosの下のindex.jsに記述されています。
`functions`ディレクトリに移動して

```
npm install
```
を実行しておいて下さい。


# デプロイ

Functionsをデプロイするのは、下記のコマンドになります。

```
% firebase deploy --only functions
```

Functions以外もデプロイする場合は

```
% firebase deploy 
```

を実行します。

# エミュレータ

初期化
```
% firebase init emulators
```

起動
```
% firebase emulators:start
```



# Todo&Memo Calendar

## 概要
Todo管理とメモ管理・カレンダー表示を1つにまとめたwebアプリです。

日付ごとにtodo・メモを登録出来てカレンダー上で確認可能です。
優先度やタグによる分類、期限切れタスクの管理にも対応しています。

## デモ
・　Frontend:Vercel
・  Backend:Render
URL:https://todo-memo-mu.vercel.app/

##　主な機能

    Todo管理

・　タスク追加
・　タスク編集
・　タスク削除
・　完了チェック
・　優先度設定（高・中・低）
・　タグ設定（勉強・仕事・買い物・その他）

    メモ管理

・　メモ追加
・　メモ編集
・　メモ削除

    カレンダー

・　日付ごとのTodo表示
・　日付ごとのメモ表示
・　件数表示
・　メモ件数表示
・　期限切れタスク表示

    ダッシュボード

・　今日のTodo件数
・　完了数
・　未完了数
・　タグ別集計
・　優先度別集計

    UI

・　ダークモード対応
・　モーダル表示
・　レスポンシブ対応（PC・スマホ）

## 使用技術
    Frontend
- React
- React Router
- React Context API
- JavaScript(ES6+)
- CSS3
    Backend
- Node.js
- Express
    Database
- SQLite
    Deploy
- Vercel
- Rendar

##　アプリ構成
React
    ↓
Express
    ↓
SQLite

## 工夫した点
・　カレンダーとTodoを連携させた
・　優先度、タグによる管理機能を実装した
・　ダッシュボードでタスク状況を可視化した
・　ダークモード対応を行った
・　スマホでも利用可能にする為レスポンシブ対応した 
・　APIを分離し、保守しやすい構成にリファクタリングした

## 苦労した点
・  Todoとメモアプリの統合をした
・  誰でもが使いやすいように工夫した
・　LocalStrageからSQLite移行する際、データ取得方法や状態管理を見直した。
・  API処理を分離し、役割ごとに責務を整理した

##　今後追加予定
・　優先度分析機能追加
・　検索機能の強化
・　通知機能
・　データバックアップ機能

## 起動方法
cd Todo-memo
npm install
    Frontend
npm start
    Backend
cd server
npm install
npm start

## 制作目的

ITの学習を目的に制作しました。Reactを用いたフロントエンド開発やExpressを利用したバックエンド開発、API、状態管理、デプロイまでの一連の流れを経験し、私生活でも使えるものを想定し制作しました。
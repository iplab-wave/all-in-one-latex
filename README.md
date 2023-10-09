# all-in-one-latex

latex on docker at local vscode with textlint and github

- ローカル執筆
  - overleaf よりビルドが速い
  - サーバが落ちない
- Docker
  - 簡単に同一の環境が作成できる
- VSCode
  - Devcontainer を使うことによって docker + textlint 環境がワンクリックで作成可能
  - live share を使うことによって共同編集が可能
- GitHub
  - バージョン管理が可能
  - GitHub のエコシステム（PR, CI, Projects, Issues, actions, ...）が使用可能
  - 以下の actions を作成済み
    - tag に応じて pdf をビルドして release を作成する
    - pull request にビルドした pdf のリンクを貼る
- textlint
  - 文章校正が可能

## Usage

1. vscodeのインストール
2. dockerのインストール
3. create new repository (optional)

   GitHub上において「Use this template > Create new repository」をクリック
4. ローカルにclone

   git clone ...
5. vscodeにて開く
6. 「Reopen in container」のポップアップをクリック

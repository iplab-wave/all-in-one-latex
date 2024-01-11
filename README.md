# all-in-one-latex

$\LaTeX$ on Docker at local VSCode with textlint, latexindent, and GitHub

- ローカル執筆
  - [Overleaf](https://www.overleaf.com/) よりビルドが速い
  - サーバが落ちない
  - インターネット環境に左右されない
- [Docker](https://www.docker.com/ja-jp/)
  - プラットフォームを問わず簡単に同一の環境を構築可能
- [VSCode](https://code.visualstudio.com/)
  - Dev Container を使うことによって Docker + textlint 環境がワンクリックで作成可能
  - Live Share を使うことによって共同編集が可能
- [GitHub](https://github.com/)
  - バージョン管理が可能
  - GitHub のエコシステム（PR, CI, Projects, Issues, Actions, ...）が使用可能
  - 以下の Actions を作成済み
    - Tag に応じて PDF をビルドして Release を作成する
    - Pull request にビルドした PDF のリンクを貼る
- [textlint](https://github.com/textlint/textlint)
  - 文章校正が可能
- [latexindent](https://github.com/cmhughes/latexindent.pl)
  - TeX ファイルの自動フォーマットが可能

## Usage

### 1. VSCodeのインストール

[Visual Studio Code](https://code.visualstudio.com/)

#### Dev Containers 拡張機能のインストール

もし Dev Containers 拡張機能がインストールされていない場合はインストールする。

[Dev Containers - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### 2. Dockerのインストール

[Get Docker - Docker Docs](https://docs.docker.com/get-docker/)

### 3. リポジトリの作成（任意）

GitHub上において「Use this template > Create a new repository」をクリックし、リポジトリを作成する。

[テンプレートからリポジトリを作成する - GitHub Docs](https://docs.github.com/ja/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

### 4. ローカルにクローン

```shell
git clone ...
```

### 5. VSCodeにて開く

クローンしたリポジトリをVSCodeで開く。

### 6. 「Reopen in Container」のポップアップをクリック

VSCode内の右下に表示されるポップアップから、**Reopen in Container** をクリックすることで、リポジトリがDockerコンテナ内で開かれる。（日本語化している場合は「コンテナーで再度開く」をクリック）

> [!TIP]
> ポップアップを消してしまったり、なんらかの理由で開かれない場合は、VSCodeのコマンドパレットを開き（Mac: `Cmd+Shift+P`, Windows: `Ctrl+Shift+P`）、**Remote-Containers: Reopen in Container** を選択する。

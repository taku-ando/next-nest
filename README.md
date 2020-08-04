# Next + Nest + Postgres

## ローカルで開発環境を立ち上げる

```
$ docker-compose up --build
```

## ポート
|   |URL|
|---|---|
|frontend|http://localhost|
|backend|http://localhost:8080
|pgAdmin4|http://localhost:8000|


## pgAdmin4 でDBの中身を見る

### ログイン情報
|   |   |
|---|---|
|メールアドレス|`admin`|
|パスワード|`password`|

### サーバー設定
|  |  |
|---|---|
|名称|`ローカル` (自由)|
|ホスト名/アドレス|`postgres`|
|ポート番号|`5432`|
|データベースの管理|`test`|
|ユーザー名|`postgres`|
|パスワード|`password`| 
# テーブル設計

## usersテーブル

| column             | type       | options                        |
| ------------------ | ---------- | ------------------------------ |
| nickname           | string     | null: false                    |
| email              | string     | null: false, unique: true      |
| password           | string     | null: false                    |
| date_of_birth      | date       | null: false                    |
| occupation         | string     |                                |

### Association

- has_many :spendings
- has_many :stores

## spendingsテーブル

| column             | type       | options                        |
| ------------------ | ---------- | ------------------------------ |
| expenditure_date   | date       | null: false                    |
| amount             | integer    | null: false                    |
| spending_category  | string     | null: false                    |
| purchase_store     | string     |                                |
| user               | references | null: false, foreign_key: true |

### Association

- belongs_to :user

## storesテーブル

| column             | type       | options                        |
| ------------------ | ---------- | ------------------------------ |
| store_name         | string     | null: false                    |
| store_category     | string     | null: false                    |
| address            | string     | null: false                    |
| transportation     | string     | null: false                    |
| arrival_time       | time       | null: false                    |
| user               | references | null: false, foreign_key: true |

### Association

- belongs_to :user

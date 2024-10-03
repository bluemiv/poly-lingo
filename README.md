# Poly Lingo


## DB 설정

```shell
docker exec -it mongodb mongosh -u root -p 1234
```

```shell
use polyLingo
db.createUser({
  user: "root",
  pwd: "1234",
  roles: [ { role: "readWrite", db: "polyLingo" } ]
})
```


## 데이터 구조

collections

- service-translations: 서비스 별 번역 값의 집합
- translations: 번역 데이터
  - history: 롤백을 위한 변경 데이터 (변경된 데이터만 저장하여 불필요한 중복 데이터 제거)

```json
{
  "_id": "64ab123456789",
  "serviceName": "MainWebApp",
  "version": 3,
  "translations": [
    {
      "key": "label_username",
      "modifiedAt": "2024-09-29T15:00:00Z",
      "ko": "사용자 이름",
      "en": "Username",
      "idn": "Nama pengguna",
      "history": [
        {
          "version": 2,
          "ko": "유저 이름",
          "modifiedAt": "2024-09-20T12:00:00Z"
        },
        {
          "version": 1,
          "ko": "아이디",
          "en": "ID",
          "idn": "ID",
          "modifiedAt": "2024-09-10T10:00:00Z"
        }
      ]
    }
  ]
}
```

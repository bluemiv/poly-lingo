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

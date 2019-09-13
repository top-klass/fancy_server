# fancy_server

# Installation
### (1) 데이터베이스 설정
**prerequisite: PostgreSQL이 설치되어 있어야 함.**
1. 아래 명령어를 실행하여 postgresql에 대해 TypeORM을 설치한다.

`npm install --save @nestjs/typeorm typeorm pg`

2. `ormconfig.json`에 DB연결정보를 세팅한다. 

`ormconfig.example.json`을 복사하고, username, password, port 번호를 로컬 환경에 맞게 재작성한 뒤 `ormconfig.json`에 붙여넣기한다.
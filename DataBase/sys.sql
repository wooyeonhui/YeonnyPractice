select*from dba_tables;

--시스템에서 만들어야 한다
create user user2 identified by 1234;

grant connect to user2; --logon 권한 부여 dba권한만 가능

grant create table to user2;

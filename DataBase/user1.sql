/*insert into tb_member values (2,'test2','1234','Tom''s company','tom@nate.com',sysdate);

select*from tb_member;*/

delete from tb_member where id=3;

insert into tb_member values (3, 'test3', '1234', '''machine''','tom@nate.com',sysdate);

-- 디비 자체내에서 각가의 레코드를 식별하기 위한 필드가 하나 추가된다
-- rowid

select rowid, id, userid, password, username, email, regdate from tb_member;

--수정하기
update tb_member set username='장길산', password=1234 where id=1;

commit;

-- Data Dictionary(데이타 사전) : 사용자가 만드는 계정, 테이블, 시퀀스, 인덱스...
-- 모든 정보가 테이블에 저장된다
-- DBA_, All_,USER_

select*from user_tables;

-- 제약조건이 뭐뭐 있는지 확인해보자(constraint)

select*from user_constraints;

select*from user_tab_columns;

select table_name from user_tab_columns where column_name='USERID';

select*from all_users;

select*from role_sys_privs;

create table test1
(
  id number,
  text varchar2(20),
  constraint PK_TEST1 primary key(id)
  );

insert into test1 values(1,'A');
insert into test1 values(2,'B');
insert into test1 values(3,'C');

drop table test1; --테이블 삭제

create table test1
(
  id number,
  id2 number,
  text varchar2(20),
  constraint PK_TEST1 primary key(id, id2)
  );
  
insert into test1 values(1,1,'A');
insert into test1 values(1,2,'B');
insert into test1 values(2,1,'C');
insert into test1 values(1,1,'D');
delete from test1 where id2=3;

create table test2
(
  id number,
  text varchar2(20)
);
-- alter table 수정할 테이블명 add 컬럼 데이타타입
alter table test2 add text2 varchar2(100);

desc test2;

--primary key 추가하기
alter table test2 add constraint PK_TEST2 primary key(id);

--컬럼 삭제
alter table test2 drop column text2;

--제약조건 삭제
alter table test2 drop constraint PK_TEST2;
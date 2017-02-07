/*insert into tb_member values (2,'test2','1234','Tom''s company','tom@nate.com',sysdate);

select*from tb_member;*/

delete from tb_member where id=3;

insert into tb_member values (3, 'test3', '1234', '''machine''','tom@nate.com',sysdate);

-- ��� ��ü������ ������ ���ڵ带 �ĺ��ϱ� ���� �ʵ尡 �ϳ� �߰��ȴ�
-- rowid

select rowid, id, userid, password, username, email, regdate from tb_member;

--�����ϱ�
update tb_member set username='����', password=1234 where id=1;

commit;

-- Data Dictionary(����Ÿ ����) : ����ڰ� ����� ����, ���̺�, ������, �ε���...
-- ��� ������ ���̺� ����ȴ�
-- DBA_, All_,USER_

select*from user_tables;

-- ���������� ���� �ִ��� Ȯ���غ���(constraint)

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

drop table test1; --���̺� ����

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
-- alter table ������ ���̺�� add �÷� ����ŸŸ��
alter table test2 add text2 varchar2(100);

desc test2;

--primary key �߰��ϱ�
alter table test2 add constraint PK_TEST2 primary key(id);

--�÷� ����
alter table test2 drop column text2;

--�������� ����
alter table test2 drop constraint PK_TEST2;
select*from dba_tables;

--�ý��ۿ��� ������ �Ѵ�
create user user2 identified by 1234;

grant connect to user2; --logon ���� �ο� dba���Ѹ� ����

grant create table to user2;

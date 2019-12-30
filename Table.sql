

drop table contact;
create table contact (
    contact_no number primary key not null,
    contact_name varchar2(50) not null,
    contact_email varchar2(50) not null,
    contact_phone number(20) not null,
    contact_content varchar2(3000) not null
);

comment on column contact.contact_no is '컨택번호';
comment on column contact.contact_name is '컨택이름';
comment on column contact.contact_email is '컨택이메일';
comment on column contact.contact_phone is '컨택전화번호';
comment on column contact.contact_content is '컨택내용';

commit;


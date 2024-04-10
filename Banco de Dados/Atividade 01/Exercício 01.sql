 create database db_rhservice;

use db_rhservice;

create table tb_colaboradores(
 id bigint auto_increment,
 nome varchar(255) not null,
 cargo varchar(255) not null,
 setor varchar(255) not null,
 salario decimal not null,
 primary key(id)
);

insert into tb_colaboradores(nome, cargo, setor, salario) values ("Roberta", "Assistente", "Administracao", 1000);
insert into tb_colaboradores(nome, cargo, setor, salario) values ("Lais", "Estagiario", "Marketing", 1500);
insert into tb_colaboradores(nome, cargo, setor, salario) values ("Carlos", "Operador", "Producao", 2000);
insert into tb_colaboradores(nome, cargo, setor, salario) values ("Henrique", "Coordenador", "Logistica", 2500);
insert into tb_colaboradores(nome, cargo, setor, salario) values ("Ana", "Analista", "Financeiro", 3000);

SELECT * FROM tb_colaboradores WHERE salario > 2000;

SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE tb_colaboradores SET salario = 3500 WHERE Id = 5;

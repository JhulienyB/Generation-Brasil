 create database db_ecommerce;

use db_ecommerce;

create table tb_produtos (
 id bigint auto_increment,
 nome varchar(255) not null,
 marca varchar(255) not null,
 quantidade int,
 valor decimal not null,
 primary key(id)
);

insert into tb_produtos(nome, marca, quantidade, valor) values ("Sapato", "Nike", 1, 300);
insert into tb_produtos(nome, marca, quantidade, valor) values ("Smartphone", "Samsung", 1, 1500);
insert into tb_produtos(nome, marca, quantidade, valor) values ("Câmera", "Canon", 1, 400);
insert into tb_produtos(nome, marca, quantidade, valor) values ("Fone de Ouvido", "Sony", 1, 450);
insert into tb_produtos(nome, marca, quantidade, valor) values ("Relógio", "Garmin", 1, 1000);

SELECT * FROM tb_produtos WHERE valor > 500;

SELECT * FROM tb_produtos WHERE valor < 500;

UPDATE tb_produtos SET valor = 2000 WHERE Id = 2;

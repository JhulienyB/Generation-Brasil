create database db_pizzaria_legal;

use db_pizzaria_legal;

create table tb_categorias  (
	id bigint auto_increment,
	nome varchar(255) not null,
    descricao varchar(255) not null,
    primary key (id)
);

create table tb_pizzas  (
	id bigint auto_increment,
    nome varchar(255) not null,
    descricao varchar(255) not null,
    preco decimal(8, 2) not null,
    tamanho varchar(10),
    primary key (id)
);

alter table tb_pizzas add categoria_id bigint;
alter table tb_pizzas add constraint fk_produtos_categorias 
foreign key(categoria_id) references tb_categorias(id);

INSERT INTO tb_categorias (nome, descricao) VALUES
('salgadas', 'pizzas com recheios salgados'),
('doces', 'pizzas com recheios doces'),
('veggie', 'pizzas vegetarianas'),
('especiais', 'pizzas especiais'),
('clássicas', 'pizzas clássicas');

INSERT INTO tb_pizzas (nome, descricao, preco, tamanho, categoria_id) VALUES
('calabresa', 'molho de tomate, queijo, calabresa, cebola e azeitonas.', 65.00, 'media', 1),
('marguerita', 'molho de tomate, queijo, tomate e manjericão fresco.', 50.00, 'grande', 5),
('quatro queijos', 'molho de tomate, queijo muçarela, queijo gorgonzola, queijo parmesão e queijo catupiry.', 56.00,'media', 1),
('brigadeiro', 'chocolate, leite condensado e granulado de chocolate.', 55.00, 'media', 2),
('vegetariana', 'molho de tomate, queijo, tomate, pimentão, cebola, azeitonas e milho.', 40.00, 'media', 3),
('frango com catupiry', 'molho de tomate, queijo, frango desfiado, catupiry e milho.', 68.00, 'grande', 4),
('portuguesa', 'molho de tomate, queijo, presunto, ovos, cebola, ervilha e azeitonas.', 45.00, 'media', 5),
('romeu e julieta', 'goiabada e queijo.', 28.00, 'pequena', 2);

SELECT * FROM tb_pizzas WHERE preco > 45;

SELECT * FROM tb_pizzas WHERE preco > 50 AND preco < 100;

SELECT * FROM tb_pizzas WHERE nome LIKE "%m%";

SELECT tb_pizzas.nome, tb_pizzas.descricao, preco, tamanho, tb_categorias.nome, tb_categorias.descricao
FROM tb_pizzas INNER JOIN tb_categorias 
ON tb_pizzas.categoria_id = tb_categorias.id;

SELECT tb_pizzas.nome, tb_pizzas.descricao, preco, tamanho, tb_categorias.nome, tb_categorias.descricao
FROM tb_pizzas INNER JOIN tb_categorias 
ON tb_pizzas.categoria_id = tb_categorias.id
WHERE categoria_id = 3;

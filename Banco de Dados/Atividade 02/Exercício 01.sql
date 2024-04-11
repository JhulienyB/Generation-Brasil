create database db_generation_game_online;

use db_generation_game_online;

create table tb_classes (
	id bigint auto_increment,
	nome varchar(255) not null,
    iniciativa int not null,
    primary key (id)
);

create table tb_personagens (
	id bigint auto_increment,
    nome varchar(255) not null,
    poder int not null,
    defesa int not null,
    velocidade int not null,
    primary key (id)
);

ALTER TABLE tb_personagens ADD classeid BIGINT;
ALTER TABLE tb_personagens ADD CONSTRAINT fk_personagens_classes 
FOREIGN KEY (classeid) REFERENCES tb_classes (id);

INSERT INTO tb_classes (nome, iniciativa) VALUES 
("arqueiro", 12),
("mago", 5),
("guerreiro", 10),
("clérigo", 6),
("ladrão", 15);

INSERT INTO tb_personagens (nome, poder, defesa, velocidade, classeid) VALUES 
("carina", 1000, 1500, 2000, 1),
("noel", 1800, 1200, 800, 2),
("elliot", 3000, 2000, 500, 3),
("lecy", 650, 1000, 300, 4),
("gazel", 1400, 500, 1000, 5),
("arthur", 500, 1200, 500, 4),
("amy", 1500, 2000, 700, 3),
("ignis", 3500, 1000, 600, 2);

SELECT * FROM tb_personagens WHERE poder > 2000;

SELECT * FROM tb_personagens WHERE poder > 1000 AND poder < 2000;

SELECT * FROM tb_personagens WHERE nome LIKE "%c%";

SELECT tb_personagens.nome, poder, defesa, velocidade, iniciativa, tb_classes.nome
FROM tb_personagens INNER JOIN tb_classes 
ON tb_personagens.classeid = tb_classes.id;

SELECT tb_personagens.nome, poder, defesa, velocidade, iniciativa, tb_classes.nome
FROM tb_personagens INNER JOIN tb_classes 
ON tb_personagens.classeid = tb_classes.id
WHERE classeid = 2;

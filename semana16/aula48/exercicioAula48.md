 ### Exercicios da aula 48 - 27/05/21

 #### EXERCICIO 1

    A) É UMA CHAVE QUE REFERNCIA UMA OUTRA CHAVE DE OUTRA TABELA PARA QUE O BANCO ENTENDA QUE ESSAS TABELAS TEM UMA RELAÇÃO
    B)
        ``` 
        CREATE TABLE Rating (
            id VARCHAR(255) PRIMARY KEY,
            comment TEXT NOT NULL,
            rate FLOAT NOT NULL,
            movie_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movie(id)
        );

        INSERT INTO Rating VALUES
        (1, "Muito bom", 4.9, 'M1'),
        (2, "Muito triste", 4, 'M2');
        ```
    C) ELE INDICA UMA ERRO DE SINTAXE EXATAMENTE NO ID. ISSO ACONTECEU PORQUE O FOREIGN KEY ESTÁ RELACIONANDO O ID TABELA RATINGO COM O ID DA TABELA  MOVIE

    D) 

    E) 
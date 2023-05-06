
create TABLE products(
    id SERIAL PRIMARY key,
    name TEXT,
    price INTEGER,
    description TEXT,
    img TEXT
);

create TABLE feedbacks(
    id SERIAL PRIMARY key,
    idProd INTEGER,
    FOREIGN KEY (idProd) REFERENCES products (id),
    name TEXT,
    avatar TEXT,
    feedback TEXT
);

create TABLE client(
    id SERIAL PRIMARY key,
    login TEXT,
    password TEXT,
    fio TEXT,
    birthDate TEXT,
    email TEXT,
    tel TEXT,
    gender TEXT,
    avatar TEXT
);

create TABLE products_in_baskets(
    id SERIAL PRIMARY key,
    idUser INTEGER,
    idProd INTEGER,
    FOREIGN KEY (idProd) REFERENCES products (id),
    FOREIGN KEY (idUser) REFERENCES client (id),
    img TEXT,
    name TEXT,
    price TEXT,
    quantity INTEGER
);


DROP TABLE IF EXISTS parties;
DROP TABLE IF EXISTS candidates;

CREATE TABLE parties (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE candidates (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    industry_connected BOOLEAN NOT NULL,
    party_id INTEGER UNSIGNED,
    CONSTRAINT fk_party FOREIGN KEY (party_id) REFERENCES parties(id) ON DELETE SET NULL
);

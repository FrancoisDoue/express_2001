CREATE DATABASE IF NOT EXISTS bibliotheque;

USE bibliotheque;

CREATE TABLE IF NOT EXISTS livres (
	id 					INT PRIMARY KEY AUTO_INCREMENT,
    titre 				VARCHAR(255) NOT NULL,
    auteur 				VARCHAR(150) NOT NULL,
    annee_publication 	YEAR NOT NULL,
    disponible 			BOOLEAN NOT NULL DEFAULT TRUE
)
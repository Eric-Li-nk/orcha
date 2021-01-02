<?php

// Information de connection à la base de données
define('DB_DSN', 'mysql:host=localhost;dbname=BaseDeDonnees');
define('DB_USER', 'root');
define('DB_PASS', '123456789');

class Model {

    private $bd;

    private static $instance = null;

    private function __construct(){
        $this->bd = new PDO(DB_DSN,DB_USER,DB_PASS);
        $this->bd->query("SET NAMES 'utf-8'");
        $this->bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public static function getModel(){
        if(Model::$instance === null) {
            Model::$instance = new Model();
        }
        return Model::$instance;
    }

    public function getUserList(){
        $requete = $this->bd->prepare('SELECT * FROM Utilisateurs');
        $requete->execute();
        return $requete->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUsernames(){
        $requete = $this->bd->prepare('SELECT username FROM Utilisateurs');
        $requete->execute();
        return $requete->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getEmails(){
        $requete = $this->bd->prepare('SELECT email FROM Utilisateurs');
        $requete->execute();
        return $requete->fetchAll(PDO::FETCH_ASSOC);
    }

    public function addUser($data){
        $requete = $this->bd->prepare("INSERT INTO Utilisateurs (username,password,email) VALUES (:username,:password,:email)");
        $requete->bindValue(':username',trim($data->data->username));
        $requete->bindValue(':password',trim($data->data->password));
        $requete->bindValue(':email',trim($data->data->email));
        $requete->execute();
    }

    public function findUser($data){
        $requete = $this->bd->prepare("SELECT * FROM Utilisateurs where username=:username and password=:password");
        $requete->bindValue(':username',trim($data->username));
        $requete->bindValue(':password',trim($data->password));
        $requete->execute();
        return $requete->fetch(PDO::FETCH_ASSOC);

    }

}
?>
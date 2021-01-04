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

    public function getProjectsTable($data){
        $id = trim($data->id);
        $numProject = 'projects'.$id;
        $requete = $this->bd->prepare("SELECT * FROM $numProject");
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
        $password = password_hash(trim($data->data->password),PASSWORD_DEFAULT);
        $requete = $this->bd->prepare("INSERT INTO Utilisateurs (username,password,email) VALUES (:username,:password,:email)");
        $requete->bindValue(':username',trim($data->data->username));
        $requete->bindValue(':password',$password);
        $requete->bindValue(':email',trim($data->data->email));
        $requete->execute();
    }

    public function addProjectsTable($data){
        $id = $data["id"];
        $numProject = 'projects'.$id;
        $requete = $this->bd->prepare("CREATE TABLE IF NOT EXISTS $numProject (projectName VARCHAR(50) NOT NULL,content TEXT,PRIMARY KEY(projectName))");
        $requete->execute();
    }

    public function addProject($data){
        $id = $data->id;
        $numProject = 'projects'.$id;
        $requete = $this->bd->prepare("INSERT INTO $numProject values (:projectName, :content)");
        $requete->bindValue(':projectName', $data->projectName);
        $requete->bindValue(':content', $data->content);
        $requete->execute();
    }

    public function updateProject($data){
        $id = $data->id;
        $numProject = 'projects'.$id;
        $requete = $this->bd->prepare("UPDATE $numProject SET content=:content WHERE projectName=:projectName");
        $requete->bindValue(':projectName', $data->projectName);
        $requete->bindValue(':content', $data->content);
        $requete->execute();
    }

    public function deleteProject($data){
        $id = $data->id;
        $numProject = 'projects'.$id;
        $requete = $this->bd->prepare("DELETE FROM $numProject WHERE projectName=:projectName");
        $requete->bindValue(':projectName', $data->projectName);
        $requete->execute();
    }

    public function findUser($data){
        $requete = $this->bd->prepare("SELECT * FROM Utilisateurs where username=:username");
        $requete->bindValue(':username',trim($data->username));
        $requete->execute();
        return $requete->fetch(PDO::FETCH_ASSOC);

    }

    public function findUserId($data){
        $requete = $this->bd->prepare("SELECT id FROM Utilisateurs where username=:username");
        $requete->bindValue(':username',trim($data->data->username));
        $requete->execute();
        return $requete->fetch(PDO::FETCH_ASSOC);
    }



}
?>
<?php
require 'Model.php';
$model = Model::getModel();

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
    $data = json_decode($postdata);
    $projectsTable = $model->getProjectsTable($data);
    echo json_encode($projectsTable);

}
?>
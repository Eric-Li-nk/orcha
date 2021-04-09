<?php

require 'Model.php';

$model = Model::getModel();
$List = $model->getUsernames();
$tab = [];
foreach($List as $value) {
    $tab[] = $value["username"];
}
echo json_encode($tab);
?>
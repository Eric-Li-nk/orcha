<?php

require 'Model.php';

$model = Model::getModel();
$List = $model->getEmails();
$tab = [];
foreach($List as $value) {
    $res = $value["email"];
    if($res != "") {$tab[] = $res;}
}
echo json_encode($tab);
?>
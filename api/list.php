<?php

require 'Model.php';

$model = Model::getModel();
$tab = $model->getUserList();
echo json_encode($tab);
?>
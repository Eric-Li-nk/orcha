<?php
require 'Model.php';
$model = Model::getModel();

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
    $data = json_decode($postdata);
    $user = $model->findUser($data);

    if($user == false) {
        http_response_code(404);
    } elseif (password_verify($data->password,$user["password"])) {
        echo json_encode($user);
    } else {
        http_response_code(404);
    }
}
?>
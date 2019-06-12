<?php

//echo 'post page';

//print_r($_POST);
//echo '<br>';
//print_r($_FILES);

//1. 获取上传文件对应的字典
$fileInfo = $_FILES['upFile'];
//2. 获取上传文件的名称
$fileName = $fileInfo['name'];
//3.获取上传文件的临时路径
$filePath = $fileInfo['tmp_name'];

//echo $fileName;
//echo '<br>';
//echo $filePath;

//4. 移动文件
move_uploaded_file($filePath, './source/'.$fileName);

//上传大文件需要修改的 文件E:\wamp\bin\apache\apache2.4.37\bin\php.ini

//file_uploads = On  是否允许上传文件
//upload_max_filesize = 2048M 上传文件的最大限制
//post_max_size = 2048M 通过post提交的最多数据
//max_execution_time = 30000 脚本最长执行时间 单位为秒
//max_input_time = 30000 接收提交数据的时间限制 单位为秒
// memory_limit = 2048M 最大内存消耗



?>
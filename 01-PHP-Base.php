<?php

//变量
//$num = 10;
//echo $num;

//数组
//php中不能使用echo输出集合，只能使用 print_r()
//$arr = array(1, 3, 5);
//print_r($arr);


//字典
//$dict = array('name'=>'rose', 'age'=>'20');
//print_r($dict);
//echo '<br>';
//
////php从字典中取元素
//echo $dict['name'];

//分支循环
//if else
$age = 18;

//if($age >= 18){
//    echo '成年人';
//}else{
//    '未成年人';
//}

//三目
//$res = ($age >=18) ? '成年人': '未成年人';
//echo $res;

//switch
//switch ($age){
//    case 0:
//        echo 0;
//        break;
//    case 18:
//        echo '成年人';
//        break;
//    default:
//        echo '未成年人';
//        break;
//}

//for
$arr = array(1, 3, 5);
//for($i=0; $i < count($arr); $i++){
//    echo $arr[$i];
//    echo '<br>';
//}

//while
$index = 0;
while($index < count($arr)){
    echo $arr[$index];
    echo '<br>';
    $index++;
}


?>
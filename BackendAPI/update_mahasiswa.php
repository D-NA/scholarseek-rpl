<?php

  include 'db_connect.php';

    $postdata = file_get_contents("php://input");
    $username = "";
    $nama = "";
    $nim = "";
    $ipk = "";

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $username = $request->username;
        $nama =  $request->nama;
        $nim =  $request->nim;
        $ipk =  $request->ipk;
        
        if($request){
            $query_register = mysqli_query($connect,"UPDATE mahasiswa SET username = '$username', nama = '$nama', nim = '$nim', ipk = '$ipk'");

            if($query_register){
         
                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404",
                     'errornih' => $query_register
                 ); 
             }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        
            

        echo json_encode($data);
    }
?>

#!/usr/bin/php
<?php
if ($argc<3) die("Usage: $argv[0] {aws_key} {aws_secret}".PHP_EOL);
$key=$argv[1];
$secret=$argv[2];
$message="SendRawEmail";
$versionInBytes = chr(2);
$signatureInBytes = hash_hmac('sha256', $message, $secret, true);
echo "Signature In Bytes: ".$signatureInBytes.PHP_EOL;
$signatureAndVer = $versionInBytes.$signatureInBytes;
$smtpPassword = base64_encode($signatureAndVer);
echo "SMTP User: ".$key.PHP_EOL;
echo "SMTP Password: ".$smtpPassword.PHP_EOL;
?>
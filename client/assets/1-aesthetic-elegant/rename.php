<?php

$folders = array(
    '360_black',
    '360_silver',
    '360_classicblack',
);

foreach ($folders as $folder) {
    $d = dir($folder);
    echo "Handle: " . $d->handle . "\n";
    echo "Path: " . $d->path . "\n";

    // Add temporary prefix
    while (false !== ($entry = $d->read())) {
        if ($entry !== '.' && $entry !== '..') {
            echo "Rename $entry to _$entry...";
            //rename($folder.'/'.$entry, $folder.'/'.'_'.$entry);
            echo " done\n";
        }
    }
    $d->rewind();

    // Add temporary prefix
    while (false !== ($entry = $d->read())) {
        if ($entry !== '.' && $entry !== '..') {
            preg_match('/gear2_([a-z_]+)([0-9]+)\.jpg/', $entry, $matches);
            //var_dump($matches);
            $num = $matches[2];
            if ($num > 1) {
                $newNum = abs($num - 66) + 2;
            } else {
                $newNum = $num * 1;
            }
            $newFilename = 'gear2_' . $matches[1] . $newNum . '.jpg';
            echo "Rename $entry to $newFilename...";
            //rename($folder.'/'.$entry, $folder.'/'.$newFilename);
            echo " done\n";
        }
    }

    $d->close();
}